/*
  Warnings:

  - You are about to drop the column `about` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `clients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "about",
DROP COLUMN "username";
