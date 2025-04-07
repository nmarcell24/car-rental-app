CREATE TABLE user (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      username VARCHAR(45),
      phone_number VARCHAR(45),
      email VARCHAR(32),
      password VARCHAR(250),
      address VARCHAR(145),
      day_of_birth DATE,
      role VARCHAR(45)
);