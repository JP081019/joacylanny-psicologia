# Joacylanny Psicologia

Site institucional em Next.js 16.4, React, TypeScript, CSS Modules e GSAP. Direção visual PORTAL — Elegância Essencial.

## Desenvolvimento

Requer Node.js 20.9 ou superior. Versão utilizada na implementação: 24.21.0.

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000. A introdução aparece uma vez por sessão de navegador. Uma nova sessão privada permite revê-la. Ela pode ser pulada pelo botão ou por Escape.

## Validação

```sh
npm run typecheck
npm run lint
npm test
npm run build
```

Os testes usam Microsoft Edge instalado e iniciam um servidor local se necessário. Capturas são gravadas em `docs/validacao/`. O projeto não requer chaves de API.

## Produção

```sh
npm run build
npm start
```

Pronto para importação na Vercel com o preset Next.js e o comando padrão `npm run build`. Não definir manualmente um diretório de saída: a configuração do Next.js usa `.next-build` em produção, separado do servidor de desenvolvimento.

O domínio canônico configurado é https://joacylannypsi.com.br. Alterações no domínio devem ser feitas em `src/data/site-content.ts`. A implementação não foi publicada nem substituiu o site atual.

## Onde atualizar

- `src/data/site-content.ts`: dados profissionais, WhatsApp, navegação, FAQ e fotografia.
- `src/styles/tokens.css`: cores oficiais, espaçamento e curvas de movimento.
- `src/components/sections/`: Hero e seções editoriais.
- `src/components/animations/PortalExperience.tsx`: abertura e animações de rolagem.
- `src/app/politica-de-privacidade/`: texto de privacidade.
- `docs/ENTREGA.md`: resultado, verificações e pendências de publicação.
- `docs/RECURSOS.md`: origem das imagens e prompt da arquitetura.

Antes de publicar, confirmar as modalidades disponíveis, idade mínima, frequência, contato e redação final com a profissional. Não há endereço, Instagram, avaliações neuropsicológicas, preços ou depoimentos inventados.
