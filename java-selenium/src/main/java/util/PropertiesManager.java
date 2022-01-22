package util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class PropertiesManager {
	private static Properties properties = new Properties();

	public static String getConf(String key) throws Exception {
		String conf = "";
		if (properties.getProperty(key) != null) {
			conf = properties.getProperty(key);
		} else {
			try {
				properties.load(new FileInputStream(new File("src/main/resources/config.properties")));
				if (properties.getProperty(key) != null) {
					conf = properties.getProperty(key);
				} else {
					throw new Exception("Propiedad " + key + " no se encuentra en el archivo properties");
				}
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return conf;
	}
}
