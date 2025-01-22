-- Delete and recreate the cronus database
DROP DATABASE IF EXISTS cronus;
CREATE DATABASE cronus;

-- Use the new database
USE cronus;

-- Load the schema
SOURCE schema.sql;

-- Load the seed data
SOURCE cronus_seed.sql;
