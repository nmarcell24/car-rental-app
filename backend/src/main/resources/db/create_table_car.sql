CREATE TABLE Car (
                     auto_id INT PRIMARY KEY AUTO_INCREMENT,
                     marka VARCHAR(100) NOT NULL,
                     type VARCHAR(100) NOT NULL,
                     horse_power INT,
                     model_year INT,
                     fuel_type VARCHAR(50),
                     transmission_type VARCHAR(50),
                     drive_train VARCHAR(50),
                     price_id INT,
                     FOREIGN KEY (price_id) REFERENCES Price_category(price_id) ON DELETE SET NULL
);