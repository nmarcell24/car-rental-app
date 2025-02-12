-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: car_rental
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `marka` varchar(255) COLLATE utf8mb3_hungarian_ci NOT NULL,
  `car_type` varchar(32) COLLATE utf8mb3_hungarian_ci NOT NULL,
  `horse_power` int NOT NULL,
  `model_year` int NOT NULL,
  `number_of_seats` int NOT NULL,
  `fuel_type` varchar(45) COLLATE utf8mb3_hungarian_ci NOT NULL,
  `transmission_type` varchar(45) COLLATE utf8mb3_hungarian_ci NOT NULL,
  `drive_train` varchar(45) COLLATE utf8mb3_hungarian_ci NOT NULL,
  `image_url` varchar(45) COLLATE utf8mb3_hungarian_ci NOT NULL,
  `price_category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_car_price_category_idx` (`price_category_id`)
) ENGINE=MEMORY AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES (82,'string','string',0,0,0,'string','string','string','string',10000),(81,'string','string',0,0,0,'string','string','string','string',10000),(80,'Audi','Coupe',300,2018,4,'Petrol','Automatic','AWD','./images/car10.png',2),(79,'Hyundai','SUV',170,2020,5,'Diesel','Automatic','AWD','./images/car9.png',1),(78,'Mazda','Sedan',160,2021,5,'Petrol','Automatic','FWD','./images/car8.png',1),(77,'Nissan','Hatchback',120,2019,5,'Petrol','Manual','FWD','./images/car7.png',0),(76,'Honda','SUV',180,2020,5,'Hybrid','Automatic','AWD','./images/car6.png',1),(75,'Mercedes','Sedan',220,2022,5,'Diesel','Automatic','RWD','./images/car5.png',2),(74,'BMW','Coupe',250,2018,4,'Petrol','Automatic','RWD','./images/car4.png',2),(73,'Volkswagen','Hatchback',110,2021,5,'Petrol','Manual','FWD','./images/car3.png',0),(72,'Ford','SUV',200,2019,7,'Diesel','Automatic','AWD','./images/car2.png',2),(71,'Toyota','Sedan',150,2020,5,'Petrol','Automatic','FWD','./images/car1.png',1);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-12 16:55:26
