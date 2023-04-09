package auth

import "github.com/gofiber/fiber/v2"

type AuthController struct {
	storage *AuthStorage
}

func NewAuthController(storage *AuthStorage) *AuthController {
	return &AuthController{
		storage: storage,
	}
}

func (t *AuthController) signUp(c *fiber.Ctx) error {
	// get all posts
	posts, err := t.storage.signup(c.Context())
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to get posts",
		})
	}

	return c.JSON(posts)
}

func (t *AuthController) me(c *fiber.Ctx) error {
	// get all posts

	return c.JSON("you")
}
