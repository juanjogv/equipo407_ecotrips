-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "users" CASCADE;
CREATE TABLE users(
  "id" serial PRIMARY KEY,
  "user_first_name" varchar(50) NOT NULL,
  "user_last_name" varchar(50) NOT NULL,
  "user_id" varchar(50) UNIQUE NOT NULL,
  "user_email" varchar(60) UNIQUE NOT NULL,
  "user_password" varchar(160) NOT NULL
);

-- ----------------------------
-- Table structure for users_trip_city
-- ----------------------------
DROP TABLE IF EXISTS "users_trip_city" CASCADE;
CREATE TABLE "users_trip_city" (
  "id" serial PRIMARY KEY,
  "id_user" integer NOT NULL,
  "id_city" integer NOT NULL
);

-- ----------------------------
-- Table structure for cities
-- ----------------------------
DROP TABLE IF EXISTS "cities" CASCADE;
CREATE TABLE "cities" (
  "id" integer PRIMARY KEY,
  "city_name" varchar(100) NOT NULL,
  "id_department" integer NOT NULL,
  "city_desc" varchar(2500),
  "city_photos" text[],
  "city_home_photo" varchar(200)
);

-- ----------------------------
-- Table structure for review_cities
-- ----------------------------
DROP TABLE IF EXISTS "review_cities" CASCADE;
CREATE TABLE "review_cities" (
  "id" serial PRIMARY KEY,
  "id_user" integer NOT NULL,
  "id_city" integer NOT NULL,
  "review_title" varchar(100) NOT NULL,
  "review_desc" varchar(300) NOT NULL,
  "review_points" integer NOT NULL
);

-- ----------------------------
-- Table structure for review_votes_cities
-- ----------------------------
DROP TABLE IF EXISTS "review_votes_cities" CASCADE;
CREATE TABLE "review_votes_cities" (
  "id" serial PRIMARY KEY,
  "id_user" integer NOT NULL,
  "id_review" integer NOT NULL,
  "useful_review" bool NOT NULL
);

-- ----------------------------
-- Table structure for departments
-- ----------------------------
DROP TABLE IF EXISTS "departments" CASCADE;
CREATE TABLE "departments" (
  "id" integer PRIMARY KEY,
  "department_name" varchar(100) NOT NULL
);

-- ----------------------------
-- Table structure for touristic_places
-- ----------------------------
DROP TABLE IF EXISTS "touristic_places" CASCADE;
CREATE TABLE "touristic_places" (
  "id" serial PRIMARY KEY,
  "id_city" integer NOT NULL,
  "touristic_place_name" varchar(100),
  "touristic_place_desc" varchar(2500),
  "touristic_place_photos" text[],
  "touristic_place_home_photo" varchar(200),
  "touristic_place_longitude" decimal(10,6),
  "touristic_place_latitude" decimal(10,6)
);

-- ----------------------------
-- Table structure for review_touristic_places
-- ----------------------------
DROP TABLE IF EXISTS "review_touristic_places" CASCADE;
CREATE TABLE "review_touristic_places" (
  "id" serial PRIMARY KEY,
  "id_user" integer NOT NULL,
  "id_touristic_place" integer NOT NULL,
  "review_title" varchar(100) NOT NULL,
  "review_desc" varchar(300) NOT NULL,
  "review_points" integer NOT NULL
);

-- ----------------------------
-- Table structure for review_votes_touristic_places
-- ----------------------------
DROP TABLE IF EXISTS "review_votes_touristic_places" CASCADE;
CREATE TABLE "review_votes_touristic_places" (
  "id" serial PRIMARY KEY,
  "id_user" integer NOT NULL,
  "id_review" integer NOT NULL,
  "useful_review" bool NOT NULL
);

-- ----------------------------
-- Table structure for hotels
-- ----------------------------
DROP TABLE IF EXISTS "hotels" CASCADE;
CREATE TABLE "hotels" (
  "id" serial PRIMARY KEY,
  "id_city" integer NOT NULL,
  "hotel_name" varchar(100),
  "hotel_desc" varchar(2500),
  "hotel_photos" text[],
  "hotel_home_photo" varchar(200),
  "hotel_longitude" decimal(10,6),
  "hotel_latitude" decimal(10,6)
);

-- ----------------------------
-- Table structure for review_hotels
-- ----------------------------
DROP TABLE IF EXISTS "review_hotels" CASCADE;
CREATE TABLE "review_hotels" (
  "id" serial PRIMARY KEY,
  "id_user" integer NOT NULL,
  "id_hotel" integer NOT NULL,
  "review_title" varchar(100) NOT NULL,
  "review_desc" varchar(300) NOT NULL,
  "review_points" integer NOT NULL
);

-- ----------------------------
-- Table structure for review_votes_hotels
-- ----------------------------
DROP TABLE IF EXISTS "review_votes_hotels" CASCADE;
CREATE TABLE "review_votes_hotels" (
  "id" serial PRIMARY KEY,
  "id_user" integer NOT NULL,
  "id_review" integer NOT NULL,
  "useful_review" bool NOT NULL
);

-- ----------------------------
-- Table structure for restaurants
-- ----------------------------
DROP TABLE IF EXISTS "restaurants" CASCADE;
CREATE TABLE "restaurants" (
  "id" serial PRIMARY KEY,
  "id_city" integer NOT NULL,
  "restaurant_name" varchar(100),
  "restaurant_desc" varchar(2500),
  "restaurant_photos" text[],
  "restaurant_home_photo" varchar(200),
  "restaurant_longitude" decimal(10,6),
  "restaurant_latitude" decimal(10,6)
);

