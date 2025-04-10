-- DropForeignKey
ALTER TABLE `Service` DROP FOREIGN KEY `Service_userId_fkey`;

-- DropIndex
DROP INDEX `Service_userId_fkey` ON `Service`;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
