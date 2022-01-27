package auth.impl;

import auth.Login;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import dto.User;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import util.Constants.Test;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.lang.reflect.Type;
import java.time.Duration;
import java.util.ArrayList;

public class LoginImpl implements Login {

    private final WebDriver driver;

    private WebElement emailInput;
    private WebElement passwordInput;
    private WebElement loginButton;

    private final User user;

    public LoginImpl(WebDriver driver, User user) {
        this.driver = driver;
        this.user = user;
        this.setWebElements();
    }

    public void sendData() {
        emailInput.sendKeys(user.getEmail());
        passwordInput.sendKeys(user.getPassword());
        loginButton.click();
    }

    public boolean isLoginSuccess() {
        String validator = user.isLogged() ? "Lugares turísticos" : "Email address not found";
        String validatorElement = user.isLogged() ? "#app > div > div > div > div.pt-4.pb-5.GlobalContainer > div:nth-child(1) > h1" : "#app > div > div > div.alert.alert-warning.d-flex.align-items-center.alert-dismissible.fade.show";

        new WebDriverWait(driver, Duration.ofSeconds(Test.WAIT_TIME_MS))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(validatorElement)));
        String textToValidate = driver.findElement(By.cssSelector(validatorElement)).getText();
        return validator.contains(textToValidate);
    }

    private void setWebElements() {
        emailInput = driver.findElement(By.id("emailLogin"));
        passwordInput = driver.findElement(By.id("passwordLogin"));
        loginButton = driver.findElement(By.xpath("//*[@id=\"app\"]/div/div/div[2]/form[1]/div/div[3]/div[1]/input"));
    }
}
