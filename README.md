# 🕒 Clocker
Clocker é uma plataforma de organização pessoal que permite ao usuário criar schedules (agendas) personalizadas e acompanhá-las em uma visualização prática em formato de dashboard.

## 📋 Funcionalidades
Criação de schedules (agendas) personalizadas.

Possibilidade de adicionar tags específicas às agendas, como trabalho, escola, entre outras categorias predeterminadas.

Visualização em tabela no dashboard.

Armazenamento persistente de dados do usuário.

## 🚀 Como rodar o projeto localmente
Pré-requisitos
Certifique-se de ter instalado:

Node.js (v20+)

NPM (v10.8.2+)

Git

Docker (v27+)

### Passos
Clone o repositório:

```
git clone https://github.com/seu-usuario/clocker.git
```
Entrar na raiz do projeto:
```
cd Clocker
```
Instale o projeto:
```
npm run install:project
```
Iniciar o FrontEnd:
```
npm run start
```
Iniciar o BackEnd:
```
npm run start:backend
```
Acesse no navegador:
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

## 📸 Prints e Demonstração


### 🖼 Dashboard

### 📅 Criar Schedule

Para vídeos, você pode subir no YouTube e adicionar um link embed:

