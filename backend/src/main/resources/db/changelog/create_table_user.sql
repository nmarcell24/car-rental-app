CREATE TABLE user (
                      id INT PRIMARY KEY AUTO_INCREMENT,
                      name VARCHAR(100) NOT NULL,
                      phone_number VARCHAR(20),
                      email VARCHAR(150) UNIQUE NOT NULL,
                      password VARCHAR(255) NOT NULL,
                      address TEXT,
                      age INT,
                      day_of_birth DATE
);
