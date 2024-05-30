USE leafy;

CREATE TABLE users(
email VARCHAR(255) PRIMARY KEY,
username VARCHAR(255) UNIQUE NOT NULL,
password_hash VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DESCRIBE users;

INSERT INTO users (email, username, password_hash)
VALUES ('john@example.com', 'johnsmith', 'hashed_password_1'),
       ('jane@example.com', 'janedoe', 'hashed_password_2');

SELECT * FROM users;

UPDATE users
SET password_hash = 'new_hashed_password'
WHERE email = 'jane@example.com';
