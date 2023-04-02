package post

import "github.com/gofiber/fiber/v2"

type PostController struct {
	storage *PostStorage
}

func NewPostController(storage *PostStorage) *PostController {
	return &PostController{
		storage: storage,
	}
}

func (t *PostController) getAll(c *fiber.Ctx) error {
	// get all posts
	posts, err := t.storage.getAllPosts(c.Context())
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to get posts",
		})
	}

	return c.JSON(posts)
}
