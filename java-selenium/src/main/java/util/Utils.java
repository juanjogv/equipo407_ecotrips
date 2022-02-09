package util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import util.Constants.Browsers;
import util.Constants.Drivers;
import util.Constants.PC;

public class Utils {

	private Utils() {
	}

	public static String getTipoDriver() throws Exception {
		String value = PropertiesManager.getConf("BrowserDriver");
		if (Browsers.CHROME.contains(value)) {
			return Drivers.CHROME;
		} else if (Browsers.EDGE.contains(value)) {
			return Drivers.EDGE;
		} else {
			return Drivers.CHROME;
		}
	}

	public static String getDriverPath() throws Exception {
		String value = PropertiesManager.getConf("BrowserDriver");
		if (Browsers.CHROME.contains(value)) {
			return isWindows() ? (Drivers.CHROME_PATH + ".exe") : Drivers.CHROME_PATH;
		} else if (Browsers.EDGE.contains(value)) {
			return isWindows() ? (Drivers.EDGE_PATH + ".exe") : Drivers.EDGE_PATH;
		} else {
			return isWindows() ? (Drivers.CHROME_PATH + ".exe") : Drivers.CHROME_PATH;
		}
	}

	public static WebDriver setDriver() throws Exception {
		String value = PropertiesManager.getConf("BrowserDriver");
		if (Browsers.CHROME.contains(value)) {
			return new ChromeDriver();
		} else if (Browsers.EDGE.contains(value)) {
			return new EdgeDriver();
		} else {
			return new ChromeDriver();
		}
	}

	private static boolean isWindows(){
		return !PC.OPERATING_SYSTEM.contains("Linux");
	}

}
