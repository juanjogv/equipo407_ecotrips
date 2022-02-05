package functional;

import org.junit.*;
import org.openqa.selenium.WebDriver;
import pageObject.home.impl.SearcherImpl;
import util.Constants.FrontendEndpoints;
import util.PropertiesManager;
import util.Utils;

public class SearcherTestCase {
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
        driver.get(PropertiesManager.getConf("frontend_url") + FrontendEndpoints.HOME);
    }

    @Test
    public void testSearcher() {
        SearcherImpl searcher = new SearcherImpl(driver);
        searcher.sendData();
        Assert.assertTrue("Validando texto del lugar turístico", searcher.isSearcherSuccess());
    }

    @After
    public void tearDown() {
        //driver.quit();
    }

    @AfterClass
    public static void tearDownClass() {
        System.out.println("FINALIZA LOS TEST");
    }
}
