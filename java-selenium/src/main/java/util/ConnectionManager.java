package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ConnectionManager {
    private static final Logger LOGGER = LoggerFactory.getLogger(ConnectionManager.class);

    private static String url = "jdbc:postgresql://postgres-development.c0th4teitfkz.us-east-2.rds.amazonaws.com:5432/ecotrips";
    private static String driverName = "org.postgresql.Driver";
    private static String userName = "postgres";
    private static String password = "adminmaster";
    private static Connection con;

    private ConnectionManager() {
    }

    public static Connection getConnection() {
        try {
            Class.forName(driverName);
            con = DriverManager.getConnection(url, userName, password);
        } catch (ClassNotFoundException ex) {
            LOGGER.error("Driver not found.");
            ex.printStackTrace();
        } catch (SQLException ex) {
            LOGGER.error("Failed to create the database connection.");
            ex.printStackTrace();
        }
        return con;
    }
}
