CREATE TABLE car (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     brand VARCHAR(255),
     car_type VARCHAR(32),
     horse_power INT,
     model_year INT,
     number_of_seats INT,
     fuel_type VARCHAR(45),
     transmission_type VARCHAR(45),
     drive_train VARCHAR(45),
     image_url VARCHAR(145),
     price_category_id INT,
     FOREIGN KEY (price_category_id) REFERENCES price_category(id)
);