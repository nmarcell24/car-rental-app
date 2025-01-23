CREATE TABLE loan_body (
                           id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                           car_id INT,
                           start_date DATE NOT NULL,
                           end_date DATE NOT NULL,
                           total_price DECIMAL(10,2),
                           loan_head_id INT NOT NULL,
                           FOREIGN KEY (loan_head_id) REFERENCES loan_head(id) ON DELETE CASCADE,
                           FOREIGN KEY (car_id) REFERENCES car(id) ON DELETE CASCADE
);