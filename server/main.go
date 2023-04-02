package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gofiber/fiber/v2"
	"github.com/imMatheus/the-cook-out/internal/post"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Could not load env variabels")
		os.Exit(1)
	}

	app, err := buildServer()

	if err != nil {
		log.Fatalln("failed to start server")
		os.Exit(1)
	}

	app.Listen(":3000")
	log.Println("Server is up and running")
}

func connectSql() (*sql.DB, error) {
	db, err := sql.Open("mysql", os.Getenv("DSN"))
	if err != nil {
		return nil, fmt.Errorf("failed to connect: %v", err)
	}

	defer db.Close()

	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping: %v", err)
	}

	log.Println("Successfully connected to PlanetScale!")

	return db, nil
}

func buildServer() (*fiber.App, error) {
	db, err := connectSql()

	if err != nil {
		return nil, err
	}

	app := fiber.New()

	app.Get("/health", func(c *fiber.Ctx) error {
		return c.SendString("Healthy!")
	})

	postStore := post.NewPostStorage(db)
	postController := post.NewPostController(postStore)
	post.AddTodoRoutes(app, postController)

	return app, nil
}
