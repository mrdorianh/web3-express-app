# Makefile for Web3 Express.js Boilerplate Project

# Variables
NODE = node
NPM = npm
NODEMON = npx nodemon

# Phony targets
.PHONY: all install start dev test lint clean install-depcheck check-deps generate-package-json

# Default target
all: install

# Install dependencies
install:
	@echo "Installing dependencies..."
	@$(NPM) install

# Start the application in production mode
start:
	@echo "Starting the application..."
	@$(NODE) index.js

# Start the application in development mode
dev:
	@echo "Starting the application in development mode..."
	@$(NODEMON) index.js

# Run tests
test:
	@echo "Running tests..."
	@$(NPM) test

# Run linter
lint:
	@echo "Running linter..."
	@$(NPM) run lint

# Clean up node_modules
clean:
	@echo "Cleaning up..."
	@rm -rf node_modules

# Help command to list available targets
help:
	@echo "Available targets:"
	@echo "  make install  - Install project dependencies"
	@echo "  make start    - Start the application in production mode"
	@echo "  make dev      - Start the application in development mode"
	@echo "  make test     - Run the test suite"
	@echo "  make lint     - Run the linter"
	@echo "  make clean    - Remove node_modules directory"
	@echo "  make help     - Display this help message"

# Install depcheck globally
install-depcheck:
	@echo "Installing depcheck..."
	@npm install -g depcheck
	@depcheck --version

# Run depcheck to find used dependencies
check-deps:
	@echo "Checking dependencies..."
	@depcheck --ignores="makefile" --json > depcheck_result.json || (echo "Depcheck failed with error code $$?"; cat depcheck_result.json; exit 1)

# Generate package.json with correct dependencies
generate-package-json: check-deps
	@echo "Generating package.json with correct dependencies..."
	@node scripts/generate-package-json.js