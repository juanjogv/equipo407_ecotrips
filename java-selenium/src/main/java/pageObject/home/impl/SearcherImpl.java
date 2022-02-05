package pageObject.home.impl;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageObject.home.Searcher;
import util.Constants;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

public class SearcherImpl implements Searcher {

    private final WebDriver driver;

    private WebElement homeSearcher;

    private List<String> touristicPlaces;

    public SearcherImpl(WebDriver driver) {
        this.driver = driver;
        this.setWebElements();
        touristicPlaces = new ArrayList<>();
    }

    @Override
    public void sendData() {
        new WebDriverWait(driver, Duration.ofSeconds(Constants.Test.WAIT_TIME_MS));
        homeSearcher.sendKeys("Medellín");
    }

    @Override
    public boolean isSearcherSuccess(){
        String placeText = "Plaza Botero";
        new WebDriverWait(driver, Duration.ofSeconds(Constants.Test.WAIT_TIME_MS))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#app > div > div > div > div.pt-4.pb-5.GlobalContainer > div.elementsContainer.justify-content-start.align-items-center.mt-5 > div:nth-child(1) > p")));

        driver.findElements(By.className("placesText")).forEach(e->{touristicPlaces.add(e.getText());});

        return touristicPlaces.contains(placeText);
    }
    private void setWebElements() {
        homeSearcher = driver.findElement(By.tagName("input"));
    }

}
