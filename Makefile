export PROJECT_NAME

.PHONY: start

start: ## Start the server
	DENO_DIR=./vendor deno run --allow-env --allow-net src/app.ts	

cache: ## cache all dependencies
	DENO_DIR=./vendor deno cache src/app.ts --lock deno-lock.json --lock-write --reload

test: ## run all tests
	DENO_DIR=./vendor deno test

fmt: ## format files
	deno fmt ./src