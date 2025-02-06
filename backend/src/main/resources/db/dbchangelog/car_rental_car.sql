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
  `id` int NOT NULL,
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
) ENGINE=MEMORY DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES (1,'Toyota','Sedan',150,2020,5,'Petrol','Automatic','FWD','./images/car1.png',1),(2,'Ford','SUV',200,2019,7,'Diesel','Automatic','AWD','./images/car2.png',2),(3,'Volkswagen','Hatchback',110,2021,5,'Petrol','Manual','FWD','./images/car3.png',0),(4,'BMW','Coupe',250,2018,4,'Petrol','Automatic','RWD','./images/car4.png',2),(5,'Mercedes','Sedan',220,2022,5,'Diesel','Automatic','RWD','./images/car5.png',2),(6,'Honda','SUV',180,2020,5,'Hybrid','Automatic','AWD','./images/car6.png',1),(7,'Nissan','Hatchback',120,2019,5,'Petrol','Manual','FWD','./images/car7.png',0),(8,'Mazda','Sedan',160,2021,5,'Petrol','Automatic','FWD','./images/car8.png',1),(9,'Hyundai','SUV',170,2020,5,'Diesel','Automatic','AWD','./images/car9.png',1),(10,'Audi','Coupe',300,2018,4,'Petrol','Automatic','AWD','./images/car10.png',2),(11,'Kia','Hatchback',130,2022,5,'Petrol','Manual','FWD','./images/car11.png',0),(12,'Chevrolet','Sedan',140,2019,5,'Petrol','Automatic','FWD','./images/car12.png',0),(13,'Subaru','SUV',220,2021,7,'Petrol','Automatic','AWD','./images/car13.png',2),(14,'Tesla','Sedan',400,2023,5,'Electric','Automatic','AWD','./images/car14.png',2),(15,'Peugeot','Hatchback',100,2020,5,'Diesel','Manual','FWD','./images/car15.png',0),(16,'Lexus','SUV',280,2021,5,'Hybrid','Automatic','AWD','./images/car16.png',2),(17,'Fiat','Hatchback',95,2019,4,'Petrol','Manual','FWD','./images/car17.png',0),(18,'Volvo','Sedan',200,2022,5,'Hybrid','Automatic','AWD','./images/car18.png',1),(19,'Renault','SUV',150,2020,5,'Diesel','Automatic','FWD','./images/car19.png',1),(20,'Jaguar','Coupe',350,2019,4,'Petrol','Automatic','RWD','./images/car20.png',2),(21,'Toyota','SUV',190,2021,5,'Hybrid','Automatic','AWD','./images/car21.png',1),(22,'Ford','Sedan',160,2020,5,'Petrol','Automatic','FWD','./images/car22.png',1),(23,'Volkswagen','Coupe',280,2019,4,'Diesel','Automatic','RWD','./images/car23.png',2),(24,'BMW','SUV',300,2022,7,'Hybrid','Automatic','AWD','./images/car24.png',2),(25,'Mercedes','Hatchback',150,2020,5,'Petrol','Manual','FWD','./images/car25.png',1),(26,'Honda','Sedan',140,2019,5,'Petrol','Automatic','FWD','./images/car26.png',0),(27,'Nissan','SUV',210,2021,5,'Diesel','Automatic','AWD','./images/car27.png',1),(28,'Mazda','Coupe',250,2020,4,'Petrol','Automatic','RWD','./images/car28.png',2),(29,'Hyundai','Hatchback',110,2018,5,'Petrol','Manual','FWD','./images/car29.png',0),(30,'Audi','Sedan',230,2022,5,'Diesel','Automatic','AWD','./images/car30.png',2),(31,'Kia','SUV',175,2019,5,'Hybrid','Automatic','AWD','./images/car31.png',1),(32,'Chevrolet','Hatchback',120,2020,5,'Petrol','Manual','FWD','./images/car32.png',0),(33,'Subaru','Sedan',180,2021,5,'Petrol','Automatic','AWD','./images/car33.png',1),(34,'Tesla','SUV',420,2023,5,'Electric','Automatic','AWD','./images/car34.png',2),(35,'Peugeot','Sedan',130,2018,5,'Diesel','Manual','FWD','./images/car35.png',0),(36,'Lexus','Coupe',290,2021,4,'Hybrid','Automatic','RWD','./images/car36.png',2),(37,'Fiat','Hatchback',100,2019,4,'Petrol','Manual','FWD','./images/car37.png',0),(38,'Volvo','SUV',260,2022,5,'Hybrid','Automatic','AWD','./images/car38.png',2),(39,'Renault','Hatchback',125,2020,5,'Diesel','Manual','FWD','./images/car39.png',0),(40,'Jaguar','Sedan',310,2021,5,'Petrol','Automatic','AWD','./images/car40.png',2),(41,'Toyota','Hatchback',120,2020,5,'Petrol','Manual','FWD','./images/car41.png',0),(42,'Ford','SUV',250,2021,7,'Diesel','Automatic','AWD','./images/car42.png',2),(43,'Volkswagen','Sedan',180,2019,5,'Hybrid','Automatic','FWD','./images/car43.png',1),(44,'BMW','SUV',320,2022,5,'Petrol','Automatic','AWD','./images/car44.png',2),(45,'Mercedes','Coupe',280,2020,4,'Diesel','Automatic','RWD','./images/car45.png',2),(46,'Honda','Hatchback',130,2018,5,'Petrol','Manual','FWD','./images/car46.png',0),(47,'Nissan','Sedan',170,2021,5,'Hybrid','Automatic','FWD','./images/car47.png',1),(48,'Mazda','SUV',200,2020,5,'Diesel','Automatic','AWD','./images/car48.png',1),(49,'Hyundai','Coupe',260,2019,4,'Petrol','Automatic','RWD','./images/car49.png',2),(50,'Audi','Hatchback',140,2022,5,'Diesel','Manual','FWD','./images/car50.png',0),(51,'Kia','Sedan',160,2020,5,'Petrol','Automatic','FWD','./images/car51.png',1),(52,'Chevrolet','SUV',220,2019,5,'Hybrid','Automatic','AWD','./images/car52.png',1),(53,'Subaru','Coupe',300,2021,4,'Petrol','Automatic','RWD','./images/car53.png',2),(54,'Tesla','Sedan',450,2023,5,'Electric','Automatic','AWD','./images/car54.png',2),(55,'Peugeot','Hatchback',110,2018,5,'Diesel','Manual','FWD','./images/car55.png',0),(56,'Lexus','SUV',270,2021,5,'Hybrid','Automatic','AWD','./images/car56.png',2),(57,'Fiat','Sedan',140,2019,5,'Petrol','Automatic','FWD','./images/car57.png',0),(58,'Volvo','Coupe',310,2022,4,'Diesel','Automatic','RWD','./images/car58.png',2),(59,'Renault','Hatchback',100,2020,5,'Petrol','Manual','FWD','./images/car59.png',0),(60,'Jaguar','SUV',330,2021,5,'Petrol','Automatic','AWD','./images/car60.png',2);
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

-- Dump completed on 2025-02-06 17:56:05
