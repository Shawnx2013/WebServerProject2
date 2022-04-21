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
-- Table `inventory-db`.`location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `inventory-db`.`location` ;

CREATE TABLE IF NOT EXISTS `inventory-db`.`location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
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
  `count` INT NOT NULL,
  `location` INT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`location`) REFERENCES location(`id`)
)
ENGINE = InnoDB;

