package clientAPI;

public class ResponseInformation {
    public ResponseInformation(){

    }

    public ResponseInformation(String body, int code){
        this.responseCode = code;
        this.responseBody = body;
    }

    private String responseBody;

    public String getResponseBody() {
        return responseBody;
    }

    public void setResponseBody(String responseBody) {
        this.responseBody = responseBody;
    }

    public int getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(int responseCode) {
        this.responseCode = responseCode;
    }

    public String getResponseMessage() {
        return responseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
    }

    private int responseCode;
    private String responseMessage;






}
