PROJECT_NAME = $(notdir $(PWD))

export PROJECT_NAME

.PHONY: start
.DEFAULT_GOAL:=help

help: ## Prints the help about targets.
	@printf "Usage:             make [\033[34mtarget\033[0m]\n"
	@printf "Default:           \033[34m%s\033[0m\n" $(.DEFAULT_GOAL)
	@printf "Targets:\n"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf " \033[34m%-17s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sort

start: ## Start the server
	DENO_DIR=./vendor deno run --allow-env --allow-net src/app.ts	

cache: ## cache all dependencies
	DENO_DIR=./vendor deno cache src/app.ts --lock deno-lock.json --lock-write --reload

test: ## run all tests
	DENO_DIR=./vendor deno test

fmt: ## format files
	deno fmt ./src