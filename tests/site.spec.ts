import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const introName = "Abertura de Joacylanny Psicologia";
const sessionKey = "joacylanny.portal.seen.v1";

test("primeira visita: traçado, transformação, fim e sessão persistida", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const intro = page.getByRole("dialog", { name: introName });
  await expect(intro).toBeVisible();
  const initial = await intro.locator("svg path[data-arc='outer']").evaluate(el => parseFloat(getComputedStyle(el).strokeDashoffset));
  expect(initial).toBeGreaterThan(0);
  await page.waitForTimeout(700);
  await page.screenshot({ path: "docs/validacao/abertura.png" });
  await expect(intro).not.toBeVisible({ timeout: 6500 });
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("[data-portal-image] img")).toHaveJSProperty("complete", true);
  expect(await page.evaluate(key => sessionStorage.getItem(key), sessionKey)).toBe("1");
  await page.reload();
  await expect(page.locator("h1")).toBeVisible();
  await expect(intro).not.toBeVisible();
  expect(errors).toEqual([]);
});

test("pular e Escape encerram a abertura e restauram foco e rolagem", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Pular introdução" }).click();
  await expect(page.getByRole("dialog", { name: introName })).not.toBeVisible();
  await expect(page.locator("h1")).toBeFocused();
  expect(await page.locator("body").evaluate(el => getComputedStyle(el).overflow)).not.toBe("hidden");
  await page.evaluate(key => sessionStorage.removeItem(key), sessionKey);
  await page.reload();
  await expect(page.getByRole("dialog", { name: introName })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: introName })).not.toBeVisible();
  await expect(page.locator("h1")).toBeFocused();
});

test("movimento reduzido, FAQ por teclado e navegação interna", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("dialog", { name: introName })).not.toBeVisible();
  const question = page.getByRole("button", { name: "Preciso ter um diagnóstico para procurar atendimento?" });
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("region", { name: "Preciso ter um diagnóstico para procurar atendimento?" })).toBeVisible();
  await page.keyboard.press("Space");
  await expect(question).toHaveAttribute("aria-expanded", "false");
  await page.getByRole("navigation", { name: "Navegação principal", exact: true }).getByRole("link", { name: "Sobre", exact: true }).click();
  await expect(page).toHaveURL(/#sobre$/);
  await expect(page.getByRole("dialog", { name: introName })).not.toBeVisible();
});

test("menu móvel: foco contido, Escape, âncoras e retorno do foco", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Abrir menu" });
  await trigger.click();
  const menu = page.getByRole("dialog", { name: "Menu de navegação" });
  await expect(menu).toBeVisible();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Tab");
  expect(await menu.evaluate(el => el.contains(document.activeElement))).toBe(true);
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await menu.getByRole("link", { name: "Dúvidas", exact: true }).click();
  await expect(menu).not.toBeVisible();
  await expect(page).toHaveURL(/#duvidas$/);
});

test("responsividade, imagens e capturas em quatro larguras", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: width < 800 ? 900 : 1000 });
    await page.goto("/");
    await page.locator("#contato").scrollIntoViewIfNeeded();
    await page.locator("#inicio").scrollIntoViewIfNeeded();
    await page.evaluate(() => document.fonts.ready);
    await page.locator("main img").evaluateAll(images => Promise.all(images.map(img => (img as HTMLImageElement).decode().catch(() => {}))));
    const size = await page.evaluate(() => ({ page: document.documentElement.scrollWidth, viewport: innerWidth }));
    expect(size.page, `overflow em ${width}px`).toBeLessThanOrEqual(size.viewport);
    await expect(page.locator("h1")).toHaveText("Um espaço para escutar o que há de singular em você.");
    const headingWidth = await page.locator("h1").evaluate(el => ({ content: el.scrollWidth, box: el.clientWidth }));
    expect(headingWidth.content, `título em ${width}px`).toBeLessThanOrEqual(headingWidth.box + 1);
    const badImages = await page.locator("main img").evaluateAll(images => images.filter(el => !(el as HTMLImageElement).complete || (el as HTMLImageElement).naturalWidth === 0).map(el => el.getAttribute("src")));
    expect(badImages).toEqual([]);
    if (width === 390 || width === 1440) {
      await page.screenshot({ path: `docs/validacao/hero-${width}.png` });
      await page.screenshot({ path: `docs/validacao/site-${width}.png`, fullPage: true });
      console.log("Hero render", width, await page.locator("[data-portal-image] img").evaluate(el => ({ rect: el.getBoundingClientRect().toJSON(), style: getComputedStyle(el).cssText, src: (el as HTMLImageElement).currentSrc, opacity: getComputedStyle(el).opacity, visibility: getComputedStyle(el).visibility })));
    }
  }
});

