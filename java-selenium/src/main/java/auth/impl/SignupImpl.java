package auth.impl;


import auth.Signup;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;


import dto.User;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import util.Constants.Test;
import util.DataProvider.UserProvider;


import java.io.*;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.ArrayList;

public class SignupImpl implements Signup {

    private final WebDriver driver;

    private WebElement firstNameInput;
    private WebElement lastNameInput;
    private WebElement IdInput;
    private WebElement emailInput;
    private WebElement passwordInput;
    private WebElement SignupButton;

    private final User user;

    public SignupImpl(WebDriver driver, User user) {
        this.driver = driver;
        this.user = user;
        this.goToSignup();
        this.setWebElements();
    }

    public void sendData() {
        firstNameInput.sendKeys(user.getFirstName());
        lastNameInput.sendKeys(user.getLastName());
        IdInput.sendKeys(user.getId());
        emailInput.sendKeys(user.getEmail());
        passwordInput.sendKeys(user.getPassword());
        SignupButton.click();
    }

    public boolean isSignupSuccess() {
        String validator = user.isLogged() ? "This email is already registered" : "Lugares turísticos";
        String validatorElement = user.isLogged() ? "#app > div > div > div.alert.alert-warning.d-flex.align-items-center.alert-dismissible.fade.show" : "#app > div > div > div > div.pt-4.pb-5.GlobalContainer > div:nth-child(1) > h1";

        new WebDriverWait(driver, Duration.ofSeconds(Test.WAIT_TIME_MS))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(validatorElement)));
        String textToValidate = driver.findElement(By.cssSelector(validatorElement)).getText();
        return validator.contains(textToValidate);
    }

    private void goToSignup() {
        SignupButton = driver.findElement(By.xpath("//*[@id=\"app\"]/div/div/div[2]/form[1]/div/div[3]/div[2]/input"));
        SignupButton.click();
    }

    private void setWebElements() {
        new WebDriverWait(driver, Duration.ofSeconds(Test.WAIT_TIME_MS)).until(ExpectedConditions.elementToBeClickable(By.id("first-name")));
        firstNameInput = driver.findElement(By.id("first-name"));
        lastNameInput = driver.findElement(By.id("last-name"));
        IdInput = driver.findElement(By.id("idUser"));
        emailInput = driver.findElement(By.id("emailSignin"));
        passwordInput = driver.findElement(By.id("passwordSignin"));
        SignupButton = driver.findElement(By.xpath("//*[@id=\"app\"]/div/div/div[2]/form[2]/div/div[6]/div[1]/input"));
    }
}
