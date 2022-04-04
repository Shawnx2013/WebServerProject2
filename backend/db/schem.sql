-- -----------------------------------------------------
-- Schema inventory-system
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Inventory-DB` ;

-- -----------------------------------------------------
-- Schema Inventory-DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Inventory-DB` DEFAULT CHARACTER SET utf8 ;
USE `Inventory-DB` ;

-- -----------------------------------------------------
-- Table `Inventory-DB`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Inventory-DB`.`user` ;

CREATE TABLE IF NOT EXISTS `InventoryDB`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(65) NOT NULL,
  `password` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `role_fk` FOREIGN KEY (`role_id`) REFERENCES role(`id`)
)
ENGINE = InnoDB;