package util;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertiesManager {
	private static final Properties properties = new Properties();

	private PropertiesManager() {
	}

	public static String getPropertie(String path, String key){
		String propertie = "";
		if (properties.getProperty(key) != null) {
			propertie = properties.getProperty(key);
		}else {
			try (FileInputStream fileInputStream = new FileInputStream(path)) {
				properties.load(fileInputStream);
				if (properties.getProperty(key) != null) {
					propertie = properties.getProperty(key);
				} else {
					throw new Exception("Propiedad " + key + " no se encuentra en el archivo properties");
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return propertie;
	}

	public static String getConf(String key){
		String conf = "";
		if (properties.getProperty(key) != null) {
			conf = properties.getProperty(key);
		} else {
			conf = getPropertie("config.properties", key);
		}
		return conf;
	}

	public static String getSql(String key){
		String query = "";
		if (properties.getProperty(key) != null) {
			query = properties.getProperty(key);
		}else{
			query = getPropertie("src/main/resources/sql.properties", key);
		}
		return query;
	}
}
