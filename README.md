# OpenAPI HTTP Client Generator

This project demonstrates how to generate a TypeScript HTTP client from an OpenAPI specification using `swagger-typescript-api` and how to use the generated `Api` class in a frontend application.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Generating the API Client](#generating-the-api-client)
- [Usage](#usage)
  - [API Instance](#api-instance)
  - [Authentication](#authentication)
- [Examples](#examples)
  - [Fetching Users](#fetching-users)
  - [Creating a User](#creating-a-user)
  - [Updating a User](#updating-a-user)
  - [Deleting a User](#deleting-a-user)
- [License](#license)

## Introduction

This project provides a practical example of how to generate a fully-typed HTTP client from an OpenAPI (Swagger) specification using the [`swagger-typescript-api`](https://github.com/acacode/swagger-typescript-api) tool. It also demonstrates how to use the generated `Api` class in a frontend application, including handling authentication tokens.

## Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (version 10 or higher)

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/paveliko/openapi-http-client-generator.git
cd openapi-http-client-generator
npm install
```

## Generating the API Client

The API client is generated from the OpenAPI specification (`src/swagger.json`) using `swagger-typescript-api`.

To generate the client, run:

```bash
npm run generate:api
```

This command will generate the `Api.ts` file in the `src/api` directory based on the definitions in `swagger.json`.

## Usage

### API Instance

The `api-instance.ts` file exports an `api` instance of the `Api` class, which is ready to be used in your application.

```typescript
import api from './src/api-instance';
```

### Authentication

To make authenticated requests, you need to set the API token:

```typescript
import { setApiToken } from './src/api-instance';

setApiToken('your-jwt-token');
```

This token will be included in the `Authorization` header for all subsequent requests.

## Examples

### Fetching Users

```typescript
import api from './src/api-instance';

async function fetchUsers() {
  try {
    const users = await api.getUsers();
    console.log('Users:', users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

fetchUsers();
```

### Creating a User

```typescript
import api from './src/api-instance';

async function createUser() {
  try {
    const newUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      birthDate: '1990-01-01',
    };
    const createdUser = await api.createUser(newUser);
    console.log('Created user:', createdUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser();
```

### Updating a User

```typescript
import api from './src/api-instance';

async function updateUser(userId: string) {
  try {
    const updateData = {
      name: 'John Smith',
      email: 'john.smith@example.com',
    };
    const updatedUser = await api.updateUser(userId, updateData);
    console.log('Updated user:', updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

updateUser('user-id-here');
```

### Deleting a User

```typescript
import api from './src/api-instance';

async function deleteUser(userId: string) {
  try {
    await api.deleteUser(userId);
    console.log('User deleted');
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

deleteUser('user-id-here');
```

## License

This project is licensed under the ISC License.

---

**Additional Resources:**

- [OpenAPI Specification](https://swagger.io/specification/)
- [swagger-typescript-api GitHub Repository](https://github.com/acacode/swagger-typescript-api)

**Author:** Pavel Rapoport