package functional;

import auth.impl.SignupImpl;
import org.junit.*;
import org.openqa.selenium.WebDriver;
import util.Constants.FrontendEndpoints;
import util.PropertiesManager;
import util.Utils;

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
		driver.get(PropertiesManager.getConf("frontend_url") + FrontendEndpoints.AUTH);
	}

	@Test
	public void testMain() {

		SignupImpl signup = new SignupImpl(driver);
		signup.sendData();
		Assert.assertTrue("Valida el form", signup.isSignupSuccess());

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
