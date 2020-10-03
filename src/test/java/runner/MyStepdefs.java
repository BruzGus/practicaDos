package runner;

import clientAPI.FactoryRequest;
import clientAPI.RequestInformation;
import clientAPI.ResponseInformation;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.JsonHelper;
import org.json.JSONException;
import org.junit.Assert;

import java.util.HashMap;
import java.util.Map;

import static configuration.Configuration.*;

public class MyStepdefs {
    ResponseInformation response = new ResponseInformation();
    Map<String, String> variables = new HashMap<>();



    @Given("^I have to be authenticated in todo\\.ly$")
    public void iHaveToBeAuthenticatedInTodoLy() {
    }

    @When("^I send (POST|PUT|DELETE|GET) request '(.*)' with json$")
    public void iSendPOSTRequestApiItemsJsonWithJson(String method, String url, String jsonBody) {
        RequestInformation request = new RequestInformation();
        request.setUrl(HOST+ this.replaceVariables(url));
        request.setBody(this.replaceVariables(jsonBody));
        request.addHeaders(BASIC_AUTHENTICATION_HEADER,BASIC_AUTHENTICATION);
        response = FactoryRequest.make(method.toUpperCase()).send(request);
    }

    @Then("^I expected the response code (\\d+)$")
    public void iExpectedTheResponseCode(int expectedResponseCode) {
        System.out.println("RESPONSE CODE "+ response.getResponseCode());
        Assert.assertEquals("ERROR: the response code is incorrect",expectedResponseCode,response.getResponseCode());
    }

    @And("^I expected the response body is equals$")
    public void iExpectedTheResponseBodyIsEquals(String expectedJsonBody ) throws JSONException {
        System.out.println("RESPONSE BODY :"+ this.replaceVariables(response.getResponseBody()));
        Assert.assertTrue("", JsonHelper.areEqualJSON(this.replaceVariables(expectedJsonBody),response.getResponseBody()));
    }


    @And("^I get property value (.*) and save on (.*)$")
    public void iGetPropertyValueIdAndSaveOnID_PROJECT(String property , String nameVariable) throws JSONException {
        String value = JsonHelper.getValueFromJSON(response.getResponseBody(),property);
        variables.put(nameVariable, value);
        System.out.println("VARIABLE : "+nameVariable+" VALUE: "+this.variables.get(nameVariable) +"");
    }



    private String replaceVariables(String value){
        for (String key:this.variables.keySet()) {
            value = value.replace(key,this.variables.get(key));
        }
        return value;
    }
}
