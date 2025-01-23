# Task Manager API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

---

## Description

This project is a **Task Manager API** built using the [Nest](https://github.com/nestjs/nest) framework. It provides endpoints for managing tasks, supports PostgreSQL with Sequelize ORM, and includes Swagger for API documentation.

---

## Installation and Setup

### **Running Locally**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory based on `.env.example` and set the appropriate values:
   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=user
   DATABASE_PASSWORD=password
   DATABASE_NAME=tasks_db
   ```

4. Start the application:
   ```bash
   # Development mode
   npm run start:dev
   ```

   The server will be running at [http://localhost:3000](http://localhost:3000).

---

### **Running with Docker Compose**

1. Ensure you have Docker and Docker Compose installed on your system.

2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

   This will create and start:
   - A `backend` service running the NestJS application.
   - A `db` service running PostgreSQL.

3. The application will be available at:
   - **API:** [http://localhost:3000](http://localhost:3000)
   - **Swagger Docs:** [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

4. To stop the containers:
   ```bash
   docker-compose down
   ```

---

## Commands

### **Development**

- Start the application in watch mode:
  ```bash
  npm run start:dev
  ```

- Build and start for production:
  ```bash
  npm run start:prod
  ```

### **Testing**

- Run unit tests:
  ```bash
  npm run test
  ```

- Run e2e tests:
  ```bash
  npm run test:e2e
  ```

- Check test coverage:
  ```bash
  npm run test:cov
  ```

---

## API Documentation

This project uses Swagger for API documentation. Once the server is running, you can access the Swagger UI at:

[http://localhost:3000/api/docs](http://localhost:3000/api/docs)

---

## Folder Structure

```
src/
├── controllers/       # API controllers
├── services/          # Business logic
├── models/            # Sequelize models
├── dto/               # Data Transfer Objects (DTOs)
├── main.ts            # Application entry point
├── app.module.ts      # Root application module
```

---

## Deployment

When you're ready to deploy your NestJS application to production, check out the official [deployment documentation](https://docs.nestjs.com/deployment).

---

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).

---

## Author

- Author - [Your Name](https://github.com/your-username)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestjsframework](https://twitter.com/nestframework)

---

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).