-- ----------------------------
-- Table structure for review_restaurants
-- ----------------------------
DROP TABLE IF EXISTS "review_restaurants" CASCADE;
CREATE TABLE "review_restaurants" (
  "id" serial PRIMARY KEY,
  "id_user" integer NOT NULL,
  "id_restaurant" integer NOT NULL,
  "review_title" varchar(100) NOT NULL,
  "review_desc" varchar(300) NOT NULL,
  "review_points" integer NOT NULL
);

-- ----------------------------
-- Table structure for review_votes_restaurants
-- ----------------------------
DROP TABLE IF EXISTS "review_votes_restaurants" CASCADE;
CREATE TABLE "review_votes_restaurants" (
  "id" serial PRIMARY KEY,
  "id_user" integer NOT NULL,
  "id_review" integer NOT NULL,
  "useful_review" bool NOT NULL
);

-- ----------------------------
-- Table structure for booking_hotels
-- ----------------------------
DROP TABLE IF EXISTS "booking_hotels" CASCADE;
CREATE TABLE "booking_hotels" (
  "id" serial PRIMARY KEY,
  "id_user" integer NOT NULL,
  "id_hotel" integer NOT NULL
);

-- ----------------------------
-- Table structure for booking_restaurants
-- ----------------------------
DROP TABLE IF EXISTS "booking_restaurants" CASCADE;
CREATE TABLE "booking_restaurants" (
  "id" serial PRIMARY KEY,
  "id_user" integer NOT NULL,
  "id_restaurant" integer NOT NULL
);

-- ----------------------------
-- Foreign Keys structure for table booking_hotels
-- ----------------------------
ALTER TABLE "public"."booking_hotels" ADD CONSTRAINT "fk_hotel" FOREIGN KEY ("id_hotel") REFERENCES "public"."hotels" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."booking_hotels" ADD CONSTRAINT "fk_user" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table booking_restaurants
-- ----------------------------
ALTER TABLE "public"."booking_restaurants" ADD CONSTRAINT "booking_restaurants" FOREIGN KEY ("id_restaurant") REFERENCES "public"."restaurants" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."booking_restaurants" ADD CONSTRAINT "fk_user" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table cities
-- ----------------------------
ALTER TABLE "public"."cities" ADD CONSTRAINT "fk_department" FOREIGN KEY ("id_department") REFERENCES "public"."departments" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table hotels
-- ----------------------------
ALTER TABLE "public"."hotels" ADD CONSTRAINT "fk_place" FOREIGN KEY ("id_city") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table restaurants
-- ----------------------------
ALTER TABLE "public"."restaurants" ADD CONSTRAINT "fk_place" FOREIGN KEY ("id_city") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table review_votes_cities
-- ----------------------------
ALTER TABLE "public"."review_votes_cities" ADD CONSTRAINT "fk_review" FOREIGN KEY ("id_review") REFERENCES "public"."review_cities" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."review_votes_cities" ADD CONSTRAINT "fk_user" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table review_cities
-- ----------------------------
ALTER TABLE "public"."review_cities" ADD CONSTRAINT "fk_city" FOREIGN KEY ("id_city") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."review_cities" ADD CONSTRAINT "fk_user" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table review_votes_touristic_places
-- ----------------------------
ALTER TABLE "public"."review_votes_touristic_places" ADD CONSTRAINT "fk_review" FOREIGN KEY ("id_review") REFERENCES "public"."review_touristic_places" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."review_votes_touristic_places" ADD CONSTRAINT "fk_user" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table review_touristic_places
-- ----------------------------
ALTER TABLE "public"."review_touristic_places" ADD CONSTRAINT "fk_touristic_place" FOREIGN KEY ("id_touristic_place") REFERENCES "public"."touristic_places" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."review_touristic_places" ADD CONSTRAINT "fk_user" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table review_votes_hotels
-- ----------------------------
ALTER TABLE "public"."review_votes_hotels" ADD CONSTRAINT "fk_hotel" FOREIGN KEY ("id_review") REFERENCES "public"."review_hotels" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."review_votes_hotels" ADD CONSTRAINT "fk_user" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table review_hotels
-- ----------------------------
ALTER TABLE "public"."review_hotels" ADD CONSTRAINT "fk_hotel" FOREIGN KEY ("id_hotel") REFERENCES "public"."hotels" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."review_hotels" ADD CONSTRAINT "fk_user" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table review_votes_restaurants
-- ----------------------------
ALTER TABLE "public"."review_votes_restaurants" ADD CONSTRAINT "fk_review" FOREIGN KEY ("id_review") REFERENCES "public"."review_restaurants" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."review_votes_restaurants" ADD CONSTRAINT "fk_user" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table review_restaurants
-- ----------------------------
ALTER TABLE "public"."review_restaurants" ADD CONSTRAINT "fk_restaurants" FOREIGN KEY ("id_restaurant") REFERENCES "public"."restaurants" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."review_restaurants" ADD CONSTRAINT "fk_user" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table touristic_places
-- ----------------------------
ALTER TABLE "public"."touristic_places" ADD CONSTRAINT "fk_place" FOREIGN KEY ("id_city") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table users_trip_city
-- ----------------------------
ALTER TABLE "public"."users_trip_city" ADD CONSTRAINT "fk_city" FOREIGN KEY ("id_city") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."users_trip_city" ADD CONSTRAINT "fk_user" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
