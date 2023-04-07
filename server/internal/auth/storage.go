package auth

import (
	"context"
	"database/sql"
)

type AuthStorage struct {
	db *sql.DB
}

func NewAuthStorage(db *sql.DB) *AuthStorage {
	return &AuthStorage{
		db: db,
	}
}

func (s *AuthStorage) signup(ctx context.Context) (string, error) {
	return "hej från sign up", nil
}
