PROJECT_NAME = $(notdir $(PWD))
ENTRYPOINT = src/app.ts

export ENTRYPOINT
export PROJECT_NAME

.PHONY: start

dev: ## Start the server
	deno run --allow-env --allow-net --allow-read $(ENTRYPOINT)

cache-dev: ## cache all dependencies
	deno cache src/*.ts --lock deno-lock.json --lock-write --reload

start: ## Start the server
	DENO_DIR=./vendor deno run --allow-env --allow-net --allow-read $(ENTRYPOINT)

build: ## generate vendor/gen files (js)
	rm -rf dist
	mkdir dist
	DENO_DIR=./vendor deno bundle $(ENTRYPOINT) dist/index.js

cache: ## cache all dependencies
	DENO_DIR=./vendor deno cache src/*.ts --lock deno-lock.json --lock-write --reload

test: ## run all tests
	DENO_DIR=./vendor deno test

fmt: ## format files
	deno fmt src
