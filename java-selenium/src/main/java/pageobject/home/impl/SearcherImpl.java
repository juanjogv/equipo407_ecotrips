package pageobject.home.impl;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import pageobject.home.Searcher;
import util.ConnectionManager;
import util.PropertiesManager;

public class SearcherImpl implements Searcher {

    private static final Logger LOGGER = LoggerFactory.getLogger(SearcherImpl.class);

    private final WebDriver driver;

    private final List<String> expectedProducts;

    private WebElement homeSearcher;

    private final List<String> products;

    public SearcherImpl(WebDriver driver) {
        this.driver = driver;
        this.products = new ArrayList<>();
        this.expectedProducts = new ArrayList<>();
        this.setWebElements();
    }

    @Override
    public boolean isSearcherSuccess() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.findElements(By.className("elementName")).forEach(element -> products.add(element.getText()));

        this.getExpectedData();

        return !products.isEmpty() && expectedProducts.containsAll(products);
    }

    @Override
    public void sendData() {
        homeSearcher.sendKeys("Medellín");
    }

    private void getExpectedData() {
        Connection conn = ConnectionManager.getConnection();
        String query = PropertiesManager.getSql("searcher.products");

        try (Statement stmt = conn.createStatement()) {
            //(PreparedStatement pstmt = conn.prepareStatement(query))
            //pstmt.setString(1, "Medellín");

            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()) {
                expectedProducts.add(rs.getString("products"));
            }

        } catch (SQLException e) {
            LOGGER.error(e.getMessage());
        }
    }

    private void setWebElements() {
        homeSearcher = driver.findElement(By.tagName("input"));
    }
}
