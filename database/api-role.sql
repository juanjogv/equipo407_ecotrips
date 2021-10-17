GRANT Connect ON DATABASE "ecotrips" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."booking_hotels" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."booking_restaurants" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."cities" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."departments" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."hotels" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."restaurants" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."review_cities" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."review_hotels" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."review_restaurants" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."review_touristic_places" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."review_votes_cities" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."review_votes_hotels" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."review_votes_restaurants" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."review_votes_touristic_places" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."touristic_places" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."users" TO "api";

GRANT Delete, Insert, Select, Update ON TABLE "public"."users_trip_city" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."booking_hotels_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."booking_restaurants_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."hotels_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."restaurants_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."review_cities_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."review_hotels_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."review_restaurants_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."review_touristic_places_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."review_votes_cities_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."review_votes_hotels_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."review_votes_restaurants_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."review_votes_touristic_places_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."touristic_places_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."users_id_seq" TO "api";

GRANT Select, Update, Usage ON SEQUENCE "public"."users_trip_city_id_seq" TO "api";