-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date_of_transaction" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" DECIMAL NOT NULL,
    "type" DECIMAL NOT NULL
);
