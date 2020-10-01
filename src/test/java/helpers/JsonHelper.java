package helpers;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Iterator;

public class JsonHelper {
    /*
     * convert string to json
     * @param json
     * @return
     *throws JSONException
     */

    public static JSONObject convertJSON(String json) throws JSONException {
        return new JSONObject(json);
    }

    public static String getValueFromJSON(String json, String propertyName) throws JSONException {
        String value = JsonHelper.convertJSON(json).get(propertyName).toString();
        return value;
    }

    public static boolean areEqualJSON(String expectedResult, String actualResult) throws JSONException {

        boolean isEqual = true;

        JSONObject jsonExpectedResult = JsonHelper.convertJSON(expectedResult);
        JSONObject jsonActualResult = JsonHelper.convertJSON(actualResult);

        Iterator<?> Keys = jsonExpectedResult.keys();

        while (Keys.hasNext()) {
            String key = (String) Keys.next();
            String expectedValue = String.valueOf(jsonExpectedResult.get(key));
            String actualValue = String.valueOf(jsonActualResult.get(key));

            if (expectedValue.equals("EXCLUDE")) {
                System.out.println("INFO > EXCLUDE : the attribute [" + key + "] was no compared");
            } else {
                if (!expectedValue.equals(actualValue)) {
                    System.out.println("INFO > COMPARING : The attribute [" + key + "] >>  expect value [" + expectedValue + "] vs actual value [" + actualValue + "]");
                    isEqual = false;
                }

            }


        }
        return isEqual;


    }


}
