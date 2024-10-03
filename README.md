# Ethereum ERC20 Token API

This project is a Node.js API that interacts with an ERC20 token on the Ethereum blockchain. It provides endpoints to retrieve blockchain information and token details.


npm start

Infura Project ID for Ethereum node access
INFURA_PROJECT_ID=your_infura_project_id_here
Allowed origins for CORS (comma-separated list)
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
Port for the server to listen on
PORT=3000
Contract address for the ERC20 token
CONTRACT_ADDRESS=0x1234567890123456789012345678901234567890
Node environment (development, production, test)
NODE_ENV=development

## Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)
- An Infura account for Ethereum node access

## Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in the values in `.env` as described in the Environment Variables section

## Running the Application

To start the server:

```
npm start
The server will start on the port specified in your `.env` file (default is 3000).

## API Endpoints

1. Health Check
   - GET `/api`
   - Returns: "API is running"

2. Get Latest Block Number
   - GET `/api/blockNumber`
   - Returns: The latest Ethereum block number

3. Get Total Supply of Token
   - GET `/api/contract/totalSupply`
   - Returns: The total supply of the ERC20 token in ether

## Error Handling

The application uses a global error handling middleware. Specific error responses are implemented for network-related issues in the contract controller.

## CORS Configuration

CORS is configured to allow requests from origins specified in the `ALLOWED_ORIGINS` environment variable.

## Development

- Use `npm run lint` to run the linter (if configured in package.json).
- Use `npm test` to run tests (if configured in package.json).

## Production Considerations

- Ensure all environment variables are properly set in your production environment.
- Consider using a process manager like PM2 to keep the application running.
- Implement proper logging and monitoring for production use.
- Consider using a WebSocket provider for better real-time performance.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
