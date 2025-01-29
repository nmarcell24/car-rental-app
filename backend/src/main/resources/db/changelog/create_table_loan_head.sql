CREATE TABLE loan_head (
                           id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                           user_id INT,
                           FOREIGN KEY (user_id) REFERENCES user(id)
);