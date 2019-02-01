-- MySQL dump 10.17  Distrib 10.3.11-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: nca_sulu
-- ------------------------------------------------------
-- Server version	10.3.11-MariaDB

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ca_categories`
--

LOCK TABLES `ca_categories` WRITE;
/*!40000 ALTER TABLE `ca_categories` DISABLE KEYS */;
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
  PRIMARY KEY (`idCategoryTranslations`,`idMedia`),
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ca_category_translations`
--

LOCK TABLES `ca_category_translations` WRITE;
/*!40000 ALTER TABLE `ca_category_translations` DISABLE KEYS */;
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
  `idCountries` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_26E9A6142A37021A` (`idAdressTypes`),
  KEY `IDX_26E9A614A18CC0FB` (`idCountries`),
  CONSTRAINT `FK_26E9A6142A37021A` FOREIGN KEY (`idAdressTypes`) REFERENCES `co_address_types` (`id`),
  CONSTRAINT `FK_26E9A614A18CC0FB` FOREIGN KEY (`idCountries`) REFERENCES `co_countries` (`id`)
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_contacts`
--

LOCK TABLES `co_contacts` WRITE;
/*!40000 ALTER TABLE `co_contacts` DISABLE KEYS */;
INSERT INTO `co_contacts` VALUES (1,NULL,'Adam',NULL,'Ministrator',NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2019-01-07 09:33:49','2019-01-07 09:33:49',NULL,NULL,NULL);
/*!40000 ALTER TABLE `co_contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_countries`
--

DROP TABLE IF EXISTS `co_countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `co_countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=248 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_countries`
--

LOCK TABLES `co_countries` WRITE;
/*!40000 ALTER TABLE `co_countries` DISABLE KEYS */;
INSERT INTO `co_countries` VALUES (1,'Afghanistan','AF'),(2,'Åland Islands','AX'),(3,'Albania','AL'),(4,'Algeria','DZ'),(5,'American Samoa','AS'),(6,'Andorra','AD'),(7,'Angola','AO'),(8,'Anguilla','AI'),(9,'Antarctica','AQ'),(10,'Antigua and Barbuda','AG'),(11,'Argentina','AR'),(12,'Armenia','AM'),(13,'Aruba','AW'),(14,'Australia','AU'),(15,'Austria','AT'),(16,'Azerbaijan','AZ'),(17,'Bahamas','BS'),(18,'Bahrain','BH'),(19,'Bangladesh','BD'),(20,'Barbados','BB'),(21,'Belarus','BY'),(22,'Belgium','BE'),(23,'Belize','BZ'),(24,'Benin','BJ'),(25,'Bermuda','BM'),(26,'Bhutan','BT'),(27,'Bolivia','BO'),(28,'Bonaire, Sint Eustatius and Saba','BQ'),(29,'Bosnia and Herzegovina','BA'),(30,'Botswana','BW'),(31,'Bouvet Island','BV'),(32,'Brazil','BR'),(33,'British Indian Ocean Territory','IO'),(34,'Brunei Darussalam','BN'),(35,'Bulgaria','BG'),(36,'Burkina Faso','BF'),(37,'Burundi','BI'),(38,'Cambodia','KH'),(39,'Cameroon','CM'),(40,'Canada','CA'),(41,'Cape Verde','CV'),(42,'Cayman Islands','KY'),(43,'Central African Republic','CF'),(44,'Chad','TD'),(45,'Chile','CL'),(46,'China','CN'),(47,'Christmas Island','CX'),(48,'Cocos (Keeling) Islands','CC'),(49,'Colombia','CO'),(50,'Comoros','KM'),(51,'Congo','CG'),(52,'Cook Islands','CK'),(53,'Costa Rica','CR'),(54,'Côte d\'Ivoire','CI'),(55,'Croatia','HR'),(56,'Cuba','CU'),(57,'Curaçao','CW'),(58,'Cyprus','CY'),(59,'Czech Republic','CZ'),(60,'Denmark','DK'),(61,'Djibouti','DJ'),(62,'Dominica','DM'),(63,'Dominican Republic','DO'),(64,'Ecuador','EC'),(65,'Egypt','EG'),(66,'El Salvador','SV'),(67,'Equatorial Guinea','GQ'),(68,'Eritrea','ER'),(69,'Estonia','EE'),(70,'Ethiopia','ET'),(71,'Falkland Islands','FK'),(72,'Faroe Islands','FO'),(73,'Fiji','FJ'),(74,'Finland','FI'),(75,'France','FR'),(76,'French Guiana','GF'),(77,'French Polynesia','PF'),(78,'French Southern Territories','TF'),(79,'Gabon','GA'),(80,'Gambia','GM'),(81,'Georgia','GE'),(82,'Germany','DE'),(83,'Ghana','GH'),(84,'Gibraltar','GI'),(85,'Greece','GR'),(86,'Greenland','GL'),(87,'Grenada','GD'),(88,'Guadeloupe','GP'),(89,'Guam','GU'),(90,'Guatemala','GT'),(91,'Guernsey','GG'),(92,'Guinea','GN'),(93,'Guinea-Bissau','GW'),(94,'Guyana','GY'),(95,'Haiti','HT'),(96,'Heard Island and McDonald Islands','HM'),(97,'Holy See','VA'),(98,'Honduras','HN'),(99,'Hong Kong','HK'),(100,'Hungary','HU'),(101,'Iceland','IS'),(102,'India','IN'),(103,'Indonesia','ID'),(104,'Iran','IR'),(105,'Iraq','IQ'),(106,'Ireland','IE'),(107,'Isle of Man','IM'),(108,'Israel','IL'),(109,'Italy','IT'),(110,'Jamaica','JM'),(111,'Japan','JP'),(112,'Jersey','JE'),(113,'Jordan','JO'),(114,'Kazakhstan','KZ'),(115,'Kenya','KE'),(116,'Kiribati','KI'),(117,'Korea','KR'),(118,'Kuwait','KW'),(119,'Kyrgyzstan','KG'),(120,'Lao People\'s Democratic Republic','LA'),(121,'Latvia','LV'),(122,'Lebanon','LB'),(123,'Lesotho','LS'),(124,'Liberia','LR'),(125,'Libya','LY'),(126,'Liechtenstein','LI'),(127,'Lithuania','LT'),(128,'Luxembourg','LU'),(129,'Macao','MO'),(130,'Macedonia','MK'),(131,'Madagascar','MG'),(132,'Malawi','MW'),(133,'Malaysia','MY'),(134,'Maldives','MV'),(135,'Mali','ML'),(136,'Malta','MT'),(137,'Marshall Islands','MH'),(138,'Martinique','MQ'),(139,'Mauritania','MR'),(140,'Mauritius','MU'),(141,'Mayotte','YT'),(142,'Mexico','MX'),(143,'Micronesia','FM'),(144,'Moldova','MD'),(145,'Monaco','MC'),(146,'Mongolia','MN'),(147,'Montenegro','ME'),(148,'Montserrat','MS'),(149,'Morocco','MA'),(150,'Mozambique','MZ'),(151,'Myanmar','MM'),(152,'Namibia','NA'),(153,'Nauru','NR'),(154,'Nepal','NP'),(155,'Netherlands','NL'),(156,'New Caledonia','NC'),(157,'New Zealand','NZ'),(158,'Nicaragua','NI'),(159,'Niger','NE'),(160,'Nigeria','NG'),(161,'Niue','NU'),(162,'Norfolk Island','NF'),(163,'Northern Mariana Islands','MP'),(164,'Norway','NO'),(165,'Oman','OM'),(166,'Pakistan','PK'),(167,'Palau','PW'),(168,'Palestine','PS'),(169,'Panama','PA'),(170,'Papua New Guinea','PG'),(171,'Paraguay','PY'),(172,'Peru','PE'),(173,'Philippines','PH'),(174,'Pitcairn','PN'),(175,'Poland','PL'),(176,'Portugal','PT'),(177,'Puerto Rico','PR'),(178,'Qatar','QA'),(179,'Réunion','RE'),(180,'Romania','RO'),(181,'Russian Federation','RU'),(182,'Rwanda','RW'),(183,'Saint Barthélemy','BL'),(184,'Saint Helena, Ascension and Tristan da Cunha','SH'),(185,'Saint Kitts and Nevis','KN'),(186,'Saint Lucia','LC'),(187,'Saint Martin','MF'),(188,'Saint Pierre and Miquelon','PM'),(189,'Saint Vincent and the Grenadines','VC'),(190,'Samoa','WS'),(191,'San Marino','SM'),(192,'Sao Tome and Principe','ST'),(193,'Saudi Arabia','SA'),(194,'Senegal','SN'),(195,'Serbia','RS'),(196,'Seychelles','SC'),(197,'Sierra Leone','SL'),(198,'Singapore','SG'),(199,'Sint Maarten','SX'),(200,'Slovakia','SK'),(201,'Slovenia','SI'),(202,'Solomon Islands','SB'),(203,'Somalia','SO'),(204,'South Africa','ZA'),(205,'South Georgia and the South Sandwich Islands','GS'),(206,'South Sudan','SS'),(207,'Spain','ES'),(208,'Sri Lanka','LK'),(209,'Sudan','SD'),(210,'Suriname','SR'),(211,'Svalbard and Jan Mayen','SJ'),(212,'Swaziland','SZ'),(213,'Sweden','SE'),(214,'Switzerland','CH'),(215,'Syrian Arab Republic','SY'),(216,'Taiwan','TW'),(217,'Tajikistan','TJ'),(218,'Tanzania','TZ'),(219,'Thailand','TH'),(220,'Timor-Leste','TL'),(221,'Togo','TG'),(222,'Tokelau','TK'),(223,'Tonga','TO'),(224,'Trinidad and Tobago','TT'),(225,'Tunisia','TN'),(226,'Turkey','TR'),(227,'Turkmenistan','TM'),(228,'Turks and Caicos Islands','TC'),(229,'Tuvalu','TV'),(230,'Uganda','UG'),(231,'Ukraine','UA'),(232,'United Arab Emirates','AE'),(233,'United Kingdom','GB'),(234,'United States','US'),(235,'United States Minor Outlying Islands','UM'),(236,'Uruguay','UY'),(237,'Uzbekistan','UZ'),(238,'Vanuatu','VU'),(239,'Venezuela','VE'),(240,'Viet Nam','VN'),(241,'Virgin Islands (British)','VG'),(242,'Virgin Islands (U.S.)','VI'),(243,'Wallis and Futuna','WF'),(244,'Western Sahara','EH'),(245,'Yemen','YE'),(246,'Zambia','ZM'),(247,'Zimbabwe','ZW');
/*!40000 ALTER TABLE `co_countries` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_emails`
--

LOCK TABLES `co_emails` WRITE;
/*!40000 ALTER TABLE `co_emails` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_phones`
--

LOCK TABLES `co_phones` WRITE;
/*!40000 ALTER TABLE `co_phones` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_social_media_profiles`
--

LOCK TABLES `co_social_media_profiles` WRITE;
/*!40000 ALTER TABLE `co_social_media_profiles` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_collection_meta`
--

LOCK TABLES `me_collection_meta` WRITE;
/*!40000 ALTER TABLE `me_collection_meta` DISABLE KEYS */;
INSERT INTO `me_collection_meta` VALUES (1,'System',NULL,'en',1),(2,'Sulu media',NULL,'en',2),(3,'Sulu Medien',NULL,'de',2),(4,'Preview images',NULL,'en',3),(5,'Vorschaubilder',NULL,'de',3),(6,'Sulu contacts',NULL,'en',4),(7,'Sulu Kontakte',NULL,'de',4),(8,'People',NULL,'en',5),(9,'Personen',NULL,'de',5),(10,'Organizations',NULL,'en',6),(11,'Organisationen',NULL,'de',6),(12,'startseite',NULL,'en',7),(13,'NCAEvents',NULL,'en',8),(14,'Otto',NULL,'en',9),(15,'Influnecer DB',NULL,'en',10),(16,'logo',NULL,'en',11),(17,'accenture-interactive',NULL,'en',12),(18,'logo',NULL,'en',13);
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_collections`
--

LOCK TABLES `me_collections` WRITE;
/*!40000 ALTER TABLE `me_collections` DISABLE KEYS */;
INSERT INTO `me_collections` VALUES (1,NULL,1,12,0,'system_collections','2019-01-07 09:33:50','2019-01-07 09:33:50',2,NULL,NULL,1,NULL),(2,NULL,2,5,1,'sulu_media','2019-01-07 09:33:50','2019-01-08 10:56:49',2,NULL,1,2,1),(3,NULL,3,4,2,'sulu_media.preview_image','2019-01-07 09:33:50','2019-01-08 10:56:49',2,NULL,1,4,2),(4,NULL,6,11,1,'sulu_contact','2019-01-07 09:33:50','2019-01-08 10:56:49',2,NULL,1,6,1),(5,NULL,7,8,2,'sulu_contact.contact','2019-01-07 09:33:50','2019-01-08 10:56:49',2,NULL,1,8,4),(6,NULL,9,10,2,'sulu_contact.account','2019-01-07 09:33:50','2019-01-08 10:56:49',2,NULL,1,10,4),(7,NULL,13,14,0,NULL,'2019-01-07 14:21:01','2019-01-07 14:21:01',1,1,1,12,NULL),(8,NULL,15,24,0,NULL,'2019-01-08 10:56:32','2019-01-08 10:56:32',1,1,1,13,NULL),(9,NULL,16,17,1,NULL,'2019-01-08 10:56:49','2019-01-08 10:56:49',1,1,1,14,8),(10,NULL,18,19,1,NULL,'2019-01-09 14:07:48','2019-01-09 14:07:48',1,1,1,15,8),(11,NULL,25,26,0,NULL,'2019-01-22 00:17:02','2019-01-22 00:17:02',1,1,1,16,NULL),(12,NULL,20,23,1,NULL,'2019-01-26 00:01:30','2019-01-26 00:01:30',1,1,1,17,8),(13,NULL,21,22,2,NULL,'2019-01-26 00:11:07','2019-01-26 00:11:07',1,1,1,18,12);
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_file_version_meta`
--

LOCK TABLES `me_file_version_meta` WRITE;
/*!40000 ALTER TABLE `me_file_version_meta` DISABLE KEYS */;
INSERT INTO `me_file_version_meta` VALUES (1,'adventure-climb-cloud-1009949',NULL,NULL,NULL,'en',1),(2,'duisburger-tafel-emma',NULL,NULL,NULL,'en',2),(3,'never-code-alone-event',NULL,NULL,NULL,'en',3),(4,'skyline-hh',NULL,NULL,NULL,'en',4),(5,'otto-jobs-ncaevent',NULL,NULL,NULL,'en',5),(6,'frederik-sebastian',NULL,NULL,NULL,'en',6),(7,'scala-markus-jura',NULL,NULL,NULL,'en',7),(8,'otto-logo',NULL,NULL,NULL,'en',8),(9,'influencer-db-logo',NULL,NULL,NULL,'en',9),(10,'nca-event-influencer-db',NULL,NULL,NULL,'en',10),(11,'ncaevent-influencerdb',NULL,NULL,NULL,'en',11),(12,'nca-logo',NULL,NULL,NULL,'en',12),(13,'duisburg-never-code-alone',NULL,NULL,NULL,'en',13),(16,'dortmund-602962',NULL,NULL,NULL,'en',16),(17,'NCAEvent-java-live-coding',NULL,NULL,NULL,'en',17),(18,'dortmund-java',NULL,NULL,NULL,'en',18),(19,'Jens-Eickmeyer-java-speaker',NULL,NULL,NULL,'en',19);
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_file_versions`
--

LOCK TABLES `me_file_versions` WRITE;
/*!40000 ALTER TABLE `me_file_versions` DISABLE KEYS */;
INSERT INTO `me_file_versions` VALUES (1,'adventure-climb-cloud-1009949.jpg',1,0,1108185,1,'{\"segment\":\"05\",\"fileName\":\"adventure-climb-cloud-1009949.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-07 14:21:14','2019-01-07 14:21:14',1,1,1,1),(2,'duisburger-tafel-emma.jpg',1,0,198690,0,'{\"segment\":\"05\",\"fileName\":\"duisburger-tafel-emma.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-07 15:20:21','2019-01-07 15:20:21',2,2,1,1),(3,'never-code-alone-event.jpg',1,0,112575,0,'{\"segment\":\"05\",\"fileName\":\"never-code-alone-event.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-07 16:58:20','2019-01-07 16:58:20',3,3,1,1),(4,'skyline-hh.jpg',1,0,148404,45,'{\"segment\":\"10\",\"fileName\":\"skyline-hh.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-08 10:58:10','2019-01-08 10:58:10',4,4,1,1),(5,'otto-jobs-ncaevent.jpg',1,0,23385,47,'{\"segment\":\"02\",\"fileName\":\"otto-jobs-ncaevent.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-08 10:58:10','2019-01-08 10:58:10',5,5,1,1),(6,'frederik-sebastian.jpg',1,0,37618,17,'{\"segment\":\"04\",\"fileName\":\"frederik-sebastian.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-08 14:17:03','2019-01-08 14:17:03',6,6,1,1),(7,'scala-markus-jura.jpg',1,0,25854,22,'{\"segment\":\"04\",\"fileName\":\"scala-markus-jura.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-09 09:15:13','2019-01-09 09:15:13',7,7,1,1),(8,'otto-logo.png',1,0,37499,9,'{\"segment\":\"09\",\"fileName\":\"otto-logo.png\"}','image/png','{}',NULL,NULL,'2019-01-09 10:24:13','2019-01-09 10:24:13',8,8,1,1),(9,'influencer-db-logo.png',1,0,6322,9,'{\"segment\":\"10\",\"fileName\":\"influencer-db-logo.png\"}','image/png','{}',NULL,NULL,'2019-01-09 14:07:54','2019-01-09 14:07:54',9,9,1,1),(10,'nca-event-influencer-db.jpg',1,0,91344,9,'{\"segment\":\"10\",\"fileName\":\"nca-event-influencer-db.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-09 14:11:32','2019-01-09 14:11:32',10,10,1,1),(11,'ncaevent-influencerdb.jpg',1,0,21033,45,'{\"segment\":\"03\",\"fileName\":\"ncaevent-influencerdb.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-09 14:13:20','2019-01-09 14:13:20',11,11,1,1),(12,'nca-logo.png',1,0,5504,30,'{\"segment\":\"01\",\"fileName\":\"nca-logo.png\"}','image/png','{}',NULL,NULL,'2019-01-22 00:17:31','2019-01-22 00:17:31',12,12,1,1),(13,'duisburg-never-code-alone.jpeg',1,0,74530,30,'{\"segment\":\"02\",\"fileName\":\"duisburg-never-code-alone.jpeg\"}','image/jpeg','{}',NULL,NULL,'2019-01-22 00:19:29','2019-01-22 00:19:29',13,13,1,1),(16,'dortmund-602962.jpg',1,0,114007,20,'{\"segment\":\"09\",\"fileName\":\"dortmund-602962.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-26 00:13:58','2019-01-26 00:13:58',16,16,1,1),(17,'NCAEvent-java-live-coding.jpg',1,0,249806,2,'{\"segment\":\"03\",\"fileName\":\"ncaevent-java-live-coding.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-27 21:28:01','2019-01-27 21:28:01',17,17,1,1),(18,'dortmund-java.jpg',1,0,739783,0,'{\"segment\":\"04\",\"fileName\":\"dortmund-java.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-27 23:05:20','2019-01-27 23:05:20',18,18,1,1),(19,'Jens-Eickmeyer-java-speaker.jpg',1,0,94910,0,'{\"segment\":\"10\",\"fileName\":\"jens-eickmeyer-java-speaker.jpg\"}','image/jpeg','{}',NULL,NULL,'2019-01-28 11:20:53','2019-01-28 11:20:53',19,19,1,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_files`
--

LOCK TABLES `me_files` WRITE;
/*!40000 ALTER TABLE `me_files` DISABLE KEYS */;
INSERT INTO `me_files` VALUES (1,1,'2019-01-07 14:21:14','2019-01-07 14:21:14',1,1,1),(2,1,'2019-01-07 15:20:21','2019-01-07 15:20:21',2,1,1),(3,1,'2019-01-07 16:58:20','2019-01-07 16:58:20',3,1,1),(4,1,'2019-01-08 10:58:10','2019-01-08 10:58:10',4,1,1),(5,1,'2019-01-08 10:58:10','2019-01-08 10:58:10',5,1,1),(6,1,'2019-01-08 14:17:03','2019-01-08 14:17:03',6,1,1),(7,1,'2019-01-09 09:15:13','2019-01-09 09:15:13',7,1,1),(8,1,'2019-01-09 10:24:13','2019-01-09 10:24:13',8,1,1),(9,1,'2019-01-09 14:07:54','2019-01-09 14:07:54',9,1,1),(10,1,'2019-01-09 14:11:32','2019-01-09 14:11:32',10,1,1),(11,1,'2019-01-09 14:13:20','2019-01-09 14:13:20',11,1,1),(12,1,'2019-01-22 00:17:31','2019-01-22 00:17:31',12,1,1),(13,1,'2019-01-22 00:19:29','2019-01-22 00:19:29',13,1,1),(16,1,'2019-01-26 00:13:58','2019-01-26 00:13:58',16,1,1),(17,1,'2019-01-27 21:28:01','2019-01-27 21:28:01',17,1,1),(18,1,'2019-01-27 23:05:20','2019-01-27 23:05:20',18,1,1),(19,1,'2019-01-28 11:20:53','2019-01-28 11:20:53',19,1,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `me_media`
--

LOCK TABLES `me_media` WRITE;
/*!40000 ALTER TABLE `me_media` DISABLE KEYS */;
INSERT INTO `me_media` VALUES (1,'2019-01-07 14:21:14','2019-01-07 14:21:14',2,NULL,7,1,1),(2,'2019-01-07 15:20:21','2019-01-07 15:20:21',2,NULL,7,1,1),(3,'2019-01-07 16:58:20','2019-01-07 16:58:20',2,NULL,7,1,1),(4,'2019-01-08 10:58:10','2019-01-08 10:58:10',2,NULL,9,1,1),(5,'2019-01-08 10:58:10','2019-01-08 10:58:10',2,NULL,9,1,1),(6,'2019-01-08 14:17:03','2019-01-08 14:17:03',2,NULL,9,1,1),(7,'2019-01-09 09:15:13','2019-01-09 09:15:13',2,NULL,9,1,1),(8,'2019-01-09 10:24:13','2019-01-09 10:24:13',2,NULL,9,1,1),(9,'2019-01-09 14:07:54','2019-01-09 14:07:54',2,NULL,10,1,1),(10,'2019-01-09 14:11:32','2019-01-09 14:11:32',2,NULL,10,1,1),(11,'2019-01-09 14:13:20','2019-01-09 14:13:20',2,NULL,10,1,1),(12,'2019-01-22 00:17:31','2019-01-22 00:17:31',2,NULL,11,1,1),(13,'2019-01-22 00:19:29','2019-01-22 00:19:29',2,NULL,7,1,1),(16,'2019-01-26 00:13:58','2019-01-26 00:13:58',2,NULL,12,1,1),(17,'2019-01-27 21:28:01','2019-01-27 21:28:01',2,NULL,12,1,1),(18,'2019-01-27 23:05:20','2019-01-27 23:05:20',2,NULL,12,1,1),(19,'2019-01-28 11:20:53','2019-01-28 11:20:53',2,NULL,12,1,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phpcr_nodes`
--

LOCK TABLES `phpcr_nodes` WRITE;
/*!40000 ALTER TABLE `phpcr_nodes` DISABLE KEYS */;
INSERT INTO `phpcr_nodes` VALUES (1,'/','','','','default','69e04fdb-4df1-409b-84f9-d6cacd8117d5','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property></sv:node>\n',NULL,0,NULL),(2,'/','','','','default_live','4509e396-fa92-42e4-9c85-8bd366c51898','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property></sv:node>\n',NULL,0,NULL),(3,'/cmf','/','cmf','','default','e227bf5e-fe64-4251-bea0-028f1b082f30','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">e227bf5e-fe64-4251-bea0-028f1b082f30</sv:value></sv:property></sv:node>\n',NULL,1,1),(4,'/cmf/example','/cmf','example','','default','135f2839-a1e2-4a4e-9c5a-7f5fc633a7a8','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">135f2839-a1e2-4a4e-9c5a-7f5fc633a7a8</sv:value></sv:property></sv:node>\n',NULL,2,1),(5,'/cmf/example/contents','/cmf/example','contents','','default','f676c633-5556-4d1b-88ce-0652dc8126e8','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:home</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">f676c633-5556-4d1b-88ce-0652dc8126e8</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">Homepage</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">/</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">homepage</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.415+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-22T00:38:31.772+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.494+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">slider</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-snippets#0\" sv:type=\"Reference\" sv:multi-valued=\"1\"><sv:value length=\"36\">9e3b46f3-6041-4a7d-b56f-6340fff4f10c</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">slider</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-article#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">&lt;p&gt;asdfasdfsda&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-media#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-smart_content\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"176\">{\"categoryOperator\":\"or\",\"dataSource\":\"a6d8539f-e8bf-4638-9555-acde15a8489f\",\"includeSubFolders\":false,\"sortBy\":\"title\",\"sortMethod\":\"asc\",\"tagOperator\":\"or\",\"presentAs\":\"two\"}</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventCarouselItems\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"176\">{\"categoryOperator\":\"or\",\"dataSource\":\"a6d8539f-e8bf-4638-9555-acde15a8489f\",\"includeSubFolders\":false,\"sortBy\":\"title\",\"sortMethod\":\"asc\",\"tagOperator\":\"or\",\"presentAs\":\"two\"}</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventCarouselHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"23\">NEVER CODE ALONE EVENTS</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-snippets#1\" sv:type=\"Reference\" sv:multi-valued=\"1\"><sv:value length=\"36\">9e3b46f3-6041-4a7d-b56f-6340fff4f10c</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_logo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[12]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_address\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"30\">Fürstenstr. 10 47051 Duisburg</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_phone\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"23\">TelefonÖ 0176 24747727</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_image\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[13]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_headline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"47\">MOTIVIERTE WEBDEVELOPER FÜR SOFTWARE-QUALITÄT</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_text\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"567\">&lt;p&gt;Einige wenige Webdeveloper zeichnen sich durch sehr hohe Lernbereitschaft und persönliche Motivation aus. Sie engagieren sich über ihre Arbeit hinaus und versuchen immer neue Technologien zu lernen und einzusetzen. Diese kleine Zielgruppe ist für Unternehmen in der Software-Entwicklung wichtig und förderlich. Wir bieten auf unseren Events eine sehr gute Kontakt-Plattform und Möglichkeit sich als Arbeitgeber zu positionieren.&amp;nbsp;&lt;br&gt;Wir bieten auf unseren Events Kontakt zu dieser Zielgruppe und Möglichkeiten, sich als Arbeitgeber zu positionieren.&lt;/p&gt;</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n',3,1),(6,'/cmf/example/routes','/cmf/example','routes','','default','a5065b2e-007b-4943-9420-f38d29a82b77','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">a5065b2e-007b-4943-9420-f38d29a82b77</sv:value></sv:property></sv:node>\n',NULL,3,2),(7,'/cmf/example/routes/en','/cmf/example/routes','en','','default','b0893716-c2eb-43b5-ac6d-b952eab1ee89','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">b0893716-c2eb-43b5-ac6d-b952eab1ee89</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.509+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.509+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">f676c633-5556-4d1b-88ce-0652dc8126e8</sv:value></sv:property></sv:node>\n',NULL,4,1),(8,'/cmf','/','cmf','','default_live','e227bf5e-fe64-4251-bea0-028f1b082f30','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">e227bf5e-fe64-4251-bea0-028f1b082f30</sv:value></sv:property></sv:node>\n',NULL,1,2),(9,'/cmf/example','/cmf','example','','default_live','135f2839-a1e2-4a4e-9c5a-7f5fc633a7a8','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">135f2839-a1e2-4a4e-9c5a-7f5fc633a7a8</sv:value></sv:property></sv:node>\n',NULL,2,2),(10,'/cmf/example/contents','/cmf/example','contents','','default_live','f676c633-5556-4d1b-88ce-0652dc8126e8','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:home</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">f676c633-5556-4d1b-88ce-0652dc8126e8</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">Homepage</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">/</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">homepage</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.494+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.415+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-22T00:38:31.772+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">slider</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-snippets#0\" sv:type=\"Reference\" sv:multi-valued=\"1\"><sv:value length=\"36\">9e3b46f3-6041-4a7d-b56f-6340fff4f10c</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">slider</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-article#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">&lt;p&gt;asdfasdfsda&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-media#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-smart_content\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"176\">{\"categoryOperator\":\"or\",\"dataSource\":\"a6d8539f-e8bf-4638-9555-acde15a8489f\",\"includeSubFolders\":false,\"sortBy\":\"title\",\"sortMethod\":\"asc\",\"tagOperator\":\"or\",\"presentAs\":\"two\"}</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventCarouselItems\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"176\">{\"categoryOperator\":\"or\",\"dataSource\":\"a6d8539f-e8bf-4638-9555-acde15a8489f\",\"includeSubFolders\":false,\"sortBy\":\"title\",\"sortMethod\":\"asc\",\"tagOperator\":\"or\",\"presentAs\":\"two\"}</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventCarouselHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"23\">NEVER CODE ALONE EVENTS</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-snippets#1\" sv:type=\"Reference\" sv:multi-valued=\"1\"><sv:value length=\"36\">9e3b46f3-6041-4a7d-b56f-6340fff4f10c</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_logo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[12]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_address\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"30\">Fürstenstr. 10 47051 Duisburg</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_phone\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"23\">TelefonÖ 0176 24747727</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_image\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[13]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_headline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"47\">MOTIVIERTE WEBDEVELOPER FÜR SOFTWARE-QUALITÄT</sv:value></sv:property><sv:property sv:name=\"i18n:en-introduce_text\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"567\">&lt;p&gt;Einige wenige Webdeveloper zeichnen sich durch sehr hohe Lernbereitschaft und persönliche Motivation aus. Sie engagieren sich über ihre Arbeit hinaus und versuchen immer neue Technologien zu lernen und einzusetzen. Diese kleine Zielgruppe ist für Unternehmen in der Software-Entwicklung wichtig und förderlich. Wir bieten auf unseren Events eine sehr gute Kontakt-Plattform und Möglichkeit sich als Arbeitgeber zu positionieren.&amp;nbsp;&lt;br&gt;Wir bieten auf unseren Events Kontakt zu dieser Zielgruppe und Möglichkeiten, sich als Arbeitgeber zu positionieren.&lt;/p&gt;</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n',3,3),(11,'/cmf/example/routes','/cmf/example','routes','','default_live','a5065b2e-007b-4943-9420-f38d29a82b77','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">a5065b2e-007b-4943-9420-f38d29a82b77</sv:value></sv:property></sv:node>\n',NULL,3,4),(12,'/cmf/example/routes/en','/cmf/example/routes','en','','default_live','b0893716-c2eb-43b5-ac6d-b952eab1ee89','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">b0893716-c2eb-43b5-ac6d-b952eab1ee89</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.509+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.509+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">f676c633-5556-4d1b-88ce-0652dc8126e8</sv:value></sv:property></sv:node>\n',NULL,4,2),(13,'/cmf/snippets','/cmf','snippets','','default','00803388-2d5e-4071-8657-df336a5816e8','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">00803388-2d5e-4071-8657-df336a5816e8</sv:value></sv:property></sv:node>\n',NULL,2,3),(14,'/cmf/example/custom-urls','/cmf/example','custom-urls','','default','d0151c1a-0775-486e-a043-0236178791e4','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">d0151c1a-0775-486e-a043-0236178791e4</sv:value></sv:property></sv:node>\n',NULL,3,5),(15,'/cmf/example/custom-urls/items','/cmf/example/custom-urls','items','','default','fb2a25ae-6067-47b6-ab50-ec87f1027e54','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">fb2a25ae-6067-47b6-ab50-ec87f1027e54</sv:value></sv:property></sv:node>\n',NULL,4,1),(16,'/cmf/example/custom-urls/routes','/cmf/example/custom-urls','routes','','default','66f7e2d7-4527-49a8-a692-1691cf64d382','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">66f7e2d7-4527-49a8-a692-1691cf64d382</sv:value></sv:property></sv:node>\n',NULL,4,2),(17,'/jcr:versions','/','versions','http://www.jcp.org/jcr/1.0','default','32b6da2a-5d95-4b32-92ce-534ed8ffb8e6','phpcrmig:versions','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"17\">phpcrmig:versions</sv:value></sv:property></sv:node>\n',NULL,1,3),(18,'/jcr:versions/201504271608','/jcr:versions','201504271608','','default','c2709e2e-3b8f-4af0-a1c0-205c71e7263f','phpcrmig:version','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"16\">phpcrmig:version</sv:value></sv:property><sv:property sv:name=\"jcr:createdBy\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">admin</sv:value></sv:property><sv:property sv:name=\"jcr:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.619+00:00</sv:value></sv:property></sv:node>\n',NULL,2,1),(19,'/jcr:versions/201504281842','/jcr:versions','201504281842','','default','2d51dcc9-0247-4582-9c9f-40b7d5a04485','phpcrmig:version','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"16\">phpcrmig:version</sv:value></sv:property><sv:property sv:name=\"jcr:createdBy\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">admin</sv:value></sv:property><sv:property sv:name=\"jcr:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.621+00:00</sv:value></sv:property></sv:node>\n',NULL,2,2),(20,'/jcr:versions/201507231648','/jcr:versions','201507231648','','default','987532d2-a364-463e-bfa4-e387c71f388d','phpcrmig:version','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"16\">phpcrmig:version</sv:value></sv:property><sv:property sv:name=\"jcr:createdBy\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">admin</sv:value></sv:property><sv:property sv:name=\"jcr:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.623+00:00</sv:value></sv:property></sv:node>\n',NULL,2,3),(21,'/jcr:versions/201507281529','/jcr:versions','201507281529','','default','aaca0335-5d86-4cfa-913f-dbece9ae1279','phpcrmig:version','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"16\">phpcrmig:version</sv:value></sv:property><sv:property sv:name=\"jcr:createdBy\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">admin</sv:value></sv:property><sv:property sv:name=\"jcr:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.625+00:00</sv:value></sv:property></sv:node>\n',NULL,2,4),(22,'/jcr:versions/201510210733','/jcr:versions','201510210733','','default','af28fc04-7481-4a30-a15c-5a11bf34b8e6','phpcrmig:version','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"16\">phpcrmig:version</sv:value></sv:property><sv:property sv:name=\"jcr:createdBy\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">admin</sv:value></sv:property><sv:property sv:name=\"jcr:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.626+00:00</sv:value></sv:property></sv:node>\n',NULL,2,5),(23,'/jcr:versions/201511171538','/jcr:versions','201511171538','','default','8878d06a-0be7-4e37-b50a-d08db2baafb9','phpcrmig:version','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"16\">phpcrmig:version</sv:value></sv:property><sv:property sv:name=\"jcr:createdBy\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">admin</sv:value></sv:property><sv:property sv:name=\"jcr:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.627+00:00</sv:value></sv:property></sv:node>\n',NULL,2,6),(24,'/jcr:versions/201511240843','/jcr:versions','201511240843','','default','95f8360c-4859-43c7-809d-1fb220d813a8','phpcrmig:version','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"16\">phpcrmig:version</sv:value></sv:property><sv:property sv:name=\"jcr:createdBy\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">admin</sv:value></sv:property><sv:property sv:name=\"jcr:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.629+00:00</sv:value></sv:property></sv:node>\n',NULL,2,7),(25,'/jcr:versions/201511240844','/jcr:versions','201511240844','','default','0c3d8705-6739-4744-a61c-090eb11c5907','phpcrmig:version','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"16\">phpcrmig:version</sv:value></sv:property><sv:property sv:name=\"jcr:createdBy\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">admin</sv:value></sv:property><sv:property sv:name=\"jcr:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.630+00:00</sv:value></sv:property></sv:node>\n',NULL,2,8),(26,'/jcr:versions/201512090753','/jcr:versions','201512090753','','default','d0fa3943-baec-4964-b731-34891c920dee','phpcrmig:version','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"16\">phpcrmig:version</sv:value></sv:property><sv:property sv:name=\"jcr:createdBy\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">admin</sv:value></sv:property><sv:property sv:name=\"jcr:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.631+00:00</sv:value></sv:property></sv:node>\n',NULL,2,9),(27,'/jcr:versions/201607181533','/jcr:versions','201607181533','','default','9c8ae4e6-6849-424b-9912-d7a9b22a2b48','phpcrmig:version','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"16\">phpcrmig:version</sv:value></sv:property><sv:property sv:name=\"jcr:createdBy\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">admin</sv:value></sv:property><sv:property sv:name=\"jcr:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.633+00:00</sv:value></sv:property></sv:node>\n',NULL,2,10),(28,'/jcr:versions/201702021447','/jcr:versions','201702021447','','default','8b068443-37b2-4b52-a210-549de88f9751','phpcrmig:version','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"16\">phpcrmig:version</sv:value></sv:property><sv:property sv:name=\"jcr:createdBy\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">admin</sv:value></sv:property><sv:property sv:name=\"jcr:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T09:33:49.634+00:00</sv:value></sv:property></sv:node>\n',NULL,2,11),(29,'/cmf/example/contents/ncaevents-tickets','/cmf/example/contents','ncaevents-tickets','','default','a6d8539f-e8bf-4638-9555-acde15a8489f','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">a6d8539f-e8bf-4638-9555-acde15a8489f</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">#NCAEvents Tickets</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">/ncaevents</sv:value></sv:property><sv:property sv:name=\"i18n:en-article\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"14\">&lt;p&gt;Testify&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"7\">default</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:00:27.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:00:27.201+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-28T15:57:20.431+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:00:43.976+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-internal_link\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">58045c9e-dcd5-43a1-a571-b164e6f4f364</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property></sv:node>\n',4,0),(30,'/cmf/example/contents/ncaevents-tickets','/cmf/example/contents','ncaevents-tickets','','default_live','a6d8539f-e8bf-4638-9555-acde15a8489f','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">a6d8539f-e8bf-4638-9555-acde15a8489f</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">#NCAEvents Tickets</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">/ncaevents</sv:value></sv:property><sv:property sv:name=\"i18n:en-article\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"14\">&lt;p&gt;Testify&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"7\">default</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:00:43.976+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:00:27.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:00:27.201+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-28T15:57:20.431+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property><sv:property sv:name=\"i18n:en-internal_link\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">58045c9e-dcd5-43a1-a571-b164e6f4f364</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property></sv:node>\n',4,0),(31,'/cmf/example/routes/en/ncaevents','/cmf/example/routes/en','ncaevents','','default','6f37df77-3001-42be-beb0-048854961dca','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">6f37df77-3001-42be-beb0-048854961dca</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:00:44.048+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:00:44.048+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">a6d8539f-e8bf-4638-9555-acde15a8489f</sv:value></sv:property></sv:node>\n',NULL,5,1),(32,'/cmf/example/routes/en/ncaevents','/cmf/example/routes/en','ncaevents','','default_live','6f37df77-3001-42be-beb0-048854961dca','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">6f37df77-3001-42be-beb0-048854961dca</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:00:44.048+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:00:44.048+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">a6d8539f-e8bf-4638-9555-acde15a8489f</sv:value></sv:property></sv:node>\n',NULL,5,2),(33,'/cmf/example/contents/ncameetups','/cmf/example/contents','ncameetups','','default','010b859d-1b6a-4d9d-95f6-2ed8cfd582e7','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">010b859d-1b6a-4d9d-95f6-2ed8cfd582e7</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">#NCAMeetups</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">/ncameetups</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">homepage</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:01:58.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:01:58.339+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:11:08.197+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:01:58.637+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property></sv:node>\n',4,1),(34,'/cmf/example/routes/en/ncameetups','/cmf/example/routes/en','ncameetups','','default','caeb4239-135b-4261-8c40-2a9311e1e2b6','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">caeb4239-135b-4261-8c40-2a9311e1e2b6</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:01:58.670+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:01:58.670+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">010b859d-1b6a-4d9d-95f6-2ed8cfd582e7</sv:value></sv:property></sv:node>\n',NULL,5,3),(35,'/cmf/example/contents/ncameetups','/cmf/example/contents','ncameetups','','default_live','010b859d-1b6a-4d9d-95f6-2ed8cfd582e7','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">010b859d-1b6a-4d9d-95f6-2ed8cfd582e7</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">#NCAMeetups</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">/ncameetups</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">homepage</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:01:58.637+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:01:58.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:01:58.339+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:11:08.197+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property></sv:node>\n',4,1),(36,'/cmf/example/routes/en/ncameetups','/cmf/example/routes/en','ncameetups','','default_live','caeb4239-135b-4261-8c40-2a9311e1e2b6','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">caeb4239-135b-4261-8c40-2a9311e1e2b6</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:01:58.670+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:01:58.670+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">010b859d-1b6a-4d9d-95f6-2ed8cfd582e7</sv:value></sv:property></sv:node>\n',NULL,5,4),(37,'/cmf/example/contents/employer-branding','/cmf/example/contents','employer-branding','','default','5079f9ad-226e-4075-8b61-65f7a9e9a9f1','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">5079f9ad-226e-4075-8b61-65f7a9e9a9f1</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"17\">Employer Branding</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">/employer-branding</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">unity</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:02:51.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:02:51.069+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-10T12:34:57.626+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">40</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:02:51.353+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">40</sv:value></sv:property></sv:node>\n',4,2),(38,'/cmf/example/routes/en/employer-branding','/cmf/example/routes/en','employer-branding','','default','987e29ab-fc49-48f7-b0da-0fa567ec3159','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">987e29ab-fc49-48f7-b0da-0fa567ec3159</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:02:51.378+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:02:51.378+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">5079f9ad-226e-4075-8b61-65f7a9e9a9f1</sv:value></sv:property></sv:node>\n',NULL,5,5),(39,'/cmf/example/contents/employer-branding','/cmf/example/contents','employer-branding','','default_live','5079f9ad-226e-4075-8b61-65f7a9e9a9f1','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">5079f9ad-226e-4075-8b61-65f7a9e9a9f1</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"17\">Employer Branding</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">/employer-branding</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">unity</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:02:51.353+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:02:51.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:02:51.069+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-10T12:34:57.626+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">40</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">40</sv:value></sv:property></sv:node>\n',4,2),(40,'/cmf/example/routes/en/employer-branding','/cmf/example/routes/en','employer-branding','','default_live','987e29ab-fc49-48f7-b0da-0fa567ec3159','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">987e29ab-fc49-48f7-b0da-0fa567ec3159</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:02:51.378+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:02:51.378+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">5079f9ad-226e-4075-8b61-65f7a9e9a9f1</sv:value></sv:property></sv:node>\n',NULL,5,6),(41,'/cmf/example/contents/php-training','/cmf/example/contents','php-training','','default','0dc1df39-423e-4f97-a58d-9aa67963c8b6','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">0dc1df39-423e-4f97-a58d-9aa67963c8b6</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">PHP Training</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">/php-training</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">homepage</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:04:37.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:04:37.804+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:14:34.731+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">50</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:04:38.078+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-external\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"27\">https://www.rolandgolla.de/</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">50</sv:value></sv:property></sv:node>\n',4,3),(42,'/cmf/example/routes/en/php-training','/cmf/example/routes/en','php-training','','default','c4f79688-f8f5-4946-9949-154bc3eaca6c','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">c4f79688-f8f5-4946-9949-154bc3eaca6c</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:04:38.105+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:04:38.105+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">0dc1df39-423e-4f97-a58d-9aa67963c8b6</sv:value></sv:property></sv:node>\n',NULL,5,7),(43,'/cmf/example/contents/php-training','/cmf/example/contents','php-training','','default_live','0dc1df39-423e-4f97-a58d-9aa67963c8b6','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">0dc1df39-423e-4f97-a58d-9aa67963c8b6</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">PHP Training</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">/php-training</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">homepage</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:04:38.078+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:04:37.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:04:37.804+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:14:34.731+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">50</sv:value></sv:property><sv:property sv:name=\"i18n:en-external\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"27\">https://www.rolandgolla.de/</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">50</sv:value></sv:property></sv:node>\n',4,3),(44,'/cmf/example/routes/en/php-training','/cmf/example/routes/en','php-training','','default_live','c4f79688-f8f5-4946-9949-154bc3eaca6c','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">c4f79688-f8f5-4946-9949-154bc3eaca6c</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:04:38.105+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:04:38.105+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">0dc1df39-423e-4f97-a58d-9aa67963c8b6</sv:value></sv:property></sv:node>\n',NULL,5,8),(45,'/cmf/example/contents/blog-magazin','/cmf/example/contents','blog-magazin','','default','0e277cae-c7a0-492f-870d-6ae360a70483','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">0e277cae-c7a0-492f-870d-6ae360a70483</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">Blog Magazin</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">/blog-magazin</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">homepage</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:05:25.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:05:25.836+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:15:08.984+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">60</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:05:26.130+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-external\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">https://blog.nevercodealone.de/</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">60</sv:value></sv:property></sv:node>\n',4,4),(46,'/cmf/example/routes/en/blog-magazin','/cmf/example/routes/en','blog-magazin','','default','1527a9cd-ad68-40db-8c49-bfeaaf9b0489','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1527a9cd-ad68-40db-8c49-bfeaaf9b0489</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:05:26.166+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:05:26.166+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">0e277cae-c7a0-492f-870d-6ae360a70483</sv:value></sv:property></sv:node>\n',NULL,5,9),(47,'/cmf/example/contents/blog-magazin','/cmf/example/contents','blog-magazin','','default_live','0e277cae-c7a0-492f-870d-6ae360a70483','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">0e277cae-c7a0-492f-870d-6ae360a70483</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">Blog Magazin</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">/blog-magazin</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">homepage</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:05:26.130+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:05:25.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:05:25.836+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:15:08.984+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">60</sv:value></sv:property><sv:property sv:name=\"i18n:en-external\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">https://blog.nevercodealone.de/</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">60</sv:value></sv:property></sv:node>\n',4,4),(48,'/cmf/example/routes/en/blog-magazin','/cmf/example/routes/en','blog-magazin','','default_live','1527a9cd-ad68-40db-8c49-bfeaaf9b0489','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1527a9cd-ad68-40db-8c49-bfeaaf9b0489</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:05:26.166+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T13:05:26.166+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">0e277cae-c7a0-492f-870d-6ae360a70483</sv:value></sv:property></sv:node>\n',NULL,5,10),(49,'/cmf/snippets/default','/cmf/snippets','default','','default','1ba4ce9e-0d9c-4d17-9a99-cb3fbdbef424','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1ba4ce9e-0d9c-4d17-9a99-cb3fbdbef424</sv:value></sv:property></sv:node>\n',NULL,3,1),(51,'/cmf/snippets','/cmf','snippets','','default_live','22d3d75d-946e-48e7-8727-6c25688ad246','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">22d3d75d-946e-48e7-8727-6c25688ad246</sv:value></sv:property></sv:node>\n',NULL,2,4),(52,'/cmf/snippets/default','/cmf/snippets','default','','default_live','1ba4ce9e-0d9c-4d17-9a99-cb3fbdbef424','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">1ba4ce9e-0d9c-4d17-9a99-cb3fbdbef424</sv:value></sv:property></sv:node>\n',NULL,3,2),(54,'/cmf/snippets/slider','/cmf/snippets','slider','','default','fa01f4bc-6219-43ec-8f6a-cb44f2dd73cd','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">fa01f4bc-6219-43ec-8f6a-cb44f2dd73cd</sv:value></sv:property></sv:node>\n',NULL,3,3),(55,'/cmf/snippets/slider/slider-startseite','/cmf/snippets/slider','slider-startseite','','default','9e3b46f3-6041-4a7d-b56f-6340fff4f10c','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"12\">sulu:snippet</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">9e3b46f3-6041-4a7d-b56f-6340fff4f10c</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"17\">Slider Startseite</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">slider_item</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_small#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"33\">40 gute Webdeveloper kennenlernen</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_headline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"28\">#NCAEvents Employer Branding</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_subline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"48\">Kontakt zu sehr guten Entwicklern aus der Region</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_image#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[3]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_button#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">#NCASvents</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">slider_item</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_image#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[2]}</sv:value></sv:property><sv:property sv:name=\"template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">slider</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T14:02:34.310+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T09:13:30.986+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T14:02:34.503+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_link#0\" sv:type=\"Reference\" sv:multi-valued=\"1\"><sv:value length=\"36\">5079f9ad-226e-4075-8b61-65f7a9e9a9f1</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_link#1\" sv:type=\"Reference\" sv:multi-valued=\"1\"><sv:value length=\"36\">0e277cae-c7a0-492f-870d-6ae360a70483</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_small#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"25\">Coden für die gute Sache</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_headline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"28\">Soziale Open Source Projekte</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_subline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"43\">Software für Menschen, die Menschen helfen</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_button#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"23\">EMMA - Duisburger Tafel</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n',4,3),(56,'/cmf/snippets/slider','/cmf/snippets','slider','','default_live','fa01f4bc-6219-43ec-8f6a-cb44f2dd73cd','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">fa01f4bc-6219-43ec-8f6a-cb44f2dd73cd</sv:value></sv:property></sv:node>\n',NULL,3,4),(57,'/cmf/snippets/slider/slider-startseite','/cmf/snippets/slider','slider-startseite','','default_live','9e3b46f3-6041-4a7d-b56f-6340fff4f10c','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"12\">sulu:snippet</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">9e3b46f3-6041-4a7d-b56f-6340fff4f10c</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"17\">Slider Startseite</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">slider_item</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_small#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"33\">40 gute Webdeveloper kennenlernen</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_headline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"28\">#NCAEvents Employer Branding</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_subline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"48\">Kontakt zu sehr guten Entwicklern aus der Region</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_image#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[3]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_button#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">#NCASvents</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">slider_item</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_image#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[2]}</sv:value></sv:property><sv:property sv:name=\"template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"6\">slider</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T14:02:34.503+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-07T14:02:34.310+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T09:13:30.986+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_link#0\" sv:type=\"Reference\" sv:multi-valued=\"1\"><sv:value length=\"36\">5079f9ad-226e-4075-8b61-65f7a9e9a9f1</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_link#1\" sv:type=\"Reference\" sv:multi-valued=\"1\"><sv:value length=\"36\">0e277cae-c7a0-492f-870d-6ae360a70483</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_small#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"25\">Coden für die gute Sache</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_headline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"28\">Soziale Open Source Projekte</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_subline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"43\">Software für Menschen, die Menschen helfen</sv:value></sv:property><sv:property sv:name=\"i18n:en-slider-slider_button#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"23\">EMMA - Duisburger Tafel</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n',4,4),(58,'/cmf/example/contents/ncaevents-tickets/scala-workshop-otto-ncaevent','/cmf/example/contents/ncaevents-tickets','scala-workshop-otto-ncaevent','','default','74815cb8-5b50-4d33-a17b-3b8282cc9c43','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">74815cb8-5b50-4d33-a17b-3b8282cc9c43</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">Scala Workshop - OTTO #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">/otto</sv:value></sv:property><sv:property sv:name=\"i18n:en-town\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"7\">Hamburg</sv:value></sv:property><sv:property sv:name=\"i18n:en-date\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2018-09-29T09:46:28.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventheaderimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[4]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-previewimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[5]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">conference</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T10:59:09.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T10:59:09.425+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-10T09:46:28.803+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T10:59:09.646+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[5]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-external_link\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"93\">https://www.eventbrite.de/e/otto-scala-never-code-alone-event-tickets-48383184407?aff=website</sv:value></sv:property><sv:property sv:name=\"i18n:en-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"87\">Scala Realtikme Anwendungen mit Kafka und dem Akka Framework in E-Commerce Anwendungen.</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"93\">https://www.eventbrite.de/e/otto-scala-never-code-alone-event-tickets-48383184407?aff=website</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewleft\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4Z_JgTUYKsc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overview-headline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"35\">Über #NCAEvents - Nerds für Nerds</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewright\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"443\">&lt;p&gt;Web Developer brauchen kostenlose und gute Weiterbildung. Auf den Events lernen wir gemeinsam an der Funktastatur.&lt;/p&gt;&lt;p&gt;Wir wollen Coder coden sehen und zusammen lernen. Debugging, der richtige Einsatz von Tools, Pair Programming und der Blick über den Tellerrand.&lt;/p&gt;&lt;p&gt;Soziale Projekte sind uns wichtig und werden von uns mit dem Eintrittsgeld zu 100% unterstützt. Diesmal geht es an die &lt;strong&gt;Sternenbrücke&lt;/strong&gt; in Hamburg.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overview-left\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4Z_JgTUYKsc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overview-right\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"443\">&lt;p&gt;Web Developer brauchen kostenlose und gute Weiterbildung. Auf den Events lernen wir gemeinsam an der Funktastatur.&lt;/p&gt;&lt;p&gt;Wir wollen Coder coden sehen und zusammen lernen. Debugging, der richtige Einsatz von Tools, Pair Programming und der Blick über den Tellerrand.&lt;/p&gt;&lt;p&gt;Soziale Projekte sind uns wichtig und werden von uns mit dem Eintrittsgeld zu 100% unterstützt. Diesmal geht es an die &lt;strong&gt;Sternenbrücke&lt;/strong&gt; in Hamburg.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewLeft\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4Z_JgTUYKsc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"35\">Über #NCAEvents - Nerds für Nerds</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewHight\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"443\">&lt;p&gt;Web Developer brauchen kostenlose und gute Weiterbildung. Auf den Events lernen wir gemeinsam an der Funktastatur.&lt;/p&gt;&lt;p&gt;Wir wollen Coder coden sehen und zusammen lernen. Debugging, der richtige Einsatz von Tools, Pair Programming und der Blick über den Tellerrand.&lt;/p&gt;&lt;p&gt;Soziale Projekte sind uns wichtig und werden von uns mit dem Eintrittsgeld zu 100% unterstützt. Diesmal geht es an die &lt;strong&gt;Sternenbrücke&lt;/strong&gt; in Hamburg.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewRight\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"443\">&lt;p&gt;Web Developer brauchen kostenlose und gute Weiterbildung. Auf den Events lernen wir gemeinsam an der Funktastatur.&lt;/p&gt;&lt;p&gt;Wir wollen Coder coden sehen und zusammen lernen. Debugging, der richtige Einsatz von Tools, Pair Programming und der Blick über den Tellerrand.&lt;/p&gt;&lt;p&gt;Soziale Projekte sind uns wichtig und werden von uns mit dem Eintrittsgeld zu 100% unterstützt. Diesmal geht es an die &lt;strong&gt;Sternenbrücke&lt;/strong&gt; in Hamburg.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">3</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-time#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableHeadline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Frühstück</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-images#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignLeft#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-time#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:45:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableHeadline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"42\">Begrüßung und Vorstellung - Roland Golla</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-images#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignLeft#1\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-time#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:55:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableHeadline#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"19\">Vorstellung Speaker</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-images#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[6]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignLeft#2\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignRight#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableDescription#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignRight#1\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableDescription#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignRight#2\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableDescription#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"372\">&lt;p&gt;Du wolltest schon immer wissen, wie viele Produktseiten auf Otto.de pro Sekunden aufgerufen werden, welcher Artikel der meisgesehenste ist oder welcher Kunde die meisten Tabs offen hat?&lt;/p&gt;&lt;p&gt;All das und noch viel mehr werden wir in dieser Mob-Programming-Session herausfinden. Nebenbei beleuchten wir diverse Aspekte einer resilienten, Kafka-basierten Applikation.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableSpeaker#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"26\">Mit Sebastian und Frederik</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">7</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Frühstück</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:45:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"42\">Begrüßung und Vorstellung - Roland Golla</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#1\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:55:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"19\">Vorstellung Speaker</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#2\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">10:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"46\">Realtime Aggregation des Otto.de Event Streams</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[6]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#3\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"372\">&lt;p&gt;Du wolltest schon immer wissen, wie viele Produktseiten auf Otto.de pro Sekunden aufgerufen werden, welcher Artikel der meisgesehenste ist oder welcher Kunde die meisten Tabs offen hat?&lt;/p&gt;&lt;p&gt;All das und noch viel mehr werden wir in dieser Mob-Programming-Session herausfinden. Nebenbei beleuchten wir diverse Aspekte einer resilienten, Kafka-basierten Applikation.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableSpeaker#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"26\">Mit Sebastian und Frederik</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"23\">Zeitplan Otto #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"51\">4 mal Live Coding mit der Funktastatur und Catering</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">11:30:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">Pause</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#4\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">11:40:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"19\">Vorstellung Speaker</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#5\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">11:45:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"92\">Live Coding - Using Akka Streams to write Microservice that supports end-to-end backpressure</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[7]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#6\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"761\">&lt;p&gt;Let\'s write a microservice based on Akka Streams that truly handles backpressure throughout the entire application.&lt;/p&gt;&lt;p&gt;Traditionally, routes built with Akka HTTP directly interact with actors implementing domain logic. One potential issue is the lack of backpressure: when the route just fires messages at the poor domain actors, these messages pile up in the mailbox faster than they can get processed. This is especially the case when the domain actors interact with a database or external services, waiting for a response.&lt;/p&gt;&lt;p&gt;Our microservice also offers an HTTP API, accesses a database and interacts with another external service. By using Akka Streams as the processing engine, incoming HTTP calls will fail fast while a system is overloaded.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableSpeaker#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Markus Jura</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-more\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"68\">https://blog.nevercodealone.de/otto-ncaevent-scala-gala-an-der-elbe/</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"68\">https://blog.nevercodealone.de/otto-ncaevent-scala-gala-an-der-elbe/</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"26\">https://sternenbruecke.de/</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Nachbericht</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"37\">Stiftung Kinder-Hospiz Sternenbrücke</sv:value></sv:property><sv:property sv:name=\"i18n:en-previewImageLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"28\">https://youtu.be/4Z_JgTUYKsc</sv:value></sv:property><sv:property sv:name=\"i18n:en-sponsorLogo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[8]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-donation\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"3\">400</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">OTTO</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property></sv:node>\n',5,2),(59,'/cmf/example/routes/en/otto','/cmf/example/routes/en','otto','','default','44202385-204f-48ca-b106-51d6ca173590','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">44202385-204f-48ca-b106-51d6ca173590</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T10:59:09.659+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T10:59:09.659+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">74815cb8-5b50-4d33-a17b-3b8282cc9c43</sv:value></sv:property></sv:node>\n',NULL,5,11),(60,'/cmf/example/contents/ncaevents-tickets/scala-workshop-otto-ncaevent','/cmf/example/contents/ncaevents-tickets','scala-workshop-otto-ncaevent','','default_live','74815cb8-5b50-4d33-a17b-3b8282cc9c43','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">74815cb8-5b50-4d33-a17b-3b8282cc9c43</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">Scala Workshop - OTTO #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[5]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">/otto</sv:value></sv:property><sv:property sv:name=\"i18n:en-town\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"7\">Hamburg</sv:value></sv:property><sv:property sv:name=\"i18n:en-date\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2018-09-29T10:01:31.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventheaderimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[4]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-previewimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[5]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">conference</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T10:59:09.646+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T10:59:09.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T10:59:09.425+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-10T09:46:28.803+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property><sv:property sv:name=\"i18n:en-external_link\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"93\">https://www.eventbrite.de/e/otto-scala-never-code-alone-event-tickets-48383184407?aff=website</sv:value></sv:property><sv:property sv:name=\"i18n:en-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"87\">Scala Realtikme Anwendungen mit Kafka und dem Akka Framework in E-Commerce Anwendungen.</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"93\">https://www.eventbrite.de/e/otto-scala-never-code-alone-event-tickets-48383184407?aff=website</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewleft\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4Z_JgTUYKsc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overview-headline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"35\">Über #NCAEvents - Nerds für Nerds</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewright\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"443\">&lt;p&gt;Web Developer brauchen kostenlose und gute Weiterbildung. Auf den Events lernen wir gemeinsam an der Funktastatur.&lt;/p&gt;&lt;p&gt;Wir wollen Coder coden sehen und zusammen lernen. Debugging, der richtige Einsatz von Tools, Pair Programming und der Blick über den Tellerrand.&lt;/p&gt;&lt;p&gt;Soziale Projekte sind uns wichtig und werden von uns mit dem Eintrittsgeld zu 100% unterstützt. Diesmal geht es an die &lt;strong&gt;Sternenbrücke&lt;/strong&gt; in Hamburg.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overview-left\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4Z_JgTUYKsc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overview-right\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"443\">&lt;p&gt;Web Developer brauchen kostenlose und gute Weiterbildung. Auf den Events lernen wir gemeinsam an der Funktastatur.&lt;/p&gt;&lt;p&gt;Wir wollen Coder coden sehen und zusammen lernen. Debugging, der richtige Einsatz von Tools, Pair Programming und der Blick über den Tellerrand.&lt;/p&gt;&lt;p&gt;Soziale Projekte sind uns wichtig und werden von uns mit dem Eintrittsgeld zu 100% unterstützt. Diesmal geht es an die &lt;strong&gt;Sternenbrücke&lt;/strong&gt; in Hamburg.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewLeft\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"202\">&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4Z_JgTUYKsc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"35\">Über #NCAEvents - Nerds für Nerds</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewHight\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"443\">&lt;p&gt;Web Developer brauchen kostenlose und gute Weiterbildung. Auf den Events lernen wir gemeinsam an der Funktastatur.&lt;/p&gt;&lt;p&gt;Wir wollen Coder coden sehen und zusammen lernen. Debugging, der richtige Einsatz von Tools, Pair Programming und der Blick über den Tellerrand.&lt;/p&gt;&lt;p&gt;Soziale Projekte sind uns wichtig und werden von uns mit dem Eintrittsgeld zu 100% unterstützt. Diesmal geht es an die &lt;strong&gt;Sternenbrücke&lt;/strong&gt; in Hamburg.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewRight\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"443\">&lt;p&gt;Web Developer brauchen kostenlose und gute Weiterbildung. Auf den Events lernen wir gemeinsam an der Funktastatur.&lt;/p&gt;&lt;p&gt;Wir wollen Coder coden sehen und zusammen lernen. Debugging, der richtige Einsatz von Tools, Pair Programming und der Blick über den Tellerrand.&lt;/p&gt;&lt;p&gt;Soziale Projekte sind uns wichtig und werden von uns mit dem Eintrittsgeld zu 100% unterstützt. Diesmal geht es an die &lt;strong&gt;Sternenbrücke&lt;/strong&gt; in Hamburg.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">3</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-time#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableHeadline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Frühstück</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-images#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignLeft#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-time#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:45:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableHeadline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"42\">Begrüßung und Vorstellung - Roland Golla</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-images#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignLeft#1\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-time#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:55:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableHeadline#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"19\">Vorstellung Speaker</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-images#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[6]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignLeft#2\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignRight#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableDescription#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignRight#1\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableDescription#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-alignRight#2\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableDescription#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"372\">&lt;p&gt;Du wolltest schon immer wissen, wie viele Produktseiten auf Otto.de pro Sekunden aufgerufen werden, welcher Artikel der meisgesehenste ist oder welcher Kunde die meisten Tabs offen hat?&lt;/p&gt;&lt;p&gt;All das und noch viel mehr werden wir in dieser Mob-Programming-Session herausfinden. Nebenbei beleuchten wir diverse Aspekte einer resilienten, Kafka-basierten Applikation.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-blocks-timetableSpeaker#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"26\">Mit Sebastian und Frederik</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">7</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Frühstück</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:45:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"42\">Begrüßung und Vorstellung - Roland Golla</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#1\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:55:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"19\">Vorstellung Speaker</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#2\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">10:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"46\">Realtime Aggregation des Otto.de Event Streams</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[6]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#3\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"372\">&lt;p&gt;Du wolltest schon immer wissen, wie viele Produktseiten auf Otto.de pro Sekunden aufgerufen werden, welcher Artikel der meisgesehenste ist oder welcher Kunde die meisten Tabs offen hat?&lt;/p&gt;&lt;p&gt;All das und noch viel mehr werden wir in dieser Mob-Programming-Session herausfinden. Nebenbei beleuchten wir diverse Aspekte einer resilienten, Kafka-basierten Applikation.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableSpeaker#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"26\">Mit Sebastian und Frederik</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"23\">Zeitplan Otto #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"51\">4 mal Live Coding mit der Funktastatur und Catering</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">11:30:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"5\">Pause</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#4\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">11:40:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"19\">Vorstellung Speaker</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#5\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">11:45:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"92\">Live Coding - Using Akka Streams to write Microservice that supports end-to-end backpressure</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[7]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#6\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"761\">&lt;p&gt;Let\'s write a microservice based on Akka Streams that truly handles backpressure throughout the entire application.&lt;/p&gt;&lt;p&gt;Traditionally, routes built with Akka HTTP directly interact with actors implementing domain logic. One potential issue is the lack of backpressure: when the route just fires messages at the poor domain actors, these messages pile up in the mailbox faster than they can get processed. This is especially the case when the domain actors interact with a database or external services, waiting for a response.&lt;/p&gt;&lt;p&gt;Our microservice also offers an HTTP API, accesses a database and interacts with another external service. By using Akka Streams as the processing engine, incoming HTTP calls will fail fast while a system is overloaded.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableSpeaker#6\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Markus Jura</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-more\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"68\">https://blog.nevercodealone.de/otto-ncaevent-scala-gala-an-der-elbe/</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"68\">https://blog.nevercodealone.de/otto-ncaevent-scala-gala-an-der-elbe/</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"26\">https://sternenbruecke.de/</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Nachbericht</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"37\">Stiftung Kinder-Hospiz Sternenbrücke</sv:value></sv:property><sv:property sv:name=\"i18n:en-previewImageLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"28\">https://youtu.be/4Z_JgTUYKsc</sv:value></sv:property><sv:property sv:name=\"i18n:en-sponsorLogo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[8]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-donation\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"3\">400</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">OTTO</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">30</sv:value></sv:property></sv:node>\n',5,2),(61,'/cmf/example/routes/en/otto','/cmf/example/routes/en','otto','','default_live','44202385-204f-48ca-b106-51d6ca173590','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">44202385-204f-48ca-b106-51d6ca173590</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T10:59:09.659+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-08T10:59:09.659+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">74815cb8-5b50-4d33-a17b-3b8282cc9c43</sv:value></sv:property></sv:node>\n',NULL,5,12),(62,'/cmf/example/contents/ncaevents-tickets/python-workshop-influencerdb-ncaevent','/cmf/example/contents/ncaevents-tickets','python-workshop-influencerdb-ncaevent','','default','8d831366-3f9c-4da9-99d3-b1056c705e32','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">8d831366-3f9c-4da9-99d3-b1056c705e32</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">Python Workshop - InfluencerDB #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"23\">/ncaevents/influencerdb</sv:value></sv:property><sv:property sv:name=\"i18n:en-sponsorLogo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[9]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-town\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">Münster</sv:value></sv:property><sv:property sv:name=\"i18n:en-date\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2018-03-03T09:46:42.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"99\">https://www.eventbrite.de/e/python-workshop-influencerdb-never-code-alone-event-tickets-42178847067</sv:value></sv:property><sv:property sv:name=\"i18n:en-previewImageLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"28\">https://youtu.be/8VDpH0aRgaU</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"53\">https://blog.nevercodealone.de/influencerdb-ncaevent/</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Nachbericht</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"29\">https://www.mitmachkinder.de/</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">Mitmachkinder e.V.</sv:value></sv:property><sv:property sv:name=\"i18n:en-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"112\">Python mit dem Django Framework, Social Media APIs, Crawler, künstliche Intelligenz, Funktionale Programmierung</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventheaderimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[10]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-previewimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[11]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">Python Workshop - InfluencerDB #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"19\">#NCAEvent 4 Speaker</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"52\">Übersicht der Python Speaker beim Live-Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">conference</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:13:30.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:13:30.859+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-10T09:46:42.246+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:13:31.013+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[11]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-donation\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"3\">500</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">Influencer DB</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property></sv:node>\n',5,1),(63,'/cmf/example/routes/en/ncaevents/hall-of-fame','/cmf/example/routes/en/ncaevents','hall-of-fame','','default','fc7547ee-47dd-48ea-887d-841f64b3d71b','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">fc7547ee-47dd-48ea-887d-841f64b3d71b</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:13:31.029+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:43:36.772+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">3b622f1a-3c1d-4a3d-b6b9-9ad5d219c2ab</sv:value></sv:property></sv:node>\n',NULL,6,1),(64,'/cmf/example/contents/ncaevents-tickets/python-workshop-influencerdb-ncaevent','/cmf/example/contents/ncaevents-tickets','python-workshop-influencerdb-ncaevent','','default_live','8d831366-3f9c-4da9-99d3-b1056c705e32','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">8d831366-3f9c-4da9-99d3-b1056c705e32</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">Python Workshop - InfluencerDB #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[11]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"23\">/ncaevents/influencerdb</sv:value></sv:property><sv:property sv:name=\"i18n:en-sponsorLogo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">{\"ids\":[9]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-town\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">Münster</sv:value></sv:property><sv:property sv:name=\"i18n:en-date\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2018-03-03T10:14:13.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"99\">https://www.eventbrite.de/e/python-workshop-influencerdb-never-code-alone-event-tickets-42178847067</sv:value></sv:property><sv:property sv:name=\"i18n:en-previewImageLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"28\">https://youtu.be/8VDpH0aRgaU</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"53\">https://blog.nevercodealone.de/influencerdb-ncaevent/</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Nachbericht</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"29\">https://www.mitmachkinder.de/</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"18\">Mitmachkinder e.V.</sv:value></sv:property><sv:property sv:name=\"i18n:en-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"112\">Python mit dem Django Framework, Social Media APIs, Crawler, künstliche Intelligenz, Funktionale Programmierung</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventheaderimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[10]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-previewimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[11]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">Python Workshop - InfluencerDB #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"19\">#NCAEvent 4 Speaker</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"52\">Übersicht der Python Speaker beim Live-Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">conference</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:13:31.013+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:13:30.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:13:30.859+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-10T09:46:42.246+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property><sv:property sv:name=\"i18n:en-donation\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"3\">500</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">Influencer DB</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewRight\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">20</sv:value></sv:property></sv:node>\n',5,1),(65,'/cmf/example/routes/en/ncaevents/hall-of-fame','/cmf/example/routes/en/ncaevents','hall-of-fame','','default_live','fc7547ee-47dd-48ea-887d-841f64b3d71b','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">fc7547ee-47dd-48ea-887d-841f64b3d71b</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:13:31.029+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:43:36.772+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">3b622f1a-3c1d-4a3d-b6b9-9ad5d219c2ab</sv:value></sv:property></sv:node>\n',NULL,6,2),(66,'/cmf/example/routes/en/ncaevents/influencer-db','/cmf/example/routes/en/ncaevents','influencer-db','','default','0c048af4-86e8-40f2-a19c-6649838178f0','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">0c048af4-86e8-40f2-a19c-6649838178f0</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:19:09.592+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:43:36.782+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">3b622f1a-3c1d-4a3d-b6b9-9ad5d219c2ab</sv:value></sv:property></sv:node>\n',NULL,6,3),(67,'/cmf/example/routes/en/ncaevents/influencer-db','/cmf/example/routes/en/ncaevents','influencer-db','','default_live','0c048af4-86e8-40f2-a19c-6649838178f0','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">0c048af4-86e8-40f2-a19c-6649838178f0</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:19:09.592+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:43:36.782+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">3b622f1a-3c1d-4a3d-b6b9-9ad5d219c2ab</sv:value></sv:property></sv:node>\n',NULL,6,4),(68,'/cmf/example/routes/en/ncaevents/influencerdb','/cmf/example/routes/en/ncaevents','influencerdb','','default','3b622f1a-3c1d-4a3d-b6b9-9ad5d219c2ab','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">3b622f1a-3c1d-4a3d-b6b9-9ad5d219c2ab</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:43:36.737+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:43:36.737+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">8d831366-3f9c-4da9-99d3-b1056c705e32</sv:value></sv:property></sv:node>\n',NULL,6,5),(69,'/cmf/example/routes/en/ncaevents/influencerdb','/cmf/example/routes/en/ncaevents','influencerdb','','default_live','3b622f1a-3c1d-4a3d-b6b9-9ad5d219c2ab','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">3b622f1a-3c1d-4a3d-b6b9-9ad5d219c2ab</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:43:36.737+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-09T14:43:36.737+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">8d831366-3f9c-4da9-99d3-b1056c705e32</sv:value></sv:property></sv:node>\n',NULL,6,6),(70,'/cmf/example/contents/ncaevents-tickets/accenture-interactive-java-ncaevent','/cmf/example/contents/ncaevents-tickets','accenture-interactive-java-ncaevent','','default','58045c9e-dcd5-43a1-a571-b164e6f4f364','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">58045c9e-dcd5-43a1-a571-b164e6f4f364</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">Accenture Interactive Java #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">/ncaevents/accenture-interactive</sv:value></sv:property><sv:property sv:name=\"i18n:en-sponsorLogo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[16]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-town\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">Dortmund</sv:value></sv:property><sv:property sv:name=\"i18n:en-date\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-04-06T11:25:10.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"83\">https://www.eventbrite.de/e/accenture-interactive-java-ncaevent-tickets-55311196277</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">https://blog.nevercodealone.de/</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">Vorbericht</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"67\">https://blog.nevercodealone.de/raketentechnik-fuer-den-guten-zweck/</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">Soziales Projekt</sv:value></sv:property><sv:property sv:name=\"i18n:en-donation\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"3\">400</sv:value></sv:property><sv:property sv:name=\"i18n:en-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"94\">Java Community Workshop mit Live Coding für E-Commerce Development Best Practice in Dortmund.</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventheaderimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[16]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterSpeaker\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterMember\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"2\">40</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterHours\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"2\">10</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewLeft\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"7\">YouTube</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"35\">Über #NCAEvents - Nerds für Nerds</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewRight\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"429\">&lt;p&gt;Web Developer brauchen kostenlose und gute Weiterbildung. Auf den Events lernen wir gemeinsam an der Funktastatur.&lt;/p&gt;&lt;p&gt;Wir wollen Coder coden sehen und zusammen lernen. Debugging, der richtige Einsatz von Tools, Pair Programming und der Blick über den Tellerrand.&lt;/p&gt;&lt;p&gt;Soziale Projekte sind uns wichtig und werden von uns mit dem Eintrittsgeld zu 100% unterstützt. Diesmal geht es an ein soziales Projekt in Dortmund.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">Zeitplan Accenture Interactive #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"51\">4 mal Live Coding mit der Funktastatur und Catering</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">conference</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-26T00:21:52.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-26T00:21:52.624+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-28T11:25:10.560+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">10</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[17]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"27\">Die kommt schon aus dem CMS</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-26T13:59:11.548+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Frühstück</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">featureItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">4 Live Coding Sessions</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">featureItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"27\">Frühstück und Mittagessen</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">featureItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"20\">Community Networking</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">featureItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">Getränke</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">featureItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">Spende für ein soziales Projekt</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"43\">Freiwillige Spende fü ein soziales Projekt</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"21\">Accenture Interactive</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-locationUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"49\">https://www.accenture.com/de-de/interactive-index</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationUrlText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"21\">Accenture Interactive</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationGoogleMapsLin\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"143\">http://www.google.com/maps/place/Accenture+Deutschland+GmbH/@51.4927,7.39503,15z/data=!4m5!3m4!1s0x0:0xcab52ab5ae3e23ea!8m2!3d51.4927!4d7.39503</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationGoogleMapsLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"144\">https://www.google.com/maps/place/Accenture+Deutschland+GmbH/@51.4927,7.39503,15z/data=!4m5!3m4!1s0x0:0xcab52ab5ae3e23ea!8m2!3d51.4927!4d7.39503</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationStreetAndNumber\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">Sebrathweg 20</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationZipAndTown\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"14\">44149 Dortmund</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationBackgroundImage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[18]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationLatitude\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">51.492660</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationLongitude\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">7.395570</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationIframe\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"310\">&lt;iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9936.472447802662!2d7.39503!3d51.4927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcab52ab5ae3e23ea!2sAccenture+Deutschland+GmbH!5e0!3m2!1sde!2sde!4v1548668669178\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"46\">Accenture Interactive #NCAEvent 5 Top Speaker </sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"67\">Übersicht der Accenture Interactive Speaker Java-Live-Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"7\">speaker</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemImage#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[19]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemName#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"14\">Jens Eickmeyer</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemJobTitle#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">Software Engineer und Architekt</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemXingUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"43\">https://www.xing.com/profile/Jens_Eickmeyer</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemTwitterUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"33\">https://twitter.com/jenseickmeyer</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemGithubUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">https://github.com/jenseickmeyer</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemLinkedinUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"41\">https://www.linkedin.com/in/jenseickmeyer</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemBio#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"208\">&lt;p&gt;Jens Eickmeyer ist leidenschaftlicher Software Engineer und Architekt. Sein aktueller Fokus liegt auf Cloud-native Application Development, insbesondere auf der Plattform von Amazon Web Services (AWS).&lt;/p&gt;</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">10</sv:value></sv:property></sv:node>\n',5,0),(71,'/cmf/example/contents/ncaevents-tickets/accenture-interactive-java-ncaevent','/cmf/example/contents/ncaevents-tickets','accenture-interactive-java-ncaevent','','default_live','58045c9e-dcd5-43a1-a571-b164e6f4f364','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:page</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">58045c9e-dcd5-43a1-a571-b164e6f4f364</sv:value></sv:property><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">10</sv:value></sv:property><sv:property sv:name=\"i18n:en-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">Accenture Interactive Java #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-keywords\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-canonicalUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noIndex\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-noFollow\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-seo-hideInSitemap\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-categories\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-tags\" sv:type=\"String\" sv:multi-valued=\"1\"/><sv:property sv:name=\"i18n:en-excerpt-icon\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">{\"ids\":[]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-images\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[17]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-url\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">/ncaevents/accenture-interactive</sv:value></sv:property><sv:property sv:name=\"i18n:en-sponsorLogo\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[16]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-town\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">Dortmund</sv:value></sv:property><sv:property sv:name=\"i18n:en-date\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-04-06T11:25:10.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"83\">https://www.eventbrite.de/e/accenture-interactive-java-ncaevent-tickets-55311196277</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">https://blog.nevercodealone.de/</sv:value></sv:property><sv:property sv:name=\"i18n:en-blogLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">Vorbericht</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"67\">https://blog.nevercodealone.de/raketentechnik-fuer-den-guten-zweck/</sv:value></sv:property><sv:property sv:name=\"i18n:en-socialInstitutionLinkText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"16\">Soziales Projekt</sv:value></sv:property><sv:property sv:name=\"i18n:en-donation\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"3\">400</sv:value></sv:property><sv:property sv:name=\"i18n:en-description\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"94\">Java Community Workshop mit Live Coding für E-Commerce Development Best Practice in Dortmund.</sv:value></sv:property><sv:property sv:name=\"i18n:en-eventheaderimage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[16]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterSpeaker\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">4</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterMember\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"2\">40</sv:value></sv:property><sv:property sv:name=\"i18n:en-counterHours\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"2\">10</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewLeft\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"7\">YouTube</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"35\">Über #NCAEvents - Nerds für Nerds</sv:value></sv:property><sv:property sv:name=\"i18n:en-overviewRight\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"429\">&lt;p&gt;Web Developer brauchen kostenlose und gute Weiterbildung. Auf den Events lernen wir gemeinsam an der Funktastatur.&lt;/p&gt;&lt;p&gt;Wir wollen Coder coden sehen und zusammen lernen. Debugging, der richtige Einsatz von Tools, Pair Programming und der Blick über den Tellerrand.&lt;/p&gt;&lt;p&gt;Soziale Projekte sind uns wichtig und werden von uns mit dem Eintrittsgeld zu 100% unterstützt. Diesmal geht es an ein soziales Projekt in Dortmund.&lt;/p&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"40\">Zeitplan Accenture Interactive #NCAEvent</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"51\">4 mal Live Coding mit der Funktastatur und Catering</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"27\">Die kommt schon aus dem CMS</sv:value></sv:property><sv:property sv:name=\"i18n:en-template\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"10\">conference</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-published\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-26T13:59:11.548+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-authored\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-26T00:21:52.000+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-author\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-26T00:21:52.624+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-28T11:25:10.560+00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-navContexts\" sv:type=\"String\" sv:multi-valued=\"1\"><sv:value length=\"4\">main</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-time#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">09:00:00</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableHeadline#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">Frühstück</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-images#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"4\">null</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-alignRight#0\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"i18n:en-timeTableItems-timetableDescription#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"0\"></sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">5</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">featureItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"22\">4 Live Coding Sessions</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">featureItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#1\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"27\">Frühstück und Mittagessen</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">featureItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#2\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"20\">Community Networking</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">featureItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#3\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">Getränke</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"11\">featureItem</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#4\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">Spende für ein soziales Projekt</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-type#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">editor_image</sv:value></sv:property><sv:property sv:name=\"i18n:en-priceFeature-priceFeatureItem#5\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"43\">Freiwillige Spende fü ein soziales Projekt</sv:value></sv:property><sv:property sv:name=\"i18n:en-excerpt-title\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"21\">Accenture Interactive</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationUrl\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"49\">https://www.accenture.com/de-de/interactive-index</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationUrlText\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"21\">Accenture Interactive</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationGoogleMapsLin\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"143\">http://www.google.com/maps/place/Accenture+Deutschland+GmbH/@51.4927,7.39503,15z/data=!4m5!3m4!1s0x0:0xcab52ab5ae3e23ea!8m2!3d51.4927!4d7.39503</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationGoogleMapsLink\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"144\">https://www.google.com/maps/place/Accenture+Deutschland+GmbH/@51.4927,7.39503,15z/data=!4m5!3m4!1s0x0:0xcab52ab5ae3e23ea!8m2!3d51.4927!4d7.39503</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationStreetAndNumber\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"13\">Sebrathweg 20</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationZipAndTown\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"14\">44149 Dortmund</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationBackgroundImage\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[18]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationLatitude\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"9\">51.492660</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationLongitude\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"8\">7.395570</sv:value></sv:property><sv:property sv:name=\"i18n:en-locationIframe\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"310\">&lt;iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9936.472447802662!2d7.39503!3d51.4927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcab52ab5ae3e23ea!2sAccenture+Deutschland+GmbH!5e0!3m2!1sde!2sde!4v1548668669178\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen&gt;&lt;/iframe&gt;</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerHeadline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"46\">Accenture Interactive #NCAEvent 5 Top Speaker </sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerSubline\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"67\">Übersicht der Accenture Interactive Speaker Java-Live-Coding Event</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-length\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-type#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"7\">speaker</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemImage#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"12\">{\"ids\":[19]}</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemName#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"14\">Jens Eickmeyer</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemJobTitle#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"31\">Software Engineer und Architekt</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemXingUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"43\">https://www.xing.com/profile/Jens_Eickmeyer</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemTwitterUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"33\">https://twitter.com/jenseickmeyer</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemGithubUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"32\">https://github.com/jenseickmeyer</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemLinkedinUrl#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"41\">https://www.linkedin.com/in/jenseickmeyer</sv:value></sv:property><sv:property sv:name=\"i18n:en-speakerItem-speakerItemBio#0\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"208\">&lt;p&gt;Jens Eickmeyer ist leidenschaftlicher Software Engineer und Architekt. Sein aktueller Fokus liegt auf Cloud-native Application Development, insbesondere auf der Plattform von Amazon Web Services (AWS).&lt;/p&gt;</sv:value></sv:property></sv:node>\n','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"sulu:order\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"2\">10</sv:value></sv:property><sv:property sv:name=\"i18n:en-state\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">2</sv:value></sv:property><sv:property sv:name=\"i18n:en-creator\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-changer\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property><sv:property sv:name=\"i18n:en-nodeType\" sv:type=\"Long\" sv:multi-valued=\"0\"><sv:value length=\"1\">1</sv:value></sv:property></sv:node>\n',5,0),(72,'/cmf/example/routes/en/ncaevents/accenture-interactive','/cmf/example/routes/en/ncaevents','accenture-interactive','','default','0d2863b8-58d3-424d-af6f-9c1c2c5eb7dd','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">0d2863b8-58d3-424d-af6f-9c1c2c5eb7dd</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-26T13:59:11.579+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-26T13:59:11.579+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">58045c9e-dcd5-43a1-a571-b164e6f4f364</sv:value></sv:property></sv:node>\n',NULL,6,7),(73,'/cmf/example/routes/en/ncaevents/accenture-interactive','/cmf/example/routes/en/ncaevents','accenture-interactive','','default_live','0d2863b8-58d3-424d-af6f-9c1c2c5eb7dd','nt:unstructured','<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sv:node xmlns:mix=\"http://www.jcp.org/jcr/mix/1.0\" xmlns:nt=\"http://www.jcp.org/jcr/nt/1.0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:jcr=\"http://www.jcp.org/jcr/1.0\" xmlns:sv=\"http://www.jcp.org/jcr/sv/1.0\" xmlns:rep=\"internal\"><sv:property sv:name=\"jcr:primaryType\" sv:type=\"Name\" sv:multi-valued=\"0\"><sv:value length=\"15\">nt:unstructured</sv:value></sv:property><sv:property sv:name=\"jcr:mixinTypes\" sv:type=\"Name\" sv:multi-valued=\"1\"><sv:value length=\"17\">mix:referenceable</sv:value><sv:value length=\"9\">sulu:path</sv:value></sv:property><sv:property sv:name=\"jcr:uuid\" sv:type=\"String\" sv:multi-valued=\"0\"><sv:value length=\"36\">0d2863b8-58d3-424d-af6f-9c1c2c5eb7dd</sv:value></sv:property><sv:property sv:name=\"sulu:history\" sv:type=\"Boolean\" sv:multi-valued=\"0\"><sv:value length=\"0\">0</sv:value></sv:property><sv:property sv:name=\"sulu:created\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-26T13:59:11.579+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:changed\" sv:type=\"Date\" sv:multi-valued=\"0\"><sv:value length=\"29\">2019-01-26T13:59:11.579+00:00</sv:value></sv:property><sv:property sv:name=\"sulu:content\" sv:type=\"Reference\" sv:multi-valued=\"0\"><sv:value length=\"36\">58045c9e-dcd5-43a1-a571-b164e6f4f364</sv:value></sv:property></sv:node>\n',NULL,6,8);
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
INSERT INTO `phpcr_nodes_references` VALUES (5,'i18n:en-blocks-snippets#0',55),(5,'i18n:en-blocks-snippets#1',55),(7,'sulu:content',5),(10,'i18n:en-blocks-snippets#0',57),(10,'i18n:en-blocks-snippets#1',57),(12,'sulu:content',10),(29,'i18n:en-internal_link',70),(30,'i18n:en-internal_link',71),(31,'sulu:content',29),(32,'sulu:content',30),(34,'sulu:content',33),(36,'sulu:content',35),(38,'sulu:content',37),(40,'sulu:content',39),(42,'sulu:content',41),(44,'sulu:content',43),(46,'sulu:content',45),(48,'sulu:content',47),(55,'i18n:en-slider-slider_link#0',37),(55,'i18n:en-slider-slider_link#1',45),(57,'i18n:en-slider-slider_link#0',39),(57,'i18n:en-slider-slider_link#1',47),(59,'sulu:content',58),(61,'sulu:content',60),(63,'sulu:content',68),(65,'sulu:content',69),(66,'sulu:content',68),(67,'sulu:content',69),(68,'sulu:content',62),(69,'sulu:content',64),(72,'sulu:content',70),(73,'sulu:content',71);
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_permissions`
--

LOCK TABLES `se_permissions` WRITE;
/*!40000 ALTER TABLE `se_permissions` DISABLE KEYS */;
INSERT INTO `se_permissions` VALUES (1,'sulu.contact.people',NULL,127,1),(2,'sulu.contact.organizations',NULL,127,1),(3,'sulu.media.collections',NULL,127,1),(4,'sulu.media.system_collections',NULL,127,1),(5,'sulu.security.roles',NULL,127,1),(6,'sulu.security.groups',NULL,127,1),(7,'sulu.security.users',NULL,127,1),(8,'sulu.settings.categories',NULL,127,1),(9,'sulu.settings.tags',NULL,127,1),(10,'sulu.global.snippets',NULL,127,1),(11,'sulu.webspaces.example.default-snippets',NULL,127,1),(12,'sulu.webspaces.example',NULL,127,1),(13,'sulu.webspaces.example.analytics',NULL,127,1),(14,'sulu.webspaces.example.custom-urls',NULL,127,1);
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
  `system` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `changed` datetime NOT NULL,
  `idSecurityTypes` int(11) DEFAULT NULL,
  `idUsersCreator` int(11) DEFAULT NULL,
  `idUsersChanger` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_13B749A05E237E06` (`name`),
  KEY `IDX_13B749A0D02106C0` (`idSecurityTypes`),
  KEY `IDX_13B749A0DBF11E1D` (`idUsersCreator`),
  KEY `IDX_13B749A030D07CD5` (`idUsersChanger`),
  CONSTRAINT `FK_13B749A030D07CD5` FOREIGN KEY (`idUsersChanger`) REFERENCES `se_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_13B749A0D02106C0` FOREIGN KEY (`idSecurityTypes`) REFERENCES `se_security_types` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_13B749A0DBF11E1D` FOREIGN KEY (`idUsersCreator`) REFERENCES `se_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_roles`
--

LOCK TABLES `se_roles` WRITE;
/*!40000 ALTER TABLE `se_roles` DISABLE KEYS */;
INSERT INTO `se_roles` VALUES (1,'User','Sulu','2019-01-07 09:33:49','2019-01-07 09:33:49',NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_user_roles`
--

LOCK TABLES `se_user_roles` WRITE;
/*!40000 ALTER TABLE `se_user_roles` DISABLE KEYS */;
INSERT INTO `se_user_roles` VALUES (1,'[\"en\"]',1,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_users`
--

LOCK TABLES `se_users` WRITE;
/*!40000 ALTER TABLE `se_users` DISABLE KEYS */;
INSERT INTO `se_users` VALUES (1,'admin','$2y$13$sn0jvTi02NOg.Z1tgIBVB.vqubnvLRPAjqnXVKm20ehAidkGoW3M6','en','SVP8+A1imhmOJ3zptSCsWSmxDKYDs9yGlRQH1SgcIVU=',0,1,'2019-01-28 09:19:01',NULL,NULL,NULL,NULL,NULL,'5a83e057c11f5aab98500037a7791bdd','admin@example.com',1);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ta_tags`
--

LOCK TABLES `ta_tags` WRITE;
/*!40000 ALTER TABLE `ta_tags` DISABLE KEYS */;
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

--
-- Dumping routines for database 'nca_sulu'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-28 17:57:46
