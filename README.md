# 🕒 Clocker
Clocker é uma plataforma de organização pessoal que permite ao usuário criar schedules personalizadas e acompanhá-las em uma visualização prática em formato de dashboard.

## 📋 Funcionalidades
 - Criação de schedules personalizadas.

 - Possibilidade de adicionar tags específicas às schedules, como trabalho, escola, entre outras categorias predeterminadas.

 - Visualização em tabela no dashboard.

 - Armazenamento persistente de dados do usuário.

## 🚀 Como rodar o projeto localmente
### Pré-requisitos

 - Node.js (v20+)

 - NPM (v10.8.2+)

 - Git

 - Docker (v27+)

### Passos
 - Clone o repositório:

```
git clone https://github.com/gustavofont/Clocker
```
 - Entrar na raiz do projeto:
```
cd Clocker
```
 - Baixar e atualizar os submodulos:
```
git submodule update --init
```
 - Instale o projeto:
```
npm run install:project
```
 - Iniciar o FrontEnd:
```
npm run start
```
 - Iniciar o BackEnd (em um terminal diferente):
```
npm run start:backend
```
 - Acesse no navegador:
[http://localhost:8080](http://localhost:8080)
## 🧱 Arquitetura do Projeto
O Clocker foi desenvolvido seguindo uma arquitetura de microsserviços, garantindo escalabilidade, separação de responsabilidades e facilidade de manutenção. O sistema é dividido em três serviços principais:

### 🖥️ Frontend
 - Desenvolvido com Vue 3 e Vite, proporcionando alta performance e uma experiência de desenvolvimento moderna.

 - Interface responsiva e modular, com componentes reutilizáveis e organização clara de pastas.

 - Comunicação com o backend feita via requisições HTTP com auxílio da biblioteca axios.

### 🔧 Backend
 - Construído com Node.js e Express, oferecendo uma API robusta e flexível para a aplicação.

 - Utiliza Sequelize como ORM para abstração do banco de dados e facilitar as operações com os dados.

 - Serviço independente responsável por toda a lógica de negócio e manipulação de dados.

### 🗄 Banco de Dados
 - Utiliza MySQL como banco de dados relacional, garantindo integridade e performance para os dados estruturados da aplicação.

 - O banco foi levantado em um container Docker, facilitando o setup, o isolamento do ambiente e a portabilidade do sistema.

Essa separação permite que cada serviço evolua de forma independente e seja implantado ou escalado conforme a necessidade.

## 🤖 Uso de Inteligência Artificial no Desenvolvimento
Durante o desenvolvimento do Clocker, a Inteligência Artificial, especificamente o ChatGPT, foi utilizada de forma estratégica para auxiliar em etapas importantes do projeto. A seguir, algumas aplicações práticas:

### Análise de Requisitos
 - O ChatGPT foi utilizado para apoiar a definição dos requisitos iniciais do sistema, ajudando a identificar as funcionalidades essenciais de uma plataforma de organização pessoal. Também foi feito um levantamento e análise de softwares semelhantes ao Clocker, o que ajudou a guiar decisões sobre usabilidade, estrutura e diferenciais da aplicação.

### Geração de Layout Inicial
 - Para o frontend, foi solicitada ao ChatGPT a criação de uma imagem exemplo de layout base. Essa referência visual serviu como ponto de partida para a definição da estrutura e estilo da interface do usuário, facilitando o planejamento visual da aplicação.

### Construção de Query SQL para o Dashboard
 - No backend, o ChatGPT foi utilizado para auxiliar na escrita de uma query SQL complexa, responsável por buscar e agrupar os dados necessários para alimentar a página de dashboard. Isso ajudou a acelerar o desenvolvimento e garantir uma lógica de consulta eficiente.

O uso do ChatGPT como ferramenta de apoio técnico e criativo contribuiu significativamente para a agilidade e qualidade do projeto, permitindo decisões mais bem fundamentadas e entregas mais rápidas em diferentes áreas da aplicação.

## 📸 Prints e Demonstração

### 📅 Criar Schedule

![CreateSchedule2](https://github.com/user-attachments/assets/1bfb946b-4cfb-4c0f-8a9a-47ae54effffb)

### 🖼 Dashboard

![Dashboard2](https://github.com/user-attachments/assets/4786d3ab-e6a3-46d6-a177-35fa19369cf7)

### Demonstração

[Screencast from 2025-05-21 16-48-53.webm](https://github.com/user-attachments/assets/6cc3321c-3bca-44ca-beb3-a88ef8b0ec8a)

## Observação sobre o latout gerado pelo chat gpt
 ### O layout foi gerado com base em desenho feito a mão e anexado ao prompt da IA, segue abaixo a imagem fonte e a imagem gerada
 - Imagem fonte : ![WhatsApp Image 2025-04-25 at 14 21 53](https://github.com/user-attachments/assets/733ae8ed-efb6-49bd-8e5b-d89b1eda1aa8)
 - Imagem gerada : ![ChatGPT Image May 20, 2025, 11_45_35 PM](https://github.com/user-attachments/assets/c7c74568-e388-411a-8172-88a23c8f293e)