test("armazenamento indisponível e alteração da preferência durante abertura", async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(window, "sessionStorage", { get() { throw new DOMException("Blocked", "SecurityError"); } }));
  await page.goto("/");
  await expect(page.getByRole("dialog", { name: introName })).toBeVisible();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.getByRole("dialog", { name: introName })).not.toBeVisible();
  await expect(page.locator("h1")).toBeVisible();
});

test("sem JavaScript: conteúdo e contato permanecem disponíveis", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Um espaço para escutar o que há de singular em você.");
  await expect(page.getByRole("heading", { name: "Prazer, sou Joacylanny." })).toBeVisible();
  await expect(page.getByRole("dialog", { name: introName })).not.toBeVisible();
  await expect(page.getByRole("link", { name: "Agendar atendimento", exact: true }).last()).toHaveAttribute("href", /^https:\/\/wa.me\/5599918401780/);
  await context.close();
});

test("SEO, política de privacidade, contatos e crédito", async ({ page, request }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page).toHaveTitle("Joacylanny | Psicologia e Psicanálise");
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", "Joacylanny | Psicologia e Psicanálise");
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute("content", "Joacylanny | Psicologia e Psicanálise");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://joacylannypsi.com.br");
  await expect(page.getByRole("link", { name: /Desenvolvido por/ })).toHaveAttribute("href", "https://jpcreative.com.br");
  await page.getByRole("link", { name: "Política de privacidade", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Política de privacidade");
  for (const path of ["/sitemap.xml", "/robots.txt", "/opengraph-image"]) expect((await request.get(path)).status(), path).toBe(200);
});

test("reposicionamento: Psicanálise central, formação complementar e oito dúvidas úteis", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("#inicio")).toContainText("Psicologia e Psicanálise");
  await expect(page.locator("#inicio")).toContainText("Psicóloga | Atendimento de orientação psicanalítica");
  await expect(page.locator("#inicio")).toContainText("CRP 22/02243");
  await expect(page.locator("#abordagem h2")).toHaveText("A escuta que vai além do que é dito.");
  await expect(page.locator("#abordagem h3")).toHaveText(["A palavra", "A singularidade", "O tempo"]);
  await expect(page.locator("#abordagem")).not.toContainText("Neuropsicologia");
  await expect(page.locator("#sobre")).toContainText("mais de 10 anos de formação em Psicologia");
  await expect(page.locator("#sobre")).toContainText("formação contínua pelo Corpo Freudiano");
  await expect(page.locator("#sobre")).toContainText("pós-graduação em Neuropsicologia, como formação complementar");
  const mentions = page.locator("main p, main li").filter({ hasText: "Neuropsicologia" });
  expect(await mentions.evaluateAll(nodes => nodes.every(n => n.closest("section")?.id === "sobre"))).toBe(true);
  const structuredData = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText());
  expect(structuredData).toMatchObject({ jobTitle: "Psicóloga", description: "Atendimento de orientação psicanalítica", identifier: "CRP 22/02243", knowsAbout: ["Psicanálise", "Psicologia"] });
  const questions = page.locator("#duvidas button");
  await expect(questions).toHaveCount(8);
  for (const question of await questions.all()) {
    await question.click();
    await expect(question).toHaveAttribute("aria-expanded", "true");
    const answer = page.locator(`#${await question.getAttribute("aria-controls")}`);
    await expect(answer).toBeVisible();
    await expect(answer).not.toHaveText("");
  }
  const whatsappLinks = page.locator('a[href^="https://wa.me/"]');
  const originalUrl = "https://wa.me/5599918401780?text=" + encodeURIComponent("Olá, Joacylanny! Gostaria de obter informações sobre o atendimento psicológico.");
  for (const link of await whatsappLinks.all()) await expect(link).toHaveAttribute("href", originalUrl);
});

test("acessibilidade WCAG: desktop e menu móvel", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const desktop = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  expect(desktop.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) }))).toEqual([]);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Abrir menu" }).click();
  const mobile = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  expect(mobile.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) }))).toEqual([]);
});
