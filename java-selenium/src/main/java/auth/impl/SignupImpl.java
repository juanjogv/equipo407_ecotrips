package auth.impl;

import auth.Signup;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import util.Constants.Test;

import java.time.Duration;

public class SignupImpl implements Signup {

	private WebDriver driver;

	private WebElement firstNameInput;
	private WebElement lastNameInput;
	private WebElement IDInput;
	private WebElement emailInput;
	private WebElement passwordInput;
	private WebElement SignupButton;

	public SignupImpl(WebDriver driver) {
		this.driver = driver;
		this.goToSignup();
		this.setWebElements();
	}

	public void sendData() {
		firstNameInput.sendKeys("juan@gmail.com");
		lastNameInput.sendKeys("123");
		IDInput.sendKeys("123");
		emailInput.sendKeys("123");
		passwordInput.sendKeys("123");
		SignupButton.click();
	}

	public boolean isLoginSucces(String validator) {
		new WebDriverWait(driver, Duration.ofSeconds(Test.WAIT_TIME_MS))
				.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"app\"]/div/div/div/div[2]/div[1]/h1")));
		String textToValidate = driver.findElement(By.xpath("//*[@id=\"app\"]/div/div/div/div[2]/div[1]/h1")).getText();
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
		IDInput = driver.findElement(By.id("idUser"));
		emailInput = driver.findElement(By.id("emailSignin"));
		passwordInput = driver.findElement(By.id("passwordSignin"));
		SignupButton = driver.findElement(By.xpath("//*[@id=\"app\"]/div/div/div[2]/form[2]/div/div[6]/div[1]/input"));
	}
}
