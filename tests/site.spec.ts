import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const introName = "Abertura de Joacylanny Psicologia";
const sessionKey = "joacylanny.portal.seen.v1";

test("primeira visita: traçado, transformação, fim e sessão persistida", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const intro = page.getByRole("dialog", { name: introName });
  await expect(intro).toBeVisible();
  const initial = await intro.locator("svg path[data-arc='outer']").evaluate(el => parseFloat(getComputedStyle(el).strokeDashoffset));
  expect(initial).toBeGreaterThan(0);
  await page.waitForTimeout(700);
  await page.screenshot({ path: testInfo.outputPath("abertura.png") });
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
  const menu = page.locator("#menu-mobile");
  const close = menu.getByRole("button", { name: "Fechar menu" });
  await expect(menu).toBeVisible();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(close).toBeFocused();
  await expect(page.locator("body")).toHaveCSS("overflow-y", "hidden");
  await expect(menu).toHaveCSS("transition-property", "none");
  await page.keyboard.press("Tab");
  expect(await menu.evaluate(el => el.contains(document.activeElement))).toBe(true);
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect(page.locator("body")).not.toHaveCSS("overflow-y", "hidden");
  await trigger.click();
  await close.click();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.mouse.click(12, 110);
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.setViewportSize({ width: 801, height: 844 });
  await expect(menu).not.toBeVisible();
  await expect(page.getByRole("navigation", { name: "Navegação principal" })).toBeVisible();
  await expect(page.locator("body")).not.toHaveCSS("overflow-y", "hidden");
  await page.setViewportSize({ width: 800, height: 844 });
  await trigger.click();
  await menu.getByRole("link", { name: "Dúvidas", exact: true }).click();
  await expect(menu).not.toBeVisible();
  await expect(page).toHaveURL(/#duvidas$/);
});

test("Missão 04: drawer touch e evidências do cabeçalho e rodapé", async ({ browser, page }, testInfo) => {
  const screenshotStyle = "nextjs-portal { visibility: hidden !important; }";
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const mobilePage = await mobile.newPage();
  await mobilePage.addInitScript(key => sessionStorage.setItem(key, "1"), sessionKey);
  await mobilePage.goto("/");
  await mobilePage.evaluate(() => document.fonts.ready);
  const mobileHeader = mobilePage.getByRole("banner");
  await mobileHeader.locator("img").evaluate((image: HTMLImageElement) => image.decode());
  await mobileHeader.screenshot({ path: testInfo.outputPath("mobile-cabecalho.png") });

  const menu = mobilePage.locator("#menu-mobile");
  await mobilePage.getByRole("button", { name: "Abrir menu" }).tap();
  await expect(menu).toHaveAttribute("open", "");
  await expect(menu).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
  await expect(menu).toHaveCSS("width", "331.5px");
  expect(await menu.evaluate(el => getComputedStyle(el, "::backdrop").opacity)).toBe("1");
  await menu.screenshot({ path: testInfo.outputPath("mobile-drawer.png") });
  await mobilePage.screenshot({ path: testInfo.outputPath("mobile-overlay.png"), style: screenshotStyle });
  await mobilePage.touchscreen.tap(12, 110);
  await expect(menu).not.toHaveAttribute("open");
  await expect(menu).toBeHidden();

  const mobileFooter = mobilePage.getByRole("contentinfo");
  await mobileFooter.scrollIntoViewIfNeeded();
  await mobileFooter.locator("img").evaluateAll(images => Promise.all(images.map(image => (image as HTMLImageElement).decode())));
  await mobileFooter.screenshot({ path: testInfo.outputPath("mobile-rodape.png"), style: screenshotStyle });
  await mobile.close();

  await page.setViewportSize({ width: 1366, height: 960 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const desktopHeader = page.getByRole("banner");
  await desktopHeader.locator("img").evaluate((image: HTMLImageElement) => image.decode());
  await expect(desktopHeader.getByRole("navigation", { name: "Navegação principal" })).toBeVisible();
  await expect(desktopHeader.getByRole("link", { name: "Agendar atendimento" })).toBeVisible();
  await desktopHeader.screenshot({ path: testInfo.outputPath("desktop-cabecalho.png") });

  const desktopFooter = page.getByRole("contentinfo");
  await desktopFooter.scrollIntoViewIfNeeded();
  await desktopFooter.locator("img").evaluateAll(images => Promise.all(images.map(image => (image as HTMLImageElement).decode())));
  const credit = await desktopFooter.getByRole("link", { name: "Desenvolvido por JP Creative" }).boundingBox();
  const floatingContact = await page.getByRole("link", { name: "Conversar com Joacylanny pelo WhatsApp" }).boundingBox();
  expect(credit!.x + credit!.width).toBeLessThan(floatingContact!.x);
  await desktopFooter.screenshot({ path: testInfo.outputPath("desktop-rodape.png"), style: screenshotStyle });
});

test("responsividade, imagens e capturas em larguras de referência", async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 360, 390, 768, 1366, 1440, 1920]) {
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
      await page.screenshot({ path: testInfo.outputPath(`hero-${width}.png`) });
      await page.screenshot({ path: testInfo.outputPath(`site-${width}.png`), fullPage: true });
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
  await expect(page.getByRole("link", { name: "Agendar atendimento", exact: true }).last()).toHaveAttribute("href", /^https:\/\/wa\.me\/5599991840178\?/);
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
  await expect(page.getByRole("link", { name: "(99) 99184-0178" })).toHaveAttribute("href", "tel:+5599991840178");
  await expect(page.getByRole("link", { name: "joacylanny.psi@gmail.com" })).toHaveAttribute("href", "mailto:joacylanny.psi@gmail.com");
  await page.getByRole("link", { name: "Política de privacidade", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Política de privacidade");
  await expect(page.getByRole("link", { name: "WhatsApp (99) 99184-0178" })).toHaveAttribute("href", /^https:\/\/wa\.me\/5599991840178\?/);
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
  expect(structuredData).toMatchObject({ jobTitle: "Psicóloga", description: "Atendimento de orientação psicanalítica", identifier: "CRP 22/02243", knowsAbout: ["Psicanálise", "Psicologia"], telephone: "+5599991840178", email: "joacylanny.psi@gmail.com" });
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
  const originalUrl = "https://wa.me/5599991840178?text=" + encodeURIComponent("Olá, Joacylanny! Gostaria de obter informações sobre o atendimento psicológico.");
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
