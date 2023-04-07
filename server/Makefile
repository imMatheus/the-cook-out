.PHONY: dev
dev:
	@go run main.go

.PHONY: build
build:
	@go build -o bin/server

.PHONY: serve
serve:
	make build && ./bin/server 