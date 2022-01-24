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

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.lang.reflect.Type;
import java.time.Duration;
import java.util.ArrayList;

public class SignupImpl implements Signup {

	private WebDriver driver;

	private WebElement firstNameInput;
	private WebElement lastNameInput;
	private WebElement IdInput;
	private WebElement emailInput;
	private WebElement passwordInput;
	private WebElement SignupButton;

	private User user;

	public SignupImpl(WebDriver driver) {
		this.driver = driver;
		this.goToSignup();
		this.setWebElements();
	}

	public void sendData() {
		this.getUser();
		firstNameInput.sendKeys(user.getFirstName());
		lastNameInput.sendKeys(user.getLastName());
		IdInput.sendKeys(user.getId());
		emailInput.sendKeys(user.getEmail());
		passwordInput.sendKeys(user.getPassword());
		SignupButton.click();
	}

	public boolean isSignupSuccess() {
		String validator = user.isLogged() ? "This email is already registered" : "Lugares turísticos";
		String validatorElement = user.isLogged() ? "//*[@id=\"app\"]/div/div/div[1]/h4" : "//*[@id=\"app\"]/div/div/div/div[2]/div[1]/h1";

		new WebDriverWait(driver, Duration.ofSeconds(Test.WAIT_TIME_MS))
				.until(ExpectedConditions.elementToBeClickable(By.xpath(validatorElement)));
		String textToValidate = driver.findElement(By.xpath(validatorElement)).getText();
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
