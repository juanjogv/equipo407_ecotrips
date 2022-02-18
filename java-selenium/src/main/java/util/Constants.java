package util;

public class Constants {

	private Constants() {
	}

	public static final class PC {
		private PC() {
		}

		public static final String OPERATING_SYSTEM = System.getProperty("os.name");
	}

	public static final class Browsers {
		private Browsers() {
		}

		public static final String CHROME = "chrome";
		public static final String EDGE = "edge";
	}

	public static final class Drivers {
		private Drivers() {
		}

		public static final String CHROME = "webdriver.chrome.driver";
		public static final String CHROME_PATH = "src/test/resources/webdriver/chromedriver";
		public static final String EDGE = "webdriver.edge.driver";
		public static final String EDGE_PATH = "src/test/resources/webdriver/msedgedriver";
	}

	public static final class FrontendEndpoints {
		private FrontendEndpoints() {
		}

		public static final String AUTH = "/auth";
		public static final String HOME = "/home";
	}

	public static final class Test {
		private Test() {
		}

		public static final Integer WAIT_TIME_MS = 2000;
	}

}