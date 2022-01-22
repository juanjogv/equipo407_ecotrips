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
    private WebDriver driver;

    private WebElement emailInput;
    private WebElement passwordInput;
    private WebElement loginButton;

    private User user;

    public LoginImpl(WebDriver driver) {
        this.driver = driver;
        this.setWebElements();
    }

    public void sendData() {
        this.getUser();
        emailInput.sendKeys(user.getEmail());
        passwordInput.sendKeys(user.getPassword());
        loginButton.click();
    }

    public boolean isLoginSuccess() {
        String validator = user.isLogged() ? "Lugares turísticos" : "!Porfavor digita los datos faltantes¡";
        String validatorElement = user.isLogged() ? "//*[@id=\"app\"]/div/div/div/div[2]/div[1]/h1" : "//*[@id=\"app\"]/div/div/div[1]/div/div/h4";

        new WebDriverWait(driver, Duration.ofSeconds(Test.WAIT_TIME_MS))
                .until(ExpectedConditions.elementToBeClickable(By.xpath(validatorElement)));
        String textToValidate = driver.findElement(By.xpath(validatorElement)).getText();
        return  validator.contains(textToValidate);
    }

    private void setWebElements() {
        emailInput = driver.findElement(By.id("emailLogin"));
        passwordInput = driver.findElement(By.id("passwordLogin"));
        loginButton = driver.findElement(By.xpath("//*[@id=\"app\"]/div/div/div[2]/form[1]/div/div[3]/div[1]/input"));
    }

    private void getUser() {
        ArrayList<User> users;

        Gson gson = new Gson();

        Type listType = new TypeToken<ArrayList<User>>() {
        }.getType();

        try (Reader reader = new FileReader("src/main/resources/users.json")) {
            users = gson.fromJson(reader, listType);
            user = users.get((int) Math.floor(Math.random() * (99) + (1)));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
