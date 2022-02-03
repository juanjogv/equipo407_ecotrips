package functional;

import pageObject.auth.impl.SignupImpl;
import org.junit.*;
import org.openqa.selenium.WebDriver;
import util.Constants.FrontendEndpoints;
import util.DataProvider.UserProvider;
import util.PropertiesManager;
import util.Utils;

import java.util.Random;

public class SignupTestCase {
	private WebDriver driver;

	@BeforeClass
	public static void setUpClass() throws Exception {
		System.out.println("INICIO TESTS");
		System.setProperty(Utils.getTipoDriver(), Utils.getDriverPath());
	}

	@Before
	public void setUp() throws Exception {
		driver = Utils.setDriver();
		driver.manage().window().maximize();
		driver.get(PropertiesManager.getConf("frontend_url") + FrontendEndpoints.AUTH);
	}

	@Test
	public void testMain() {
		Random random = new Random();

		SignupImpl signup = new SignupImpl(driver, UserProvider.getUser(random.nextInt(100)));
		signup.sendData();
		Assert.assertTrue("Valida el form", signup.isSignupSuccess());
		UserProvider.setUser();

	}

	@After
	public void tearDown() {
		driver.quit();
	}

	@AfterClass
	public static void tearDownClass() {
		System.out.println("FINALIZA LOS TEST");
	}
}
