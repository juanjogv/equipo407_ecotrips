package functional;

import pageobject.auth.impl.LoginImpl;
import org.junit.*;
import org.openqa.selenium.WebDriver;
import util.Constants.FrontendEndpoints;
import util.DataProvider.UserProvider;
import util.PropertiesManager;
import util.Utils;

import java.util.Random;

public class LoginTestCase {
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
    public void testLogin() {
        Random random = new Random();

        LoginImpl login = new LoginImpl(driver, UserProvider.getUser(random.nextInt(100)));
        login.sendData();
        Assert.assertTrue("Valida el form", login.isLoginSuccess());
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
