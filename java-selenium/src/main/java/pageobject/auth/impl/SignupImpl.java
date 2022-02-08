package pageObject.auth.impl;


import pageObject.auth.Signup;

import dto.User;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import util.Constants.Test;

import java.time.Duration;

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

    @Override
    public void sendData() {
        firstNameInput.sendKeys(user.getFirstName());
        lastNameInput.sendKeys(user.getLastName());
        IdInput.sendKeys(user.getId());
        emailInput.sendKeys(user.getEmail());
        passwordInput.sendKeys(user.getPassword());
        SignupButton.click();
    }

    @Override
    public boolean isSignupSuccess() {
        String validator = user.isLogged() ? "This email is already registered" : "Lugares turísticos";
        String validatorElement = user.isLogged() ? "#app > div > div > div.vue-alert.top.right.active > div > div.alert-content > p" : "#app > div > div > div > div.pt-4.pb-5.GlobalContainer > div:nth-child(1) > h1";

        new WebDriverWait(driver, Duration.ofSeconds(Test.WAIT_TIME_MS))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(validatorElement)));
        String textToValidate = driver.findElement(By.cssSelector(validatorElement)).getText();
        return validator.contains(textToValidate);
    }

    private void goToSignup() {
        SignupButton = driver.findElement(By.xpath("//*[@id=\"app\"]/div/div/div[3]/form/div[1]/div[4]/div[2]/input"));
        SignupButton.click();
    }

    private void setWebElements() {
        new WebDriverWait(driver, Duration.ofSeconds(Test.WAIT_TIME_MS)).until(ExpectedConditions.elementToBeClickable(By.id("first-name")));
        firstNameInput = driver.findElement(By.id("first-name"));
        lastNameInput = driver.findElement(By.id("last-name"));
        IdInput = driver.findElement(By.id("idUser"));
        emailInput = driver.findElement(By.id("emailSignin"));
        passwordInput = driver.findElement(By.id("passwordSignin"));
        SignupButton = driver.findElement(By.xpath("//*[@id=\"app\"]/div/div/div[3]/form/div[2]/div[7]/div[1]/input"));
    }
}
