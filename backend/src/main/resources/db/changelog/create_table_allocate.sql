CREATE TABLE allocate (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      permission_id VARCHAR(30),
      FOREIGN KEY (user_id) REFERENCES user(id),
      FOREIGN KEY (permission_id) REFERENCES permission(id)
);