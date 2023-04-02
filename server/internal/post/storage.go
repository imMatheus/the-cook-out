package post

import (
	"context"
	"database/sql"
	"log"
)

// how the todo is stored in the database
type Post struct {
	Id   int64  `json:"id"`
	Body string `json:"body"`
}

type PostStorage struct {
	db *sql.DB
}

func NewPostStorage(db *sql.DB) *PostStorage {
	return &PostStorage{
		db: db,
	}
}

func (s *PostStorage) getAllPosts(ctx context.Context) ([]Post, error) {
	query := "SELECT * FROM posts"
	res, err := s.db.Query(query)
	defer res.Close()
	if err != nil {
		log.Fatal("(GetPosts) db.Query", err)
	}

	posts := []Post{}
	for res.Next() {
		var post Post
		err := res.Scan(&post.Id, &post.Body)
		if err != nil {
			log.Fatal("(GetPosts) res.Scan", err)
		}
		posts = append(posts, post)
	}

	return posts, nil
}
