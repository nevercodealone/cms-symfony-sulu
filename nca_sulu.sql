-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: nca_sulu
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB-1:10.4.11+maria~bionic

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ca_categories`
--

DROP TABLE IF EXISTS `ca_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ca_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_key` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `default_locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `depth` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idCategoriesParent` int(11) DEFAULT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_3D85D789AF5206F3` (`category_key`),
  KEY `IDX_3D85D78937A3C3B1` (`idCategoriesParent`),
  KEY `IDX_3D85D789DBF11E1D` (`idUsersCreator`),
  KEY `IDX_3D85D78930D07CD5` (`idUsersChanger`),
  CONSTRAINT `FK_3D85D78930D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_3D85D78937A3C3B1` FOREIGN KEY (`idCategoriesParent`) REFERENCES `ca_categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_3D85D789DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ca_categories`
--

LOCK TABLES `ca_categories` WRITE;
/*!40000 ALTER TABLE `ca_categories` DISABLE KEYS */;
INSERT INTO `ca_categories` VALUES (1,'testing-php','en',1,2,0,'2020-01-16 23:59:07','2020-01-16 23:59:07',NULL,1,1),(2,'sulu-symfony-cms','en',3,4,0,'2020-01-26 02:16:51','2020-01-26 02:16:51',NULL,1,1),(3,NULL,'en',5,6,0,'2020-02-05 22:38:57','2020-02-05 22:38:57',NULL,1,1);
/*!40000 ALTER TABLE `ca_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ca_category_meta`
--

DROP TABLE IF EXISTS `ca_category_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ca_category_meta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `meta_key` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idCategories` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_2575BBB0B8075882` (`idCategories`),
  CONSTRAINT `FK_2575BBB0B8075882` FOREIGN KEY (`idCategories`) REFERENCES `ca_categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ca_category_meta`
--

LOCK TABLES `ca_category_meta` WRITE;
/*!40000 ALTER TABLE `ca_category_meta` DISABLE KEYS */;
/*!40000 ALTER TABLE `ca_category_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ca_category_translation_keywords`
--

DROP TABLE IF EXISTS `ca_category_translation_keywords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ca_category_translation_keywords` (
  `idKeywords` int(11) NOT NULL,
  `idCategoryTranslations` int(11) NOT NULL,
  PRIMARY KEY (`idKeywords`,`idCategoryTranslations`),
  KEY `IDX_D15FBE37F9FC9F05` (`idKeywords`),
  KEY `IDX_D15FBE3717CA14DA` (`idCategoryTranslations`),
  CONSTRAINT `FK_D15FBE3717CA14DA` FOREIGN KEY (`idCategoryTranslations`) REFERENCES `ca_category_translations` (`id`),
  CONSTRAINT `FK_D15FBE37F9FC9F05` FOREIGN KEY (`idKeywords`) REFERENCES `ca_keywords` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ca_category_translation_keywords`
--

LOCK TABLES `ca_category_translation_keywords` WRITE;
/*!40000 ALTER TABLE `ca_category_translation_keywords` DISABLE KEYS */;
/*!40000 ALTER TABLE `ca_category_translation_keywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ca_category_translation_medias`
--

DROP TABLE IF EXISTS `ca_category_translation_medias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ca_category_translation_medias` (
  `idCategoryTranslations` int(11) NOT NULL,
  `idMedia` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `position` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `IDX_39FC41BA17CA14DA` (`idCategoryTranslations`),
  KEY `IDX_39FC41BA7DE8E211` (`idMedia`),
  CONSTRAINT `FK_39FC41BA17CA14DA` FOREIGN KEY (`idCategoryTranslations`) REFERENCES `ca_category_translations` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_39FC41BA7DE8E211` FOREIGN KEY (`idMedia`) REFERENCES `me_media` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ca_category_translation_medias`
--

LOCK TABLES `ca_category_translation_medias` WRITE;
/*!40000 ALTER TABLE `ca_category_translation_medias` DISABLE KEYS */;
/*!40000 ALTER TABLE `ca_category_translation_medias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ca_category_translations`
--

DROP TABLE IF EXISTS `ca_category_translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ca_category_translations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `translation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idCategories` int(11) NOT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_5DCED5E3B8075882` (`idCategories`),
  KEY `IDX_5DCED5E3DBF11E1D` (`idUsersCreator`),
  KEY `IDX_5DCED5E330D07CD5` (`idUsersChanger`),
  CONSTRAINT `FK_5DCED5E330D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_5DCED5E3B8075882` FOREIGN KEY (`idCategories`) REFERENCES `ca_categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_5DCED5E3DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ca_category_translations`
--

LOCK TABLES `ca_category_translations` WRITE;
/*!40000 ALTER TABLE `ca_category_translations` DISABLE KEYS */;
INSERT INTO `ca_category_translations` VALUES (1,'Testing PHP','en',NULL,'2020-01-16 23:59:07','2020-01-16 23:59:07',1,1,1),(2,'Sulu Symfony CMS','en',NULL,'2020-01-26 02:16:51','2020-01-26 02:16:51',2,1,1),(3,'Angular','en',NULL,'2020-02-05 22:38:57','2020-02-05 22:38:57',3,1,1);
/*!40000 ALTER TABLE `ca_category_translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ca_keywords`
--

DROP TABLE IF EXISTS `ca_keywords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ca_keywords` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keyword` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_idx` (`keyword`,`locale`),
  KEY `IDX_FE02CA0BDBF11E1D` (`idUsersCreator`),
  KEY `IDX_FE02CA0B30D07CD5` (`idUsersChanger`),
  KEY `IDX_FE02CA0B5A93713B` (`keyword`),
  CONSTRAINT `FK_FE02CA0B30D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_FE02CA0BDBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ca_keywords`
--

LOCK TABLES `ca_keywords` WRITE;
/*!40000 ALTER TABLE `ca_keywords` DISABLE KEYS */;
/*!40000 ALTER TABLE `ca_keywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_addresses`
--

DROP TABLE IF EXISTS `co_account_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `main` tinyint(1) NOT NULL,
  `idAddresses` int(11) NOT NULL,
  `idAccounts` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_4165FE4893205E40996BB4F7` (`idAddresses`,`idAccounts`),
  KEY `IDX_4165FE4893205E40` (`idAddresses`),
  KEY `IDX_4165FE48996BB4F7` (`idAccounts`),
  CONSTRAINT `FK_4165FE4893205E40` FOREIGN KEY (`idAddresses`) REFERENCES `co_addresses` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_4165FE48996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_addresses`
--

LOCK TABLES `co_account_addresses` WRITE;
/*!40000 ALTER TABLE `co_account_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_bank_accounts`
--

DROP TABLE IF EXISTS `co_account_bank_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_bank_accounts` (
  `idAccounts` int(11) NOT NULL,
  `idBankAccounts` int(11) NOT NULL,
  PRIMARY KEY (`idAccounts`,`idBankAccounts`),
  KEY `IDX_C873A532996BB4F7` (`idAccounts`),
  KEY `IDX_C873A53237FCD1D8` (`idBankAccounts`),
  CONSTRAINT `FK_C873A53237FCD1D8` FOREIGN KEY (`idBankAccounts`) REFERENCES `co_bank_account` (`id`),
  CONSTRAINT `FK_C873A532996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_bank_accounts`
--

LOCK TABLES `co_account_bank_accounts` WRITE;
/*!40000 ALTER TABLE `co_account_bank_accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_bank_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_categories`
--

DROP TABLE IF EXISTS `co_account_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_categories` (
  `idAccounts` int(11) NOT NULL,
  `idCategories` int(11) NOT NULL,
  PRIMARY KEY (`idAccounts`,`idCategories`),
  KEY `IDX_B60E9510996BB4F7` (`idAccounts`),
  KEY `IDX_B60E9510B8075882` (`idCategories`),
  CONSTRAINT `FK_B60E9510996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_B60E9510B8075882` FOREIGN KEY (`idCategories`) REFERENCES `ca_categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_categories`
--

LOCK TABLES `co_account_categories` WRITE;
/*!40000 ALTER TABLE `co_account_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_contacts`
--

DROP TABLE IF EXISTS `co_account_contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `main` tinyint(1) NOT NULL,
  `idPositions` int(11) DEFAULT NULL,
  `idContacts` int(11) NOT NULL,
  `idAccounts` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_28C6CA0E60E33F28996BB4F7` (`idContacts`,`idAccounts`),
  KEY `IDX_28C6CA0E2A75CE2A` (`idPositions`),
  KEY `IDX_28C6CA0E60E33F28` (`idContacts`),
  KEY `IDX_28C6CA0E996BB4F7` (`idAccounts`),
  CONSTRAINT `FK_28C6CA0E2A75CE2A` FOREIGN KEY (`idPositions`) REFERENCES `co_positions` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_28C6CA0E60E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_28C6CA0E996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_contacts`
--

LOCK TABLES `co_account_contacts` WRITE;
/*!40000 ALTER TABLE `co_account_contacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_emails`
--

DROP TABLE IF EXISTS `co_account_emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_emails` (
  `idAccounts` int(11) NOT NULL,
  `idEmails` int(11) NOT NULL,
  PRIMARY KEY (`idAccounts`,`idEmails`),
  KEY `IDX_3E246FC3996BB4F7` (`idAccounts`),
  KEY `IDX_3E246FC32F9040C8` (`idEmails`),
  CONSTRAINT `FK_3E246FC32F9040C8` FOREIGN KEY (`idEmails`) REFERENCES `co_emails` (`id`),
  CONSTRAINT `FK_3E246FC3996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_emails`
--

LOCK TABLES `co_account_emails` WRITE;
/*!40000 ALTER TABLE `co_account_emails` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_faxes`
--

DROP TABLE IF EXISTS `co_account_faxes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_faxes` (
  `idAccounts` int(11) NOT NULL,
  `idFaxes` int(11) NOT NULL,
  PRIMARY KEY (`idAccounts`,`idFaxes`),
  KEY `IDX_7A4E77DC996BB4F7` (`idAccounts`),
  KEY `IDX_7A4E77DCCF6A2007` (`idFaxes`),
  CONSTRAINT `FK_7A4E77DC996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`),
  CONSTRAINT `FK_7A4E77DCCF6A2007` FOREIGN KEY (`idFaxes`) REFERENCES `co_faxes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_faxes`
--

LOCK TABLES `co_account_faxes` WRITE;
/*!40000 ALTER TABLE `co_account_faxes` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_faxes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_medias`
--

DROP TABLE IF EXISTS `co_account_medias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_medias` (
  `idAccounts` int(11) NOT NULL,
  `idMedias` int(11) NOT NULL,
  PRIMARY KEY (`idAccounts`,`idMedias`),
  KEY `IDX_60772810996BB4F7` (`idAccounts`),
  KEY `IDX_6077281071C3071B` (`idMedias`),
  CONSTRAINT `FK_6077281071C3071B` FOREIGN KEY (`idMedias`) REFERENCES `me_media` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_60772810996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_medias`
--

LOCK TABLES `co_account_medias` WRITE;
/*!40000 ALTER TABLE `co_account_medias` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_medias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_notes`
--

DROP TABLE IF EXISTS `co_account_notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_notes` (
  `idAccounts` int(11) NOT NULL,
  `idNotes` int(11) NOT NULL,
  PRIMARY KEY (`idAccounts`,`idNotes`),
  KEY `IDX_A3FBB24A996BB4F7` (`idAccounts`),
  KEY `IDX_A3FBB24A16DFE591` (`idNotes`),
  CONSTRAINT `FK_A3FBB24A16DFE591` FOREIGN KEY (`idNotes`) REFERENCES `co_notes` (`id`),
  CONSTRAINT `FK_A3FBB24A996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_notes`
--

LOCK TABLES `co_account_notes` WRITE;
/*!40000 ALTER TABLE `co_account_notes` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_phones`
--

DROP TABLE IF EXISTS `co_account_phones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_phones` (
  `idAccounts` int(11) NOT NULL,
  `idPhones` int(11) NOT NULL,
  PRIMARY KEY (`idAccounts`,`idPhones`),
  KEY `IDX_918DA964996BB4F7` (`idAccounts`),
  KEY `IDX_918DA9648039866F` (`idPhones`),
  CONSTRAINT `FK_918DA9648039866F` FOREIGN KEY (`idPhones`) REFERENCES `co_phones` (`id`),
  CONSTRAINT `FK_918DA964996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_phones`
--

LOCK TABLES `co_account_phones` WRITE;
/*!40000 ALTER TABLE `co_account_phones` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_phones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_social_media_profiles`
--

DROP TABLE IF EXISTS `co_account_social_media_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_social_media_profiles` (
  `idAccounts` int(11) NOT NULL,
  `idSocialMediaProfiles` int(11) NOT NULL,
  PRIMARY KEY (`idAccounts`,`idSocialMediaProfiles`),
  KEY `IDX_E06F75F5996BB4F7` (`idAccounts`),
  KEY `IDX_E06F75F5573F8344` (`idSocialMediaProfiles`),
  CONSTRAINT `FK_E06F75F5573F8344` FOREIGN KEY (`idSocialMediaProfiles`) REFERENCES `co_social_media_profiles` (`id`),
  CONSTRAINT `FK_E06F75F5996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_social_media_profiles`
--

LOCK TABLES `co_account_social_media_profiles` WRITE;
/*!40000 ALTER TABLE `co_account_social_media_profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_social_media_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_tags`
--

DROP TABLE IF EXISTS `co_account_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_tags` (
  `idAccounts` int(11) NOT NULL,
  `idTags` int(11) NOT NULL,
  PRIMARY KEY (`idAccounts`,`idTags`),
  KEY `IDX_E8D92005996BB4F7` (`idAccounts`),
  KEY `IDX_E8D920051C41CAB8` (`idTags`),
  CONSTRAINT `FK_E8D920051C41CAB8` FOREIGN KEY (`idTags`) REFERENCES `ta_tags` (`id`),
  CONSTRAINT `FK_E8D92005996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_tags`
--

LOCK TABLES `co_account_tags` WRITE;
/*!40000 ALTER TABLE `co_account_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_account_urls`
--

DROP TABLE IF EXISTS `co_account_urls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_account_urls` (
  `idAccounts` int(11) NOT NULL,
  `idUrls` int(11) NOT NULL,
  PRIMARY KEY (`idAccounts`,`idUrls`),
  KEY `IDX_ADF18382996BB4F7` (`idAccounts`),
  KEY `IDX_ADF183825969693F` (`idUrls`),
  CONSTRAINT `FK_ADF183825969693F` FOREIGN KEY (`idUrls`) REFERENCES `co_urls` (`id`),
  CONSTRAINT `FK_ADF18382996BB4F7` FOREIGN KEY (`idAccounts`) REFERENCES `co_accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_account_urls`
--

LOCK TABLES `co_account_urls` WRITE;
/*!40000 ALTER TABLE `co_account_urls` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_account_urls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_accounts`
--

DROP TABLE IF EXISTS `co_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `logo` int(11) DEFAULT NULL,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `depth` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `externalId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `corporation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `registerNumber` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `placeOfJurisdiction` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mainEmail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mainPhone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mainFax` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mainUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idContactsMain` int(11) DEFAULT NULL,
  `idAccountsParent` int(11) DEFAULT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_805CD14A6D4A8651` (`idContactsMain`),
  KEY `IDX_805CD14AC9171171` (`idAccountsParent`),
  KEY `IDX_805CD14AE48E9A13` (`logo`),
  KEY `IDX_805CD14ADBF11E1D` (`idUsersCreator`),
  KEY `IDX_805CD14A30D07CD5` (`idUsersChanger`),
  KEY `IDX_805CD14A5E237E06` (`name`),
  CONSTRAINT `FK_805CD14A30D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_805CD14A6D4A8651` FOREIGN KEY (`idContactsMain`) REFERENCES `co_contacts` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_805CD14AC9171171` FOREIGN KEY (`idAccountsParent`) REFERENCES `co_accounts` (`id`),
  CONSTRAINT `FK_805CD14ADBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_805CD14AE48E9A13` FOREIGN KEY (`logo`) REFERENCES `me_media` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_accounts`
--

LOCK TABLES `co_accounts` WRITE;
/*!40000 ALTER TABLE `co_accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_address_types`
--

DROP TABLE IF EXISTS `co_address_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_address_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_address_types`
--

LOCK TABLES `co_address_types` WRITE;
/*!40000 ALTER TABLE `co_address_types` DISABLE KEYS */;
INSERT INTO `co_address_types` VALUES (1,'address.work'),(2,'address.home');
/*!40000 ALTER TABLE `co_address_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_addresses`
--

DROP TABLE IF EXISTS `co_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `primaryAddress` tinyint(1) DEFAULT NULL,
  `deliveryAddress` tinyint(1) DEFAULT NULL,
  `billingAddress` tinyint(1) DEFAULT NULL,
  `street` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `number` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `addition` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postboxNumber` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postboxPostcode` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postboxCity` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `note` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idAdressTypes` int(11) NOT NULL,
  `countryCode` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_26E9A6142A37021A` (`idAdressTypes`),
  CONSTRAINT `FK_26E9A6142A37021A` FOREIGN KEY (`idAdressTypes`) REFERENCES `co_address_types` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_addresses`
--

LOCK TABLES `co_addresses` WRITE;
/*!40000 ALTER TABLE `co_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_bank_account`
--

DROP TABLE IF EXISTS `co_bank_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_bank_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bankName` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bic` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iban` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `public` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_bank_account`
--

LOCK TABLES `co_bank_account` WRITE;
/*!40000 ALTER TABLE `co_bank_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_bank_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_addresses`
--

DROP TABLE IF EXISTS `co_contact_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `main` tinyint(1) NOT NULL,
  `idAddresses` int(11) NOT NULL,
  `idContacts` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_DEE056893205E4060E33F28` (`idAddresses`,`idContacts`),
  KEY `IDX_DEE056893205E40` (`idAddresses`),
  KEY `IDX_DEE056860E33F28` (`idContacts`),
  CONSTRAINT `FK_DEE056860E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_DEE056893205E40` FOREIGN KEY (`idAddresses`) REFERENCES `co_addresses` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_addresses`
--

LOCK TABLES `co_contact_addresses` WRITE;
/*!40000 ALTER TABLE `co_contact_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_contact_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_bank_accounts`
--

DROP TABLE IF EXISTS `co_contact_bank_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_bank_accounts` (
  `idContacts` int(11) NOT NULL,
  `idBankAccounts` int(11) NOT NULL,
  PRIMARY KEY (`idContacts`,`idBankAccounts`),
  KEY `IDX_76CDDA0660E33F28` (`idContacts`),
  KEY `IDX_76CDDA0637FCD1D8` (`idBankAccounts`),
  CONSTRAINT `FK_76CDDA0637FCD1D8` FOREIGN KEY (`idBankAccounts`) REFERENCES `co_bank_account` (`id`),
  CONSTRAINT `FK_76CDDA0660E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_bank_accounts`
--

LOCK TABLES `co_contact_bank_accounts` WRITE;
/*!40000 ALTER TABLE `co_contact_bank_accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_contact_bank_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_categories`
--

DROP TABLE IF EXISTS `co_contact_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_categories` (
  `idContacts` int(11) NOT NULL,
  `idCategories` int(11) NOT NULL,
  PRIMARY KEY (`idContacts`,`idCategories`),
  KEY `IDX_8D2C3E2360E33F28` (`idContacts`),
  KEY `IDX_8D2C3E23B8075882` (`idCategories`),
  CONSTRAINT `FK_8D2C3E2360E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_8D2C3E23B8075882` FOREIGN KEY (`idCategories`) REFERENCES `ca_categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_categories`
--

LOCK TABLES `co_contact_categories` WRITE;
/*!40000 ALTER TABLE `co_contact_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_contact_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_emails`
--

DROP TABLE IF EXISTS `co_contact_emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_emails` (
  `idContacts` int(11) NOT NULL,
  `idEmails` int(11) NOT NULL,
  PRIMARY KEY (`idContacts`,`idEmails`),
  KEY `IDX_8982963160E33F28` (`idContacts`),
  KEY `IDX_898296312F9040C8` (`idEmails`),
  CONSTRAINT `FK_898296312F9040C8` FOREIGN KEY (`idEmails`) REFERENCES `co_emails` (`id`),
  CONSTRAINT `FK_8982963160E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_emails`
--

LOCK TABLES `co_contact_emails` WRITE;
/*!40000 ALTER TABLE `co_contact_emails` DISABLE KEYS */;
INSERT INTO `co_contact_emails` VALUES (1,1),(4,2);
/*!40000 ALTER TABLE `co_contact_emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_faxes`
--

DROP TABLE IF EXISTS `co_contact_faxes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_faxes` (
  `idContacts` int(11) NOT NULL,
  `idFaxes` int(11) NOT NULL,
  PRIMARY KEY (`idContacts`,`idFaxes`),
  KEY `IDX_61EBBEA260E33F28` (`idContacts`),
  KEY `IDX_61EBBEA2CF6A2007` (`idFaxes`),
  CONSTRAINT `FK_61EBBEA260E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`),
  CONSTRAINT `FK_61EBBEA2CF6A2007` FOREIGN KEY (`idFaxes`) REFERENCES `co_faxes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_faxes`
--

LOCK TABLES `co_contact_faxes` WRITE;
/*!40000 ALTER TABLE `co_contact_faxes` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_contact_faxes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_locales`
--

DROP TABLE IF EXISTS `co_contact_locales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_locales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `locale` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idContacts` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_31E5672760E33F28` (`idContacts`),
  CONSTRAINT `FK_31E5672760E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_locales`
--

LOCK TABLES `co_contact_locales` WRITE;
/*!40000 ALTER TABLE `co_contact_locales` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_contact_locales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_medias`
--

DROP TABLE IF EXISTS `co_contact_medias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_medias` (
  `idContacts` int(11) NOT NULL,
  `idMedias` int(11) NOT NULL,
  PRIMARY KEY (`idContacts`,`idMedias`),
  KEY `IDX_D7D1D1E260E33F28` (`idContacts`),
  KEY `IDX_D7D1D1E271C3071B` (`idMedias`),
  CONSTRAINT `FK_D7D1D1E260E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_D7D1D1E271C3071B` FOREIGN KEY (`idMedias`) REFERENCES `me_media` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_medias`
--

LOCK TABLES `co_contact_medias` WRITE;
/*!40000 ALTER TABLE `co_contact_medias` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_contact_medias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_notes`
--

DROP TABLE IF EXISTS `co_contact_notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_notes` (
  `idContacts` int(11) NOT NULL,
  `idNotes` int(11) NOT NULL,
  PRIMARY KEY (`idContacts`,`idNotes`),
  KEY `IDX_B85E7B3460E33F28` (`idContacts`),
  KEY `IDX_B85E7B3416DFE591` (`idNotes`),
  CONSTRAINT `FK_B85E7B3416DFE591` FOREIGN KEY (`idNotes`) REFERENCES `co_notes` (`id`),
  CONSTRAINT `FK_B85E7B3460E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_notes`
--

LOCK TABLES `co_contact_notes` WRITE;
/*!40000 ALTER TABLE `co_contact_notes` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_contact_notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_phones`
--

DROP TABLE IF EXISTS `co_contact_phones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_phones` (
  `idContacts` int(11) NOT NULL,
  `idPhones` int(11) NOT NULL,
  PRIMARY KEY (`idContacts`,`idPhones`),
  KEY `IDX_262B509660E33F28` (`idContacts`),
  KEY `IDX_262B50968039866F` (`idPhones`),
  CONSTRAINT `FK_262B509660E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`),
  CONSTRAINT `FK_262B50968039866F` FOREIGN KEY (`idPhones`) REFERENCES `co_phones` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_phones`
--

LOCK TABLES `co_contact_phones` WRITE;
/*!40000 ALTER TABLE `co_contact_phones` DISABLE KEYS */;
INSERT INTO `co_contact_phones` VALUES (1,1);
/*!40000 ALTER TABLE `co_contact_phones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_social_media_profiles`
--

DROP TABLE IF EXISTS `co_contact_social_media_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_social_media_profiles` (
  `idContacts` int(11) NOT NULL,
  `idSocialMediaProfiles` int(11) NOT NULL,
  PRIMARY KEY (`idContacts`,`idSocialMediaProfiles`),
  KEY `IDX_74FF4CC060E33F28` (`idContacts`),
  KEY `IDX_74FF4CC0573F8344` (`idSocialMediaProfiles`),
  CONSTRAINT `FK_74FF4CC0573F8344` FOREIGN KEY (`idSocialMediaProfiles`) REFERENCES `co_social_media_profiles` (`id`),
  CONSTRAINT `FK_74FF4CC060E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_social_media_profiles`
--

LOCK TABLES `co_contact_social_media_profiles` WRITE;
/*!40000 ALTER TABLE `co_contact_social_media_profiles` DISABLE KEYS */;
INSERT INTO `co_contact_social_media_profiles` VALUES (1,1),(1,2);
/*!40000 ALTER TABLE `co_contact_social_media_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_tags`
--

DROP TABLE IF EXISTS `co_contact_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_tags` (
  `idContacts` int(11) NOT NULL,
  `idTags` int(11) NOT NULL,
  PRIMARY KEY (`idContacts`,`idTags`),
  KEY `IDX_4CB5255060E33F28` (`idContacts`),
  KEY `IDX_4CB525501C41CAB8` (`idTags`),
  CONSTRAINT `FK_4CB525501C41CAB8` FOREIGN KEY (`idTags`) REFERENCES `ta_tags` (`id`),
  CONSTRAINT `FK_4CB5255060E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_tags`
--

LOCK TABLES `co_contact_tags` WRITE;
/*!40000 ALTER TABLE `co_contact_tags` DISABLE KEYS */;
INSERT INTO `co_contact_tags` VALUES (4,1),(4,2),(4,3),(4,4),(4,5),(4,6),(4,7),(4,8),(4,9);
/*!40000 ALTER TABLE `co_contact_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_titles`
--

DROP TABLE IF EXISTS `co_contact_titles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_titles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_4463FC02B36786B` (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_titles`
--

LOCK TABLES `co_contact_titles` WRITE;
/*!40000 ALTER TABLE `co_contact_titles` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_contact_titles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contact_urls`
--

DROP TABLE IF EXISTS `co_contact_urls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contact_urls` (
  `idContacts` int(11) NOT NULL,
  `idUrls` int(11) NOT NULL,
  PRIMARY KEY (`idContacts`,`idUrls`),
  KEY `IDX_99D86D760E33F28` (`idContacts`),
  KEY `IDX_99D86D75969693F` (`idUrls`),
  CONSTRAINT `FK_99D86D75969693F` FOREIGN KEY (`idUrls`) REFERENCES `co_urls` (`id`),
  CONSTRAINT `FK_99D86D760E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contact_urls`
--

LOCK TABLES `co_contact_urls` WRITE;
/*!40000 ALTER TABLE `co_contact_urls` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_contact_urls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_contacts`
--

DROP TABLE IF EXISTS `co_contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar` int(11) DEFAULT NULL,
  `firstName` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `middleName` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastName` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` date DEFAULT NULL,
  `salutation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `formOfAddress` int(11) DEFAULT NULL,
  `newsletter` tinyint(1) DEFAULT NULL,
  `gender` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mainEmail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mainPhone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mainFax` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mainUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idTitles` int(11) DEFAULT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_79D45A95A254E939` (`idTitles`),
  KEY `IDX_79D45A951677722F` (`avatar`),
  KEY `IDX_79D45A95DBF11E1D` (`idUsersCreator`),
  KEY `IDX_79D45A9530D07CD5` (`idUsersChanger`),
  KEY `IDX_79D45A952392A156` (`firstName`),
  KEY `IDX_79D45A9591161A88` (`lastName`),
  CONSTRAINT `FK_79D45A951677722F` FOREIGN KEY (`avatar`) REFERENCES `me_media` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_79D45A9530D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_79D45A95A254E939` FOREIGN KEY (`idTitles`) REFERENCES `co_contact_titles` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_79D45A95DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contacts`
--

LOCK TABLES `co_contacts` WRITE;
/*!40000 ALTER TABLE `co_contacts` DISABLE KEYS */;
INSERT INTO `co_contacts` VALUES (1,132,'Roland',NULL,'Golla',NULL,'PHP-Trainer',0,NULL,NULL,'Leidenschaftlicher PHP-Trainer und Speaker für Softwarequalität. Als Gründer von Never Code Alone fordert er \"Arbeitsschutz in der IT\"','rolandgolla@gmail.com','017624747727',NULL,NULL,'2019-01-07 09:33:49','2020-01-16 22:37:29',NULL,NULL,1),(2,NULL,'admin',NULL,'admin',NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2019-03-13 12:46:19','2019-03-13 12:46:19',NULL,NULL,NULL),(3,NULL,'Susanne',NULL,'Witteler',NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2019-06-26 08:18:55','2019-06-26 08:18:55',NULL,1,1),(4,145,'Antony',NULL,'Konstantinidis',NULL,'JavaScript Coach & Consultant',0,NULL,NULL,NULL,'ak@digitalessence.de',NULL,NULL,NULL,'2020-02-05 21:41:58','2020-02-19 08:26:39',NULL,1,4);
/*!40000 ALTER TABLE `co_contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_email_types`
--

DROP TABLE IF EXISTS `co_email_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_email_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_email_types`
--

LOCK TABLES `co_email_types` WRITE;
/*!40000 ALTER TABLE `co_email_types` DISABLE KEYS */;
INSERT INTO `co_email_types` VALUES (1,'email.work'),(2,'email.home');
/*!40000 ALTER TABLE `co_email_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_emails`
--

DROP TABLE IF EXISTS `co_emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_emails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idEmailTypes` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_A2F2CB77D816E840` (`idEmailTypes`),
  KEY `IDX_A2F2CB77E7927C74` (`email`),
  CONSTRAINT `FK_A2F2CB77D816E840` FOREIGN KEY (`idEmailTypes`) REFERENCES `co_email_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_emails`
--

LOCK TABLES `co_emails` WRITE;
/*!40000 ALTER TABLE `co_emails` DISABLE KEYS */;
INSERT INTO `co_emails` VALUES (1,'rolandgolla@gmail.com',1),(2,'ak@digitalessence.de',1);
/*!40000 ALTER TABLE `co_emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_fax_types`
--

DROP TABLE IF EXISTS `co_fax_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_fax_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_fax_types`
--

LOCK TABLES `co_fax_types` WRITE;
/*!40000 ALTER TABLE `co_fax_types` DISABLE KEYS */;
INSERT INTO `co_fax_types` VALUES (1,'fax.work'),(2,'fax.home');
/*!40000 ALTER TABLE `co_fax_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_faxes`
--

DROP TABLE IF EXISTS `co_faxes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_faxes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fax` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idFaxTypes` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_A5EC6A18B466C5DA` (`idFaxTypes`),
  CONSTRAINT `FK_A5EC6A18B466C5DA` FOREIGN KEY (`idFaxTypes`) REFERENCES `co_fax_types` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_faxes`
--

LOCK TABLES `co_faxes` WRITE;
/*!40000 ALTER TABLE `co_faxes` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_faxes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_notes`
--

DROP TABLE IF EXISTS `co_notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_notes`
--

LOCK TABLES `co_notes` WRITE;
/*!40000 ALTER TABLE `co_notes` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_phone_types`
--

DROP TABLE IF EXISTS `co_phone_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_phone_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_phone_types`
--

LOCK TABLES `co_phone_types` WRITE;
/*!40000 ALTER TABLE `co_phone_types` DISABLE KEYS */;
INSERT INTO `co_phone_types` VALUES (1,'phone.work'),(2,'phone.home'),(3,'phone.mobile');
/*!40000 ALTER TABLE `co_phone_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_phones`
--

DROP TABLE IF EXISTS `co_phones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_phones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idPhoneTypes` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_D5B0DD0A4249AD7` (`idPhoneTypes`),
  CONSTRAINT `FK_D5B0DD0A4249AD7` FOREIGN KEY (`idPhoneTypes`) REFERENCES `co_phone_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_phones`
--

LOCK TABLES `co_phones` WRITE;
/*!40000 ALTER TABLE `co_phones` DISABLE KEYS */;
INSERT INTO `co_phones` VALUES (1,'017624747727',1);
/*!40000 ALTER TABLE `co_phones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_positions`
--

DROP TABLE IF EXISTS `co_positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_positions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `position` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_9FBC367E462CE4F5` (`position`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_positions`
--

LOCK TABLES `co_positions` WRITE;
/*!40000 ALTER TABLE `co_positions` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_social_media_profile_types`
--

DROP TABLE IF EXISTS `co_social_media_profile_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_social_media_profile_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_social_media_profile_types`
--

LOCK TABLES `co_social_media_profile_types` WRITE;
/*!40000 ALTER TABLE `co_social_media_profile_types` DISABLE KEYS */;
INSERT INTO `co_social_media_profile_types` VALUES (1,'Facebook'),(2,'Twitter'),(3,'Instagram');
/*!40000 ALTER TABLE `co_social_media_profile_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_social_media_profiles`
--

DROP TABLE IF EXISTS `co_social_media_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_social_media_profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idSocialMediaTypes` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_DF585BFBB5BEA95F` (`idSocialMediaTypes`),
  CONSTRAINT `FK_DF585BFBB5BEA95F` FOREIGN KEY (`idSocialMediaTypes`) REFERENCES `co_social_media_profile_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_social_media_profiles`
--

LOCK TABLES `co_social_media_profiles` WRITE;
/*!40000 ALTER TABLE `co_social_media_profiles` DISABLE KEYS */;
INSERT INTO `co_social_media_profiles` VALUES (1,'https://www.facebook.com/roland.golla',1),(2,'https://twitter.com/nevercodealone',2);
/*!40000 ALTER TABLE `co_social_media_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_url_types`
--

DROP TABLE IF EXISTS `co_url_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_url_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_url_types`
--

LOCK TABLES `co_url_types` WRITE;
/*!40000 ALTER TABLE `co_url_types` DISABLE KEYS */;
INSERT INTO `co_url_types` VALUES (1,'url.work'),(2,'url.home');
/*!40000 ALTER TABLE `co_url_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_urls`
--

DROP TABLE IF EXISTS `co_urls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_urls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idUrlTypes` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_6F03842E882335CC` (`idUrlTypes`),
  CONSTRAINT `FK_6F03842E882335CC` FOREIGN KEY (`idUrlTypes`) REFERENCES `co_url_types` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_urls`
--

LOCK TABLES `co_urls` WRITE;
/*!40000 ALTER TABLE `co_urls` DISABLE KEYS */;
/*!40000 ALTER TABLE `co_urls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ext_translations`
--

DROP TABLE IF EXISTS `ext_translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ext_translations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `locale` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `object_class` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `field` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foreign_key` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `lookup_unique_idx` (`locale`,`object_class`,`field`,`foreign_key`),
  KEY `translations_lookup_idx` (`locale`,`object_class`,`foreign_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ext_translations`
--

LOCK TABLES `ext_translations` WRITE;
/*!40000 ALTER TABLE `ext_translations` DISABLE KEYS */;
/*!40000 ALTER TABLE `ext_translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fo_dynamics`
--

DROP TABLE IF EXISTS `fo_dynamics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fo_dynamics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `typeId` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `webspaceKey` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `typeName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `salutation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fax` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `function` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `textarea` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attachment` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `checkbox` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `checkboxMultiple` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dropdown` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dropdownMultiple` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `radioButtons` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `data` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `formId` int(11) DEFAULT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_EC8AF0309E50CC11` (`formId`),
  KEY `IDX_EC8AF030DBF11E1D` (`idUsersCreator`),
  KEY `IDX_EC8AF03030D07CD5` (`idUsersChanger`),
  CONSTRAINT `FK_EC8AF03030D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_EC8AF0309E50CC11` FOREIGN KEY (`formId`) REFERENCES `fo_forms` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_EC8AF030DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fo_dynamics`
--

LOCK TABLES `fo_dynamics` WRITE;
/*!40000 ALTER TABLE `fo_dynamics` DISABLE KEYS */;
/*!40000 ALTER TABLE `fo_dynamics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fo_form_field_translations`
--

DROP TABLE IF EXISTS `fo_form_field_translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fo_form_field_translations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `placeholder` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `defaultValue` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shortTitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idFormFields` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_D3E6716F2C2B00B` (`idFormFields`),
  CONSTRAINT `FK_D3E6716F2C2B00B` FOREIGN KEY (`idFormFields`) REFERENCES `fo_form_fields` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fo_form_field_translations`
--

LOCK TABLES `fo_form_field_translations` WRITE;
/*!40000 ALTER TABLE `fo_form_field_translations` DISABLE KEYS */;
/*!40000 ALTER TABLE `fo_form_field_translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fo_form_fields`
--

DROP TABLE IF EXISTS `fo_form_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fo_form_fields` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keyName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `orderNumber` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `width` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `required` tinyint(1) NOT NULL,
  `defaultLocale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idForms` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_D544F184EAFB58EA6773D512` (`idForms`,`keyName`),
  KEY `IDX_D544F184EAFB58EA` (`idForms`),
  CONSTRAINT `FK_D544F184EAFB58EA` FOREIGN KEY (`idForms`) REFERENCES `fo_forms` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fo_form_fields`
--

LOCK TABLES `fo_form_fields` WRITE;
/*!40000 ALTER TABLE `fo_form_fields` DISABLE KEYS */;
/*!40000 ALTER TABLE `fo_form_fields` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fo_form_translation_receivers`
--

DROP TABLE IF EXISTS `fo_form_translation_receivers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fo_form_translation_receivers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idFormTranslations` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_E57BDF29F4EA7C89` (`idFormTranslations`),
  CONSTRAINT `FK_E57BDF29F4EA7C89` FOREIGN KEY (`idFormTranslations`) REFERENCES `fo_form_translations` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fo_form_translation_receivers`
--

LOCK TABLES `fo_form_translation_receivers` WRITE;
/*!40000 ALTER TABLE `fo_form_translation_receivers` DISABLE KEYS */;
/*!40000 ALTER TABLE `fo_form_translation_receivers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fo_form_translations`
--

DROP TABLE IF EXISTS `fo_form_translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fo_form_translations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fromEmail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fromName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `toEmail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `toName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mailText` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `submitLabel` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `successText` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sendAttachments` tinyint(1) NOT NULL DEFAULT 0,
  `deactivateNotifyMails` tinyint(1) NOT NULL DEFAULT 0,
  `deactivateCustomerMails` tinyint(1) NOT NULL DEFAULT 0,
  `replyTo` tinyint(1) NOT NULL DEFAULT 0,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idForms` int(11) NOT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_8BAF12FFEAFB58EA` (`idForms`),
  KEY `IDX_8BAF12FFDBF11E1D` (`idUsersCreator`),
  KEY `IDX_8BAF12FF30D07CD5` (`idUsersChanger`),
  CONSTRAINT `FK_8BAF12FF30D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_8BAF12FFDBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_8BAF12FFEAFB58EA` FOREIGN KEY (`idForms`) REFERENCES `fo_forms` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fo_form_translations`
--

LOCK TABLES `fo_form_translations` WRITE;
/*!40000 ALTER TABLE `fo_form_translations` DISABLE KEYS */;
/*!40000 ALTER TABLE `fo_form_translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fo_forms`
--

DROP TABLE IF EXISTS `fo_forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fo_forms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `defaultLocale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fo_forms`
--

LOCK TABLES `fo_forms` WRITE;
/*!40000 ALTER TABLE `fo_forms` DISABLE KEYS */;
/*!40000 ALTER TABLE `fo_forms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_collection_meta`
--

DROP TABLE IF EXISTS `me_collection_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_collection_meta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCollections` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_F8D5E71693782C96` (`idCollections`),
  KEY `IDX_F8D5E7162B36786B` (`title`),
  KEY `IDX_F8D5E7164180C698` (`locale`),
  CONSTRAINT `FK_F8D5E71693782C96` FOREIGN KEY (`idCollections`) REFERENCES `me_collections` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_collection_meta`
--

LOCK TABLES `me_collection_meta` WRITE;
/*!40000 ALTER TABLE `me_collection_meta` DISABLE KEYS */;
INSERT INTO `me_collection_meta` VALUES (1,'System',NULL,'en',1),(2,'Sulu media',NULL,'en',2),(3,'Sulu Medien',NULL,'de',2),(4,'Preview images',NULL,'en',3),(5,'Vorschaubilder',NULL,'de',3),(6,'Sulu contacts',NULL,'en',4),(7,'Sulu Kontakte',NULL,'de',4),(8,'People',NULL,'en',5),(9,'Personen',NULL,'de',5),(10,'Organizations',NULL,'en',6),(11,'Organisationen',NULL,'de',6),(12,'startseite',NULL,'en',7),(13,'NCAEvents',NULL,'en',8),(14,'Otto',NULL,'en',9),(15,'Influnecer DB',NULL,'en',10),(16,'logo',NULL,'en',11),(17,'accenture-interactive',NULL,'en',12),(19,'Employer Branding',NULL,'en',14),(20,'nca',NULL,'en',15),(21,'HOF',NULL,'en',16),(22,'ncapaas',NULL,'en',17),(23,'Apollo ReactJS',NULL,'en',18),(24,'tarent',NULL,'en',19),(25,'NCAMeetup',NULL,'en',20),(26,'2020',NULL,'en',21),(27,'maerz-duisburg',NULL,'en',22),(28,'Roland',NULL,'en',23),(29,'PHP-Training',NULL,'en',24),(30,'Trainer',NULL,'en',25),(31,'Sulu forms',NULL,'en',26),(32,'Sulu Formulare',NULL,'de',26),(33,'Attachments',NULL,'en',27),(34,'Anhänge',NULL,'de',27);
/*!40000 ALTER TABLE `me_collection_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_collection_types`
--

DROP TABLE IF EXISTS `me_collection_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_collection_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `collection_type_key` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_FB78DFB179078378` (`collection_type_key`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_collection_types`
--

LOCK TABLES `me_collection_types` WRITE;
/*!40000 ALTER TABLE `me_collection_types` DISABLE KEYS */;
INSERT INTO `me_collection_types` VALUES (1,'Default','collection.default',NULL),(2,'System Collections','collection.system',NULL);
/*!40000 ALTER TABLE `me_collection_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_collections`
--

DROP TABLE IF EXISTS `me_collections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_collections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `style` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `depth` int(11) NOT NULL,
  `collection_key` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idCollectionTypes` int(11) NOT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  `idCollectionsMetaDefault` int(11) DEFAULT NULL,
  `idCollectionsParent` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_F0D4887221904CD` (`collection_key`),
  UNIQUE KEY `UNIQ_F0D4887CFA3F467` (`idCollectionsMetaDefault`),
  KEY `IDX_F0D4887E67924D6` (`idCollectionTypes`),
  KEY `IDX_F0D4887DBF11E1D` (`idUsersCreator`),
  KEY `IDX_F0D488730D07CD5` (`idUsersChanger`),
  KEY `IDX_F0D4887A4F2DCF8` (`idCollectionsParent`),
  CONSTRAINT `FK_F0D488730D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_F0D4887A4F2DCF8` FOREIGN KEY (`idCollectionsParent`) REFERENCES `me_collections` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_F0D4887CFA3F467` FOREIGN KEY (`idCollectionsMetaDefault`) REFERENCES `me_collection_meta` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_F0D4887DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_F0D4887E67924D6` FOREIGN KEY (`idCollectionTypes`) REFERENCES `me_collection_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_collections`
--

LOCK TABLES `me_collections` WRITE;
/*!40000 ALTER TABLE `me_collections` DISABLE KEYS */;
INSERT INTO `me_collections` VALUES (1,NULL,1,16,0,'system_collections','2019-01-07 09:33:50','2019-01-07 09:33:50',2,NULL,NULL,1,NULL),(2,NULL,2,5,1,'sulu_media','2019-01-07 09:33:50','2020-03-20 17:22:46',2,NULL,1,2,1),(3,NULL,3,4,2,'sulu_media.preview_image','2019-01-07 09:33:50','2020-03-20 17:22:46',2,NULL,1,4,2),(4,NULL,6,11,1,'sulu_contact','2019-01-07 09:33:50','2020-03-20 17:22:46',2,NULL,1,6,1),(5,NULL,7,8,2,'sulu_contact.contact','2019-01-07 09:33:50','2020-03-20 17:22:46',2,NULL,1,8,4),(6,NULL,9,10,2,'sulu_contact.account','2019-01-07 09:33:50','2020-03-20 17:22:46',2,NULL,1,10,4),(7,NULL,17,18,0,NULL,'2019-01-07 14:21:01','2019-01-07 14:21:01',1,1,1,12,NULL),(8,NULL,19,38,0,NULL,'2019-01-08 10:56:32','2019-01-08 10:56:32',1,1,1,13,NULL),(9,NULL,20,21,1,NULL,'2019-01-08 10:56:49','2019-01-08 10:56:49',1,1,1,14,8),(10,NULL,22,23,1,NULL,'2019-01-09 14:07:48','2019-01-09 14:07:48',1,1,1,15,8),(11,NULL,39,40,0,NULL,'2019-01-22 00:17:02','2019-01-22 00:17:02',1,1,1,16,NULL),(12,NULL,24,25,1,NULL,'2019-01-26 00:01:30','2019-01-26 00:01:30',1,1,1,17,8),(14,NULL,41,42,0,NULL,'2019-01-31 21:59:56','2019-01-31 21:59:56',1,1,1,19,NULL),(15,NULL,43,44,0,NULL,'2019-02-02 14:40:12','2019-02-02 14:40:12',1,1,1,20,NULL),(16,NULL,26,27,1,NULL,'2019-02-03 22:18:56','2019-02-03 22:18:56',1,1,1,21,8),(17,NULL,45,46,0,NULL,'2019-02-21 20:58:14','2019-02-21 20:58:14',1,1,1,22,NULL),(18,NULL,28,29,1,NULL,'2019-02-26 08:40:36','2019-02-26 08:40:36',1,1,1,23,8),(19,NULL,30,31,1,NULL,'2019-03-17 23:38:55','2019-03-17 23:38:55',1,1,1,24,8),(20,NULL,32,33,1,NULL,'2019-11-20 18:15:13','2019-11-20 18:15:13',1,1,1,25,8),(21,NULL,34,37,1,NULL,'2019-12-02 14:24:39','2019-12-02 14:24:39',1,1,1,26,8),(22,NULL,35,36,2,NULL,'2019-12-02 14:24:58','2019-12-02 14:24:58',1,1,1,27,21),(23,NULL,47,48,0,NULL,'2020-01-16 19:41:46','2020-01-16 19:41:46',1,1,1,28,NULL),(24,NULL,49,50,0,NULL,'2020-01-16 21:04:29','2020-01-16 21:04:29',1,1,1,29,NULL),(25,NULL,51,52,0,NULL,'2020-02-05 22:22:24','2020-02-05 22:22:24',1,1,1,30,NULL),(26,NULL,12,15,1,'sulu_form','2020-03-20 17:22:46','2020-03-20 17:22:46',2,1,1,31,1),(27,NULL,13,14,2,'sulu_form.attachments','2020-03-20 17:22:46','2020-03-20 17:22:46',2,1,1,33,26);
/*!40000 ALTER TABLE `me_collections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_file_version_categories`
--

DROP TABLE IF EXISTS `me_file_version_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_file_version_categories` (
  `idFileVersions` int(11) NOT NULL,
  `idCategories` int(11) NOT NULL,
  PRIMARY KEY (`idFileVersions`,`idCategories`),
  KEY `IDX_2F1E17D0911ADE33` (`idFileVersions`),
  KEY `IDX_2F1E17D0B8075882` (`idCategories`),
  CONSTRAINT `FK_2F1E17D0911ADE33` FOREIGN KEY (`idFileVersions`) REFERENCES `me_file_versions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_2F1E17D0B8075882` FOREIGN KEY (`idCategories`) REFERENCES `ca_categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_file_version_categories`
--

LOCK TABLES `me_file_version_categories` WRITE;
/*!40000 ALTER TABLE `me_file_version_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `me_file_version_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_file_version_content_languages`
--

DROP TABLE IF EXISTS `me_file_version_content_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_file_version_content_languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idFileVersions` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_F3FD652C911ADE33` (`idFileVersions`),
  CONSTRAINT `FK_F3FD652C911ADE33` FOREIGN KEY (`idFileVersions`) REFERENCES `me_file_versions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_file_version_content_languages`
--

LOCK TABLES `me_file_version_content_languages` WRITE;
/*!40000 ALTER TABLE `me_file_version_content_languages` DISABLE KEYS */;
/*!40000 ALTER TABLE `me_file_version_content_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_file_version_meta`
--

DROP TABLE IF EXISTS `me_file_version_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_file_version_meta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `copyright` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `credits` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idFileVersions` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_AD44B0AD911ADE33` (`idFileVersions`),
  KEY `IDX_AD44B0AD2B36786B` (`title`),
  KEY `IDX_AD44B0AD4180C698` (`locale`),
  CONSTRAINT `FK_AD44B0AD911ADE33` FOREIGN KEY (`idFileVersions`) REFERENCES `me_file_versions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=179 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_file_version_meta`
--

LOCK TABLES `me_file_version_meta` WRITE;
/*!40000 ALTER TABLE `me_file_version_meta` DISABLE KEYS */;
INSERT INTO `me_file_version_meta` VALUES (1,'adventure-climb-cloud-1009949',NULL,NULL,NULL,'en',1),(2,'duisburger-tafel-emma',NULL,NULL,NULL,'en',2),(3,'never-code-alone-event',NULL,NULL,NULL,'en',3),(4,'skyline-hh',NULL,NULL,NULL,'en',4),(5,'otto-jobs-ncaevent',NULL,NULL,NULL,'en',5),(6,'frederik-sebastian',NULL,NULL,NULL,'en',6),(7,'scala-markus-jura',NULL,NULL,NULL,'en',7),(8,'otto-logo',NULL,NULL,NULL,'en',8),(9,'influencer-db-logo',NULL,NULL,NULL,'en',9),(10,'nca-event-influencer-db',NULL,NULL,NULL,'en',10),(11,'ncaevent-influencerdb',NULL,NULL,NULL,'en',11),(12,'nca-logo',NULL,NULL,NULL,'en',12),(13,'duisburg-never-code-alone',NULL,NULL,NULL,'en',13),(16,'dortmund-602962',NULL,NULL,NULL,'en',16),(17,'NCAEvent-java-live-coding',NULL,NULL,NULL,'en',17),(18,'dortmund-java',NULL,NULL,NULL,'en',18),(19,'Jens-Eickmeyer-java-speaker',NULL,NULL,NULL,'en',19),(20,'anne-accenture',NULL,NULL,NULL,'en',20),(21,'ma-tee',NULL,NULL,NULL,'en',21),(22,'never-code-alone-event',NULL,NULL,NULL,'en',22),(23,'florian-breiter-wysiwyg',NULL,NULL,NULL,'en',23),(24,'sebastian-hofmann-check24',NULL,NULL,NULL,'en',24),(25,'technology',NULL,NULL,NULL,'en',25),(26,'employer-branding',NULL,NULL,NULL,'en',26),(27,'nca-team',NULL,NULL,NULL,'en',27),(28,'sven-wagner-art-director',NULL,NULL,NULL,'en',28),(29,'birte-gernhardt-video',NULL,NULL,NULL,'en',29),(30,'roland-golla-never-code-alone',NULL,NULL,NULL,'en',30),(31,'Sven-Kubiak',NULL,NULL,NULL,'en',31),(32,'jochen-block',NULL,NULL,NULL,'en',32),(33,'nca-team',NULL,NULL,NULL,'en',33),(34,'lisa-accenture',NULL,NULL,NULL,'en',34),(35,'#NCASocial',NULL,NULL,NULL,'en',35),(36,'never-code-alone-roboter-org',NULL,NULL,NULL,'en',36),(37,'Accenture-Interactive',NULL,NULL,NULL,'en',37),(38,'nca-hall-of-fame-event-bg',NULL,NULL,NULL,'en',38),(39,'Jens-Eickmeyer-java-speaker',NULL,NULL,NULL,'en',39),(40,'jochen-block',NULL,NULL,NULL,'en',40),(41,'lisa-accenture',NULL,NULL,NULL,'en',41),(42,'Sven-Kubiak',NULL,NULL,NULL,'en',42),(43,'ncaevent-facebook',NULL,NULL,NULL,'en',43),(44,'xing-nca-event',NULL,NULL,NULL,'en',44),(45,'mark-java-developer',NULL,NULL,NULL,'en',45),(46,'ncapaas-startup',NULL,NULL,NULL,'en',46),(47,'pipeline-as-a-service',NULL,NULL,NULL,'en',47),(48,'nca-paas',NULL,NULL,NULL,'en',48),(49,'nca-sachverstand',NULL,NULL,NULL,'en',49),(50,'software-qualitaet',NULL,NULL,NULL,'en',50),(51,'roland-golla',NULL,NULL,NULL,'en',51),(52,'daniel-siepmann-typo3',NULL,NULL,NULL,'en',52),(53,'andreas-mautz',NULL,NULL,NULL,'en',53),(54,'Apollo-Logo',NULL,NULL,NULL,'en',54),(55,'apollo-event-header',NULL,NULL,NULL,'en',55),(56,'ralf-poppendoerfer',NULL,NULL,NULL,'en',56),(57,'Schwabach',NULL,NULL,NULL,'en',57),(58,'kitz-do',NULL,NULL,NULL,'en',58),(59,'reactjs-apollo',NULL,NULL,NULL,'en',59),(60,'marcel',NULL,NULL,NULL,'en',60),(61,'toby',NULL,NULL,NULL,'en',61),(62,'Stefan-Thema',NULL,NULL,NULL,'en',62),(63,'Lisa-Schwarz',NULL,NULL,NULL,'en',63),(64,'Norbert-Dronsz',NULL,NULL,NULL,'en',64),(65,'Priyanka-Senior-Software-Developer',NULL,NULL,NULL,'en',65),(66,'Markus-Spiller',NULL,NULL,NULL,'en',66),(78,'Roman-Klauser',NULL,NULL,NULL,'en',78),(79,'soziale-projekte',NULL,NULL,NULL,'en',79),(80,'social-media-marketing-slide',NULL,NULL,NULL,'en',80),(81,'community-event',NULL,NULL,NULL,'en',81),(82,'zufriedene-kunden',NULL,NULL,NULL,'en',82),(83,'ruediger-keller',NULL,NULL,NULL,'en',83),(84,'Apollo-Logo',NULL,NULL,NULL,'en',84),(85,'Accenture-Interactive',NULL,NULL,NULL,'en',85),(86,'reactjs-ncaevent-apollo',NULL,NULL,NULL,'en',86),(87,'christian-speckner',NULL,NULL,NULL,'en',87),(88,'tarent',NULL,NULL,NULL,'en',88),(89,'tarent-office',NULL,NULL,NULL,'en',89),(90,'Tim-Steffens',NULL,NULL,NULL,'en',90),(91,'Christian-Iwanzik',NULL,NULL,NULL,'en',91),(92,'java-ncaevent-bonn',NULL,NULL,NULL,'en',92),(93,'Christian-Iwanzik',NULL,NULL,NULL,'en',93),(94,'Raphaela-Grygo-Java-HR',NULL,NULL,NULL,'en',94),(95,'11080819_725383047574391_3517674912574652421_o',NULL,NULL,NULL,'en',95),(96,'bus_2',NULL,NULL,NULL,'en',96),(97,'nca-shuttle',NULL,NULL,NULL,'en',97),(98,'familienundaltenhilfe',NULL,NULL,NULL,'en',98),(99,'Sandra-Parsick-Java',NULL,NULL,NULL,'en',99),(100,'wibke-nagel',NULL,NULL,NULL,'en',100),(101,'sternenbruecke-hamburg',NULL,NULL,NULL,'en',101),(102,'sebastian-schroeder-scala-workshop',NULL,NULL,NULL,'en',102),(103,'scala-thomas-hackbarth',NULL,NULL,NULL,'en',103),(104,'skyline-hh',NULL,NULL,NULL,'en',104),(105,'frederik-otto-hamburg-entwickler',NULL,NULL,NULL,'en',105),(106,'Anfahrtsskizze',NULL,NULL,NULL,'en',106),(107,'matthew-otto-hamburg',NULL,NULL,NULL,'en',107),(108,'Hannah-Wilkens',NULL,NULL,NULL,'en',108),(109,'Michael-Arndt-OTTO',NULL,NULL,NULL,'en',109),(110,'otto-ncaevent-hamburg',NULL,NULL,NULL,'en',110),(111,'markus-jura-scala',NULL,NULL,NULL,'en',111),(112,'martinpelzer',NULL,NULL,NULL,'en',112),(113,'jens-schauder-java',NULL,NULL,NULL,'en',113),(114,'java-lernen',NULL,NULL,NULL,'en',114),(115,'kinderkrebsstiftung-bonn',NULL,NULL,NULL,'en',115),(117,'Daniel_and_Humphrey',NULL,NULL,NULL,'en',117),(118,'Humphrey-Güthaus-SWSQ',NULL,NULL,NULL,'en',118),(119,'Daniel-Sathees-Elmo-SWSQ',NULL,NULL,NULL,'en',119),(120,'java-live-coding-event',NULL,NULL,NULL,'en',120),(121,'Accenture-Interactive',NULL,NULL,NULL,'en',121),(122,'preise',NULL,NULL,NULL,'en',122),(123,'preise',NULL,NULL,NULL,'en',123),(124,'preise',NULL,NULL,NULL,'en',124),(125,'java-live-coding-event',NULL,NULL,NULL,'en',125),(126,'java-lernen',NULL,NULL,NULL,'en',126),(127,'Daniel-Sathees-Elmo-SWSQ',NULL,NULL,NULL,'en',127),(128,'Humphrey-Güthaus-SWSQ',NULL,NULL,NULL,'en',128),(129,'Daniel_and_Humphrey',NULL,NULL,NULL,'en',129),(130,'python-speaker-christoph-gnip',NULL,NULL,NULL,'en',130),(131,'andre-cimander',NULL,NULL,NULL,'en',131),(132,'bernard-sonnenschein',NULL,NULL,NULL,'en',132),(133,'python-codecentric-mark-keinhoerster',NULL,NULL,NULL,'en',133),(134,'david-bosse',NULL,NULL,NULL,'en',134),(135,'backpack-blonde-hair-blur-214574',NULL,NULL,NULL,'en',135),(136,'symfony-ncaevent-duisburg',NULL,NULL,NULL,'en',136),(137,'NCA-Logo-neu',NULL,NULL,NULL,'en',137),(138,'access-close-up-code-1089438',NULL,NULL,NULL,'en',138),(139,'nca-sachverstand',NULL,NULL,NULL,'en',139),(140,'Forest-Gump-Roland-Golla',NULL,NULL,NULL,'en',140),(141,'rambo-roland-golla',NULL,NULL,NULL,'en',141),(142,'Forest-Gump-roland-golla',NULL,NULL,NULL,'en',142),(143,'kill-bill-roland-golla',NULL,NULL,NULL,'en',143),(144,'php-training-codeception',NULL,NULL,NULL,'en',144),(145,'kill-bill-roland-golla',NULL,NULL,NULL,'en',145),(146,'php-training-codeception',NULL,NULL,NULL,'en',146),(147,'Sandra-Parsick-Java',NULL,NULL,NULL,'en',147),(148,'jens-schauder-java',NULL,NULL,NULL,'en',148),(149,'martinpelzer',NULL,NULL,NULL,'en',149),(150,'kinderkrebsstiftung-bonn',NULL,NULL,NULL,'en',150),(151,'bernard-sonnenschein',NULL,NULL,NULL,'en',151),(152,'stefan-adolf',NULL,NULL,NULL,'en',152),(153,'nca-speaker',NULL,NULL,NULL,'en',153),(154,'php-training-phpstan-captain-hook',NULL,NULL,NULL,'en',154),(155,'Sulu-CMS-PHP-Schulung-Symfony-Framework',NULL,NULL,NULL,'en',155),(156,'Sulu-CMS-PHP-Schulung-Symfony-Framework',NULL,NULL,NULL,'en',156),(157,'Sulu-CMS-PHP-Schulung-Symfony-Framework',NULL,NULL,NULL,'en',157),(158,'Sulu-CMS-PHP-Schulung-Symfony-Framework',NULL,NULL,NULL,'en',158),(159,'php-trainer-roland-golla',NULL,NULL,NULL,'en',159),(160,'nca-shuttle',NULL,NULL,NULL,'en',160),(161,'NCA-Shuttle-neutral',NULL,NULL,NULL,'en',161),(162,'nca-kinderbetreuung',NULL,NULL,NULL,'en',162),(163,'alexander-m-turek-symfony-speaker',NULL,NULL,NULL,'en',163),(164,'sebastian-feldmann-speaker',NULL,NULL,NULL,'en',164),(165,'angular-schulung',NULL,NULL,NULL,'en',165),(166,'Alexander-Turek-Symfony-Speaker',NULL,NULL,NULL,'en',166),(167,'CV',NULL,NULL,NULL,'en',167),(168,'CV',NULL,NULL,NULL,'en',168),(169,'php-backend-developer-jobs-Meike-Hasbargen',NULL,NULL,NULL,'en',169),(170,'rafal_wesolowski-symfony-speaker',NULL,NULL,NULL,'en',170),(171,'hacker-4031973_1920',NULL,NULL,NULL,'en',171),(172,'ncaevent-online',NULL,NULL,NULL,'en',172),(175,'remote-php-training-schulung',NULL,NULL,NULL,'en',175),(176,'remote-php-training-schulung',NULL,NULL,NULL,'en',176),(177,'remote-php-training-schulung',NULL,NULL,NULL,'en',177);
/*!40000 ALTER TABLE `me_file_version_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_file_version_publish_languages`
--

DROP TABLE IF EXISTS `me_file_version_publish_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_file_version_publish_languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idFileVersions` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_195DAB3C911ADE33` (`idFileVersions`),
  CONSTRAINT `FK_195DAB3C911ADE33` FOREIGN KEY (`idFileVersions`) REFERENCES `me_file_versions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_file_version_publish_languages`
--

LOCK TABLES `me_file_version_publish_languages` WRITE;
/*!40000 ALTER TABLE `me_file_version_publish_languages` DISABLE KEYS */;
/*!40000 ALTER TABLE `me_file_version_publish_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_file_version_tags`
--

DROP TABLE IF EXISTS `me_file_version_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_file_version_tags` (
  `idFileVersions` int(11) NOT NULL,
  `idTags` int(11) NOT NULL,
  PRIMARY KEY (`idFileVersions`,`idTags`),
  KEY `IDX_150A30BE911ADE33` (`idFileVersions`),
  KEY `IDX_150A30BE1C41CAB8` (`idTags`),
  CONSTRAINT `FK_150A30BE1C41CAB8` FOREIGN KEY (`idTags`) REFERENCES `ta_tags` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_150A30BE911ADE33` FOREIGN KEY (`idFileVersions`) REFERENCES `me_file_versions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_file_version_tags`
--

LOCK TABLES `me_file_version_tags` WRITE;
/*!40000 ALTER TABLE `me_file_version_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `me_file_version_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_file_versions`
--

DROP TABLE IF EXISTS `me_file_versions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_file_versions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `version` int(11) NOT NULL,
  `subVersion` int(11) NOT NULL DEFAULT 0,
  `size` int(11) NOT NULL,
  `downloadCounter` int(11) NOT NULL DEFAULT 0,
  `storageOptions` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mimeType` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `properties` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `focusPointX` int(11) DEFAULT NULL,
  `focusPointY` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idFileVersionsMetaDefault` int(11) DEFAULT NULL,
  `idFiles` int(11) DEFAULT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_7B6E89456B801096` (`idFileVersionsMetaDefault`),
  KEY `IDX_7B6E894511F10344` (`idFiles`),
  KEY `IDX_7B6E8945DBF11E1D` (`idUsersCreator`),
  KEY `IDX_7B6E894530D07CD5` (`idUsersChanger`),
  KEY `IDX_7B6E8945D8F2A087` (`mimeType`),
  KEY `IDX_7B6E8945F7C0246A` (`size`),
  KEY `IDX_7B6E8945BF1CD3C3` (`version`),
  KEY `IDX_7B6E89455E237E06` (`name`),
  CONSTRAINT `FK_7B6E894511F10344` FOREIGN KEY (`idFiles`) REFERENCES `me_files` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_7B6E894530D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_7B6E89456B801096` FOREIGN KEY (`idFileVersionsMetaDefault`) REFERENCES `me_file_version_meta` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_7B6E8945DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=179 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_file_versions`
--

LOCK TABLES `me_file_versions` WRITE;
/*!40000 ALTER TABLE `me_file_versions` DISABLE KEYS */;
INSERT INTO `me_file_versions` VALUES (1,'adventure-climb-cloud-1009949.jpg',1,0,1108185,1,'{\"segment\":\"05\",\"fileName\":\"adventure-climb-cloud-1009949.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-07 14:21:14','2019-01-07 14:21:14',1,1,1,1),(2,'duisburger-tafel-emma.jpg',1,0,198690,0,'{\"segment\":\"05\",\"fileName\":\"duisburger-tafel-emma.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-07 15:20:21','2019-01-07 15:20:21',2,2,1,1),(3,'never-code-alone-event.jpg',1,0,112575,0,'{\"segment\":\"05\",\"fileName\":\"never-code-alone-event.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-07 16:58:20','2019-01-07 16:58:20',3,3,1,1),(4,'skyline-hh.jpg',1,0,148404,45,'{\"segment\":\"10\",\"fileName\":\"skyline-hh.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-08 10:58:10','2019-01-08 10:58:10',4,4,1,1),(5,'otto-jobs-ncaevent.jpg',1,0,23385,48,'{\"segment\":\"02\",\"fileName\":\"otto-jobs-ncaevent.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-08 10:58:10','2019-01-08 10:58:10',5,5,1,1),(6,'frederik-sebastian.jpg',1,0,37618,17,'{\"segment\":\"04\",\"fileName\":\"frederik-sebastian.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-08 14:17:03','2019-01-08 14:17:03',6,6,1,1),(7,'scala-markus-jura.jpg',1,0,25854,22,'{\"segment\":\"04\",\"fileName\":\"scala-markus-jura.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-09 09:15:13','2019-01-09 09:15:13',7,7,1,1),(8,'otto-logo.png',1,0,37499,245,'{\"segment\":\"09\",\"fileName\":\"otto-logo.png\"}','image/png','{}',NULL,NULL,'2019-01-09 10:24:13','2019-01-09 10:24:13',8,8,1,1),(9,'influencer-db-logo.png',1,0,6322,54,'{\"segment\":\"10\",\"fileName\":\"influencer-db-logo.png\"}','image/png','{}',NULL,NULL,'2019-01-09 14:07:54','2019-01-09 14:07:54',9,9,1,1),(10,'nca-event-influencer-db.jpg',1,0,91344,9,'{\"segment\":\"10\",\"fileName\":\"nca-event-influencer-db.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-09 14:11:32','2019-01-09 14:11:32',10,10,1,1),(11,'ncaevent-influencerdb.jpg',1,0,21033,52,'{\"segment\":\"03\",\"fileName\":\"ncaevent-influencerdb.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-09 14:13:20','2019-01-09 14:13:20',11,11,1,1),(12,'nca-logo.png',1,0,5504,63,'{\"segment\":\"01\",\"fileName\":\"nca-logo.png\"}','image/png','{}',NULL,NULL,'2019-01-22 00:17:31','2019-01-22 00:17:31',12,12,1,1),(13,'duisburg-never-code-alone.jpeg',1,0,74530,66,'{\"segment\":\"02\",\"fileName\":\"duisburg-never-code-alone.jpeg\"}','image/jpeg','{}',NULL,NULL,'2019-01-22 00:19:29','2019-01-22 00:19:29',13,13,1,1),(16,'dortmund-602962.jpg',1,0,114007,40,'{\"segment\":\"09\",\"fileName\":\"dortmund-602962.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-26 00:13:58','2019-01-26 00:13:58',16,16,1,1),(17,'NCAEvent-java-live-coding.jpg',1,0,249806,428,'{\"segment\":\"03\",\"fileName\":\"ncaevent-java-live-coding.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-27 21:28:01','2019-01-27 21:28:01',17,17,1,1),(18,'dortmund-java.jpg',1,0,739783,0,'{\"segment\":\"04\",\"fileName\":\"dortmund-java.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-27 23:05:20','2019-01-27 23:05:20',18,18,1,1),(19,'Jens-Eickmeyer-java-speaker.jpg',1,0,94910,5,'{\"segment\":\"10\",\"fileName\":\"jens-eickmeyer-java-speaker.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-28 11:20:53','2019-01-28 11:20:53',19,19,1,1),(20,'anne-accenture.jpg',1,0,185128,0,'{\"segment\":\"05\",\"fileName\":\"anne-accenture.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-29 23:00:10','2019-01-29 23:00:10',20,20,1,1),(21,'ma-tee.jpg',1,0,110661,0,'{\"segment\":\"09\",\"fileName\":\"ma-tee.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-30 22:45:00','2019-01-30 22:45:00',21,21,1,1),(22,'never-code-alone-event.jpg',1,0,112575,0,'{\"segment\":\"04\",\"fileName\":\"never-code-alone-event.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-31 22:00:12','2019-01-31 22:00:12',22,22,1,1),(23,'florian-breiter-wysiwyg.jpg',1,0,2929,0,'{\"segment\":\"07\",\"fileName\":\"florian-breiter-wysiwyg.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-31 22:31:00','2019-01-31 22:31:00',23,23,1,1),(24,'sebastian-hofmann-check24.jpg',1,0,4447,0,'{\"segment\":\"05\",\"fileName\":\"sebastian-hofmann-check24.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 07:29:40','2019-02-01 07:29:40',24,24,1,1),(25,'technology.jpg',1,0,79778,0,'{\"segment\":\"10\",\"fileName\":\"technology.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 10:48:27','2019-02-01 10:48:27',25,25,1,1),(26,'employer-branding.jpg',1,0,86920,0,'{\"segment\":\"04\",\"fileName\":\"employer-branding.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 11:54:17','2019-02-01 11:54:17',26,26,1,1),(27,'nca-team.jpg',1,0,55504,1,'{\"segment\":\"01\",\"fileName\":\"nca-team.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 16:04:15','2019-02-01 16:04:15',27,27,1,1),(28,'sven-wagner-art-director.jpg',1,0,56582,0,'{\"segment\":\"07\",\"fileName\":\"sven-wagner-art-director.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 16:04:17','2019-02-01 16:04:17',28,28,1,1),(29,'birte-gernhardt-video.jpg',1,0,59263,0,'{\"segment\":\"09\",\"fileName\":\"birte-gernhardt-video.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 16:04:18','2019-02-01 16:04:18',29,29,1,1),(30,'roland-golla-never-code-alone.jpg',1,0,54465,0,'{\"segment\":\"10\",\"fileName\":\"roland-golla-never-code-alone.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 16:04:20','2019-02-01 16:04:20',30,30,1,1),(31,'Sven-Kubiak.jpg',1,0,125678,11,'{\"segment\":\"02\",\"fileName\":\"sven-kubiak.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 19:29:38','2019-02-01 19:29:38',31,31,1,1),(32,'jochen-block.jpg',1,0,225184,9,'{\"segment\":\"09\",\"fileName\":\"jochen-block.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 19:58:34','2019-02-01 19:58:34',32,32,1,1),(33,'nca-team.jpg',2,0,171948,11,'{\"segment\":\"01\",\"fileName\":\"nca-team-1.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 20:24:09','2019-02-01 20:24:09',33,27,1,1),(34,'lisa-accenture.jpg',1,0,42661,0,'{\"segment\":\"09\",\"fileName\":\"lisa-accenture.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 20:51:00','2019-02-01 20:51:00',34,33,1,1),(35,'#NCASocial.jpg',1,0,258181,0,'{\"segment\":\"05\",\"fileName\":\"%23ncasocial.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-01 21:12:22','2019-02-01 21:12:22',35,34,1,1),(36,'never-code-alone-roboter-org.jpg',1,0,619832,21,'{\"segment\":\"01\",\"fileName\":\"never-code-alone-roboter-org.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-02 14:41:04','2019-02-02 14:41:04',36,35,1,1),(37,'Accenture-Interactive.png',1,0,62447,54,'{\"segment\":\"04\",\"fileName\":\"accenture-interactive.png\"}','image/png','{}',NULL,NULL,'2019-02-02 20:27:37','2019-02-02 20:27:37',37,36,1,1),(38,'nca-hall-of-fame-event-bg.jpg',1,0,100859,0,'{\"segment\":\"09\",\"fileName\":\"nca-hall-of-fame-event-bg.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-03 22:19:15','2019-02-03 22:19:15',38,37,1,1),(39,'Jens-Eickmeyer-java-speaker.jpg',2,0,88337,0,'{\"segment\":\"10\",\"fileName\":\"jens-eickmeyer-java-speaker-1.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-04 21:19:10','2019-02-04 21:19:10',39,19,1,1),(40,'32-jochen-block.jpg',2,0,24710,0,'{\"segment\":\"09\",\"fileName\":\"32-jochen-block.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-04 21:52:52','2019-02-04 21:52:52',40,32,1,1),(41,'Lisa-Bewersdorff.jpg',2,0,459547,0,'{\"segment\":\"09\",\"fileName\":\"lisa-bewersdorff.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-04 22:38:23','2019-02-04 22:38:23',41,33,1,1),(42,'Sven Kubiak.jpeg',2,0,16957,0,'{\"segment\":\"02\",\"fileName\":\"sven-kubiak.jpeg\"}','image/jpeg','{}',NULL,NULL,'2019-02-06 21:12:50','2019-02-06 21:12:50',42,31,1,1),(43,'ncaevent-facebook.jpg',1,0,47642,16,'{\"segment\":\"02\",\"fileName\":\"ncaevent-facebook.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-16 23:33:22','2019-02-16 23:33:22',43,38,1,1),(44,'xing-nca-event.jpg',1,0,51644,15,'{\"segment\":\"04\",\"fileName\":\"xing-nca-event.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-16 23:33:22','2019-02-16 23:33:22',44,39,1,1),(45,'mark-java-developer.jpg',1,0,220756,0,'{\"segment\":\"09\",\"fileName\":\"mark-java-developer.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-19 11:36:19','2019-02-19 11:36:19',45,40,1,1),(46,'ncapaas-startup.jpg',1,0,33314,0,'{\"segment\":\"01\",\"fileName\":\"ncapaas-startup.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-21 20:58:26','2019-02-21 20:58:26',46,41,1,1),(47,'pipeline-as-a-service.jpg',1,0,43855,0,'{\"segment\":\"04\",\"fileName\":\"pipeline-as-a-service.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-21 20:58:27','2019-02-21 20:58:27',47,42,1,1),(48,'nca-paas.jpg',1,0,79130,0,'{\"segment\":\"05\",\"fileName\":\"nca-paas.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-23 21:00:41','2019-02-23 21:00:41',48,43,1,1),(49,'nca-sachverstand.jpg',1,0,61864,0,'{\"segment\":\"01\",\"fileName\":\"nca-sachverstand.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-23 22:13:04','2019-02-23 22:13:04',49,44,1,1),(50,'software-qualitaet.jpg',1,0,54451,0,'{\"segment\":\"02\",\"fileName\":\"software-qualitaet.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-23 23:17:22','2019-02-23 23:17:22',50,45,1,1),(51,'roland-golla.jpg',1,0,56995,0,'{\"segment\":\"03\",\"fileName\":\"roland-golla.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-23 23:25:51','2019-02-23 23:25:51',51,46,1,1),(52,'daniel-siepmann-typo3.jpg',1,0,64870,0,'{\"segment\":\"01\",\"fileName\":\"daniel-siepmann-typo3.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-24 00:04:46','2019-02-24 00:04:46',52,47,1,1),(53,'andreas-mautz.jpg',1,0,56914,0,'{\"segment\":\"10\",\"fileName\":\"andreas-mautz.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-24 00:04:49','2019-02-24 00:04:49',53,48,1,1),(54,'Apollo-Logo.png',1,0,48670,121,'{\"segment\":\"05\",\"fileName\":\"apollo-logo.png\"}','image/png','{}',NULL,NULL,'2019-02-26 08:41:04','2019-02-26 08:41:04',54,49,1,1),(55,'apollo-event-header.jpg',1,0,110460,1,'{\"segment\":\"09\",\"fileName\":\"apollo-event-header.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-26 09:16:03','2019-02-26 09:16:03',55,50,1,1),(56,'ralf-poppendoerfer.jpg',1,0,385873,0,'{\"segment\":\"01\",\"fileName\":\"ralf-poppendoerfer.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-26 21:40:42','2019-02-26 21:40:42',56,51,1,1),(57,'Schwabach.jpg',1,0,213165,0,'{\"segment\":\"09\",\"fileName\":\"schwabach.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-26 22:37:04','2019-02-26 22:37:04',57,52,1,1),(58,'kitz-do.jpg',1,0,653579,0,'{\"segment\":\"06\",\"fileName\":\"kitz-do.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-26 23:07:39','2019-02-26 23:07:39',58,53,1,1),(59,'reactjs-apollo.jpg',1,0,123722,152,'{\"segment\":\"01\",\"fileName\":\"reactjs-apollo.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-02-26 23:52:27','2019-02-26 23:52:27',59,54,1,1),(60,'marcel.jpg',1,0,158289,0,'{\"segment\":\"09\",\"fileName\":\"marcel.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-02 21:12:36','2019-03-02 21:12:36',60,55,1,1),(61,'toby.jpg',1,0,174644,0,'{\"segment\":\"10\",\"fileName\":\"toby.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-02 21:12:55','2019-03-02 21:12:55',61,56,1,1),(62,'Stefan-Thema.jpg',1,0,187676,0,'{\"segment\":\"09\",\"fileName\":\"stefan-thema.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-02 22:42:18','2019-03-02 22:42:18',62,57,1,1),(63,'Lisa-Schwarz.jpg',1,0,183799,0,'{\"segment\":\"04\",\"fileName\":\"lisa-schwarz.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-02 22:45:08','2019-03-02 22:45:08',63,58,1,1),(64,'Norbert-Dronsz.jpeg',1,0,33277,0,'{\"segment\":\"02\",\"fileName\":\"norbert-dronsz.jpeg\"}','image/jpeg','{}',NULL,NULL,'2019-03-02 22:49:07','2019-03-02 22:49:07',64,59,1,1),(65,'Priyanka-Senior-Software-Developer.jpg',1,0,295752,0,'{\"segment\":\"05\",\"fileName\":\"priyanka-senior-software-developer.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-10 14:49:28','2019-03-10 14:49:28',65,60,1,1),(66,'Markus-Spiller.jpg',1,0,150865,0,'{\"segment\":\"04\",\"fileName\":\"markus-spiller.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-10 15:12:34','2019-03-10 15:12:34',66,61,1,1),(78,'Roman-Klauser.jpg',1,0,134553,0,'{\"segment\":\"09\",\"fileName\":\"roman-klauser.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-13 14:54:50','2019-03-13 14:54:50',78,73,1,1),(79,'soziale-projekte.jpg',1,0,98141,0,'{\"segment\":\"07\",\"fileName\":\"soziale-projekte.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-13 15:11:59','2019-03-13 15:11:59',79,74,1,1),(80,'social-media-marketing-slide.jpg',1,0,105894,0,'{\"segment\":\"03\",\"fileName\":\"social-media-marketing-slide.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-13 15:11:59','2019-03-13 15:11:59',80,75,1,1),(81,'community-event.jpg',1,0,100620,0,'{\"segment\":\"04\",\"fileName\":\"community-event-1.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-13 15:12:00','2019-03-13 15:12:00',81,76,1,1),(82,'zufriedene-kunden.jpg',1,0,101780,0,'{\"segment\":\"09\",\"fileName\":\"zufriedene-kunden.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-13 15:17:15','2019-03-13 15:17:15',82,77,1,1),(83,'ruediger-keller.jpg',1,0,83368,0,'{\"segment\":\"03\",\"fileName\":\"ruediger-keller.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-13 15:22:59','2019-03-13 15:22:59',83,78,1,1),(84,'Apollo-Logo.jpg',1,0,27353,1419,'{\"segment\":\"01\",\"fileName\":\"apollo-logo.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-13 15:24:17','2019-03-13 15:24:17',84,79,1,1),(85,'Accenture-Interactive.jpg',1,0,8386,913,'{\"segment\":\"05\",\"fileName\":\"accenture-interactive.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-13 15:26:30','2019-03-13 15:26:30',85,80,1,1),(86,'reactjs-ncaevent-apollo.jpg',1,0,128515,21,'{\"segment\":\"04\",\"fileName\":\"reactjs-ncaevent-apollo.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-13 20:30:02','2019-03-13 20:30:02',86,81,1,1),(87,'christian-speckner.jpg',1,0,164691,0,'{\"segment\":\"05\",\"fileName\":\"christian-speckner.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-17 19:40:33','2019-03-17 19:40:33',87,82,1,1),(88,'tarent.jpg',1,0,6359,321,'{\"segment\":\"07\",\"fileName\":\"tarent.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-17 23:43:42','2019-03-17 23:43:42',88,83,1,1),(89,'tarent-office.jpg',1,0,213669,0,'{\"segment\":\"04\",\"fileName\":\"tarent-office.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-17 23:48:47','2019-03-17 23:48:47',89,84,1,1),(90,'Tim-Steffens.jpg',1,0,83895,3,'{\"segment\":\"07\",\"fileName\":\"tim-steffens.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-17 23:57:33','2019-03-17 23:57:33',90,85,1,1),(91,'Christian-Iwanzik.jpg',1,0,112732,0,'{\"segment\":\"05\",\"fileName\":\"christian-iwanzik.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-18 00:04:02','2019-03-18 00:04:02',91,86,1,1),(92,'java-ncaevent-bonn.jpg',1,0,1098887,10,'{\"segment\":\"03\",\"fileName\":\"java-ncaevent-bonn.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-18 00:17:15','2019-03-18 00:17:15',92,87,1,1),(93,'Christian-Iwanzik-Developer.jpg',2,0,333677,0,'{\"segment\":\"05\",\"fileName\":\"christian-iwanzik-developer.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-18 07:58:41','2019-03-18 07:58:41',93,86,1,1),(94,'Raphaela-Grygo-Java-HR.jpg',1,0,287890,0,'{\"segment\":\"08\",\"fileName\":\"raphaela-grygo-java-hr.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-03-18 12:05:09','2019-03-18 12:05:09',94,88,1,1),(95,'11080819_725383047574391_3517674912574652421_o.jpg',1,0,462233,0,'{\"segment\":\"09\",\"fileName\":\"11080819_725383047574391_3517674912574652421_o.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-04-10 13:56:46','2019-04-10 13:56:46',95,89,1,1),(96,'bus_2.jpg',1,1,95370,1,'{\"segment\":\"02\",\"fileName\":\"bus_2.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-04-23 15:00:44','2019-04-23 15:06:52',96,90,1,1),(97,'nca-shuttle.jpg',1,0,94545,0,'{\"segment\":\"08\",\"fileName\":\"nca-shuttle.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-04-23 15:00:45','2019-04-23 15:00:45',97,91,1,1),(98,'familienundaltenhilfe.jpg',1,0,285758,0,'{\"segment\":\"04\",\"fileName\":\"familienundaltenhilfe.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-04-28 13:44:06','2019-04-28 13:44:06',98,92,1,1),(99,'Sandra-Parsick-Java.jpg',1,1,942167,1,'{\"segment\":\"06\",\"fileName\":\"sandra-parsick-java.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-04-28 14:22:25','2019-04-28 14:22:44',99,93,1,1),(100,'wibke-nagel.jpg',1,0,27601,0,'{\"segment\":\"01\",\"fileName\":\"wibke-nagel.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-04 09:08:25','2019-05-04 09:08:25',100,94,1,1),(101,'sternenbruecke-hamburg.jpg',1,0,47979,0,'{\"segment\":\"02\",\"fileName\":\"sternenbruecke-hamburg.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-04 09:08:26','2019-05-04 09:08:26',101,95,1,1),(102,'sebastian-schroeder-scala-workshop.jpg',1,0,49363,0,'{\"segment\":\"09\",\"fileName\":\"sebastian-schroeder-scala-workshop.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-04 09:08:26','2019-05-04 09:08:26',102,96,1,1),(103,'scala-thomas-hackbarth.jpg',1,0,15538,0,'{\"segment\":\"08\",\"fileName\":\"scala-thomas-hackbarth.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-04 09:08:26','2019-05-04 09:08:26',103,97,1,1),(104,'skyline-hh.jpg',1,0,148404,0,'{\"segment\":\"08\",\"fileName\":\"skyline-hh.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-04 09:08:26','2019-05-04 09:08:26',104,98,1,1),(105,'frederik-otto-hamburg-entwickler.jpg',1,0,59946,0,'{\"segment\":\"03\",\"fileName\":\"frederik-otto-hamburg-entwickler.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-04 09:08:37','2019-05-04 09:08:37',105,99,1,1),(106,'Anfahrtsskizze.pdf',1,0,211598,0,'{\"segment\":\"08\",\"fileName\":\"anfahrtsskizze.pdf\"}','application/pdf','{}',NULL,NULL,'2019-05-04 09:08:41','2019-05-04 09:08:41',106,100,1,1),(107,'matthew-otto-hamburg.jpg',1,0,63719,0,'{\"segment\":\"01\",\"fileName\":\"matthew-otto-hamburg.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-04 09:08:52','2019-05-04 09:08:52',107,101,1,1),(108,'Hannah-Wilkens.jpg',1,0,20914,0,'{\"segment\":\"08\",\"fileName\":\"hannah-wilkens.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-04 09:08:52','2019-05-04 09:08:52',108,102,1,1),(109,'Michael-Arndt-OTTO.jpg',1,0,50834,0,'{\"segment\":\"02\",\"fileName\":\"michael-arndt-otto.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-04 09:08:52','2019-05-04 09:08:52',109,103,1,1),(110,'otto-ncaevent-hamburg.png',1,0,767709,0,'{\"segment\":\"02\",\"fileName\":\"otto-ncaevent-hamburg.png\"}','image/png','{}',NULL,NULL,'2019-05-04 09:08:56','2019-05-04 09:08:56',110,104,1,1),(111,'markus-jura-scala.jpg',1,0,213774,0,'{\"segment\":\"03\",\"fileName\":\"markus-jura-scala.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-05 21:30:57','2019-05-05 21:30:57',111,105,1,1),(112,'martinpelzer.png',1,0,1454277,0,'{\"segment\":\"10\",\"fileName\":\"martinpelzer.png\"}','image/png','{}',NULL,NULL,'2019-05-06 11:12:11','2019-05-06 11:12:11',112,106,1,1),(113,'jens-schauder-java.jpg',1,0,445745,0,'{\"segment\":\"10\",\"fileName\":\"jens-schauder-java.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-13 20:42:22','2019-05-13 20:42:22',113,107,1,1),(114,'java-lernen.jpg',1,0,617213,0,'{\"segment\":\"02\",\"fileName\":\"java-lernen.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-15 21:15:25','2019-05-15 21:15:25',114,108,1,1),(115,'kinderkrebsstiftung-bonn.jpg',1,0,129965,0,'{\"segment\":\"08\",\"fileName\":\"kinderkrebsstiftung-bonn.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-05-16 18:53:45','2019-05-16 18:53:45',115,109,1,1),(117,'Daniel_and_Humphrey.jpg',1,0,102636,0,'{\"segment\":\"07\",\"fileName\":\"daniel_and_humphrey.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-07-04 14:55:39','2019-07-04 14:55:39',117,111,3,3),(118,'Humphrey-Güthaus-SWSQ.jpg',1,0,78518,0,'{\"segment\":\"03\",\"fileName\":\"humphrey-guethaus-swsq.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-07-04 14:56:29','2019-07-04 14:56:29',118,112,3,3),(119,'Daniel-Sathees-Elmo-SWSQ.jpg',1,0,65044,0,'{\"segment\":\"03\",\"fileName\":\"daniel-sathees-elmo-swsq.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-07-04 14:56:29','2019-07-04 14:56:29',119,113,3,3),(120,'java-live-coding-event.jpg',1,0,289320,0,'{\"segment\":\"07\",\"fileName\":\"java-live-coding-event.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-08-05 12:06:26','2019-08-05 12:06:26',120,114,1,1),(121,'Accenture-Interactive.jpg',1,0,8386,1,'{\"segment\":\"07\",\"fileName\":\"accenture-interactive.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-08-05 12:07:15','2019-08-05 12:07:15',121,115,1,1),(122,'preise.jpg',1,0,270770,1,'{\"segment\":\"02\",\"fileName\":\"preise.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-08-28 07:58:17','2019-08-28 07:58:17',122,116,1,1),(123,'preise.jpg',2,0,68914,1,'{\"segment\":\"02\",\"fileName\":\"preise-1.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-08-28 08:08:14','2019-08-28 08:08:14',123,116,1,1),(124,'preise.jpg',3,0,72794,1,'{\"segment\":\"02\",\"fileName\":\"preise-2.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-08-28 08:11:22','2019-08-28 08:11:22',124,116,1,1),(125,'java-live-coding-event.jpg',2,1,289320,1,'{\"segment\":\"07\",\"fileName\":\"java-live-coding-event.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-08-28 12:21:28','2019-12-02 14:28:48',125,114,1,1),(126,'java-lernen.jpg',2,0,225174,0,'{\"segment\":\"02\",\"fileName\":\"java-lernen.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-08-28 12:32:29','2019-08-28 12:32:29',126,108,1,1),(127,'Daniel-Sathees-Elmo-SWSQ.jpg',2,0,65044,0,'{\"segment\":\"03\",\"fileName\":\"daniel-sathees-elmo-swsq.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-08-28 14:22:39','2019-08-28 14:22:39',127,113,3,3),(128,'Humphrey-Güthaus-SWSQ.jpg',2,0,78518,0,'{\"segment\":\"03\",\"fileName\":\"humphrey-guethaus-swsq.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-08-28 14:23:18','2019-08-28 14:23:18',128,112,3,3),(129,'Daniel_and_Humphrey.jpg',2,0,102636,0,'{\"segment\":\"07\",\"fileName\":\"daniel_and_humphrey.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-08-28 14:23:35','2019-08-28 14:23:35',129,111,3,3),(130,'python-speaker-christoph-gnip.png',1,0,80500,0,'{\"segment\":\"01\",\"fileName\":\"python-speaker-christoph-gnip.png\"}','image/png','{}',NULL,NULL,'2019-11-19 23:44:07','2019-11-19 23:44:07',130,117,1,1),(131,'andre-cimander.jpg',1,0,15565,0,'{\"segment\":\"01\",\"fileName\":\"andre-cimander.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-11-19 23:47:26','2019-11-19 23:47:26',131,118,1,1),(132,'bernard-sonnenschein.jpg',1,0,57728,1,'{\"segment\":\"01\",\"fileName\":\"bernard-sonnenschein.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-11-19 23:56:20','2019-11-19 23:56:20',132,119,1,1),(133,'python-codecentric-mark-keinhoerster.png',1,0,30003,0,'{\"segment\":\"10\",\"fileName\":\"python-codecentric-mark-keinhoerster.png\"}','image/png','{}',NULL,NULL,'2019-11-19 23:56:20','2019-11-19 23:56:20',133,120,1,1),(134,'david-bosse.jpg',1,0,6307,0,'{\"segment\":\"05\",\"fileName\":\"david-bosse.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-11-19 23:56:21','2019-11-19 23:56:21',134,121,1,1),(135,'backpack-blonde-hair-blur-214574.jpg',1,0,3571891,0,'{\"segment\":\"07\",\"fileName\":\"backpack-blonde-hair-blur-214574.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-11-20 18:15:31','2019-11-20 18:15:31',135,122,1,1),(136,'symfony-ncaevent-duisburg.jpg',1,0,127812,1,'{\"segment\":\"09\",\"fileName\":\"symfony-ncaevent-duisburg.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-12-02 14:25:14','2019-12-02 14:25:14',136,123,1,1),(137,'NCA-Logo-neu.jpg',1,0,28618,0,'{\"segment\":\"04\",\"fileName\":\"nca-logo-neu.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-12-08 19:43:14','2019-12-08 19:43:14',137,124,1,1),(138,'access-close-up-code-1089438.jpg',1,0,5118188,0,'{\"segment\":\"01\",\"fileName\":\"access-close-up-code-1089438.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-12-08 19:47:30','2019-12-08 19:47:30',138,125,1,1),(139,'nca-sachverstand.jpg',1,0,601668,0,'{\"segment\":\"06\",\"fileName\":\"nca-sachverstand.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-12 23:47:51','2020-01-12 23:47:51',139,126,1,1),(140,'Forest-Gump-Roland-Golla.jpg',1,0,76390,0,'{\"segment\":\"08\",\"fileName\":\"forest-gump-roland-golla.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-16 19:51:46','2020-01-16 19:51:46',140,127,1,1),(141,'rambo-roland-golla.jpg',1,0,131554,0,'{\"segment\":\"06\",\"fileName\":\"rambo-roland-golla.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-16 19:51:47','2020-01-16 19:51:47',141,128,1,1),(142,'Forest-Gump-roland-golla.jpg',1,0,76516,0,'{\"segment\":\"05\",\"fileName\":\"forest-gump-roland-golla.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-16 19:51:47','2020-01-16 19:51:47',142,129,1,1),(143,'kill-bill-roland-golla.jpg',1,0,156583,0,'{\"segment\":\"03\",\"fileName\":\"kill-bill-roland-golla.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-16 19:51:47','2020-01-16 19:51:47',143,130,1,1),(144,'php-training-codeception.jpg',1,0,121804,0,'{\"segment\":\"07\",\"fileName\":\"php-training-codeception.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-16 21:04:58','2020-01-16 21:04:58',144,131,1,1),(145,'kill-bill-roland-golla.jpg',1,0,156583,0,'{\"segment\":\"06\",\"fileName\":\"kill-bill-roland-golla.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-16 22:23:26','2020-01-16 22:23:26',145,132,1,1),(146,'kurs.jpg',2,0,127439,0,'{\"segment\":\"07\",\"fileName\":\"kurs.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-19 19:16:47','2020-01-19 19:16:47',146,131,1,1),(147,'IMG_0276_V2_001_small.jpg',2,2,942167,1,'{\"segment\":\"06\",\"fileName\":\"img_0276_v2_001_small.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-20 13:55:54','2020-01-20 13:56:14',147,93,1,1),(148,'jens-schauder.jpg',2,1,445745,1,'{\"segment\":\"10\",\"fileName\":\"jens-schauder.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-20 13:57:49','2020-01-20 13:58:04',148,107,1,1),(149,'martinpelzer.jpg',2,1,236020,1,'{\"segment\":\"10\",\"fileName\":\"martinpelzer.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-20 14:00:21','2020-01-20 14:00:52',149,106,1,1),(150,'kinderkrebsstiftung-bonn.jpg',2,0,133613,0,'{\"segment\":\"08\",\"fileName\":\"kinderkrebsstiftung-bonn.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-20 14:06:32','2020-01-20 14:06:32',150,109,1,1),(151,'bernard-sonnenschein.jpg',2,0,242198,2,'{\"segment\":\"01\",\"fileName\":\"bernard-sonnenschein-1.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-20 14:11:17','2020-01-20 14:11:17',151,119,1,1),(152,'stefan-adolf.jpeg',1,0,52344,0,'{\"segment\":\"02\",\"fileName\":\"stefan-adolf.jpeg\"}','image/jpeg','{}',NULL,NULL,'2020-01-20 21:54:38','2020-01-20 21:54:38',152,133,1,1),(153,'nca-speaker.jpg',1,0,180908,0,'{\"segment\":\"04\",\"fileName\":\"nca-speaker.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-20 22:21:13','2020-01-20 22:21:13',153,134,1,1),(154,'php-training-phpstan-captain-hook.jpg',1,0,133397,0,'{\"segment\":\"03\",\"fileName\":\"php-training-phpstan-captain-hook.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-25 13:26:09','2020-01-25 13:26:09',154,135,1,1),(155,'Sulu-CMS-PHP-Schulung-Symfony-Framework.jpg',1,0,77942,0,'{\"segment\":\"01\",\"fileName\":\"sulu-cms-php-schulung-symfony-framework.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-26 02:22:18','2020-01-26 02:22:18',155,136,1,1),(156,'Kopie von Kopie von Kopie von Kopie von sulu cms ddev.jpg',2,0,73241,0,'{\"segment\":\"01\",\"fileName\":\"kopie-von-kopie-von-kopie-von-kopie-von-sulu-cms-ddev.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-26 02:24:06','2020-01-26 02:24:06',156,136,1,1),(157,'Kopie von Kopie von Kopie von Kopie von sulu cms ddev (1).jpg',3,0,73382,0,'{\"segment\":\"01\",\"fileName\":\"kopie-von-kopie-von-kopie-von-kopie-von-sulu-cms-ddev-1.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-26 02:26:03','2020-01-26 02:26:03',157,136,1,1),(158,'Kopie von Kopie von Kopie von Kopie von sulu cms ddev (2).jpg',4,0,74417,0,'{\"segment\":\"01\",\"fileName\":\"kopie-von-kopie-von-kopie-von-kopie-von-sulu-cms-ddev-2.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-26 02:26:54','2020-01-26 02:26:54',158,136,1,1),(159,'php-trainer-roland-golla.jpg',1,0,173518,0,'{\"segment\":\"06\",\"fileName\":\"php-trainer-roland-golla.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-28 09:50:05','2020-01-28 09:50:05',159,137,1,1),(160,'bus_banner_plain.jpg',2,0,71997,0,'{\"segment\":\"08\",\"fileName\":\"bus_banner_plain.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-28 10:08:07','2020-01-28 10:08:07',160,91,1,1),(161,'NCA-Shuttle-neutral.jpg',1,0,78896,0,'{\"segment\":\"09\",\"fileName\":\"nca-shuttle-neutral.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-28 10:08:45','2020-01-28 10:08:45',161,138,1,1),(162,'nca-kinderbetreuung.jpg',1,0,122012,0,'{\"segment\":\"04\",\"fileName\":\"nca-kinderbetreuung.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-01-28 10:24:55','2020-01-28 10:24:55',162,139,1,1),(163,'alexander-m-turek-symfony-speaker.jpg',1,0,169361,0,'{\"segment\":\"07\",\"fileName\":\"alexander-m-turek-symfony-speaker.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-02-04 22:27:10','2020-02-04 22:27:10',163,140,1,1),(164,'sebastian-feldmann-speaker.jpeg',1,0,11378,0,'{\"segment\":\"07\",\"fileName\":\"sebastian-feldmann-speaker.jpeg\"}','image/jpeg','{}',NULL,NULL,'2020-02-04 22:36:34','2020-02-04 22:36:34',164,141,1,1),(165,'angular-schulung.jpg',1,0,121577,0,'{\"segment\":\"04\",\"fileName\":\"angular-schulung.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-02-05 22:40:29','2020-02-05 22:40:29',165,142,1,1),(166,'Alexander-Turek-Symfony-Speaker.png',1,0,98774,0,'{\"segment\":\"08\",\"fileName\":\"alexander-turek-symfony-speaker.png\"}','image/png','{}',NULL,NULL,'2020-02-14 12:47:50','2020-02-14 12:47:50',166,143,1,1),(167,'CV.png',1,0,2052052,0,'{\"segment\":\"02\",\"fileName\":\"cv.png\"}','image/png','{}',NULL,NULL,'2020-02-19 08:23:12','2020-02-19 08:23:12',167,144,4,4),(168,'CV.png',1,0,2052052,0,'{\"segment\":\"05\",\"fileName\":\"cv.png\"}','image/png','{}',NULL,NULL,'2020-02-19 08:24:15','2020-02-19 08:24:15',168,145,4,4),(169,'php-backend-developer-jobs-Meike-Hasbargen.jpg',1,0,352142,0,'{\"segment\":\"07\",\"fileName\":\"php-backend-developer-jobs-meike-hasbargen.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-03-07 00:24:56','2020-03-07 00:24:56',169,146,1,1),(170,'rafal_wesolowski-symfony-speaker.jpg',1,0,32775,0,'{\"segment\":\"03\",\"fileName\":\"rafal_wesolowski-symfony-speaker.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-03-10 12:33:26','2020-03-10 12:33:26',170,147,1,1),(171,'hacker-4031973_1920.jpg',1,1,557313,1,'{\"segment\":\"08\",\"fileName\":\"hacker-4031973_1920.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-03-22 13:27:59','2020-03-25 20:09:31',171,148,1,1),(172,'ncaevent-online.jpg',1,0,63125,0,'{\"segment\":\"03\",\"fileName\":\"ncaevent-online.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-03-22 13:28:02','2020-03-22 13:28:02',172,149,1,1),(175,'remote-php-training-schulung.jpg',1,1,162805,1,'{\"segment\":\"02\",\"fileName\":\"remote-php-training-schulung.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-04-09 22:43:34','2020-04-09 22:43:51',175,151,1,1),(176,'remote-php-training-schulung.jpg',2,1,54358,0,'{\"segment\":\"02\",\"fileName\":\"remote-php-training-schulung-1.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-04-09 22:47:38','2020-04-09 22:47:38',176,151,1,1),(177,'remote-php-training-schulung.jpg',3,1,54602,0,'{\"segment\":\"02\",\"fileName\":\"remote-php-training-schulung-2.jpg\"}','image/jpeg','{}',NULL,NULL,'2020-04-09 22:49:55','2020-04-09 22:49:55',177,151,1,1);
/*!40000 ALTER TABLE `me_file_versions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_files`
--

DROP TABLE IF EXISTS `me_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idMedia` int(11) NOT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_CA8D04277DE8E211` (`idMedia`),
  KEY `IDX_CA8D0427DBF11E1D` (`idUsersCreator`),
  KEY `IDX_CA8D042730D07CD5` (`idUsersChanger`),
  KEY `IDX_CA8D0427BF1CD3C3` (`version`),
  CONSTRAINT `FK_CA8D042730D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_CA8D04277DE8E211` FOREIGN KEY (`idMedia`) REFERENCES `me_media` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_CA8D0427DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_files`
--

LOCK TABLES `me_files` WRITE;
/*!40000 ALTER TABLE `me_files` DISABLE KEYS */;
INSERT INTO `me_files` VALUES (1,1,'2019-01-07 14:21:14','2019-01-07 14:21:14',1,1,1),(2,1,'2019-01-07 15:20:21','2019-01-07 15:20:21',2,1,1),(3,1,'2019-01-07 16:58:20','2019-01-07 16:58:20',3,1,1),(4,1,'2019-01-08 10:58:10','2019-01-08 10:58:10',4,1,1),(5,1,'2019-01-08 10:58:10','2019-01-08 10:58:10',5,1,1),(6,1,'2019-01-08 14:17:03','2019-01-08 14:17:03',6,1,1),(7,1,'2019-01-09 09:15:13','2019-01-09 09:15:13',7,1,1),(8,1,'2019-01-09 10:24:13','2019-01-09 10:24:13',8,1,1),(9,1,'2019-01-09 14:07:54','2019-01-09 14:07:54',9,1,1),(10,1,'2019-01-09 14:11:32','2019-01-09 14:11:32',10,1,1),(11,1,'2019-01-09 14:13:20','2019-01-09 14:13:20',11,1,1),(12,1,'2019-01-22 00:17:31','2019-01-22 00:17:31',12,1,1),(13,1,'2019-01-22 00:19:29','2019-01-22 00:19:29',13,1,1),(16,1,'2019-01-26 00:13:58','2019-01-26 00:13:58',16,1,1),(17,1,'2019-01-27 21:28:01','2019-01-27 21:28:01',17,1,1),(18,1,'2019-01-27 23:05:20','2019-01-27 23:05:20',18,1,1),(19,2,'2019-01-28 11:20:53','2019-02-04 21:19:10',19,1,1),(20,1,'2019-01-29 23:00:10','2019-01-29 23:00:10',20,1,1),(21,1,'2019-01-30 22:45:00','2019-01-30 22:45:00',21,1,1),(22,1,'2019-01-31 22:00:12','2019-01-31 22:00:12',22,1,1),(23,1,'2019-01-31 22:31:00','2019-01-31 22:31:00',23,1,1),(24,1,'2019-02-01 07:29:40','2019-02-01 07:29:40',24,1,1),(25,1,'2019-02-01 10:48:27','2019-02-01 10:48:27',25,1,1),(26,1,'2019-02-01 11:54:17','2019-02-01 11:54:17',26,1,1),(27,2,'2019-02-01 16:04:15','2019-02-01 20:24:10',27,1,1),(28,1,'2019-02-01 16:04:17','2019-02-01 16:04:17',28,1,1),(29,1,'2019-02-01 16:04:18','2019-02-01 16:04:18',29,1,1),(30,1,'2019-02-01 16:04:20','2019-02-01 16:04:20',30,1,1),(31,2,'2019-02-01 19:29:38','2019-02-06 21:12:50',31,1,1),(32,2,'2019-02-01 19:58:34','2019-02-04 21:52:52',32,1,1),(33,2,'2019-02-01 20:51:00','2019-02-04 22:38:24',33,1,1),(34,1,'2019-02-01 21:12:22','2019-02-01 21:12:22',34,1,1),(35,1,'2019-02-02 14:41:04','2019-02-02 14:41:04',35,1,1),(36,1,'2019-02-02 20:27:37','2019-02-02 20:27:37',36,1,1),(37,1,'2019-02-03 22:19:15','2019-02-03 22:19:15',37,1,1),(38,1,'2019-02-16 23:33:22','2019-02-16 23:33:22',38,1,1),(39,1,'2019-02-16 23:33:22','2019-02-16 23:33:22',39,1,1),(40,1,'2019-02-19 11:36:19','2019-02-19 11:36:19',40,1,1),(41,1,'2019-02-21 20:58:26','2019-02-21 20:58:26',41,1,1),(42,1,'2019-02-21 20:58:27','2019-02-21 20:58:27',42,1,1),(43,1,'2019-02-23 21:00:41','2019-02-23 21:00:41',43,1,1),(44,1,'2019-02-23 22:13:04','2019-02-23 22:13:04',44,1,1),(45,1,'2019-02-23 23:17:22','2019-02-23 23:17:22',45,1,1),(46,1,'2019-02-23 23:25:51','2019-02-23 23:25:51',46,1,1),(47,1,'2019-02-24 00:04:46','2019-02-24 00:04:46',47,1,1),(48,1,'2019-02-24 00:04:49','2019-02-24 00:04:49',48,1,1),(49,1,'2019-02-26 08:41:04','2019-02-26 08:41:04',49,1,1),(50,1,'2019-02-26 09:16:03','2019-02-26 09:16:03',50,1,1),(51,1,'2019-02-26 21:40:42','2019-02-26 21:40:42',51,1,1),(52,1,'2019-02-26 22:37:04','2019-02-26 22:37:04',52,1,1),(53,1,'2019-02-26 23:07:39','2019-02-26 23:07:39',53,1,1),(54,1,'2019-02-26 23:52:27','2019-02-26 23:52:27',54,1,1),(55,1,'2019-03-02 21:12:36','2019-03-02 21:12:36',55,1,1),(56,1,'2019-03-02 21:12:55','2019-03-02 21:12:55',56,1,1),(57,1,'2019-03-02 22:42:18','2019-03-02 22:42:18',57,1,1),(58,1,'2019-03-02 22:45:08','2019-03-02 22:45:08',58,1,1),(59,1,'2019-03-02 22:49:07','2019-03-02 22:49:07',59,1,1),(60,1,'2019-03-10 14:49:28','2019-03-10 14:49:28',60,1,1),(61,1,'2019-03-10 15:12:34','2019-03-10 15:12:34',61,1,1),(73,1,'2019-03-13 14:54:50','2019-03-13 14:54:50',73,1,1),(74,1,'2019-03-13 15:11:59','2019-03-13 15:11:59',74,1,1),(75,1,'2019-03-13 15:11:59','2019-03-13 15:11:59',75,1,1),(76,1,'2019-03-13 15:12:00','2019-03-13 15:12:00',76,1,1),(77,1,'2019-03-13 15:17:15','2019-03-13 15:17:15',77,1,1),(78,1,'2019-03-13 15:22:59','2019-03-13 15:22:59',78,1,1),(79,1,'2019-03-13 15:24:17','2019-03-13 15:24:17',79,1,1),(80,1,'2019-03-13 15:26:30','2019-03-13 15:26:30',80,1,1),(81,1,'2019-03-13 20:30:02','2019-03-13 20:30:02',81,1,1),(82,1,'2019-03-17 19:40:33','2019-03-17 19:40:33',82,1,1),(83,1,'2019-03-17 23:43:42','2019-03-17 23:43:42',83,1,1),(84,1,'2019-03-17 23:48:47','2019-03-17 23:48:47',84,1,1),(85,1,'2019-03-17 23:57:33','2019-03-17 23:57:33',85,1,1),(86,2,'2019-03-18 00:04:02','2019-03-18 07:58:41',86,1,1),(87,1,'2019-03-18 00:17:15','2019-03-18 00:17:15',87,1,1),(88,1,'2019-03-18 12:05:09','2019-03-18 12:05:09',88,1,1),(89,1,'2019-04-10 13:56:46','2019-04-10 13:56:46',89,1,1),(90,1,'2019-04-23 15:00:44','2019-04-23 15:00:44',90,1,1),(91,2,'2019-04-23 15:00:45','2020-01-28 10:08:07',91,1,1),(92,1,'2019-04-28 13:44:06','2019-04-28 13:44:06',92,1,1),(93,2,'2019-04-28 14:22:25','2020-01-20 13:55:54',93,1,1),(94,1,'2019-05-04 09:08:25','2019-05-04 09:08:25',94,1,1),(95,1,'2019-05-04 09:08:26','2019-05-04 09:08:26',95,1,1),(96,1,'2019-05-04 09:08:26','2019-05-04 09:08:26',96,1,1),(97,1,'2019-05-04 09:08:26','2019-05-04 09:08:26',97,1,1),(98,1,'2019-05-04 09:08:26','2019-05-04 09:08:26',98,1,1),(99,1,'2019-05-04 09:08:37','2019-05-04 09:08:37',99,1,1),(100,1,'2019-05-04 09:08:41','2019-05-04 09:08:41',100,1,1),(101,1,'2019-05-04 09:08:52','2019-05-04 09:08:52',101,1,1),(102,1,'2019-05-04 09:08:52','2019-05-04 09:08:52',102,1,1),(103,1,'2019-05-04 09:08:52','2019-05-04 09:08:52',103,1,1),(104,1,'2019-05-04 09:08:56','2019-05-04 09:08:56',104,1,1),(105,1,'2019-05-05 21:30:57','2019-05-05 21:30:57',105,1,1),(106,2,'2019-05-06 11:12:11','2020-01-20 14:00:21',106,1,1),(107,2,'2019-05-13 20:42:22','2020-01-20 13:57:49',107,1,1),(108,2,'2019-05-15 21:15:25','2019-08-28 12:32:29',108,1,1),(109,2,'2019-05-16 18:53:45','2020-01-20 14:06:32',109,1,1),(111,2,'2019-07-04 14:55:39','2019-08-28 14:23:36',111,3,3),(112,2,'2019-07-04 14:56:29','2019-08-28 14:23:18',112,3,3),(113,2,'2019-07-04 14:56:29','2019-08-28 14:22:39',113,3,3),(114,2,'2019-08-05 12:06:26','2019-08-28 12:21:28',114,1,1),(115,1,'2019-08-05 12:07:15','2019-08-05 12:07:15',115,1,1),(116,3,'2019-08-28 07:58:17','2019-08-28 08:11:22',116,1,1),(117,1,'2019-11-19 23:44:07','2019-11-19 23:44:07',117,1,1),(118,1,'2019-11-19 23:47:26','2019-11-19 23:47:26',118,1,1),(119,2,'2019-11-19 23:56:20','2020-01-20 14:11:17',119,1,1),(120,1,'2019-11-19 23:56:20','2019-11-19 23:56:20',120,1,1),(121,1,'2019-11-19 23:56:21','2019-11-19 23:56:21',121,1,1),(122,1,'2019-11-20 18:15:31','2019-11-20 18:15:31',122,1,1),(123,1,'2019-12-02 14:25:14','2019-12-02 14:25:14',123,1,1),(124,1,'2019-12-08 19:43:14','2019-12-08 19:43:14',124,1,1),(125,1,'2019-12-08 19:47:30','2019-12-08 19:47:30',125,1,1),(126,1,'2020-01-12 23:47:51','2020-01-12 23:47:51',126,1,1),(127,1,'2020-01-16 19:51:46','2020-01-16 19:51:46',127,1,1),(128,1,'2020-01-16 19:51:47','2020-01-16 19:51:47',128,1,1),(129,1,'2020-01-16 19:51:47','2020-01-16 19:51:47',129,1,1),(130,1,'2020-01-16 19:51:47','2020-01-16 19:51:47',130,1,1),(131,2,'2020-01-16 21:04:58','2020-01-19 19:16:47',131,1,1),(132,1,'2020-01-16 22:23:26','2020-01-16 22:23:26',132,1,1),(133,1,'2020-01-20 21:54:38','2020-01-20 21:54:38',133,1,1),(134,1,'2020-01-20 22:21:13','2020-01-20 22:21:13',134,1,1),(135,1,'2020-01-25 13:26:09','2020-01-25 13:26:09',135,1,1),(136,4,'2020-01-26 02:22:18','2020-01-26 02:26:54',136,1,1),(137,1,'2020-01-28 09:50:05','2020-01-28 09:50:05',137,1,1),(138,1,'2020-01-28 10:08:45','2020-01-28 10:08:45',138,1,1),(139,1,'2020-01-28 10:24:55','2020-01-28 10:24:55',139,1,1),(140,1,'2020-02-04 22:27:10','2020-02-04 22:27:10',140,1,1),(141,1,'2020-02-04 22:36:34','2020-02-04 22:36:34',141,1,1),(142,1,'2020-02-05 22:40:29','2020-02-05 22:40:29',142,1,1),(143,1,'2020-02-14 12:47:50','2020-02-14 12:47:50',143,1,1),(144,1,'2020-02-19 08:23:12','2020-02-19 08:23:12',144,4,4),(145,1,'2020-02-19 08:24:15','2020-02-19 08:24:15',145,4,4),(146,1,'2020-03-07 00:24:56','2020-03-07 00:24:56',146,1,1),(147,1,'2020-03-10 12:33:26','2020-03-10 12:33:26',147,1,1),(148,1,'2020-03-22 13:27:59','2020-03-22 13:27:59',148,1,1),(149,1,'2020-03-22 13:28:02','2020-03-22 13:28:02',149,1,1),(151,3,'2020-04-09 22:43:34','2020-04-09 22:49:55',151,1,1);
/*!40000 ALTER TABLE `me_files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_format_options`
--

DROP TABLE IF EXISTS `me_format_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_format_options` (
  `format_key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crop_x` int(11) NOT NULL,
  `crop_y` int(11) NOT NULL,
  `crop_width` int(11) NOT NULL,
  `crop_height` int(11) NOT NULL,
  `fileVersion` int(11) NOT NULL,
  PRIMARY KEY (`format_key`,`fileVersion`),
  KEY `IDX_6D25443B31852B63` (`fileVersion`),
  CONSTRAINT `FK_6D25443B31852B63` FOREIGN KEY (`fileVersion`) REFERENCES `me_file_versions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_format_options`
--

LOCK TABLES `me_format_options` WRITE;
/*!40000 ALTER TABLE `me_format_options` DISABLE KEYS */;
INSERT INTO `me_format_options` VALUES ('1500x1000',0,53,1920,1280,171),('270x200',436,0,1456,1079,125),('340x340',0,47,1000,1000,99),('340x340',0,101,1000,1000,147),('340x340',195,0,900,900,148),('340x340',0,0,1024,1024,149),('350x450',0,0,1241,1595,175),('350x450',0,0,1241,1595,176),('350x450',0,0,1241,1595,177),('540x370',105,0,747,512,96);
/*!40000 ALTER TABLE `me_format_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_media`
--

DROP TABLE IF EXISTS `me_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idMediaTypes` int(11) NOT NULL,
  `idPreviewImage` int(11) DEFAULT NULL,
  `idCollections` int(11) NOT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_A694E572D1EB44DE` (`idPreviewImage`),
  KEY `IDX_A694E57284671716` (`idMediaTypes`),
  KEY `IDX_A694E57293782C96` (`idCollections`),
  KEY `IDX_A694E572DBF11E1D` (`idUsersCreator`),
  KEY `IDX_A694E57230D07CD5` (`idUsersChanger`),
  KEY `IDX_A694E572A3F33DFA` (`changed`),
  KEY `IDX_A694E572B23DB7B8` (`created`),
  CONSTRAINT `FK_A694E57230D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_A694E57284671716` FOREIGN KEY (`idMediaTypes`) REFERENCES `me_media_types` (`id`),
  CONSTRAINT `FK_A694E57293782C96` FOREIGN KEY (`idCollections`) REFERENCES `me_collections` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_A694E572D1EB44DE` FOREIGN KEY (`idPreviewImage`) REFERENCES `me_media` (`id`),
  CONSTRAINT `FK_A694E572DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_media`
--

LOCK TABLES `me_media` WRITE;
/*!40000 ALTER TABLE `me_media` DISABLE KEYS */;
INSERT INTO `me_media` VALUES (1,'2019-01-07 14:21:14','2019-01-07 14:21:14',2,NULL,7,1,1),(2,'2019-01-07 15:20:21','2019-01-07 15:20:21',2,NULL,7,1,1),(3,'2019-01-07 16:58:20','2019-01-07 16:58:20',2,NULL,7,1,1),(4,'2019-01-08 10:58:10','2019-01-08 10:58:10',2,NULL,9,1,1),(5,'2019-01-08 10:58:10','2019-01-08 10:58:10',2,NULL,9,1,1),(6,'2019-01-08 14:17:03','2019-01-08 14:17:03',2,NULL,9,1,1),(7,'2019-01-09 09:15:13','2019-01-09 09:15:13',2,NULL,9,1,1),(8,'2019-01-09 10:24:13','2019-01-09 10:24:13',2,NULL,9,1,1),(9,'2019-01-09 14:07:54','2019-01-09 14:07:54',2,NULL,10,1,1),(10,'2019-01-09 14:11:32','2019-01-09 14:11:32',2,NULL,10,1,1),(11,'2019-01-09 14:13:20','2019-01-09 14:13:20',2,NULL,10,1,1),(12,'2019-01-22 00:17:31','2019-01-22 00:17:31',2,NULL,11,1,1),(13,'2019-01-22 00:19:29','2019-01-22 00:19:29',2,NULL,7,1,1),(16,'2019-01-26 00:13:58','2019-01-26 00:13:58',2,NULL,12,1,1),(17,'2019-01-27 21:28:01','2019-01-27 21:28:01',2,NULL,12,1,1),(18,'2019-01-27 23:05:20','2019-01-27 23:05:20',2,NULL,12,1,1),(19,'2019-01-28 11:20:53','2019-02-04 21:19:10',2,NULL,12,1,1),(20,'2019-01-29 23:00:10','2019-01-29 23:00:10',2,NULL,12,1,1),(21,'2019-01-30 22:45:00','2019-01-30 22:45:00',2,NULL,8,1,1),(22,'2019-01-31 22:00:12','2019-01-31 22:00:12',2,NULL,14,1,1),(23,'2019-01-31 22:31:00','2019-01-31 22:31:00',2,NULL,14,1,1),(24,'2019-02-01 07:29:40','2019-02-01 07:29:40',2,NULL,14,1,1),(25,'2019-02-01 10:48:27','2019-02-01 10:48:27',2,NULL,14,1,1),(26,'2019-02-01 11:54:17','2019-02-01 11:54:17',2,NULL,14,1,1),(27,'2019-02-01 16:04:15','2019-02-01 20:24:10',2,NULL,14,1,1),(28,'2019-02-01 16:04:17','2019-02-01 16:04:17',2,NULL,14,1,1),(29,'2019-02-01 16:04:18','2019-02-01 16:04:18',2,NULL,14,1,1),(30,'2019-02-01 16:04:20','2019-02-01 16:04:20',2,NULL,14,1,1),(31,'2019-02-01 19:29:38','2019-02-06 21:12:50',2,NULL,12,1,1),(32,'2019-02-01 19:58:34','2019-02-04 21:52:52',2,NULL,12,1,1),(33,'2019-02-01 20:51:00','2019-02-04 22:38:24',2,NULL,12,1,1),(34,'2019-02-01 21:12:22','2019-02-01 21:12:22',2,NULL,8,1,1),(35,'2019-02-02 14:41:04','2019-02-02 14:41:04',2,NULL,15,1,1),(36,'2019-02-02 20:27:37','2019-02-02 20:27:37',2,NULL,12,1,1),(37,'2019-02-03 22:19:15','2019-02-03 22:19:15',2,NULL,16,1,1),(38,'2019-02-16 23:33:22','2019-02-16 23:33:22',2,NULL,14,1,1),(39,'2019-02-16 23:33:22','2019-02-16 23:33:22',2,NULL,14,1,1),(40,'2019-02-19 11:36:19','2019-02-19 11:36:19',2,NULL,12,1,1),(41,'2019-02-21 20:58:26','2019-02-21 20:58:26',2,NULL,17,1,1),(42,'2019-02-21 20:58:27','2019-02-21 20:58:27',2,NULL,17,1,1),(43,'2019-02-23 21:00:41','2019-02-23 21:00:41',2,NULL,17,1,1),(44,'2019-02-23 22:13:04','2019-02-23 22:13:04',2,NULL,17,1,1),(45,'2019-02-23 23:17:22','2019-02-23 23:17:22',2,NULL,17,1,1),(46,'2019-02-23 23:25:51','2019-02-23 23:25:51',2,NULL,17,1,1),(47,'2019-02-24 00:04:46','2019-02-24 00:04:46',2,NULL,17,1,1),(48,'2019-02-24 00:04:48','2019-02-24 00:04:48',2,NULL,17,1,1),(49,'2019-02-26 08:41:04','2019-02-26 08:41:04',2,NULL,18,1,1),(50,'2019-02-26 09:16:03','2019-02-26 09:16:03',2,NULL,18,1,1),(51,'2019-02-26 21:40:42','2019-02-26 21:40:42',2,NULL,18,1,1),(52,'2019-02-26 22:37:04','2019-02-26 22:37:04',2,NULL,18,1,1),(53,'2019-02-26 23:07:39','2019-02-26 23:07:39',2,NULL,12,1,1),(54,'2019-02-26 23:52:27','2019-02-26 23:52:27',2,NULL,18,1,1),(55,'2019-03-02 21:12:36','2019-03-02 21:12:36',2,NULL,18,1,1),(56,'2019-03-02 21:12:55','2019-03-02 21:12:55',2,NULL,18,1,1),(57,'2019-03-02 22:42:18','2019-03-02 22:42:18',2,NULL,18,1,1),(58,'2019-03-02 22:45:08','2019-03-02 22:45:08',2,NULL,18,1,1),(59,'2019-03-02 22:49:07','2019-03-02 22:49:07',2,NULL,18,1,1),(60,'2019-03-10 14:49:28','2019-03-10 14:49:28',2,NULL,18,1,1),(61,'2019-03-10 15:12:34','2019-03-10 15:12:34',2,NULL,12,1,1),(73,'2019-03-13 14:54:50','2019-03-13 14:54:50',2,NULL,12,1,1),(74,'2019-03-13 15:11:59','2019-03-13 15:11:59',2,NULL,14,1,1),(75,'2019-03-13 15:11:59','2019-03-13 15:11:59',2,NULL,14,1,1),(76,'2019-03-13 15:12:00','2019-03-13 15:12:00',2,NULL,14,1,1),(77,'2019-03-13 15:17:15','2019-03-13 15:17:15',2,NULL,14,1,1),(78,'2019-03-13 15:22:59','2019-03-13 15:22:59',2,NULL,18,1,1),(79,'2019-03-13 15:24:17','2019-03-13 15:24:17',2,NULL,18,1,1),(80,'2019-03-13 15:26:30','2019-03-13 15:26:30',2,NULL,12,1,1),(81,'2019-03-13 20:30:02','2019-03-13 20:30:02',2,NULL,18,1,1),(82,'2019-03-17 19:40:33','2019-03-17 19:40:33',2,NULL,18,1,1),(83,'2019-03-17 23:43:42','2019-03-17 23:43:42',2,NULL,19,1,1),(84,'2019-03-17 23:48:47','2019-03-17 23:48:47',2,NULL,19,1,1),(85,'2019-03-17 23:57:33','2019-03-17 23:57:33',2,NULL,19,1,1),(86,'2019-03-18 00:04:02','2019-03-18 07:58:41',2,NULL,19,1,1),(87,'2019-03-18 00:17:15','2019-03-18 00:17:15',2,NULL,19,1,1),(88,'2019-03-18 12:05:09','2019-03-18 12:05:09',2,NULL,19,1,1),(89,'2019-04-10 13:56:46','2019-04-10 13:56:46',2,NULL,18,1,1),(90,'2019-04-23 15:00:44','2019-04-23 15:00:44',2,NULL,18,1,1),(91,'2019-04-23 15:00:45','2020-01-28 10:08:07',2,NULL,18,1,1),(92,'2019-04-28 13:44:06','2019-04-28 13:44:06',2,NULL,18,1,1),(93,'2019-04-28 14:22:25','2020-01-20 13:55:54',2,NULL,19,1,1),(94,'2019-05-04 09:08:25','2019-05-04 09:08:25',2,NULL,9,1,1),(95,'2019-05-04 09:08:26','2019-05-04 09:08:26',2,NULL,9,1,1),(96,'2019-05-04 09:08:26','2019-05-04 09:08:26',2,NULL,9,1,1),(97,'2019-05-04 09:08:26','2019-05-04 09:08:26',2,NULL,9,1,1),(98,'2019-05-04 09:08:26','2019-05-04 09:08:26',2,NULL,9,1,1),(99,'2019-05-04 09:08:37','2019-05-04 09:08:37',2,NULL,9,1,1),(100,'2019-05-04 09:08:41','2019-05-04 09:08:41',1,NULL,9,1,1),(101,'2019-05-04 09:08:52','2019-05-04 09:08:52',2,NULL,9,1,1),(102,'2019-05-04 09:08:52','2019-05-04 09:08:52',2,NULL,9,1,1),(103,'2019-05-04 09:08:52','2019-05-04 09:08:52',2,NULL,9,1,1),(104,'2019-05-04 09:08:56','2019-05-04 09:08:56',2,NULL,9,1,1),(105,'2019-05-05 21:30:57','2019-05-05 21:30:57',2,NULL,9,1,1),(106,'2019-05-06 11:12:11','2020-01-20 14:00:21',2,NULL,19,1,1),(107,'2019-05-13 20:42:22','2020-01-20 13:57:49',2,NULL,19,1,1),(108,'2019-05-15 21:15:25','2019-08-28 12:32:29',2,NULL,19,1,1),(109,'2019-05-16 18:53:45','2020-01-20 14:06:32',2,NULL,19,1,1),(111,'2019-07-04 14:55:39','2019-08-28 14:23:36',2,NULL,12,3,3),(112,'2019-07-04 14:56:29','2019-08-28 14:23:18',2,NULL,12,3,3),(113,'2019-07-04 14:56:29','2019-08-28 14:22:39',2,NULL,12,3,3),(114,'2019-08-05 12:06:26','2019-08-28 12:21:28',2,NULL,12,1,1),(115,'2019-08-05 12:07:15','2019-08-05 12:07:15',2,NULL,12,1,1),(116,'2019-08-28 07:58:17','2019-08-28 08:11:22',2,NULL,12,1,1),(117,'2019-11-19 23:44:07','2019-11-19 23:44:07',2,NULL,10,1,1),(118,'2019-11-19 23:47:26','2019-11-19 23:47:26',2,NULL,10,1,1),(119,'2019-11-19 23:56:20','2020-01-20 14:11:17',2,NULL,10,1,1),(120,'2019-11-19 23:56:20','2019-11-19 23:56:20',2,NULL,10,1,1),(121,'2019-11-19 23:56:21','2019-11-19 23:56:21',2,NULL,10,1,1),(122,'2019-11-20 18:15:31','2019-11-20 18:15:31',2,NULL,20,1,1),(123,'2019-12-02 14:25:14','2019-12-02 14:25:14',2,NULL,22,1,1),(124,'2019-12-08 19:43:14','2019-12-08 19:43:14',2,NULL,15,1,1),(125,'2019-12-08 19:47:30','2019-12-08 19:47:30',2,NULL,22,1,1),(126,'2020-01-12 23:47:51','2020-01-12 23:47:51',2,NULL,17,1,1),(127,'2020-01-16 19:51:46','2020-01-16 19:51:46',2,NULL,23,1,1),(128,'2020-01-16 19:51:47','2020-01-16 19:51:47',2,NULL,23,1,1),(129,'2020-01-16 19:51:47','2020-01-16 19:51:47',2,NULL,23,1,1),(130,'2020-01-16 19:51:47','2020-01-16 19:51:47',2,NULL,23,1,1),(131,'2020-01-16 21:04:58','2020-01-19 19:16:47',2,NULL,24,1,1),(132,'2020-01-16 22:23:26','2020-01-16 22:23:26',2,NULL,5,1,1),(133,'2020-01-20 21:54:38','2020-01-20 21:54:38',2,NULL,22,1,1),(134,'2020-01-20 22:21:13','2020-01-20 22:21:13',2,NULL,8,1,1),(135,'2020-01-25 13:26:09','2020-01-25 13:26:09',2,NULL,24,1,1),(136,'2020-01-26 02:22:18','2020-01-26 02:26:54',2,NULL,24,1,1),(137,'2020-01-28 09:50:05','2020-01-28 09:50:05',2,NULL,23,1,1),(138,'2020-01-28 10:08:45','2020-01-28 10:08:45',2,NULL,8,1,1),(139,'2020-01-28 10:24:55','2020-01-28 10:24:55',2,NULL,8,1,1),(140,'2020-02-04 22:27:10','2020-02-04 22:27:10',2,NULL,22,1,1),(141,'2020-02-04 22:36:34','2020-02-04 22:36:34',2,NULL,22,1,1),(142,'2020-02-05 22:40:29','2020-02-05 22:40:29',2,NULL,24,1,1),(143,'2020-02-14 12:47:50','2020-02-14 12:47:50',2,NULL,22,1,1),(144,'2020-02-19 08:23:12','2020-02-19 08:23:12',2,NULL,5,4,4),(145,'2020-02-19 08:24:15','2020-02-19 08:24:15',2,NULL,5,4,4),(146,'2020-03-07 00:24:56','2020-03-07 00:24:56',2,NULL,22,1,1),(147,'2020-03-10 12:33:26','2020-03-10 12:33:26',2,NULL,22,1,1),(148,'2020-03-22 13:27:59','2020-03-22 13:27:59',2,NULL,22,1,1),(149,'2020-03-22 13:28:02','2020-03-22 13:28:02',2,NULL,22,1,1),(151,'2020-04-09 22:43:34','2020-04-09 22:49:55',2,NULL,24,1,1);
/*!40000 ALTER TABLE `me_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `me_media_types`
--

DROP TABLE IF EXISTS `me_media_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `me_media_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_9A01D6E85E237E06` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_media_types`
--

LOCK TABLES `me_media_types` WRITE;
/*!40000 ALTER TABLE `me_media_types` DISABLE KEYS */;
INSERT INTO `me_media_types` VALUES (1,'document',NULL),(2,'image',NULL),(3,'video',NULL),(4,'audio',NULL);
/*!40000 ALTER TABLE `me_media_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `ip` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (1,'Roland Golla','rolandgolla@gmail.com','email|17624747727|Testifz','2019-03-10 19:08:40','127.0.0.1'),(2,'Roland Golla','rolandgolla@gmail.com','email|17624747727|Testify docker','2019-03-13 15:27:57','213.203.219.167'),(3,'Roland Golla','rolandgolla@gmail.com','email|17624747727|Test docker','2019-03-13 16:02:00','213.203.219.167'),(4,'Roland Golla','rolandgolla@gmail.com','email|17624747727|Test Docker','2019-03-13 16:13:10','213.203.219.167'),(5,'Roland Golla','rolandgolla@gmail.com','email|17624747727|Testify','2019-03-13 16:24:02','213.203.219.167'),(6,'Roland','roland@test.de','email|1234|testify','2019-04-14 20:24:57','10.22.30.10'),(7,'Test','c.daschner@conversis.de','email||test 123','2019-05-06 13:58:23','10.22.30.10'),(8,'Testify','rolandgolla@gmail.com','email|0123456|Here we go','2019-05-07 06:45:28','10.22.30.10'),(9,'Daschner','c.daschner@conversis.de','email||Test2','2019-05-07 06:53:38','10.22.30.10'),(10,'Daschner','c.daschner@conversis.de','email||Test2','2019-05-07 07:04:24','10.22.30.10'),(11,'Roland','test@test.de','email|1234|Huhu','2019-05-07 07:11:06','10.22.30.10'),(12,'rg','rg@test.de','email|14568|Go 4 IT','2019-05-07 16:41:48','10.22.30.10'),(13,'Roland','rolandgolla@gmail.com','email|1234|Testify','2019-06-12 11:52:39','10.22.30.10'),(14,'Hi','rolandgolla@gmail.com','email|1234|Testify','2019-07-05 22:14:17','nevercodealone.de'),(15,'Test','test@ify.com','email|01234|Ruf doch mal an','2019-08-26 14:28:37','10.42.5.170'),(16,'Roland','nevercodealone@gmail.com','email||New Sulu','2019-12-02 14:19:36','10.42.5.170'),(17,'Max Musterman','max.mustermann@web.de','email||[bug report]\nDieser Satzinhalt kommt zweimal auf Eurer Seite vor:\n\n\"Wir bieten auf unseren Events eine sehr gute Kontakt-Plattform und Möglichkeit sich als Arbeitgeber zu positionieren. \nWir bieten auf unseren Events Kontakt zu dieser Zielgruppe und Möglichkeiten, sich als Arbeitgeber zu positionieren.\"\n\nAm besten nehmt Ihr nur einen der beiden.','2020-01-31 18:42:55','10.42.5.170'),(18,'Hans','hhoechtl@1drop.de','email||Toller Vortrag eben auf der IPC. Wenn du mal über Stan, Psalm und Rector reden willst, sag bescheid.','2020-10-28 09:47:29','10.42.116.13');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phpcr_binarydata`
--

DROP TABLE IF EXISTS `phpcr_binarydata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phpcr_binarydata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `node_id` int(11) NOT NULL,
  `property_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `workspace_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idx` int(11) NOT NULL DEFAULT 0,
  `data` longblob NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_37E65615460D9FD7413BC13C1AC10DC4E7087E10` (`node_id`,`property_name`,`workspace_name`,`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phpcr_binarydata`
--

LOCK TABLES `phpcr_binarydata` WRITE;
/*!40000 ALTER TABLE `phpcr_binarydata` DISABLE KEYS */;
/*!40000 ALTER TABLE `phpcr_binarydata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phpcr_internal_index_types`
--

DROP TABLE IF EXISTS `phpcr_internal_index_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phpcr_internal_index_types` (
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `node_id` int(11) NOT NULL,
  PRIMARY KEY (`type`,`node_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phpcr_internal_index_types`
--

LOCK TABLES `phpcr_internal_index_types` WRITE;
/*!40000 ALTER TABLE `phpcr_internal_index_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `phpcr_internal_index_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phpcr_namespaces`
--

DROP TABLE IF EXISTS `phpcr_namespaces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phpcr_namespaces` (
  `prefix` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uri` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`prefix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phpcr_namespaces`
--

LOCK TABLES `phpcr_namespaces` WRITE;
/*!40000 ALTER TABLE `phpcr_namespaces` DISABLE KEYS */;
INSERT INTO `phpcr_namespaces` VALUES ('i18n','http://sulu.io/phpcr/locale'),('phpcrmig','http://www.danteech.com/phpcr-migrations'),('sec','http://sulu.io/phpcr/sec'),('settings','http://sulu.io/phpcr/settings'),('sulu','http://sulu.io/phpcr');
/*!40000 ALTER TABLE `phpcr_namespaces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phpcr_nodes`
--

DROP TABLE IF EXISTS `phpcr_nodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phpcr_nodes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `local_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `namespace` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `workspace_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identifier` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `props` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `numerical_props` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `depth` int(11) NOT NULL,
  `sort_order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_A4624AD7B548B0F1AC10DC4` (`path`,`workspace_name`),
  UNIQUE KEY `UNIQ_A4624AD7772E836A1AC10DC4` (`identifier`,`workspace_name`),
  KEY `IDX_A4624AD73D8E604F` (`parent`),
  KEY `IDX_A4624AD78CDE5729` (`type`),
  KEY `IDX_A4624AD7623C14D533E16B56` (`local_name`,`namespace`)
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phpcr_nodes`
--

LOCK TABLES `phpcr_nodes` WRITE;
/*!40000 ALTER TABLE `phpcr_nodes` DISABLE KEYS */;
INSERT INTO `phpcr_nodes` VALUES (117,'/cmf/example/routes/en/php-training/phpstan-codestandard-captain-hook','/cmf/example/routes/en/php-training','phpstan-codestandard-captain-hook','','default_live','f5eb44f1-ce3b-4588-9bf7-ad2b4bde59a2','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">f5eb44f1-ce3b-4588-9bf7-ad2b4bde59a2</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T01:46:51.624+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T01:46:51.624+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">ca3a8398-87bf-45ce-b975-2792a07b4d4c</sv:value></sv:property></sv:node>\n',NULL,6,6),(118,'/cmf/example/contents/php-training/sulu-cms-php-schulung-symfony-framework','/cmf/example/contents/php-training','sulu-cms-php-schulung-symfony-framework','','default','5b622bc5-65f8-4b46-aab2-aa2a591dca1b','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">5b622bc5-65f8-4b46-aab2-aa2a591dca1b</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"41\">Sulu CMS PHP-Schulung - Symfony Framework</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"30\">/php-training/symfony-cms-sulu</sv:value></sv:property><sv:property sv:name=\"i18n:en-price\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">3600,-</sv:value></sv:property><sv:property sv:name=\"i18n:en-duration\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"2\">16</sv:value></sv:property><sv:property sv:name=\"i18n:en-level\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"30\">Einsteiger bis Fortgeschritten</sv:value></sv:property><sv:property sv:name=\"i18n:en-youTubeIframe\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/w8ZU6aksbrc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-trainerItems\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"2\">c1</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"48\">Sulu Symfony Framework Content Management System</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoDescription\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"245\">&lt;p&gt;Das Sulu CMS bietet Symfony Entwicklern und Internet Redakteuren viele Vorteile. In dieser Content Management System Schulung erklären wir, wie man schnell einfache und komplexe Features als PHP-Developer in das PHP-CMS integriert.&amp;nbsp;&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoQuoteHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"108\">The design and user experience of the backend is impressive and greatly facilitates the creation of content.</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoQuoteName\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"39\">Pablo Lozano - Senior Backend Developer</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoQuoteCompany\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">The Cocktail</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">training</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:14:14.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:14:14.182+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-02-05T21:37:42.987+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">40</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"68\">Sulu CMS PHP-Schulung mit Symfony Framework als Inhouse PHP-Training</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"182\">PHP-Training als Inhouse Schulung mit dem Symfony Framework CMS - Einführung, Templating, PHP-Testing und die Anbindung von Social Media APIs als Team gemeinsam mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"Long\" sv:multi-valued=\"1\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">{\"ids\":[136]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"72\">Sulu Content Managment System - Setup, Einführung und Theme Entwicklung</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"69\">Installation Sulu CMS mit dem \"Basesulu\" PHP Open Source Projekt DDEV</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Vorstellung des Sulu CMS am Beispiel von nevercodealone.de mit Admin Interface, Mediencenter und Theme Verwaltung </sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Übersicht und Einführung in die Symfony Framework Struktur und das Konzept der zentralen Datenpflege hinter Sulu</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"126\">Erstellung individueller und benutzerfreundlicher Backend Eingebemasken für  für Redakteure und Frontend Templating mit Twig</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"74\">Gemeinsame Umsetzung von Funnel Marketing Landigpages mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Pair Programming an eigenen Webdesign Themes mit verschiedenen praktischen Content Typen mit Text, Bild und Medien</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"74\">Advanced Sulu CMS Features mit der Einbindung von Social Media API Content</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"75\">Aufbereitung Sulu CMS Basiswissen über Setup und Theme Templating mit Twig</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"117\">Implementierung individueller Page Controller für die Einbundung externer Symfony Webservices für Social Media APIs</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"84\">Fortgeschrittene Content Typen im Sulu Content Management System mit \"Smart Content\"</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"89\">Implementierung statischer Codeanalyse als PHP-Testing für automatische GitLab Pilelines</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"88\">Gemeinsame Fertigstellung eines Beispielprojekts gemeinsam als Team mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"135\">Abschlußsession mit Best Pratice Beispielen für kleine und komplexe Projekte mit dem Fokus auf automatisierten GitLab Build Pipelines</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"113\">Teilnehmer Voraussetzungen für ein PHP-Training als Inhouse Schulung mit dem Sulu PHP Content Managements System</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-requirementsItemText#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"125\">Schulungsraum mit Internetzugang, einem Beamer oder großen Präsentationsbildschirm für alle Teilnehmer und den PHP-Trainer</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-requirementsItemText#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"67\">Teilnehmer Rechner mit einem lauffähigen Setup von DDEV mit Docker</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-requirementsItemText#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"76\">Basiswissen über das Symfony Framework und PHP-Backend Entwicklung und APIs</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-requirementsItemText#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">Zugang zu einer eigenen Web API</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-requirementsItemText#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"45\">Optional Zugang zu der Google Developer Cloud</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:57:55.731+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"41\">Sulu CMS PHP-Schulung - Symfony Framework</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"68\">Sulu CMS PHP-Schulung mit Symfony Framework als Inhouse PHP-Training</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"182\">PHP-Training als Inhouse Schulung mit dem Symfony Framework CMS - Einführung, Templating, PHP-Testing und die Anbindung von Social Media APIs als Team gemeinsam mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-categories\" sv:type=\"Long\" sv:multi-valued=\"1\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:de-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">{\"ids\":[136]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"53\">/php-training/sulu-cms-php-schulung-symfony-framework</sv:value></sv:property><sv:property sv:name=\"i18n:de-youTubeIframe\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/w8ZU6aksbrc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-datesImage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-trainerItems\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"2\">c1</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"48\">Sulu Symfony Framework Content Management System</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoDescription\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"245\">&lt;p&gt;Das Sulu CMS bietet Symfony Entwicklern und Internet Redakteuren viele Vorteile. In dieser Content Management System Schulung erklären wir, wie man schnell einfache und komplexe Features als PHP-Developer in das PHP-CMS integriert.&amp;nbsp;&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoQuoteHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"108\">The design and user experience of the backend is impressive and greatly facilitates the creation of content.</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoQuoteName\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"39\">Pablo Lozano - Senior Backend Developer</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoQuoteCompany\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">The Cocktail</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"113\">Teilnehmer Voraussetzungen für ein PHP-Training als Inhouse Schulung mit dem Sulu PHP Content Managements System</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-requirementsItemText#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"125\">Schulungsraum mit Internetzugang, einem Beamer oder großen Präsentationsbildschirm für alle Teilnehmer und den PHP-Trainer</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-requirementsItemText#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"67\">Teilnehmer Rechner mit einem lauffähigen Setup von DDEV mit Docker</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-requirementsItemText#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"76\">Basiswissen über das Symfony Framework und PHP-Backend Entwicklung und APIs</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-requirementsItemText#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">Zugang zu einer eigenen Web API</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-requirementsItemText#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"45\">Optional Zugang zu der Google Developer Cloud</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"72\">Sulu Content Managment System - Setup, Einführung und Theme Entwicklung</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"69\">Installation Sulu CMS mit dem \"Basesulu\" PHP Open Source Projekt DDEV</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Vorstellung des Sulu CMS am Beispiel von nevercodealone.de mit Admin Interface, Mediencenter und Theme Verwaltung </sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Übersicht und Einführung in die Symfony Framework Struktur und das Konzept der zentralen Datenpflege hinter Sulu</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"126\">Erstellung individueller und benutzerfreundlicher Backend Eingebemasken für  für Redakteure und Frontend Templating mit Twig</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"74\">Gemeinsame Umsetzung von Funnel Marketing Landigpages mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Pair Programming an eigenen Webdesign Themes mit verschiedenen praktischen Content Typen mit Text, Bild und Medien</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"74\">Advanced Sulu CMS Features mit der Einbindung von Social Media API Content</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"75\">Aufbereitung Sulu CMS Basiswissen über Setup und Theme Templating mit Twig</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"117\">Implementierung individueller Page Controller für die Einbundung externer Symfony Webservices für Social Media APIs</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"84\">Fortgeschrittene Content Typen im Sulu Content Management System mit \"Smart Content\"</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"89\">Implementierung statischer Codeanalyse als PHP-Testing für automatische GitLab Pilelines</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"88\">Gemeinsame Fertigstellung eines Beispielprojekts gemeinsam als Team mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"135\">Abschlußsession mit Best Pratice Beispielen für kleine und komplexe Projekte mit dem Fokus auf automatisierten GitLab Build Pipelines</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">training</sv:value></sv:property><sv:property sv:name=\"i18n:de-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:14:14.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T12:51:36.699+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:17:09.867+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:de-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:17:09.926+00:00</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">40</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"Long\" sv:multi-valued=\"1\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-categories\" sv:type=\"Long\" sv:multi-valued=\"1\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:de-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n',5,2),(119,'/cmf/example/contents/php-training/sulu-cms-php-schulung-symfony-framework','/cmf/example/contents/php-training','sulu-cms-php-schulung-symfony-framework','','default_live','5b622bc5-65f8-4b46-aab2-aa2a591dca1b','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">5b622bc5-65f8-4b46-aab2-aa2a591dca1b</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"41\">Sulu CMS PHP-Schulung - Symfony Framework</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"68\">Sulu CMS PHP-Schulung mit Symfony Framework als Inhouse PHP-Training</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"182\">PHP-Training als Inhouse Schulung mit dem Symfony Framework CMS - Einführung, Templating, PHP-Testing und die Anbindung von Social Media APIs als Team gemeinsam mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"Long\" sv:multi-valued=\"1\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">{\"ids\":[136]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"30\">/php-training/symfony-cms-sulu</sv:value></sv:property><sv:property sv:name=\"i18n:en-price\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">3600,-</sv:value></sv:property><sv:property sv:name=\"i18n:en-duration\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"2\">16</sv:value></sv:property><sv:property sv:name=\"i18n:en-level\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"30\">Einsteiger bis Fortgeschritten</sv:value></sv:property><sv:property sv:name=\"i18n:en-youTubeIframe\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/w8ZU6aksbrc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-trainerItems\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"2\">c1</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"48\">Sulu Symfony Framework Content Management System</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoDescription\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"245\">&lt;p&gt;Das Sulu CMS bietet Symfony Entwicklern und Internet Redakteuren viele Vorteile. In dieser Content Management System Schulung erklären wir, wie man schnell einfache und komplexe Features als PHP-Developer in das PHP-CMS integriert.&amp;nbsp;&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoQuoteHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"108\">The design and user experience of the backend is impressive and greatly facilitates the creation of content.</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoQuoteName\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"39\">Pablo Lozano - Senior Backend Developer</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoQuoteCompany\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">The Cocktail</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"113\">Teilnehmer Voraussetzungen für ein PHP-Training als Inhouse Schulung mit dem Sulu PHP Content Managements System</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-requirementsItemText#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"125\">Schulungsraum mit Internetzugang, einem Beamer oder großen Präsentationsbildschirm für alle Teilnehmer und den PHP-Trainer</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-requirementsItemText#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"67\">Teilnehmer Rechner mit einem lauffähigen Setup von DDEV mit Docker</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-requirementsItemText#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"76\">Basiswissen über das Symfony Framework und PHP-Backend Entwicklung und APIs</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-requirementsItemText#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">Zugang zu einer eigenen Web API</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-requirementsItems-requirementsItemText#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"45\">Optional Zugang zu der Google Developer Cloud</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"72\">Sulu Content Managment System - Setup, Einführung und Theme Entwicklung</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"69\">Installation Sulu CMS mit dem \"Basesulu\" PHP Open Source Projekt DDEV</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Vorstellung des Sulu CMS am Beispiel von nevercodealone.de mit Admin Interface, Mediencenter und Theme Verwaltung </sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Übersicht und Einführung in die Symfony Framework Struktur und das Konzept der zentralen Datenpflege hinter Sulu</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"126\">Erstellung individueller und benutzerfreundlicher Backend Eingebemasken für  für Redakteure und Frontend Templating mit Twig</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"74\">Gemeinsame Umsetzung von Funnel Marketing Landigpages mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-title#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Pair Programming an eigenen Webdesign Themes mit verschiedenen praktischen Content Typen mit Text, Bild und Medien</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayOneItems-status#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"74\">Advanced Sulu CMS Features mit der Einbindung von Social Media API Content</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"75\">Aufbereitung Sulu CMS Basiswissen über Setup und Theme Templating mit Twig</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"117\">Implementierung individueller Page Controller für die Einbundung externer Symfony Webservices für Social Media APIs</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"84\">Fortgeschrittene Content Typen im Sulu Content Management System mit \"Smart Content\"</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"89\">Implementierung statischer Codeanalyse als PHP-Testing für automatische GitLab Pilelines</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"88\">Gemeinsame Fertigstellung eines Beispielprojekts gemeinsam als Team mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-title#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"135\">Abschlußsession mit Best Pratice Beispielen für kleine und komplexe Projekte mit dem Fokus auf automatisierten GitLab Build Pipelines</sv:value></sv:property><sv:property sv:name=\"i18n:en-dayTwoItems-status#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">training</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:57:55.731+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:14:14.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:14:14.182+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-02-05T21:37:42.987+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">40</sv:value></sv:property><sv:property sv:name=\"i18n:de-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"41\">Sulu CMS PHP-Schulung - Symfony Framework</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"68\">Sulu CMS PHP-Schulung mit Symfony Framework als Inhouse PHP-Training</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"182\">PHP-Training als Inhouse Schulung mit dem Symfony Framework CMS - Einführung, Templating, PHP-Testing und die Anbindung von Social Media APIs als Team gemeinsam mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-categories\" sv:type=\"Long\" sv:multi-valued=\"1\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:de-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">{\"ids\":[136]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"53\">/php-training/sulu-cms-php-schulung-symfony-framework</sv:value></sv:property><sv:property sv:name=\"i18n:de-youTubeIframe\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/w8ZU6aksbrc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-datesImage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-trainerItems\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"2\">c1</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"48\">Sulu Symfony Framework Content Management System</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoDescription\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"245\">&lt;p&gt;Das Sulu CMS bietet Symfony Entwicklern und Internet Redakteuren viele Vorteile. In dieser Content Management System Schulung erklären wir, wie man schnell einfache und komplexe Features als PHP-Developer in das PHP-CMS integriert.&amp;nbsp;&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoQuoteHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"108\">The design and user experience of the backend is impressive and greatly facilitates the creation of content.</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoQuoteName\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"39\">Pablo Lozano - Senior Backend Developer</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoQuoteCompany\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">The Cocktail</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"113\">Teilnehmer Voraussetzungen für ein PHP-Training als Inhouse Schulung mit dem Sulu PHP Content Managements System</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-requirementsItemText#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"125\">Schulungsraum mit Internetzugang, einem Beamer oder großen Präsentationsbildschirm für alle Teilnehmer und den PHP-Trainer</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-requirementsItemText#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"67\">Teilnehmer Rechner mit einem lauffähigen Setup von DDEV mit Docker</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-requirementsItemText#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"76\">Basiswissen über das Symfony Framework und PHP-Backend Entwicklung und APIs</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-requirementsItemText#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">Zugang zu einer eigenen Web API</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">requirementsItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-requirementsItemText#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"45\">Optional Zugang zu der Google Developer Cloud</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"72\">Sulu Content Managment System - Setup, Einführung und Theme Entwicklung</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"69\">Installation Sulu CMS mit dem \"Basesulu\" PHP Open Source Projekt DDEV</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Vorstellung des Sulu CMS am Beispiel von nevercodealone.de mit Admin Interface, Mediencenter und Theme Verwaltung </sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Übersicht und Einführung in die Symfony Framework Struktur und das Konzept der zentralen Datenpflege hinter Sulu</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"126\">Erstellung individueller und benutzerfreundlicher Backend Eingebemasken für  für Redakteure und Frontend Templating mit Twig</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"74\">Gemeinsame Umsetzung von Funnel Marketing Landigpages mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayOneItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-title#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"114\">Pair Programming an eigenen Webdesign Themes mit verschiedenen praktischen Content Typen mit Text, Bild und Medien</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-status#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"74\">Advanced Sulu CMS Features mit der Einbindung von Social Media API Content</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"75\">Aufbereitung Sulu CMS Basiswissen über Setup und Theme Templating mit Twig</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"117\">Implementierung individueller Page Controller für die Einbundung externer Symfony Webservices für Social Media APIs</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"84\">Fortgeschrittene Content Typen im Sulu Content Management System mit \"Smart Content\"</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"89\">Implementierung statischer Codeanalyse als PHP-Testing für automatische GitLab Pilelines</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"88\">Gemeinsame Fertigstellung eines Beispielprojekts gemeinsam als Team mit der Funktastatur</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">team</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">dayTwoItems</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-title#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"135\">Abschlußsession mit Best Pratice Beispielen für kleine und komplexe Projekte mit dem Fokus auf automatisierten GitLab Build Pipelines</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-status#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">theory</sv:value></sv:property><sv:property sv:name=\"i18n:de-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">training</sv:value></sv:property><sv:property sv:name=\"i18n:de-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:17:09.926+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:14:14.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T12:51:36.699+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:17:09.867+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:de-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"Long\" sv:multi-valued=\"1\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">40</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-categories\" sv:type=\"Long\" sv:multi-valued=\"1\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-requirementsItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayOneItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:de-dayTwoItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">6</sv:value></sv:property><sv:property sv:name=\"i18n:de-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n',5,2),(120,'/cmf/example/routes/en/php-training/symfony-cms-sulu','/cmf/example/routes/en/php-training','symfony-cms-sulu','','default','ea1d0a03-b85f-4fba-9d40-0b8812c2c0aa','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">ea1d0a03-b85f-4fba-9d40-0b8812c2c0aa</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:57:55.743+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:57:55.743+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">5b622bc5-65f8-4b46-aab2-aa2a591dca1b</sv:value></sv:property></sv:node>\n',NULL,6,7),(121,'/cmf/example/routes/en/php-training/symfony-cms-sulu','/cmf/example/routes/en/php-training','symfony-cms-sulu','','default_live','ea1d0a03-b85f-4fba-9d40-0b8812c2c0aa','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">ea1d0a03-b85f-4fba-9d40-0b8812c2c0aa</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:57:55.743+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-01-26T02:57:55.743+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">5b622bc5-65f8-4b46-aab2-aa2a591dca1b</sv:value></sv:property></sv:node>\n',NULL,6,8),(122,'/cmf/example/contents/php-training/javascript-schulung','/cmf/example/contents/php-training','javascript-schulung','','default','42e9cec4-08cf-460f-bba3-fa413daf6876','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">42e9cec4-08cf-460f-bba3-fa413daf6876</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"19\">JavaScript Schulung</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"33\">/php-training/javascript-schulung</sv:value></sv:property><sv:property sv:name=\"i18n:en-price\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">4000</sv:value></sv:property><sv:property sv:name=\"i18n:en-duration\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"2\">16</sv:value></sv:property><sv:property sv:name=\"i18n:en-level\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"15\">Fortgeschritten</sv:value></sv:property><sv:property sv:name=\"i18n:en-youTubeIframe\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/CCJ3KFWJJiA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-trainerItems\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"2\">c4</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">JavaScript Schulung als Inhouse Training</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">training</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-02-05T22:38:42.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-02-05T22:38:42.209+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-02-19T08:31:22.983+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">50</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">{\"ids\":[142]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-courseInfoDescription\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"266\">&lt;p&gt;In der Veranstaltung werden Techniken und Methodiken zur Erstellung von Webanwendungen erläutert. Dazu zählen Grundlagen in JavaScript, CSS und HTML und darauf aufbauend moderne Technologien und Konzepte wie Virtual DOM und Frameworks wie React oder Vue.js.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"19\">JavaScript Schulung</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:de-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:de-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">{\"ids\":[142]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"33\">/php-training/javascript-schulung</sv:value></sv:property><sv:property sv:name=\"i18n:de-youTubeIframe\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/CCJ3KFWJJiA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-datesImage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-trainerItems\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"2\">c4</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">JavaScript Schulung als Inhouse Training</sv:value></sv:property><sv:property sv:name=\"i18n:de-courseInfoDescription\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"266\">&lt;p&gt;In der Veranstaltung werden Techniken und Methodiken zur Erstellung von Webanwendungen erläutert. Dazu zählen Grundlagen in JavaScript, CSS und HTML und darauf aufbauend moderne Technologien und Konzepte wie Virtual DOM und Frameworks wie React oder Vue.js.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">training</sv:value></sv:property><sv:property sv:name=\"i18n:de-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-02-05T22:38:42.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T12:51:36.790+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T12:51:36.790+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:de-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">50</sv:value></sv:property><sv:property sv:name=\"i18n:de-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n',5,3),(123,'/cmf/example/contents/php-training/javascript-schulung','/cmf/example/contents/php-training','javascript-schulung','','default_live','42e9cec4-08cf-460f-bba3-fa413daf6876','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">42e9cec4-08cf-460f-bba3-fa413daf6876</sv:value></sv:property></sv:node>\n',NULL,5,3),(124,'/cmf/example/contents/ncaevents/remote-ncaevent-maerz','/cmf/example/contents/ncaevents','remote-ncaevent-maerz','','default','93db3a49-b102-4603-a2b0-a9d98ae6caa3','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">93db3a49-b102-4603-a2b0-a9d98ae6caa3</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Remote #NCAEvent März</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">/ncaevents/remote-ncaevent-maerz</sv:value></sv:property><sv:property sv:name=\"i18n:en-sponsorLogo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[124]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-town\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"14\">World wide web</sv:value></sv:property><sv:property sv:name=\"i18n:en-date\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-28T21:42:52.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventheaderimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[148]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationBackgroundImage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">conference</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:26:50.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:26:50.021+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-27T21:42:52.735+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">90</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">{\"ids\":[149]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-previewImageLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"76\">https://nevercodealone.de/uploads/media/1920x1080/09/149-ncaevent-online.jpg</sv:value></sv:property><sv:property sv:name=\"i18n:en-donation\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"340\">&lt;p&gt;Unser Event findet remote statt und die beiden Sessions werden live über YouTube übertragen. Dazu gibt es auch einen ausführlichen Blog Post. Teilnehmer kommen über Slack an die Links für die Visual Studio Code Live Coding Session und dem Jitsi Link. Für alle anderen gibt es beide Sessions auch Live auf unserem YouTube Kanal.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewRight\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"800\">&lt;p&gt;&lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/remote-live-coding-event/\" title=\"Remote PHP-Training\"&gt;Blog Post zum Event&lt;/a&gt; - Gemeinsam neues Wissen lernen und anwenden. Wir setzen uns wieder ein für Softwarequalität und bessere Arbeitsbedingungen in der IT. Dieses mal haben wir einen ganz praktischen Ansatz und bringen Themen für Frontend und Backend Entwicklung zusammen. In aktuellen Anforderungen an Entwickler ist es wichtig gemeinsam über den Tellerrand zu schauen und nicht völlig getrenntes Inselwissen zu fördern. Zum Event geht es über &lt;a target=\"_blank\" href=\"http://nevercodealone.slack.com/\"&gt;unseren Slack Kanal&lt;/a&gt; und für alle gibt es eine &lt;a target=\"_blank\" href=\"https://www.youtube.com/channel/UCjVT6iJ_wg7OM0DkV5TpNCQ\"&gt;Live Übertragung auf YouTube&lt;/a&gt;.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactBodytext\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"567\">&lt;p&gt;Aktive Teilnehmer an dem Event brauchen eine lokale Installation der kostenlosen IDE Visual Studio Code. Für die persönliche Teilnahme am Live Coding ist die Installation des Live Share Plugins notwendig. Wenn du aber einfach nur verbal Teilnehmen möchtest ist das natürlich auch nur über ein Mikrofon oder Headset möglich. Falls du dich gar nicht in die Live Coding Session einbringen möchtest kannst du dir auch einfach das Live Video auf unserem YouTube Kanal anschauen. Wir haben leider nur eine begrenzte Anzahl von Live Teilnehmern zur verfügung.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"33\">https://nevercodealone.slack.com/</sv:value></sv:property><sv:property sv:name=\"i18n:en-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"109\">Unser Online Event mit React und PHPStan. Gemeinsam mit dem Visual Studio Code Live Plugin aus dem Homeoffice</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"47\">2 Live Coding Speaker direkt aus dem HomeOffice</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:55:29.387+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterSpeaker\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterMember\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterHours\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">3</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewLeft\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"211\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/5_1wSjK_5G4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"48\">Remote Fullstack Web Developer Live Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"35\">Zeitplan Fullstack Remote #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"58\">Kostenloser Workshop als Remote-Session und 2 Top Speakern</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">10:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"51\">Moderne Frontend-Bibliotheken pragmatisch einsetzen</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[133]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1357\">&lt;p&gt;Stefan demonstriert zunächst, wie man mit Toolchains wie &lt;a target=\"_blank\" href=\"https://github.com/facebook/create-react-app\" title=\"Create React App\"&gt;CRA&lt;/a&gt; und &lt;a target=\"_blank\" href=\"https://cli.vuejs.org/\"&gt;Vue CLI&lt;/a&gt; blitzschnell neue SPAs und PWAs aufsetzt, geht dabei auch auf Details gut funktionierender &lt;a target=\"_blank\" href=\"https://symfony.com/doc/current/frontend/encore/advanced-config.html\"&gt;Webpack-Konfiguration&lt;/a&gt; ein und wie man sein Projekt für &lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/codeception-tutorial-best-practice-pageobject-data-attribute/\" title=\"Codeception Acceptance Testing\"&gt;Akzeptanz&lt;/a&gt;- und &lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/typo3camp-venlo-codeception-php-schulung/\"&gt;Unit-Tests&lt;/a&gt; mit Jest sowie die Nutzung moderner &lt;a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\"&gt;ECMAScript&lt;/a&gt;-/Typescript-Sprachmerkmale vorbereitet. Er stellt die gängigen Frontend-Bibliotheken React, Vue und Svelte vor und erläutert ihre bevorzugten CSS-Integrationen (modularized CSS, styled components und tailwind CSS). Stefan schließt mit einem Einstieg in statische Seitengeneratoren wie Gatsby oder 11ty, mit denen sich unfassbar schnelle, Backend-lose Webseiten generieren lassen und wie man sie auf gängigen PaaS-Providern wie Heroku, Netlify oder now.sh deployed.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableSpeaker#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">Stefan</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">13:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"50\">Statische Codeanalyse mit PHPStan und Captain Hook</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[141]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#1\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"409\">&lt;p&gt;Statische Code Analyse ist schnell und sehr zuverlässig. gerade beim Refactoring bestehender Legacy Projekte ist es es wichtiges Werkzeug. Wir schauen uns PHPStan als Tool an und schauen, wie man hier eigene Erweiterungen einbringt. In der Kombination mit Captain Hook kann man sehr viel Geschwindigkeit bei der Entwicklung rausholen. Der genaue Inhalt der Session wird nächste Woche bekannt gegeben.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableSpeaker#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">Sebastian</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"55\">Setup für Teilnehmer - Visual Studio Code und Mikrofon</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"46\">Links zum Setup und für das Live Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobTitle#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Visual Studio Code IDE</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"30\">https://code.visualstudio.com/</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobTitle#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"25\">Live Share Extension Pack</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobUrl#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"83\">https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobTitle#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Never Code Alone Slack</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobUrl#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">http://nevercodealone.slack.com/</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobTitle#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"25\">Blog Post zu diesem Event</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobUrl#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">https://blog.nevercodealone.de/</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobTitle#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"45\">Blog Post Visual Studio Code und Live Sharing</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobUrl#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"59\">https://blog.nevercodealone.de/visual-studio-code-phpstorm/</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"17\">contactPersonItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemImg#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[137]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemName#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">Roland Golla</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemJobTitle#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">Initiator</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemPhone#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">017624747727</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemXingUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"44\">https://www.xing.com/profile/Roland_Golla/cv</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemLinkedinUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">https://www.linkedin.com/in/rolandgolla/</sv:value></sv:property><sv:property sv:name=\"i18n:en-optionalPrice\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-optinalButtonText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">Slack Registration</sv:value></sv:property><sv:property sv:name=\"i18n:en-faqInvisible\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"56\">https://blog.nevercodealone.de/remote-live-coding-event/</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Blog Post Remote Event</sv:value></sv:property><sv:property sv:name=\"i18n:de-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Remote #NCAEvent März</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:de-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:de-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">{\"ids\":[149]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">/remote-ncaevent-maerz</sv:value></sv:property><sv:property sv:name=\"i18n:de-sponsorLogo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[124]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-town\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"14\">World wide web</sv:value></sv:property><sv:property sv:name=\"i18n:de-date\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-28T19:22:55.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-eventLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"33\">https://nevercodealone.slack.com/</sv:value></sv:property><sv:property sv:name=\"i18n:de-previewImageLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"76\">https://nevercodealone.de/uploads/media/1920x1080/09/149-ncaevent-online.jpg</sv:value></sv:property><sv:property sv:name=\"i18n:de-blogLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"56\">https://blog.nevercodealone.de/remote-live-coding-event/</sv:value></sv:property><sv:property sv:name=\"i18n:de-blogLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Blog Post Remote Event</sv:value></sv:property><sv:property sv:name=\"i18n:de-donation\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-optionalPrice\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-optinalButtonText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">Slack Registration</sv:value></sv:property><sv:property sv:name=\"i18n:de-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"109\">Unser Online Event mit React und PHPStan. Gemeinsam mit dem Visual Studio Code Live Plugin aus dem Homeoffice</sv:value></sv:property><sv:property sv:name=\"i18n:de-eventheaderimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[148]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-speakerHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"47\">2 Live Coding Speaker direkt aus dem HomeOffice</sv:value></sv:property><sv:property sv:name=\"i18n:de-speakerSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"340\">&lt;p&gt;Unser Event findet remote statt und die beiden Sessions werden live über YouTube übertragen. Dazu gibt es auch einen ausführlichen Blog Post. Teilnehmer kommen über Slack an die Links für die Visual Studio Code Live Coding Session und dem Jitsi Link. Für alle anderen gibt es beide Sessions auch Live auf unserem YouTube Kanal.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-counterSpeaker\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-counterMember\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property><sv:property sv:name=\"i18n:de-counterHours\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">3</sv:value></sv:property><sv:property sv:name=\"i18n:de-overviewLeft\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"211\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/5_1wSjK_5G4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-overviewHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"48\">Remote Fullstack Web Developer Live Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:de-overviewRight\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"800\">&lt;p&gt;&lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/remote-live-coding-event/\" title=\"Remote PHP-Training\"&gt;Blog Post zum Event&lt;/a&gt; - Gemeinsam neues Wissen lernen und anwenden. Wir setzen uns wieder ein für Softwarequalität und bessere Arbeitsbedingungen in der IT. Dieses mal haben wir einen ganz praktischen Ansatz und bringen Themen für Frontend und Backend Entwicklung zusammen. In aktuellen Anforderungen an Entwickler ist es wichtig gemeinsam über den Tellerrand zu schauen und nicht völlig getrenntes Inselwissen zu fördern. Zum Event geht es über &lt;a target=\"_blank\" href=\"http://nevercodealone.slack.com/\"&gt;unseren Slack Kanal&lt;/a&gt; und für alle gibt es eine &lt;a target=\"_blank\" href=\"https://www.youtube.com/channel/UCjVT6iJ_wg7OM0DkV5TpNCQ\"&gt;Live Übertragung auf YouTube&lt;/a&gt;.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"35\">Zeitplan Fullstack Remote #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"58\">Kostenloser Workshop als Remote-Session und 2 Top Speakern</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-time#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">10:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableHeadline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"51\">Moderne Frontend-Bibliotheken pragmatisch einsetzen</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-images#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[133]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-alignRight#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableDescription#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1357\">&lt;p&gt;Stefan demonstriert zunächst, wie man mit Toolchains wie &lt;a target=\"_blank\" href=\"https://github.com/facebook/create-react-app\" title=\"Create React App\"&gt;CRA&lt;/a&gt; und &lt;a target=\"_blank\" href=\"https://cli.vuejs.org/\"&gt;Vue CLI&lt;/a&gt; blitzschnell neue SPAs und PWAs aufsetzt, geht dabei auch auf Details gut funktionierender &lt;a target=\"_blank\" href=\"https://symfony.com/doc/current/frontend/encore/advanced-config.html\"&gt;Webpack-Konfiguration&lt;/a&gt; ein und wie man sein Projekt für &lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/codeception-tutorial-best-practice-pageobject-data-attribute/\" title=\"Codeception Acceptance Testing\"&gt;Akzeptanz&lt;/a&gt;- und &lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/typo3camp-venlo-codeception-php-schulung/\"&gt;Unit-Tests&lt;/a&gt; mit Jest sowie die Nutzung moderner &lt;a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\"&gt;ECMAScript&lt;/a&gt;-/Typescript-Sprachmerkmale vorbereitet. Er stellt die gängigen Frontend-Bibliotheken React, Vue und Svelte vor und erläutert ihre bevorzugten CSS-Integrationen (modularized CSS, styled components und tailwind CSS). Stefan schließt mit einem Einstieg in statische Seitengeneratoren wie Gatsby oder 11ty, mit denen sich unfassbar schnelle, Backend-lose Webseiten generieren lassen und wie man sie auf gängigen PaaS-Providern wie Heroku, Netlify oder now.sh deployed.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableSpeaker#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">Stefan</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-time#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">13:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableHeadline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"50\">Statische Codeanalyse mit PHPStan und Captain Hook</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-images#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[141]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-alignRight#1\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableDescription#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"409\">&lt;p&gt;Statische Code Analyse ist schnell und sehr zuverlässig. gerade beim Refactoring bestehender Legacy Projekte ist es es wichtiges Werkzeug. Wir schauen uns PHPStan als Tool an und schauen, wie man hier eigene Erweiterungen einbringt. In der Kombination mit Captain Hook kann man sehr viel Geschwindigkeit bei der Entwicklung rausholen. Der genaue Inhalt der Session wird nächste Woche bekannt gegeben.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableSpeaker#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">Sebastian</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"55\">Setup für Teilnehmer - Visual Studio Code und Mikrofon</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactBodytext\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"567\">&lt;p&gt;Aktive Teilnehmer an dem Event brauchen eine lokale Installation der kostenlosen IDE Visual Studio Code. Für die persönliche Teilnahme am Live Coding ist die Installation des Live Share Plugins notwendig. Wenn du aber einfach nur verbal Teilnehmen möchtest ist das natürlich auch nur über ein Mikrofon oder Headset möglich. Falls du dich gar nicht in die Live Coding Session einbringen möchtest kannst du dir auch einfach das Live Video auf unserem YouTube Kanal anschauen. Wir haben leider nur eine begrenzte Anzahl von Live Teilnehmern zur verfügung.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"46\">Links zum Setup und für das Live Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobTitle#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Visual Studio Code IDE</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"30\">https://code.visualstudio.com/</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobTitle#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"25\">Live Share Extension Pack</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobUrl#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"83\">https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobTitle#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Never Code Alone Slack</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobUrl#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">http://nevercodealone.slack.com/</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobTitle#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"25\">Blog Post zu diesem Event</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobUrl#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">https://blog.nevercodealone.de/</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobTitle#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"45\">Blog Post Visual Studio Code und Live Sharing</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobUrl#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"59\">https://blog.nevercodealone.de/visual-studio-code-phpstorm/</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"17\">contactPersonItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemImg#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[137]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemName#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">Roland Golla</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemJobTitle#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">Initiator</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemPhone#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">017624747727</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemXingUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"44\">https://www.xing.com/profile/Roland_Golla/cv</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemLinkedinUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">https://www.linkedin.com/in/rolandgolla/</sv:value></sv:property><sv:property sv:name=\"i18n:de-locationBackgroundImage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:de-faqInvisible\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">conference</sv:value></sv:property><sv:property sv:name=\"i18n:de-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:26:50.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T12:51:36.067+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:55.584+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:de-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:55.641+00:00</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">90</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n',5,7),(125,'/cmf/example/contents/ncaevents/remote-ncaevent-maerz','/cmf/example/contents/ncaevents','remote-ncaevent-maerz','','default_live','93db3a49-b102-4603-a2b0-a9d98ae6caa3','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">93db3a49-b102-4603-a2b0-a9d98ae6caa3</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Remote #NCAEvent März</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">{\"ids\":[149]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">/ncaevents/remote-ncaevent-maerz</sv:value></sv:property><sv:property sv:name=\"i18n:en-sponsorLogo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[124]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-town\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"14\">World wide web</sv:value></sv:property><sv:property sv:name=\"i18n:en-date\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-28T21:42:52.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"33\">https://nevercodealone.slack.com/</sv:value></sv:property><sv:property sv:name=\"i18n:en-previewImageLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"76\">https://nevercodealone.de/uploads/media/1920x1080/09/149-ncaevent-online.jpg</sv:value></sv:property><sv:property sv:name=\"i18n:en-donation\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"109\">Unser Online Event mit React und PHPStan. Gemeinsam mit dem Visual Studio Code Live Plugin aus dem Homeoffice</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventheaderimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[148]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"47\">2 Live Coding Speaker direkt aus dem HomeOffice</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"340\">&lt;p&gt;Unser Event findet remote statt und die beiden Sessions werden live über YouTube übertragen. Dazu gibt es auch einen ausführlichen Blog Post. Teilnehmer kommen über Slack an die Links für die Visual Studio Code Live Coding Session und dem Jitsi Link. Für alle anderen gibt es beide Sessions auch Live auf unserem YouTube Kanal.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewRight\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"800\">&lt;p&gt;&lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/remote-live-coding-event/\" title=\"Remote PHP-Training\"&gt;Blog Post zum Event&lt;/a&gt; - Gemeinsam neues Wissen lernen und anwenden. Wir setzen uns wieder ein für Softwarequalität und bessere Arbeitsbedingungen in der IT. Dieses mal haben wir einen ganz praktischen Ansatz und bringen Themen für Frontend und Backend Entwicklung zusammen. In aktuellen Anforderungen an Entwickler ist es wichtig gemeinsam über den Tellerrand zu schauen und nicht völlig getrenntes Inselwissen zu fördern. Zum Event geht es über &lt;a target=\"_blank\" href=\"http://nevercodealone.slack.com/\"&gt;unseren Slack Kanal&lt;/a&gt; und für alle gibt es eine &lt;a target=\"_blank\" href=\"https://www.youtube.com/channel/UCjVT6iJ_wg7OM0DkV5TpNCQ\"&gt;Live Übertragung auf YouTube&lt;/a&gt;.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactBodytext\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"567\">&lt;p&gt;Aktive Teilnehmer an dem Event brauchen eine lokale Installation der kostenlosen IDE Visual Studio Code. Für die persönliche Teilnahme am Live Coding ist die Installation des Live Share Plugins notwendig. Wenn du aber einfach nur verbal Teilnehmen möchtest ist das natürlich auch nur über ein Mikrofon oder Headset möglich. Falls du dich gar nicht in die Live Coding Session einbringen möchtest kannst du dir auch einfach das Live Video auf unserem YouTube Kanal anschauen. Wir haben leider nur eine begrenzte Anzahl von Live Teilnehmern zur verfügung.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationBackgroundImage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">conference</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:55:29.387+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:26:50.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:26:50.021+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-27T21:42:52.735+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">90</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterSpeaker\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterMember\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterHours\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">3</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewLeft\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"211\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/5_1wSjK_5G4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"48\">Remote Fullstack Web Developer Live Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"35\">Zeitplan Fullstack Remote #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"58\">Kostenloser Workshop als Remote-Session und 2 Top Speakern</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">10:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"51\">Moderne Frontend-Bibliotheken pragmatisch einsetzen</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[133]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1357\">&lt;p&gt;Stefan demonstriert zunächst, wie man mit Toolchains wie &lt;a target=\"_blank\" href=\"https://github.com/facebook/create-react-app\" title=\"Create React App\"&gt;CRA&lt;/a&gt; und &lt;a target=\"_blank\" href=\"https://cli.vuejs.org/\"&gt;Vue CLI&lt;/a&gt; blitzschnell neue SPAs und PWAs aufsetzt, geht dabei auch auf Details gut funktionierender &lt;a target=\"_blank\" href=\"https://symfony.com/doc/current/frontend/encore/advanced-config.html\"&gt;Webpack-Konfiguration&lt;/a&gt; ein und wie man sein Projekt für &lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/codeception-tutorial-best-practice-pageobject-data-attribute/\" title=\"Codeception Acceptance Testing\"&gt;Akzeptanz&lt;/a&gt;- und &lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/typo3camp-venlo-codeception-php-schulung/\"&gt;Unit-Tests&lt;/a&gt; mit Jest sowie die Nutzung moderner &lt;a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\"&gt;ECMAScript&lt;/a&gt;-/Typescript-Sprachmerkmale vorbereitet. Er stellt die gängigen Frontend-Bibliotheken React, Vue und Svelte vor und erläutert ihre bevorzugten CSS-Integrationen (modularized CSS, styled components und tailwind CSS). Stefan schließt mit einem Einstieg in statische Seitengeneratoren wie Gatsby oder 11ty, mit denen sich unfassbar schnelle, Backend-lose Webseiten generieren lassen und wie man sie auf gängigen PaaS-Providern wie Heroku, Netlify oder now.sh deployed.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableSpeaker#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">Stefan</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">13:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"50\">Statische Codeanalyse mit PHPStan und Captain Hook</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[141]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#1\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"409\">&lt;p&gt;Statische Code Analyse ist schnell und sehr zuverlässig. gerade beim Refactoring bestehender Legacy Projekte ist es es wichtiges Werkzeug. Wir schauen uns PHPStan als Tool an und schauen, wie man hier eigene Erweiterungen einbringt. In der Kombination mit Captain Hook kann man sehr viel Geschwindigkeit bei der Entwicklung rausholen. Der genaue Inhalt der Session wird nächste Woche bekannt gegeben.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableSpeaker#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">Sebastian</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"55\">Setup für Teilnehmer - Visual Studio Code und Mikrofon</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"46\">Links zum Setup und für das Live Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobTitle#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Visual Studio Code IDE</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"30\">https://code.visualstudio.com/</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobTitle#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"25\">Live Share Extension Pack</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobUrl#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"83\">https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobTitle#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Never Code Alone Slack</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobUrl#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">http://nevercodealone.slack.com/</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobTitle#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"25\">Blog Post zu diesem Event</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobUrl#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">https://blog.nevercodealone.de/</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobTitle#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"45\">Blog Post Visual Studio Code und Live Sharing</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-contactJobUrl#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"59\">https://blog.nevercodealone.de/visual-studio-code-phpstorm/</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"17\">contactPersonItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemImg#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[137]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemName#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">Roland Golla</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemJobTitle#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">Initiator</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemPhone#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">017624747727</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemXingUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"44\">https://www.xing.com/profile/Roland_Golla/cv</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-contactPersonItemLinkedinUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">https://www.linkedin.com/in/rolandgolla/</sv:value></sv:property><sv:property sv:name=\"i18n:en-optionalPrice\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-optinalButtonText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">Slack Registration</sv:value></sv:property><sv:property sv:name=\"i18n:en-faqInvisible\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"56\">https://blog.nevercodealone.de/remote-live-coding-event/</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Blog Post Remote Event</sv:value></sv:property><sv:property sv:name=\"i18n:de-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Remote #NCAEvent März</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:de-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:de-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">{\"ids\":[149]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">/remote-ncaevent-maerz</sv:value></sv:property><sv:property sv:name=\"i18n:de-sponsorLogo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[124]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-town\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"14\">World wide web</sv:value></sv:property><sv:property sv:name=\"i18n:de-date\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-28T19:22:55.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-eventLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"33\">https://nevercodealone.slack.com/</sv:value></sv:property><sv:property sv:name=\"i18n:de-previewImageLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"76\">https://nevercodealone.de/uploads/media/1920x1080/09/149-ncaevent-online.jpg</sv:value></sv:property><sv:property sv:name=\"i18n:de-blogLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"56\">https://blog.nevercodealone.de/remote-live-coding-event/</sv:value></sv:property><sv:property sv:name=\"i18n:de-blogLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Blog Post Remote Event</sv:value></sv:property><sv:property sv:name=\"i18n:de-donation\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-optionalPrice\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-optinalButtonText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">Slack Registration</sv:value></sv:property><sv:property sv:name=\"i18n:de-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"109\">Unser Online Event mit React und PHPStan. Gemeinsam mit dem Visual Studio Code Live Plugin aus dem Homeoffice</sv:value></sv:property><sv:property sv:name=\"i18n:de-eventheaderimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[148]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-speakerHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"47\">2 Live Coding Speaker direkt aus dem HomeOffice</sv:value></sv:property><sv:property sv:name=\"i18n:de-speakerSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"340\">&lt;p&gt;Unser Event findet remote statt und die beiden Sessions werden live über YouTube übertragen. Dazu gibt es auch einen ausführlichen Blog Post. Teilnehmer kommen über Slack an die Links für die Visual Studio Code Live Coding Session und dem Jitsi Link. Für alle anderen gibt es beide Sessions auch Live auf unserem YouTube Kanal.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-counterSpeaker\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-counterMember\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property><sv:property sv:name=\"i18n:de-counterHours\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">3</sv:value></sv:property><sv:property sv:name=\"i18n:de-overviewLeft\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"211\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/5_1wSjK_5G4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-overviewHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"48\">Remote Fullstack Web Developer Live Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:de-overviewRight\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"800\">&lt;p&gt;&lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/remote-live-coding-event/\" title=\"Remote PHP-Training\"&gt;Blog Post zum Event&lt;/a&gt; - Gemeinsam neues Wissen lernen und anwenden. Wir setzen uns wieder ein für Softwarequalität und bessere Arbeitsbedingungen in der IT. Dieses mal haben wir einen ganz praktischen Ansatz und bringen Themen für Frontend und Backend Entwicklung zusammen. In aktuellen Anforderungen an Entwickler ist es wichtig gemeinsam über den Tellerrand zu schauen und nicht völlig getrenntes Inselwissen zu fördern. Zum Event geht es über &lt;a target=\"_blank\" href=\"http://nevercodealone.slack.com/\"&gt;unseren Slack Kanal&lt;/a&gt; und für alle gibt es eine &lt;a target=\"_blank\" href=\"https://www.youtube.com/channel/UCjVT6iJ_wg7OM0DkV5TpNCQ\"&gt;Live Übertragung auf YouTube&lt;/a&gt;.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"35\">Zeitplan Fullstack Remote #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"58\">Kostenloser Workshop als Remote-Session und 2 Top Speakern</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-time#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">10:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableHeadline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"51\">Moderne Frontend-Bibliotheken pragmatisch einsetzen</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-images#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[133]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-alignRight#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableDescription#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1357\">&lt;p&gt;Stefan demonstriert zunächst, wie man mit Toolchains wie &lt;a target=\"_blank\" href=\"https://github.com/facebook/create-react-app\" title=\"Create React App\"&gt;CRA&lt;/a&gt; und &lt;a target=\"_blank\" href=\"https://cli.vuejs.org/\"&gt;Vue CLI&lt;/a&gt; blitzschnell neue SPAs und PWAs aufsetzt, geht dabei auch auf Details gut funktionierender &lt;a target=\"_blank\" href=\"https://symfony.com/doc/current/frontend/encore/advanced-config.html\"&gt;Webpack-Konfiguration&lt;/a&gt; ein und wie man sein Projekt für &lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/codeception-tutorial-best-practice-pageobject-data-attribute/\" title=\"Codeception Acceptance Testing\"&gt;Akzeptanz&lt;/a&gt;- und &lt;a target=\"_blank\" href=\"https://blog.nevercodealone.de/typo3camp-venlo-codeception-php-schulung/\"&gt;Unit-Tests&lt;/a&gt; mit Jest sowie die Nutzung moderner &lt;a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\"&gt;ECMAScript&lt;/a&gt;-/Typescript-Sprachmerkmale vorbereitet. Er stellt die gängigen Frontend-Bibliotheken React, Vue und Svelte vor und erläutert ihre bevorzugten CSS-Integrationen (modularized CSS, styled components und tailwind CSS). Stefan schließt mit einem Einstieg in statische Seitengeneratoren wie Gatsby oder 11ty, mit denen sich unfassbar schnelle, Backend-lose Webseiten generieren lassen und wie man sie auf gängigen PaaS-Providern wie Heroku, Netlify oder now.sh deployed.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableSpeaker#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">Stefan</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-time#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">13:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableHeadline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"50\">Statische Codeanalyse mit PHPStan und Captain Hook</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-images#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[141]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-alignRight#1\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableDescription#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"409\">&lt;p&gt;Statische Code Analyse ist schnell und sehr zuverlässig. gerade beim Refactoring bestehender Legacy Projekte ist es es wichtiges Werkzeug. Wir schauen uns PHPStan als Tool an und schauen, wie man hier eigene Erweiterungen einbringt. In der Kombination mit Captain Hook kann man sehr viel Geschwindigkeit bei der Entwicklung rausholen. Der genaue Inhalt der Session wird nächste Woche bekannt gegeben.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-timetableSpeaker#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">Sebastian</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"55\">Setup für Teilnehmer - Visual Studio Code und Mikrofon</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactBodytext\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"567\">&lt;p&gt;Aktive Teilnehmer an dem Event brauchen eine lokale Installation der kostenlosen IDE Visual Studio Code. Für die persönliche Teilnahme am Live Coding ist die Installation des Live Share Plugins notwendig. Wenn du aber einfach nur verbal Teilnehmen möchtest ist das natürlich auch nur über ein Mikrofon oder Headset möglich. Falls du dich gar nicht in die Live Coding Session einbringen möchtest kannst du dir auch einfach das Live Video auf unserem YouTube Kanal anschauen. Wir haben leider nur eine begrenzte Anzahl von Live Teilnehmern zur verfügung.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"46\">Links zum Setup und für das Live Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobTitle#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Visual Studio Code IDE</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"30\">https://code.visualstudio.com/</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobTitle#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"25\">Live Share Extension Pack</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobUrl#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"83\">https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobTitle#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">Never Code Alone Slack</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobUrl#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">http://nevercodealone.slack.com/</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobTitle#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"25\">Blog Post zu diesem Event</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobUrl#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">https://blog.nevercodealone.de/</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">contactJob</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobTitle#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"45\">Blog Post Visual Studio Code und Live Sharing</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-contactJobUrl#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"59\">https://blog.nevercodealone.de/visual-studio-code-phpstorm/</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"17\">contactPersonItem</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemImg#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"34\">{\"displayOption\":null,\"ids\":[137]}</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemName#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">Roland Golla</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemJobTitle#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">Initiator</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemPhone#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">017624747727</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemXingUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"44\">https://www.xing.com/profile/Roland_Golla/cv</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-contactPersonItemLinkedinUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">https://www.linkedin.com/in/rolandgolla/</sv:value></sv:property><sv:property sv:name=\"i18n:de-locationBackgroundImage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:de-faqInvisible\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">conference</sv:value></sv:property><sv:property sv:name=\"i18n:de-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:55.641+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:26:50.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T12:51:36.067+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:55.584+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:de-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:de-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">90</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactJobs-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:en-contactPersons-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-timeTableItems-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactJobs-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:de-contactPersons-length\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:de-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:de-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n',5,8),(126,'/cmf/example/routes/en/ncaevents/remote-ncaevent-maerz','/cmf/example/routes/en/ncaevents','remote-ncaevent-maerz','','default','d7541224-93c0-4026-ab79-8cb6a36229c3','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">d7541224-93c0-4026-ab79-8cb6a36229c3</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:55:29.404+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:55:29.404+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">93db3a49-b102-4603-a2b0-a9d98ae6caa3</sv:value></sv:property></sv:node>\n',NULL,6,21),(127,'/cmf/example/routes/en/ncaevents/remote-ncaevent-maerz','/cmf/example/routes/en/ncaevents','remote-ncaevent-maerz','','default_live','d7541224-93c0-4026-ab79-8cb6a36229c3','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">d7541224-93c0-4026-ab79-8cb6a36229c3</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:55:29.404+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-03-22T13:55:29.404+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">93db3a49-b102-4603-a2b0-a9d98ae6caa3</sv:value></sv:property></sv:node>\n',NULL,6,22),(128,'/cmf/example/routes/de','/cmf/example/routes','de','','default','84229364-ab2a-4664-b8b5-5b18d1ca178e','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">84229364-ab2a-4664-b8b5-5b18d1ca178e</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T12:44:04.876+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T12:44:04.876+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">f676c633-5556-4d1b-88ce-0652dc8126e8</sv:value></sv:property></sv:node>\n',NULL,4,3),(129,'/cmf/example/routes/de','/cmf/example/routes','de','','default_live','84229364-ab2a-4664-b8b5-5b18d1ca178e','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">84229364-ab2a-4664-b8b5-5b18d1ca178e</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T12:44:04.876+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T12:44:04.876+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">f676c633-5556-4d1b-88ce-0652dc8126e8</sv:value></sv:property></sv:node>\n',NULL,4,4),(130,'/cmf/example/routes/de/impressum','/cmf/example/routes/de','impressum','','default','b6bf69fe-87a5-4b52-8e40-bbb3bad756c3','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">b6bf69fe-87a5-4b52-8e40-bbb3bad756c3</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T16:23:14.503+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T16:23:14.503+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">e560f16e-330b-40ae-8a43-8702dfe3ba56</sv:value></sv:property></sv:node>\n',NULL,5,1),(131,'/cmf/example/routes/de/impressum','/cmf/example/routes/de','impressum','','default_live','b6bf69fe-87a5-4b52-8e40-bbb3bad756c3','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">b6bf69fe-87a5-4b52-8e40-bbb3bad756c3</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T16:23:14.503+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T16:23:14.503+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">e560f16e-330b-40ae-8a43-8702dfe3ba56</sv:value></sv:property></sv:node>\n',NULL,5,2),(132,'/cmf/example/routes/de/employer-branding','/cmf/example/routes/de','employer-branding','','default','299f9f77-48e8-4044-9ee3-ca46d115aa4a','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">299f9f77-48e8-4044-9ee3-ca46d115aa4a</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:16.193+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:16.193+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">5079f9ad-226e-4075-8b61-65f7a9e9a9f1</sv:value></sv:property></sv:node>\n',NULL,5,3),(133,'/cmf/example/routes/de/employer-branding','/cmf/example/routes/de','employer-branding','','default_live','299f9f77-48e8-4044-9ee3-ca46d115aa4a','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">299f9f77-48e8-4044-9ee3-ca46d115aa4a</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:16.193+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:16.193+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">5079f9ad-226e-4075-8b61-65f7a9e9a9f1</sv:value></sv:property></sv:node>\n',NULL,5,4),(134,'/cmf/example/routes/de/php-training','/cmf/example/routes/de','php-training','','default','1f3e934b-51d8-43fe-8262-573a368d7f32','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1f3e934b-51d8-43fe-8262-573a368d7f32</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:38.322+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:38.322+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">0dc1df39-423e-4f97-a58d-9aa67963c8b6</sv:value></sv:property></sv:node>\n',NULL,5,5),(135,'/cmf/example/routes/de/php-training','/cmf/example/routes/de','php-training','','default_live','1f3e934b-51d8-43fe-8262-573a368d7f32','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1f3e934b-51d8-43fe-8262-573a368d7f32</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:38.322+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:38.322+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">0dc1df39-423e-4f97-a58d-9aa67963c8b6</sv:value></sv:property></sv:node>\n',NULL,5,6),(136,'/cmf/example/routes/de/ncapaas','/cmf/example/routes/de','ncapaas','','default','09486012-7ace-403f-85e9-50e4cf2ef947','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">09486012-7ace-403f-85e9-50e4cf2ef947</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:48.399+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:48.399+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">33aa7de2-2b9c-4e49-a4d9-3a79bf55fd28</sv:value></sv:property></sv:node>\n',NULL,5,7),(137,'/cmf/example/routes/de/ncapaas','/cmf/example/routes/de','ncapaas','','default_live','09486012-7ace-403f-85e9-50e4cf2ef947','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">09486012-7ace-403f-85e9-50e4cf2ef947</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:48.399+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:15:48.399+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">33aa7de2-2b9c-4e49-a4d9-3a79bf55fd28</sv:value></sv:property></sv:node>\n',NULL,5,8),(138,'/cmf/example/routes/de/php-training/php-schulung-codeception-softwarequalitaet-im-team','/cmf/example/routes/de/php-training','php-schulung-codeception-softwarequalitaet-im-team','','default','0a9f08c4-10e8-49e6-ae4b-682d5191ff54','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">0a9f08c4-10e8-49e6-ae4b-682d5191ff54</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:16:17.648+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:16:17.648+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">89312946-b1d4-4c13-9a2f-b5a87bb20620</sv:value></sv:property></sv:node>\n',NULL,6,1),(139,'/cmf/example/routes/de/php-training/php-schulung-codeception-softwarequalitaet-im-team','/cmf/example/routes/de/php-training','php-schulung-codeception-softwarequalitaet-im-team','','default_live','0a9f08c4-10e8-49e6-ae4b-682d5191ff54','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">0a9f08c4-10e8-49e6-ae4b-682d5191ff54</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:16:17.648+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:16:17.648+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">89312946-b1d4-4c13-9a2f-b5a87bb20620</sv:value></sv:property></sv:node>\n',NULL,6,2),(140,'/cmf/example/routes/de/php-training/remote-php-training-mit-phpstan-codestandard-und-captain-hook','/cmf/example/routes/de/php-training','remote-php-training-mit-phpstan-codestandard-und-captain-hook','','default','6d82c382-47b4-4002-a5a6-556eb07a3d21','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">6d82c382-47b4-4002-a5a6-556eb07a3d21</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:16:59.466+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:16:59.466+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">ca3a8398-87bf-45ce-b975-2792a07b4d4c</sv:value></sv:property></sv:node>\n',NULL,6,3),(141,'/cmf/example/routes/de/php-training/remote-php-training-mit-phpstan-codestandard-und-captain-hook','/cmf/example/routes/de/php-training','remote-php-training-mit-phpstan-codestandard-und-captain-hook','','default_live','6d82c382-47b4-4002-a5a6-556eb07a3d21','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">6d82c382-47b4-4002-a5a6-556eb07a3d21</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:16:59.466+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:16:59.466+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">ca3a8398-87bf-45ce-b975-2792a07b4d4c</sv:value></sv:property></sv:node>\n',NULL,6,4),(142,'/cmf/example/routes/de/php-training/sulu-cms-php-schulung-symfony-framework','/cmf/example/routes/de/php-training','sulu-cms-php-schulung-symfony-framework','','default','5d60fa5b-413f-4286-adc5-ae81f64f0459','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">5d60fa5b-413f-4286-adc5-ae81f64f0459</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:17:09.944+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:17:09.944+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">5b622bc5-65f8-4b46-aab2-aa2a591dca1b</sv:value></sv:property></sv:node>\n',NULL,6,5),(143,'/cmf/example/routes/de/php-training/sulu-cms-php-schulung-symfony-framework','/cmf/example/routes/de/php-training','sulu-cms-php-schulung-symfony-framework','','default_live','5d60fa5b-413f-4286-adc5-ae81f64f0459','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">5d60fa5b-413f-4286-adc5-ae81f64f0459</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:17:09.944+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:17:09.944+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">5b622bc5-65f8-4b46-aab2-aa2a591dca1b</sv:value></sv:property></sv:node>\n',NULL,6,6),(144,'/cmf/example/routes/de/verlegt-fullstack-php-ncaevent','/cmf/example/routes/de','verlegt-fullstack-php-ncaevent','','default','518519a9-3418-42b7-8d80-50a49f951b3f','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">518519a9-3418-42b7-8d80-50a49f951b3f</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:20:47.023+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:20:47.023+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">87a33cd2-e4b8-448d-91e3-c4fee620ebc2</sv:value></sv:property></sv:node>\n',NULL,5,9),(145,'/cmf/example/routes/de/verlegt-fullstack-php-ncaevent','/cmf/example/routes/de','verlegt-fullstack-php-ncaevent','','default_live','518519a9-3418-42b7-8d80-50a49f951b3f','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">518519a9-3418-42b7-8d80-50a49f951b3f</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:20:47.023+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:20:47.023+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">87a33cd2-e4b8-448d-91e3-c4fee620ebc2</sv:value></sv:property></sv:node>\n',NULL,5,10),(146,'/cmf/example/routes/de/javascript-live-coding-apollo-optik','/cmf/example/routes/de','javascript-live-coding-apollo-optik','','default','1c50042b-126f-4feb-ae66-94d79342831e','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1c50042b-126f-4feb-ae66-94d79342831e</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:21:15.892+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:21:15.892+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">c99f91b1-2c61-424d-b5b2-a29ea75c3e37</sv:value></sv:property></sv:node>\n',NULL,5,11),(147,'/cmf/example/routes/de/javascript-live-coding-apollo-optik','/cmf/example/routes/de','javascript-live-coding-apollo-optik','','default_live','1c50042b-126f-4feb-ae66-94d79342831e','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1c50042b-126f-4feb-ae66-94d79342831e</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:21:15.892+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:21:15.892+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">c99f91b1-2c61-424d-b5b2-a29ea75c3e37</sv:value></sv:property></sv:node>\n',NULL,5,12),(148,'/cmf/example/routes/de/accenture-interactive-java','/cmf/example/routes/de','accenture-interactive-java','','default','1b0dc10e-db8d-4771-b482-2c56b364125c','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1b0dc10e-db8d-4771-b482-2c56b364125c</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:21:38.605+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:21:38.605+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">58045c9e-dcd5-43a1-a571-b164e6f4f364</sv:value></sv:property></sv:node>\n',NULL,5,13),(149,'/cmf/example/routes/de/accenture-interactive-java','/cmf/example/routes/de','accenture-interactive-java','','default_live','1b0dc10e-db8d-4771-b482-2c56b364125c','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1b0dc10e-db8d-4771-b482-2c56b364125c</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:21:38.605+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:21:38.605+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">58045c9e-dcd5-43a1-a571-b164e6f4f364</sv:value></sv:property></sv:node>\n',NULL,5,14),(150,'/cmf/example/routes/de/tarent-java-ncaevent','/cmf/example/routes/de','tarent-java-ncaevent','','default','c025f567-ab57-48f8-8a4f-3ced3fc56b1d','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">c025f567-ab57-48f8-8a4f-3ced3fc56b1d</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:05.872+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:05.872+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">511a6139-b414-492c-8270-438d302cf130</sv:value></sv:property></sv:node>\n',NULL,5,15),(151,'/cmf/example/routes/de/tarent-java-ncaevent','/cmf/example/routes/de','tarent-java-ncaevent','','default_live','c025f567-ab57-48f8-8a4f-3ced3fc56b1d','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">c025f567-ab57-48f8-8a4f-3ced3fc56b1d</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:05.872+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:05.872+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">511a6139-b414-492c-8270-438d302cf130</sv:value></sv:property></sv:node>\n',NULL,5,16),(152,'/cmf/example/routes/de/hall-of-fame','/cmf/example/routes/de','hall-of-fame','','default','1b730dcb-5d12-4964-9c8d-479b7515ec95','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1b730dcb-5d12-4964-9c8d-479b7515ec95</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:16.972+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:16.972+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">fbcd0fb4-73b4-40a9-bbc8-b4eb02c8d468</sv:value></sv:property></sv:node>\n',NULL,5,17),(153,'/cmf/example/routes/de/hall-of-fame','/cmf/example/routes/de','hall-of-fame','','default_live','1b730dcb-5d12-4964-9c8d-479b7515ec95','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1b730dcb-5d12-4964-9c8d-479b7515ec95</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:16.972+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:16.972+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">fbcd0fb4-73b4-40a9-bbc8-b4eb02c8d468</sv:value></sv:property></sv:node>\n',NULL,5,18),(154,'/cmf/example/routes/de/python-workshop-influencerdb-ncaevent','/cmf/example/routes/de','python-workshop-influencerdb-ncaevent','','default','be0d4ccc-32ef-4d56-9863-22634ae70b55','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">be0d4ccc-32ef-4d56-9863-22634ae70b55</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:27.061+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:27.061+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">8d831366-3f9c-4da9-99d3-b1056c705e32</sv:value></sv:property></sv:node>\n',NULL,5,19),(155,'/cmf/example/routes/de/python-workshop-influencerdb-ncaevent','/cmf/example/routes/de','python-workshop-influencerdb-ncaevent','','default_live','be0d4ccc-32ef-4d56-9863-22634ae70b55','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">be0d4ccc-32ef-4d56-9863-22634ae70b55</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:27.061+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:27.061+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">8d831366-3f9c-4da9-99d3-b1056c705e32</sv:value></sv:property></sv:node>\n',NULL,5,20),(156,'/cmf/example/routes/de/scala-workshop-otto-ncaevent','/cmf/example/routes/de','scala-workshop-otto-ncaevent','','default','72b8328b-ed47-4153-932d-dff07d9da622','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">72b8328b-ed47-4153-932d-dff07d9da622</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:46.113+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:46.113+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">74815cb8-5b50-4d33-a17b-3b8282cc9c43</sv:value></sv:property></sv:node>\n',NULL,5,21),(157,'/cmf/example/routes/de/scala-workshop-otto-ncaevent','/cmf/example/routes/de','scala-workshop-otto-ncaevent','','default_live','72b8328b-ed47-4153-932d-dff07d9da622','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">72b8328b-ed47-4153-932d-dff07d9da622</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:46.113+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:46.113+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">74815cb8-5b50-4d33-a17b-3b8282cc9c43</sv:value></sv:property></sv:node>\n',NULL,5,22),(158,'/cmf/example/routes/de/remote-ncaevent-maerz','/cmf/example/routes/de','remote-ncaevent-maerz','','default','3eaf9509-6fa2-4be9-a0f6-cf8f0f7ea1a7','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">3eaf9509-6fa2-4be9-a0f6-cf8f0f7ea1a7</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:55.655+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:55.655+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">93db3a49-b102-4603-a2b0-a9d98ae6caa3</sv:value></sv:property></sv:node>\n',NULL,5,23),(159,'/cmf/example/routes/de/remote-ncaevent-maerz','/cmf/example/routes/de','remote-ncaevent-maerz','','default_live','3eaf9509-6fa2-4be9-a0f6-cf8f0f7ea1a7','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">3eaf9509-6fa2-4be9-a0f6-cf8f0f7ea1a7</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:55.655+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2020-11-02T19:22:55.655+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">93db3a49-b102-4603-a2b0-a9d98ae6caa3</sv:value></sv:property></sv:node>\n',NULL,5,24);
/*!40000 ALTER TABLE `phpcr_nodes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phpcr_nodes_references`
--

DROP TABLE IF EXISTS `phpcr_nodes_references`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phpcr_nodes_references` (
  `source_id` int(11) NOT NULL,
  `source_property_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `target_id` int(11) NOT NULL,
  PRIMARY KEY (`source_id`,`source_property_name`,`target_id`),
  KEY `IDX_F3BF7E1158E0B66` (`target_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phpcr_nodes_references`
--

LOCK TABLES `phpcr_nodes_references` WRITE;
/*!40000 ALTER TABLE `phpcr_nodes_references` DISABLE KEYS */;
INSERT INTO `phpcr_nodes_references` VALUES (5,'i18n:de-blocks-snippets#0',55),(5,'i18n:en-blocks-snippets#0',55),(5,'i18n:en-blocks-snippets#1',55),(7,'sulu:content',5),(10,'i18n:de-blocks-snippets#0',57),(10,'i18n:en-blocks-snippets#0',57),(10,'i18n:en-blocks-snippets#1',57),(12,'sulu:content',10),(29,'i18n:de-internal_link',124),(29,'i18n:en-internal_link',124),(30,'i18n:de-internal_link',125),(30,'i18n:en-internal_link',125),(31,'sulu:content',29),(32,'sulu:content',30),(34,'sulu:content',33),(36,'sulu:content',35),(38,'sulu:content',37),(40,'sulu:content',39),(42,'sulu:content',41),(44,'sulu:content',43),(46,'sulu:content',45),(48,'sulu:content',47),(55,'i18n:de-slider-slider_link#1',112),(55,'i18n:en-slider-slider_link#1',112),(55,'i18n:en-slider-slider_link#2',37),(55,'i18n:en-slider-slider_link#3',45),(57,'i18n:de-slider-slider_link#1',114),(57,'i18n:en-slider-slider_link#1',114),(57,'i18n:en-slider-slider_link#2',39),(57,'i18n:en-slider-slider_link#3',47),(59,'sulu:content',102),(61,'sulu:content',103),(63,'sulu:content',68),(65,'sulu:content',69),(66,'sulu:content',68),(67,'sulu:content',69),(68,'sulu:content',62),(69,'sulu:content',64),(72,'sulu:content',70),(73,'sulu:content',71),(75,'sulu:content',74),(77,'sulu:content',76),(79,'sulu:content',78),(81,'sulu:content',80),(83,'sulu:content',82),(85,'sulu:content',84),(87,'sulu:content',86),(89,'sulu:content',88),(91,'sulu:content',102),(93,'sulu:content',103),(96,'sulu:content',94),(97,'sulu:content',95),(98,'sulu:content',102),(99,'sulu:content',103),(100,'sulu:content',102),(101,'sulu:content',103),(102,'sulu:content',58),(103,'sulu:content',60),(105,'sulu:content',104),(107,'sulu:content',106),(109,'sulu:content',108),(111,'sulu:content',110),(113,'sulu:content',116),(115,'sulu:content',117),(116,'sulu:content',112),(117,'sulu:content',114),(120,'sulu:content',118),(121,'sulu:content',119),(126,'sulu:content',124),(127,'sulu:content',125),(128,'sulu:content',5),(129,'sulu:content',10),(130,'sulu:content',82),(131,'sulu:content',84),(132,'sulu:content',37),(133,'sulu:content',39),(134,'sulu:content',41),(135,'sulu:content',43),(136,'sulu:content',78),(137,'sulu:content',80),(138,'sulu:content',108),(139,'sulu:content',110),(140,'sulu:content',112),(141,'sulu:content',114),(142,'sulu:content',118),(143,'sulu:content',119),(144,'sulu:content',104),(145,'sulu:content',106),(146,'sulu:content',86),(147,'sulu:content',88),(148,'sulu:content',70),(149,'sulu:content',71),(150,'sulu:content',94),(151,'sulu:content',95),(152,'sulu:content',74),(153,'sulu:content',76),(154,'sulu:content',62),(155,'sulu:content',64),(156,'sulu:content',58),(157,'sulu:content',60),(158,'sulu:content',124),(159,'sulu:content',125);
/*!40000 ALTER TABLE `phpcr_nodes_references` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phpcr_nodes_weakreferences`
--

DROP TABLE IF EXISTS `phpcr_nodes_weakreferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phpcr_nodes_weakreferences` (
  `source_id` int(11) NOT NULL,
  `source_property_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `target_id` int(11) NOT NULL,
  PRIMARY KEY (`source_id`,`source_property_name`,`target_id`),
  KEY `IDX_F0E4F6FA158E0B66` (`target_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phpcr_nodes_weakreferences`
--

LOCK TABLES `phpcr_nodes_weakreferences` WRITE;
/*!40000 ALTER TABLE `phpcr_nodes_weakreferences` DISABLE KEYS */;
/*!40000 ALTER TABLE `phpcr_nodes_weakreferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phpcr_type_childs`
--

DROP TABLE IF EXISTS `phpcr_type_childs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phpcr_type_childs` (
  `node_type_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `protected` tinyint(1) NOT NULL,
  `auto_created` tinyint(1) NOT NULL,
  `mandatory` tinyint(1) NOT NULL,
  `on_parent_version` int(11) NOT NULL,
  `primary_types` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `default_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phpcr_type_childs`
--

LOCK TABLES `phpcr_type_childs` WRITE;
/*!40000 ALTER TABLE `phpcr_type_childs` DISABLE KEYS */;
INSERT INTO `phpcr_type_childs` VALUES (10,'*',0,0,0,1,'phpcrmig:version',NULL);
/*!40000 ALTER TABLE `phpcr_type_childs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phpcr_type_nodes`
--

DROP TABLE IF EXISTS `phpcr_type_nodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phpcr_type_nodes` (
  `node_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `supertypes` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_abstract` tinyint(1) NOT NULL,
  `is_mixin` tinyint(1) NOT NULL,
  `queryable` tinyint(1) NOT NULL,
  `orderable_child_nodes` tinyint(1) NOT NULL,
  `primary_item` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`node_type_id`),
  UNIQUE KEY `UNIQ_34B0A8095E237E06` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phpcr_type_nodes`
--

LOCK TABLES `phpcr_type_nodes` WRITE;
/*!40000 ALTER TABLE `phpcr_type_nodes` DISABLE KEYS */;
INSERT INTO `phpcr_type_nodes` VALUES (1,'sulu:base','mix:referenceable',1,1,0,0,NULL),(2,'sulu:path','sulu:base',0,1,0,0,NULL),(3,'sulu:content','sulu:base',0,1,0,0,NULL),(4,'sulu:snippet','sulu:content',0,1,0,0,NULL),(5,'sulu:page','sulu:content',0,1,0,0,NULL),(6,'sulu:home','sulu:content',0,1,0,0,NULL),(7,'sulu:custom_url','sulu:base',0,1,0,0,NULL),(8,'sulu:custom_url_route','sulu:base',0,1,0,0,NULL),(9,'phpcrmig:version','nt:base mix:created',0,0,1,0,NULL),(10,'phpcrmig:versions','nt:base',0,0,1,0,NULL);
/*!40000 ALTER TABLE `phpcr_type_nodes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phpcr_type_props`
--

DROP TABLE IF EXISTS `phpcr_type_props`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phpcr_type_props` (
  `node_type_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `protected` tinyint(1) NOT NULL,
  `auto_created` tinyint(1) NOT NULL,
  `mandatory` tinyint(1) NOT NULL,
  `on_parent_version` int(11) NOT NULL,
  `multiple` tinyint(1) NOT NULL,
  `fulltext_searchable` tinyint(1) NOT NULL,
  `query_orderable` tinyint(1) NOT NULL,
  `required_type` int(11) NOT NULL,
  `query_operators` int(11) NOT NULL,
  `default_value` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`node_type_id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phpcr_type_props`
--

LOCK TABLES `phpcr_type_props` WRITE;
/*!40000 ALTER TABLE `phpcr_type_props` DISABLE KEYS */;
INSERT INTO `phpcr_type_props` VALUES (2,'sulu:content',0,0,1,1,0,0,0,9,0,NULL),(2,'sulu:history',0,1,1,1,0,0,0,6,0,'');
/*!40000 ALTER TABLE `phpcr_type_props` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phpcr_workspaces`
--

DROP TABLE IF EXISTS `phpcr_workspaces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phpcr_workspaces` (
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phpcr_workspaces`
--

LOCK TABLES `phpcr_workspaces` WRITE;
/*!40000 ALTER TABLE `phpcr_workspaces` DISABLE KEYS */;
INSERT INTO `phpcr_workspaces` VALUES ('default'),('default_live');
/*!40000 ALTER TABLE `phpcr_workspaces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ro_routes`
--

DROP TABLE IF EXISTS `ro_routes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ro_routes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `target_id` int(11) DEFAULT NULL,
  `path` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `entity_class` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `entity_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `history` tinyint(1) NOT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_671DB7A4B548B0F4180C698` (`path`,`locale`),
  KEY `IDX_671DB7A4158E0B66` (`target_id`),
  KEY `IDX_671DB7A4DBF11E1D` (`idUsersCreator`),
  KEY `IDX_671DB7A430D07CD5` (`idUsersChanger`),
  KEY `IDX_671DB7A4B548B0F` (`path`),
  KEY `IDX_671DB7A44180C698` (`locale`),
  CONSTRAINT `FK_671DB7A4158E0B66` FOREIGN KEY (`target_id`) REFERENCES `ro_routes` (`id`),
  CONSTRAINT `FK_671DB7A430D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_671DB7A4DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ro_routes`
--

LOCK TABLES `ro_routes` WRITE;
/*!40000 ALTER TABLE `ro_routes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ro_routes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_access_controls`
--

DROP TABLE IF EXISTS `se_access_controls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_access_controls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permissions` smallint(6) NOT NULL,
  `entityId` int(11) NOT NULL,
  `entityClass` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idRoles` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_C526DC52A1FA6DDA` (`idRoles`),
  KEY `IDX_C526DC52F62829FC` (`entityId`),
  KEY `IDX_C526DC523963FFAB` (`entityClass`),
  CONSTRAINT `FK_C526DC52A1FA6DDA` FOREIGN KEY (`idRoles`) REFERENCES `se_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_access_controls`
--

LOCK TABLES `se_access_controls` WRITE;
/*!40000 ALTER TABLE `se_access_controls` DISABLE KEYS */;
/*!40000 ALTER TABLE `se_access_controls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_group_roles`
--

DROP TABLE IF EXISTS `se_group_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_group_roles` (
  `idGroups` int(11) NOT NULL,
  `idRoles` int(11) NOT NULL,
  PRIMARY KEY (`idGroups`,`idRoles`),
  KEY `IDX_9713F725937C91EA` (`idGroups`),
  KEY `IDX_9713F725A1FA6DDA` (`idRoles`),
  CONSTRAINT `FK_9713F725937C91EA` FOREIGN KEY (`idGroups`) REFERENCES `se_groups` (`id`),
  CONSTRAINT `FK_9713F725A1FA6DDA` FOREIGN KEY (`idRoles`) REFERENCES `se_roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_group_roles`
--

LOCK TABLES `se_group_roles` WRITE;
/*!40000 ALTER TABLE `se_group_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `se_group_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_groups`
--

DROP TABLE IF EXISTS `se_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `depth` int(11) NOT NULL,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idGroupsParent` int(11) DEFAULT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_231E44ECBF274AB0` (`idGroupsParent`),
  KEY `IDX_231E44ECDBF11E1D` (`idUsersCreator`),
  KEY `IDX_231E44EC30D07CD5` (`idUsersChanger`),
  CONSTRAINT `FK_231E44EC30D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_231E44ECBF274AB0` FOREIGN KEY (`idGroupsParent`) REFERENCES `se_groups` (`id`),
  CONSTRAINT `FK_231E44ECDBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_groups`
--

LOCK TABLES `se_groups` WRITE;
/*!40000 ALTER TABLE `se_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `se_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_permissions`
--

DROP TABLE IF EXISTS `se_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `context` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `module` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `permissions` smallint(6) NOT NULL,
  `idRoles` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_5CEC3EEAE25D857EC242628A1FA6DDA` (`context`,`module`,`idRoles`),
  KEY `IDX_5CEC3EEAA1FA6DDA` (`idRoles`),
  CONSTRAINT `FK_5CEC3EEAA1FA6DDA` FOREIGN KEY (`idRoles`) REFERENCES `se_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_permissions`
--

LOCK TABLES `se_permissions` WRITE;
/*!40000 ALTER TABLE `se_permissions` DISABLE KEYS */;
INSERT INTO `se_permissions` VALUES (1,'sulu.contact.people',NULL,127,1),(2,'sulu.contact.organizations',NULL,127,1),(3,'sulu.media.collections',NULL,127,1),(4,'sulu.media.system_collections',NULL,127,1),(5,'sulu.security.roles',NULL,127,1),(6,'sulu.security.groups',NULL,127,1),(7,'sulu.security.users',NULL,127,1),(8,'sulu.settings.categories',NULL,127,1),(9,'sulu.settings.tags',NULL,127,1),(10,'sulu.global.snippets',NULL,127,1),(11,'sulu.webspaces.example.default-snippets',NULL,127,1),(12,'sulu.webspaces.example',NULL,127,1),(13,'sulu.webspaces.example.analytics',NULL,127,1),(14,'sulu.webspaces.example.custom-urls',NULL,127,1),(15,'sulu.contact.people',NULL,127,2),(16,'sulu.contact.organizations',NULL,127,2),(17,'sulu.media.collections',NULL,127,2),(18,'sulu.media.system_collections',NULL,127,2),(19,'sulu.security.roles',NULL,127,2),(20,'sulu.security.groups',NULL,127,2),(21,'sulu.security.users',NULL,127,2),(22,'sulu.settings.categories',NULL,127,2),(23,'sulu.settings.tags',NULL,127,2),(24,'sulu.global.snippets',NULL,127,2),(25,'sulu.webspaces.example.default-snippets',NULL,127,2),(26,'sulu.webspaces.example',NULL,127,2),(27,'sulu.webspaces.example.analytics',NULL,127,2),(28,'sulu.webspaces.example.custom-urls',NULL,127,2),(29,'sulu.form.forms',NULL,120,2),(30,'sulu.form.forms',NULL,120,1);
/*!40000 ALTER TABLE `se_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_role_settings`
--

DROP TABLE IF EXISTS `se_role_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_role_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `settingKey` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json_array)',
  `roleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_DAD1C8CB3AA9950BB8C2FD88` (`settingKey`,`roleId`),
  KEY `IDX_DAD1C8CBB8C2FD88` (`roleId`),
  KEY `IDX_DAD1C8CB3AA9950B` (`settingKey`),
  CONSTRAINT `FK_DAD1C8CBB8C2FD88` FOREIGN KEY (`roleId`) REFERENCES `se_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_role_settings`
--

LOCK TABLES `se_role_settings` WRITE;
/*!40000 ALTER TABLE `se_role_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `se_role_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_roles`
--

DROP TABLE IF EXISTS `se_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `securitySystem` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idSecurityTypes` int(11) DEFAULT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  `role_key` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_13B749A05E237E06` (`name`),
  UNIQUE KEY `UNIQ_13B749A03EF22FDB` (`role_key`),
  KEY `IDX_13B749A0D02106C0` (`idSecurityTypes`),
  KEY `IDX_13B749A0DBF11E1D` (`idUsersCreator`),
  KEY `IDX_13B749A030D07CD5` (`idUsersChanger`),
  CONSTRAINT `FK_13B749A030D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_13B749A0D02106C0` FOREIGN KEY (`idSecurityTypes`) REFERENCES `se_security_types` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_13B749A0DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_roles`
--

LOCK TABLES `se_roles` WRITE;
/*!40000 ALTER TABLE `se_roles` DISABLE KEYS */;
INSERT INTO `se_roles` VALUES (1,'User','Sulu','2019-01-07 09:33:49','2019-01-07 09:33:49',NULL,NULL,NULL,NULL),(2,'Admin','Sulu','2019-03-13 12:44:34','2019-03-13 12:44:34',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `se_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_security_types`
--

DROP TABLE IF EXISTS `se_security_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_security_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_security_types`
--

LOCK TABLES `se_security_types` WRITE;
/*!40000 ALTER TABLE `se_security_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `se_security_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_user_groups`
--

DROP TABLE IF EXISTS `se_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `locale` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `idGroups` int(11) DEFAULT NULL,
  `idUsers` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_E43ED0C8937C91EA` (`idGroups`),
  KEY `IDX_E43ED0C8347E6F4` (`idUsers`),
  CONSTRAINT `FK_E43ED0C8347E6F4` FOREIGN KEY (`idUsers`) REFERENCES `se_users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_E43ED0C8937C91EA` FOREIGN KEY (`idGroups`) REFERENCES `se_groups` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_user_groups`
--

LOCK TABLES `se_user_groups` WRITE;
/*!40000 ALTER TABLE `se_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `se_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_user_roles`
--

DROP TABLE IF EXISTS `se_user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_user_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `locale` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `idUsers` int(11) DEFAULT NULL,
  `idRoles` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_E48BD9DB347E6F4` (`idUsers`),
  KEY `IDX_E48BD9DBA1FA6DDA` (`idRoles`),
  CONSTRAINT `FK_E48BD9DB347E6F4` FOREIGN KEY (`idUsers`) REFERENCES `se_users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_E48BD9DBA1FA6DDA` FOREIGN KEY (`idRoles`) REFERENCES `se_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_user_roles`
--

LOCK TABLES `se_user_roles` WRITE;
/*!40000 ALTER TABLE `se_user_roles` DISABLE KEYS */;
INSERT INTO `se_user_roles` VALUES (1,'[\"en\",\"de\"]',1,1),(2,'[\"en\"]',2,2),(3,'[\"en\"]',3,2),(4,'[\"en\"]',4,2);
/*!40000 ALTER TABLE `se_user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_user_settings`
--

DROP TABLE IF EXISTS `se_user_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_user_settings` (
  `settingsValue` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `settingsKey` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idUsers` int(11) NOT NULL,
  PRIMARY KEY (`settingsKey`,`idUsers`),
  KEY `IDX_108FCAFA347E6F4` (`idUsers`),
  CONSTRAINT `FK_108FCAFA347E6F4` FOREIGN KEY (`idUsers`) REFERENCES `se_users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_user_settings`
--

LOCK TABLES `se_user_settings` WRITE;
/*!40000 ALTER TABLE `se_user_settings` DISABLE KEYS */;
INSERT INTO `se_user_settings` VALUES ('true','sulu_admin.application.navigation_pinned',1),('\"f676c633-5556-4d1b-88ce-0652dc8126e8\"','sulu_admin.list_store.analytics.list.active',1),('10','sulu_admin.list_store.analytics.list.limit',1),('3','sulu_admin.list_store.categories.list.active',1),('10','sulu_admin.list_store.categories.list.limit',1),('\"name\"','sulu_admin.list_store.categories.list.sort_column',1),('\"asc\"','sulu_admin.list_store.categories.list.sort_order',1),('10','sulu_admin.list_store.categories.selection.limit',1),('10','sulu_admin.list_store.categories.single_list_overlay.limit',1),('10','sulu_admin.list_store.collections.media_overview.limit',1),('10','sulu_admin.list_store.collections.media_overview.limit',3),('\"title\"','sulu_admin.list_store.collections.media_overview.sort_column',1),('\"title\"','sulu_admin.list_store.collections.media_overview.sort_column',3),('\"asc\"','sulu_admin.list_store.collections.media_overview.sort_order',1),('\"asc\"','sulu_admin.list_store.collections.media_overview.sort_order',3),('10','sulu_admin.list_store.collections.media_selection_overlay.limit',1),('10','sulu_admin.list_store.collections.single_list_overlay.limit',1),('10','sulu_admin.list_store.contacts.list.limit',1),('10','sulu_admin.list_store.contacts.list.limit',4),('10','sulu_admin.list_store.contacts.single_list_overlay.limit',1),('\"f676c633-5556-4d1b-88ce-0652dc8126e8\"','sulu_admin.list_store.custom_urls.list.active',1),('10','sulu_admin.list_store.custom_urls.list.limit',1),('10','sulu_admin.list_store.media.contact_media.limit',1),('10','sulu_admin.list_store.media.contact_media.limit',4),('10','sulu_admin.list_store.media.media_overview.limit',1),('10','sulu_admin.list_store.media.media_overview.limit',3),('10','sulu_admin.list_store.media.media_selection_overlay.limit',1),('10','sulu_admin.list_store.media.single_list_overlay.limit',1),('\"ca3a8398-87bf-45ce-b975-2792a07b4d4c\"','sulu_admin.list_store.pages.multi_list_overlay.active',1),('\"5079f9ad-226e-4075-8b61-65f7a9e9a9f1\"','sulu_admin.list_store.pages.page_list_example.active',1),('\"a6d8539f-e8bf-4638-9555-acde15a8489f\"','sulu_admin.list_store.pages.page_list_example.active',3),('\"42e9cec4-08cf-460f-bba3-fa413daf6876\"','sulu_admin.list_store.pages.page_list_example.active',4),('\"0dc1df39-423e-4f97-a58d-9aa67963c8b6\"','sulu_admin.list_store.pages.single_list_overlay.active',1),('10','sulu_admin.list_store.pages.single_list_overlay.limit',1),('\"58045c9e-dcd5-43a1-a571-b164e6f4f364\"','sulu_admin.list_store.pages.webspace_overview_example.active',1),('\"58045c9e-dcd5-43a1-a571-b164e6f4f364\"','sulu_admin.list_store.pages.webspace_overview_example.active',3),('10','sulu_admin.list_store.pages.webspace_overview_example.limit',1),('10','sulu_admin.list_store.roles.list.limit',1),('10','sulu_admin.list_store.snippets.list.limit',1),('\"example\"','sulu_page.webspace_overview.webspace',1),('\"example\"','sulu_page.webspace_tabs.webspace',3);
/*!40000 ALTER TABLE `se_user_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_users`
--

DROP TABLE IF EXISTS `se_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salt` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locked` tinyint(1) NOT NULL DEFAULT 0,
  `enabled` tinyint(1) NOT NULL DEFAULT 1,
  `lastLogin` datetime DEFAULT NULL,
  `confirmationKey` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `passwordResetToken` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `passwordResetTokenExpiresAt` datetime DEFAULT NULL,
  `passwordResetTokenEmailsSent` int(11) DEFAULT 0,
  `privateKey` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apiKey` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '(DC2Type:guid)',
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idContacts` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_B10AC28EF85E0677` (`username`),
  UNIQUE KEY `UNIQ_B10AC28E60E33F28` (`idContacts`),
  UNIQUE KEY `UNIQ_B10AC28EADC1CD13` (`passwordResetToken`),
  UNIQUE KEY `UNIQ_B10AC28EE7927C74` (`email`),
  CONSTRAINT `FK_B10AC28E60E33F28` FOREIGN KEY (`idContacts`) REFERENCES `co_contacts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_users`
--

LOCK TABLES `se_users` WRITE;
/*!40000 ALTER TABLE `se_users` DISABLE KEYS */;
INSERT INTO `se_users` VALUES (1,'rgolla','$2y$13$3qld1FmqMjY8v2PxkCZ0du4CNhTX8J9xUDzHyrCpPu4Kl035rcGfq','en','3zkujsfDxL67r7tFWK0ngsaeShXeCZVFMPD98IWH0Mk=',0,1,'2020-11-12 12:11:41',NULL,NULL,NULL,NULL,NULL,'5a83e057c11f5aab98500037a7791bdd','rolandgolla@gmail.com',1),(2,'admin','$2y$13$o3tRurCBvKgFrH2LYtOU6u2OD31qPTN8eO2AC/UwEshbQmZTG9wG.','en','bP54gqR1Royd4gn9RSqdYJuOdyL2FxxrPteZmFh9Q1E=',0,1,'2019-03-13 12:53:54',NULL,NULL,NULL,NULL,NULL,'4a21beb5b42df759c1f2b60d4ea6c325','nevercodealone@gmail.com',2),(3,'susi','$2y$13$U/yEN.emYcrb6L8DCwHW5OfHEiYTB7RY64LUbh30u.8cUKjkPSAPm','en','ZoU5AtmuBK+SbDa2oSIBNyCfHKAgNUzl+jyjcCJc/4k=',0,1,'2019-08-28 14:20:41',NULL,NULL,NULL,NULL,NULL,'e725d0d3faa8d6fa0ed1fd4a4b937d34','witteler@gmax.de',3),(4,'antony','$2y$13$KNkzXOQqJkwM8/j5CkzHFegUY6rpTs2reoBJDWsyoEWCt2qwIc5ze','en','BRMSSMiofLn7MW6pHFwtS00NJNv0POAiVKL4K/hj5q0=',0,1,'2020-02-19 08:22:08',NULL,NULL,NULL,NULL,NULL,'b662fd1f41b2c49add1a4487232d7fdd','ak@digitalessence.de',4);
/*!40000 ALTER TABLE `se_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ta_tags`
--

DROP TABLE IF EXISTS `ta_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ta_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_B258E4995E237E06` (`name`),
  KEY `IDX_B258E499DBF11E1D` (`idUsersCreator`),
  KEY `IDX_B258E49930D07CD5` (`idUsersChanger`),
  CONSTRAINT `FK_B258E49930D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_B258E499DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ta_tags`
--

LOCK TABLES `ta_tags` WRITE;
/*!40000 ALTER TABLE `ta_tags` DISABLE KEYS */;
INSERT INTO `ta_tags` VALUES (1,'Vue.js','2020-02-19 08:24:35','2020-02-19 08:24:35',4,4),(2,'Vue','2020-02-19 08:24:36','2020-02-19 08:24:36',4,4),(3,'Vuejs','2020-02-19 08:24:36','2020-02-19 08:24:36',4,4),(4,'React','2020-02-19 08:24:36','2020-02-19 08:24:36',4,4),(5,'React.js','2020-02-19 08:24:36','2020-02-19 08:24:36',4,4),(6,'JavaScript','2020-02-19 08:24:36','2020-02-19 08:24:36',4,4),(7,'EcmaScript','2020-02-19 08:24:36','2020-02-19 08:24:36',4,4),(8,'CSS','2020-02-19 08:24:36','2020-02-19 08:24:36',4,4),(9,'HTML','2020-02-19 08:24:36','2020-02-19 08:24:36',4,4);
/*!40000 ALTER TABLE `ta_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `we_analytics`
--

DROP TABLE IF EXISTS `we_analytics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `we_analytics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `webspace_key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `all_domains` tinyint(1) NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json_array)',
  `type` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_4E50BB8D1640EFD3` (`all_domains`),
  KEY `IDX_4E50BB8DAE248174` (`webspace_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `we_analytics`
--

LOCK TABLES `we_analytics` WRITE;
/*!40000 ALTER TABLE `we_analytics` DISABLE KEYS */;
/*!40000 ALTER TABLE `we_analytics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `we_analytics_domains`
--

DROP TABLE IF EXISTS `we_analytics_domains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `we_analytics_domains` (
  `analytics` int(11) NOT NULL,
  `domain` int(11) NOT NULL,
  PRIMARY KEY (`analytics`,`domain`),
  KEY `IDX_F9323B6EEAC2E688` (`analytics`),
  KEY `IDX_F9323B6EA7A91E0B` (`domain`),
  CONSTRAINT `FK_F9323B6EA7A91E0B` FOREIGN KEY (`domain`) REFERENCES `we_domains` (`id`),
  CONSTRAINT `FK_F9323B6EEAC2E688` FOREIGN KEY (`analytics`) REFERENCES `we_analytics` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `we_analytics_domains`
--

LOCK TABLES `we_analytics_domains` WRITE;
/*!40000 ALTER TABLE `we_analytics_domains` DISABLE KEYS */;
/*!40000 ALTER TABLE `we_analytics_domains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `we_domains`
--

DROP TABLE IF EXISTS `we_domains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `we_domains` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `environment` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_7CFAB3F5F47645AE` (`url`),
  KEY `IDX_7CFAB3F54626DE22` (`environment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `we_domains`
--

LOCK TABLES `we_domains` WRITE;
/*!40000 ALTER TABLE `we_domains` DISABLE KEYS */;
/*!40000 ALTER TABLE `we_domains` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-04  1:01:03