CREATE TABLE Loan_body (
                           loan_id INT,
                           car_id INT,
                           start_date DATE NOT NULL,
                           end_date DATE NOT NULL,
                           total_price DECIMAL(10,2),
                           PRIMARY KEY (loan_id, car_id),
                           FOREIGN KEY (loan_id) REFERENCES Loan_head(loan_id) ON DELETE CASCADE,
                           FOREIGN KEY (car_id) REFERENCES Car(auto_id) ON DELETE CASCADE
);