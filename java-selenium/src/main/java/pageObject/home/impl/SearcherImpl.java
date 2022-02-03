package pageObject.home.impl;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import pageObject.home.Searcher;

public class SearcherImpl implements Searcher {

    private final WebDriver driver;

    private WebElement homeSearcher;

    public SearcherImpl(WebDriver driver) {
        this.driver = driver;
        this.setWebElements();
    }

    @Override
    public void sendData() {
        homeSearcher.sendKeys("Medellín");
    }

    private void setWebElements() {
        homeSearcher = driver.findElement(By.tagName("input"));
    }

}
