# Recursos visuais e fontes

## Arquivos originais preservados

- `public/logo/Logotipo Minimalista Joacylanny Psicologia.png`: marca horizontal no cabeçalho, revelação da assinatura na introdução e imagem Open Graph. O enquadramento usa CSS, preservando o arquivo.
- `public/logo/Logo Elegante Joacylanny Psicologia.png`: assinatura oficial no rodapé escuro.
- `public/logo/Arco Minimalista em Tons Terrosos.png`: referência geométrica do traçado animado e ícone Apple.
- `public/logo/Arco Minimalista em Tons Terrosos.ico`: favicon.
- `public/img/Retrato Sereno no Jardim Florido.png`: fotografia principal da seção Sobre. O rosto e a aparência foram preservados.

O monograma SVG em `src/components/ui/Monogram.tsx` foi traçado a partir do símbolo raster fornecido: duas linhas arqueadas, proporções correspondentes e ponto lateral. Não substitui os arquivos oficiais da identidade. O SVG permite animar os comprimentos reais dos caminhos; o original PNG permanece intacto.

## Arquitetura

- Arquivo utilizado: `public/images/architecture/portal.webp`.
- Produção: ferramenta integrada ImageGen, sem chave de API e sem CLI de geração.
- Imagem conceitual criada para o projeto; não representa um consultório real.
- Versão otimizada para a web pelo script `scripts/prepare-architecture.mjs`, usando sharp incluído no Next.js. O original gerado foi preservado na biblioteca local do Codex.

Prompt utilizado:

> Create a single photorealistic architectural editorial photograph, portrait 4:5 framing, for the Joacylanny Psicologia website concept PORTAL — Elegância Essencial. A monumental round Roman arch opening precisely centered in a thick warm ivory limestone/plaster wall, an inset second arch behind it creating calm spatial depth. The large arch opening occupies about 65 percent of image width and 78 percent of image height, starts near 15 percent from the top, reaches the lower edge. A tranquil sand-colored stone interior corridor beyond, one recessed arched wall, warm natural sunlight entering from the upper right, a diagonal pool of soft sunlight on travertine floor. Organic very subtle mineral plaster textures, shades strictly warm sand #D8C7B8, ivory #F6F1EB, taupe #9C796A, coffee shadows #51433F. Straight-on architectural photography at human eye height, beautiful tactile materiality, gentle chiaroscuro, quiet luxury, minimal, sophisticated, welcoming. No people, no furniture, no plants, no text, no logos, no sky, no outdoors, no neon, no excessive contrast. This is conceptual architecture only, not a photograph of a real psychology office. High-end magazine architectural photography, subtle natural film grain.

## Crédito JPCreative

`public/images/brand/jpcreative.webp` é uma cópia otimizada da marca oficial encontrada no cabeçalho de https://jpcreative.com.br em 21/10/2026. Fonte: https://jpcreative.com.br/_next/static/media/Logo.2i0r0co5qvywa.jpeg. O rodapé mantém nome, imagem e link oficial. O script de obtenção é `scripts/prepare-credit.mjs`; ele não roda no acesso ao site.

## Conteúdo profissional

Conferido em https://joacylannypsi.com.br em 21/10/2026: Psicóloga Clínica, CRP 22/02243, mais de dez anos de formação, orientação psicanalítica, Corpo Freudiano, pós-graduação em Neuropsicologia, adultos/adolescentes e WhatsApp. O site antigo apresenta divergência entre atendimento presencial/online e FAQ exclusivamente online. O novo site orienta confirmar a modalidade diretamente pelo contato.

Cormorant Garamond e Manrope são servidas localmente pelo Next.js, sem consulta ao Google no navegador do visitante. Ícones: Bootstrap Icons. Não há dependência de imagens remotas durante a navegação.
