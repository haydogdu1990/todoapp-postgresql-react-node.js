CREATE DATABASE todoapp;


CREATE TABLE todos(
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300),
);

CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

-- SELECT * FROM todos;

-- INSERT INTO todos(id, user_email, title, progress, date) VALUES('0', 'hasan@test.com', 'First todo', 10, 'Thu Dec 29 2022 13:25:45 GMT+0400 (Gulf Standart Time)');