package util;

public class Constants {

	private Constants() {
	}

	public static final class Browsers {
		public static final String CHROME = "chrome";
		public static final String EDGE = "edge";
	}

	public static final class Drivers {
		public static final String CHROME = "webdriver.chrome.driver";
		public static final String EDGE = "webdriver.edge.driver";
	}

	public static final class DriversPath {
		public static final String CHROME = "src/test/resources/webdriver/chromedriver";
		public static final String EDGE = "src/test/resources/webdriver/msedgedriver";
	}

	public static final class FrontendEndpoints {
		public static final String AUTH = "/auth";
	}

	public static final class Test {
		public static final Integer WAIT_TIME_MS = 2000;
	}

}
