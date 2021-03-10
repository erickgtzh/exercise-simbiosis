/*
 Navicat Premium Data Transfer

 Source Server         : exercise
 Source Server Type    : MySQL
 Source Server Version : 50732
 Source Host           : localhost:8889
 Source Schema         : exercise

 Target Server Type    : MySQL
 Target Server Version : 50732
 File Encoding         : 65001

 Date: 09/03/2021 21:24:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for genders
-- ----------------------------
DROP TABLE IF EXISTS `genders`;
CREATE TABLE `genders` (
  `gender_id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`gender_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of genders
-- ----------------------------
BEGIN;
INSERT INTO `genders` VALUES (1, 'male');
INSERT INTO `genders` VALUES (2, 'female');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `birthday` date NOT NULL,
  `password` varchar(40) NOT NULL,
  `gender_id` tinyint(4) NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `gender_id` (`gender_id`),
  CONSTRAINT `fk_gender_id` FOREIGN KEY (`gender_id`) REFERENCES `genders` (`gender_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (9, 'Ericko', 'Gallego', '1996-02-28', 'Hola123', 1);
INSERT INTO `users` VALUES (13, 'Paola', 'Rudman', '2000-08-05', 'Hello1234', 2);
INSERT INTO `users` VALUES (17, 'Laura', 'Sean', '1992-02-28', 'Hola123', 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
