CREATE TABLE Loan_head (
                           loan_id INT PRIMARY KEY AUTO_INCREMENT,
                           user_id INT,
                           FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);