# CRUD DE PLANOS E EFERTAS COM WEBOOKS DO STRIPE

https://github.com/user-attachments/assets/d61fc4c9-4f46-4cd0-9d6b-d1edf9f493af

Vídeo demonstrativo: [https://www.threads.net/@darlleybbf/post/DBVWi6WRWu-](https://www.threads.net/@darlleybbf/post/DBVWi6WRWu-)

O maior diferencial deste projeto é a utilização do próprio dashboard do Stripe como um "backoffice". Através dos eventos de webhook, o usuário pode controlar os recursos de produtos, preços e clientes diretamente pelo dashboard do Stripe, eliminando a necessidade de desenvolver uma interface administrativa separada. Isso simplifica significativamente o gerenciamento e oferece uma solução robusta e integrada para o controle de pagamentos e assinaturas.

## Setup do projeto

1. Vá para o site do Stripe `https://stripe.com/br`
2. Crie uma nova conta
3. Copie as API keys (Publishable key e Secret key)
4. Cole ela no arquivo `.env-example` e renomeie ele para `.env`
5. Baixe o [node](https://nodejs.org/pt/download) em sua maquina
5. Instale as dependencias com `npm install`
6. Execute o programa com `npm run dev`

### Stripe CLI

> [!NOTE]
> O webhook é necessário para que o Stripe possa enviar os eventos de atualizações de planos, produtos e preços para a aplicação.

1. Faça download do [Stripe CLI](https://docs.stripe.com/stripe-cli) (Webhook)
2. Execute `stripe login` e autentique sua conta
3. Execute `stripe listen --forward-to http://localhost:3000/api/webhook/stripe`
4. Copie o webhook secret key e adicione ele na chave `STRIPE_WEBHOOK_SECRET` do arquivo `.env`

> [!NOTE]
> Sugiro colocar os terminais da aplicação e do webhook um ao lado do outro.

5. Acesse o dashboard do stripe
6. Crie um novo produto e um novo preço em `Catalogo de Produtos`
7. A oferta ficará visivel na pagina `http://localhost:3000`

> [!NOTE]
> Pronto, agora cada criação e atualização de produtos serão listado na página.

**PRODUTOS**

A criação e atualização de produtos monitora alterações
- no campo de `nome` do produto
- no campo de `descrição` do produto
- no campo de `Lista de recursos de marketing` do produto

> [!TIP]
> O campo `Lista de recursos de marketing` do produto é usado para adicionar os items da lista de recursos do seu produto.

**PREÇOS**

A criação e atualização de preços monitora alterações
- no campo de `valor`
- no campo de `moeda`
- no campo de `Período de faturamento`
- no campo de `metadados`

> [!NOTE]
> O campo de `metadados` do preço pode ser usado para adicionar as limitações de uso da assinatura, como `max_usuarios_limit`, `max_integracoes_limit`, etc. e cada limite poder ser listado em um componente de progresso. Não implementei este recurso neste projeto, mas implementou no meu [Template para SaaS](https://github.com/Darlley/saas-admin) (segunda imagem).

Para testar o checkout você pode usrar o cartão de testes do próprio Stripe.
