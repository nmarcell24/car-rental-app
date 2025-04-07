CREATE TABLE loan (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      car_id INT,
      start_date DATE,
      end_date DATE,
      total_price INT,
      user_id INT,
      FOREIGN KEY (car_id) REFERENCES car(id),
      FOREIGN KEY (user_id) REFERENCES user(id)
);
