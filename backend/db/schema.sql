-- -----------------------------------------------------
-- Schema inventory-system
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `inventory-db` ;

-- -----------------------------------------------------
-- Schema inventory-db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `inventory-db` DEFAULT CHARACTER SET utf8 ;
USE `inventory-db` ;

-- -----------------------------------------------------
-- Table `inventory-db`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `inventory-db`.`user` ;

CREATE TABLE IF NOT EXISTS `inventory-db`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(35) NOT NULL,
  `password` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`)
)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `inventory-db`.`item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `inventory-db`.`item` ;

CREATE TABLE IF NOT EXISTS `inventory-db`.`item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(35) NOT NULL,
  `description` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`)
)
ENGINE = InnoDB;