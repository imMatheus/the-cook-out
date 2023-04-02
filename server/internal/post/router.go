package post

import "github.com/gofiber/fiber/v2"

func AddTodoRoutes(app *fiber.App, controller *PostController) {
	posts := app.Group("/posts")

	// add routes here
	posts.Get("/", controller.getAll)
}
