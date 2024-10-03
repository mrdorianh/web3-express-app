# Web3 Express.js Boilerplate Project

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Interacting with Smart Contracts](#interacting-with-smart-contracts)
- [Testing](#testing)
- [Security Considerations](#security-considerations)
- [Logging](#logging)
- [Additional Middleware](#additional-middleware)
- [Deployment Considerations](#deployment-considerations)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

---

## Introduction

Welcome to the **Web3 Express.js Boilerplate Project**! This repository serves as a foundational template for building Web3 applications using Express.js and Web3.js. It includes essential features for interacting with blockchain networks, managing server-side logic, and following best practices in security and application structure.

This boilerplate is designed to help you kickstart your Web3 application development by providing a structured and scalable foundation. Whether you're building a decentralized application (dApp), interacting with smart contracts, or creating blockchain-based APIs, this project has you covered.

---

## Features

- **Express.js Server Setup**: A robust and modular Express.js server configuration.
- **Web3.js Integration**: Seamless interaction with Ethereum and other EVM-compatible blockchains.
- **Smart Contract Interaction**: Easily interact with smart contracts using ABI and contract addresses.
- **Environment Configuration**: Securely manage environment variables using `dotenv`.
- **Middleware Support**: Includes essential middleware like CORS, logging with Morgan, and error handling.
- **Security Best Practices**: Guidelines for managing private keys and sensitive data.
- **Testing Framework**: Setup with Mocha and Chai for writing and running tests.
- **Linting and Code Quality**: ESLint configuration for maintaining code standards.
- **Scripts**: Predefined scripts for starting the server, development, linting, and testing.
- **Modular Directory Structure**: Organized folder hierarchy for scalability and maintainability.

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 12.x or higher.
- **npm**: Node Package Manager, usually comes with Node.js.
- **Infura Account**: For connecting to the Ethereum network without running a full node. Sign up at [Infura](https://infura.io/).
- **Git**: For version control (optional but recommended).

---

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/web3-express-boilerplate.git
   cd web3-express-boilerplate
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` File**

   Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   PORT=3000
   INFURA_PROJECT_ID=your_infura_project_id
   PRIVATE_KEY=your_private_key   # Securely store and do not commit this
   ```

   **Important**: Never commit your `.env` file or expose your private keys.

4. **Set Up ESLint (Optional)**

   If you wish to maintain code quality using ESLint:

   ```bash
   npx eslint --init
   ```

---

## Usage

### Running the Server

Start the server in production mode:

```bash
npm start
```

Start the server in development mode (with auto-reloading using nodemon):

```bash
npm run dev
```

The server will run on `http://localhost:3000` by default unless specified otherwise in the `.env` file.

### Testing the API

You can test the API endpoints using tools like:

- **Postman**
- **cURL**
- **Browser** (for GET requests)

---

## Project Structure

```
web3-express-boilerplate/
├── node_modules/
├── src/
│   ├── contracts/
│   │   └── abi/
│   │       └── ERC20Token.json
│   ├── controllers/
│   │   └── contractController.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── routes/
│   │   └── index.js
│   ├── utils/
│   │   └── web3Provider.js
│   └── app.js
├── test/
│   └── app.test.js
├── .env
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

### Folder Explanations

- **src/**: Contains all source code files.
  - **contracts/abi/**: Stores contract ABI files.
  - **controllers/**: Contains logic for handling requests.
  - **middlewares/**: Custom middleware functions.
  - **routes/**: Defines all API routes.
  - **utils/**: Utility modules like Web3 provider setup.
  - **app.js**: Initializes the Express app.
- **test/**: Contains test scripts using Mocha and Chai.
- **.env**: Environment variables (do not commit this file).
- **index.js**: Entry point of the application.
- **package.json**: Lists dependencies and scripts.

---

## Configuration

### Environment Variables

All sensitive configurations are managed via environment variables using the `.env` file.

```bash
PORT=3000
INFURA_PROJECT_ID=your_infura_project_id
PRIVATE_KEY=your_private_key   # Securely store and do not commit this
```

**Note**: Ensure you replace `your_infura_project_id` and `your_private_key` with your actual credentials.

### ESLint Configuration

ESLint is set up to maintain code quality. Configuration is managed via `.eslintrc.json`. Adjust the rules according to your project's coding standards.

---

## Scripts

The `package.json` file includes the following scripts:

- **Start the Server**

  ```bash
  npm start
  ```

- **Start in Development Mode**

  ```bash
  npm run dev
  ```

- **Run Linter**

  ```bash
  npm run lint
  ```

- **Run Tests**

  ```bash
  npm test
  ```

---

## API Endpoints

### Base URL

All API endpoints are prefixed with `/api`.

### Health Check

- **Endpoint**: `/api/`
- **Method**: GET
- **Description**: Checks if the API is running.
- **Response**:

  ```json
  {
    "message": "API is running"
  }
  ```

### Get Latest Block Number

- **Endpoint**: `/api/blockNumber`
- **Method**: GET
- **Description**: Retrieves the latest block number from the Ethereum blockchain.
- **Response**:

  ```json
  {
    "blockNumber": 12345678
  }
  ```

### Get Total Supply of a Token

- **Endpoint**: `/api/contract/totalSupply`
- **Method**: GET
- **Description**: Gets the total supply of a specific ERC-20 token.
- **Response**:

  ```json
  {
    "totalSupply": "1000000"
  }
  ```

---

## Interacting with Smart Contracts

### Storing Contract ABI

Place your contract's ABI file in `src/contracts/abi/`. For example, `ERC20Token.json`.

### Updating Contract Details

In `src/controllers/contractController.js`, update the contract address and ensure the correct ABI is imported.

```javascript
const contractABI = require('../contracts/abi/ERC20Token.json');
const contractAddress = '0x...'; // Replace with your contract's address
```

### Example: Get Total Supply

```javascript
exports.getTotalSupply = async (req, res, next) => {
  try {
    const totalSupply = await contract.methods.totalSupply().call();
    res.json({ totalSupply: web3.utils.fromWei(totalSupply, 'ether') });
  } catch (error) {
    next(error);
  }
};
```

---

## Testing

### Running Tests

Tests are written using Mocha and Chai. Run tests using:

```bash
npm test
```

### Writing Tests

Test files are located in the `test/` directory. An example test (`test/app.test.js`) is provided.

```javascript
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /api/', () => {
  it('should return API is running', (done) => {
    chai.request(app)
      .get('/api/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('API is running');
        done();
      });
  });
});
```

---

## Security Considerations

### Managing Private Keys

- **Never Hard-code Private Keys**: Always use environment variables to manage sensitive information.
- **Use Secure Storage**: Consider using key management services or secure vaults in production.
- **Do Not Commit `.env` Files**: Ensure `.env` is listed in your `.gitignore`.

### Example of Secure Key Management

In `.env`:

```bash
PRIVATE_KEY=your_private_key
```

In `src/utils/web3Provider.js`:

```javascript
const privateKey = process.env.PRIVATE_KEY;
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;
```

### Additional Security Measures

- **Rate Limiting**: Implement rate limiting to prevent DDoS attacks.
- **Input Validation**: Always validate and sanitize user inputs.
- **HTTPS**: Use SSL certificates to encrypt data in transit.
- **Update Dependencies**: Regularly update packages to patch vulnerabilities.

---

## Logging

### Using Morgan

HTTP request logging is enabled using Morgan.

In `src/app.js`:

```javascript
const morgan = require('morgan');
app.use(morgan('dev'));
```

### Advanced Logging (Optional)

For more advanced logging features, consider integrating `winston` or other logging libraries.

---

## Additional Middleware

### CORS

CORS is enabled to allow cross-origin requests.

In `src/app.js`:

```javascript
const cors = require('cors');
app.use(cors());
```

### Error Handling

Custom error handling middleware is set up in `src/middlewares/errorHandler.js`.

```javascript
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: err.message,
  });
};
```

### Authentication Middleware (Optional)

If your application requires authentication, you can implement JWT authentication.

Install `jsonwebtoken`:

```bash
npm install jsonwebtoken
```

Create an authentication middleware in `src/middlewares/auth.js`.

---

## Deployment Considerations

### Environment Variables

Ensure all environment variables are correctly set in your production environment.

### Process Management

Use process managers like `pm2` to keep your application running in production.

```bash
npm install -g pm2
pm2 start index.js
```

### Reverse Proxy and SSL

Use Nginx or Apache as a reverse proxy and to handle SSL termination.

### Continuous Integration/Continuous Deployment (CI/CD)

Set up CI/CD pipelines using tools like GitHub Actions, Jenkins, or CircleCI for automated testing and deployment.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m 'Add your feature'
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

---

## License

This project is licensed under the MIT License.

---

## Contact Information

- **Author**: Dorian Hryniewicki
- **Email**: mrdorianh@gmail.com

---

## Acknowledgements

- [Express.js Documentation](https://expressjs.com/)
- [Web3.js Documentation](https://web3js.readthedocs.io/)
- [Ethereum Stack Exchange](https://ethereum.stackexchange.com/)
- [Infura](https://infura.io/)

---

## Additional Resources

- **Ethers.js**: An alternative to Web3.js. [docs.ethers.io](https://docs.ethers.io/)
- **Solidity Documentation**: [docs.soliditylang.org](https://docs.soliditylang.org/)
- **OpenZeppelin Contracts**: Secure smart contract libraries. [openzeppelin.com/contracts](https://openzeppelin.com/contracts/)
- **Truffle Suite**: Development environment for Ethereum. [trufflesuite.com](https://www.trufflesuite.com/)
- **Ganache**: Personal blockchain for Ethereum development. [trufflesuite.com/ganache](https://www.trufflesuite.com/ganache)

---

## FAQ

### Why use this boilerplate?

This boilerplate provides a solid foundation with a scalable structure, essential features, and best practices for building Web3 applications using Express.js and Web3.js.

### Can I use this boilerplate for production?

Yes, but ensure you perform thorough testing, security audits, and configure the application according to your production environment needs.

### How do I add more smart contract interactions?

- Add the contract's ABI file to `src/contracts/abi/`.
- Update the controller to include new methods.
- Define new routes in `src/routes/index.js`.

---

## Getting Help

If you encounter any issues or have questions, feel free to open an issue on the GitHub repository or contact me directly at mrdorianh@gmail.com.

---

**Happy Coding!**
