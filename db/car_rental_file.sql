-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema car_rental
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema car_rental
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `car_rental` DEFAULT CHARACTER SET utf8 ;
USE `car_rental` ;

-- -----------------------------------------------------
-- Table `car_rental`.`price_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_rental`.`price_category` (
  `id` INT NOT NULL,
  `price_category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `car_rental`.`car`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_rental`.`car` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(255) NOT NULL,
  `car_type` VARCHAR(32) NOT NULL,
  `horse_power` INT NOT NULL,
  `model_year` INT NOT NULL,
  `number_of_seats` INT NOT NULL,
  `fuel_type` VARCHAR(45) NOT NULL,
  `transmission_type` VARCHAR(45) NOT NULL,
  `drive_train` VARCHAR(45) NOT NULL,
  `image_url` VARCHAR(145) NOT NULL,
  `price_category_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_car_price_category_idx` (`price_category_id` ASC) VISIBLE)
ENGINE = MEMORY
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_hungarian_ci;


-- -----------------------------------------------------
-- Table `car_rental`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_rental`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `email` VARCHAR(32) NOT NULL,
  `password` VARCHAR(250) NOT NULL,
  `address` VARCHAR(145) NOT NULL,
  `day_of_birth` DATE NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `car_rental`.`loan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_rental`.`loan` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `car_id` INT NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `total_price` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_loan_body_car1_idx` (`car_id` ASC) VISIBLE,
  INDEX `fk_loan_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_loan_body_car1`
    FOREIGN KEY (`car_id`)
    REFERENCES `car_rental`.`car` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_loan_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `car_rental`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `car_rental`.`permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_rental`.`permissions` (
  `id` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_rental`.`allocate`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_rental`.`allocate` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `permissions_id` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Allocate_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_Allocate_permissions1_idx` (`permissions_id` ASC) VISIBLE,
  CONSTRAINT `fk_Allocate_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `car_rental`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Allocate_permissions1`
    FOREIGN KEY (`permissions_id`)
    REFERENCES `car_rental`.`permissions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
