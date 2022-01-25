package util;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import dto.User;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.io.Writer;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Objects;

public class DataProvider {

    private static final Gson gson = new Gson();

    private DataProvider() {
    }

    public static class UserProvider {

        private static User user;
        private static ArrayList<User> users;
        private static final Type listType = new TypeToken<ArrayList<User>>() {}.getType();

        public static User getUser(int userRandomSelector) {
            try (Reader reader = Files.newBufferedReader(Paths.get("src/main/resources/users.json"))) {
                users = gson.fromJson(reader, listType);
                user = users.get(userRandomSelector);
            } catch (IOException e) {
                e.printStackTrace();
            }
            return user;
        }

        public static void setUser() {
            try (Writer writer = Files.newBufferedWriter(Paths.get("src/main/resources/users.json"))) {
                users.forEach(e ->{
                    if (Objects.equals(e.getId(), user.getId())){
                        e.setIsLogged(true);
                    }
                });
                gson.toJson(users, writer);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
