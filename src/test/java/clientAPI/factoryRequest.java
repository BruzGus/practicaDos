package clientAPI;

public class factoryRequest {
    public static RequestClient make(String type) {
        RequestClient client;
        switch (type) {
            case "GET":
                client = new RequestGET();
                break;
            case "POST":
                client = new RequestPOST();
                break;
            case  "PUT":
                client = new RequestPUT();
                break;
            case "DELETE":
                client = new RequestDELETE();
                break;
            default:
                client = new RequestGET();
                break;
        }
        return client;
    }
}
