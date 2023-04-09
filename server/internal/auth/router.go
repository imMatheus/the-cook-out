package auth

import "github.com/gofiber/fiber/v2"

func AddAuthRoutes(app *fiber.App, controller *AuthController) {
	auth := app.Group("/auth")

	// add routes here
	auth.Get("/me", controller.me)
	auth.Get("/signup", controller.signUp)
}
