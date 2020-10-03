$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("items.feature");
formatter.feature({
  "line": 1,
  "name": "Items",
  "description": "",
  "id": "items",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "As user I want to create a task To organize my daily activities.",
  "description": "",
  "id": "items;as-user-i-want-to-create-a-task-to-organize-my-daily-activities.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Bryan"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I have to be authenticated in todo.ly",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I send POST request \u0027/api/items.json\u0027 with json",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "{\r\n\"Content\":\"Aves\"\r\n}"
  }
});
formatter.step({
  "line": 11,
  "name": "I expected the response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I expected the response body is equals",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 13,
    "value": "{\r\n\"Id\": \"EXCLUDE\",\r\n\"Content\": \"Aves\",\r\n\"ItemType\": 1,\r\n\"Checked\": false,\r\n\"ProjectId\": \"EXCLUDE\",\r\n\"ParentId\": \"EXCLUDE\",\r\n\"Path\": \"\",\r\n\"Collapsed\": false,\r\n\"DateString\": null,\r\n\"DateStringPriority\": 0,\r\n\"DueDate\": \"\",\r\n\"Recurrence\": null,\r\n\"ItemOrder\": null,\r\n\"Priority\": 4,\r\n\"LastSyncedDateTime\": \"EXCLUDE\",\r\n\"Children\": [],\r\n\"DueDateTime\": null,\r\n\"CreatedDate\": \"EXCLUDE\",\r\n\"LastCheckedDate\": null,\r\n\"LastUpdatedDate\": \"EXCLUDE\",\r\n\"Deleted\": false,\r\n\"Notes\": \"\",\r\n\"InHistory\": false,\r\n\"SyncClientCreationId\": null,\r\n\"DueTimeSpecified\": true,\r\n\"OwnerId\": \"676058\"\r\n}"
  }
});
formatter.step({
  "line": 44,
  "name": "I get property value Id and save on ID_ITEM",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I get property value Content and save on NAME_ITEM",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I send PUT request \u0027/api/items/ID_ITEM.json\u0027 with json",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 48,
    "value": "{\r\n\"Content\":\"NAME_ITEM UPDATE\"\r\n}"
  }
});
formatter.step({
  "line": 53,
  "name": "I expected the response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I expected the response body is equals",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 55,
    "value": "{\r\n\"Id\": ID_ITEM,\r\n\"Content\": \"NAME_ITEM UPDATE\",\r\n\"ItemType\": 1,\r\n\"Checked\": false,\r\n\"ProjectId\": \"EXCLUDE\",\r\n\"ParentId\": \"EXCLUDE\",\r\n\"Path\": \"\",\r\n\"Collapsed\": false,\r\n\"DateString\": null,\r\n\"DateStringPriority\": 0,\r\n\"DueDate\": \"\",\r\n\"Recurrence\": null,\r\n\"ItemOrder\": null,\r\n\"Priority\": 4,\r\n\"LastSyncedDateTime\": \"EXCLUDE\",\r\n\"Children\": [],\r\n\"DueDateTime\": null,\r\n\"CreatedDate\": \"EXCLUDE\",\r\n\"LastCheckedDate\": null,\r\n\"LastUpdatedDate\": \"EXCLUDE\",\r\n\"Deleted\": false,\r\n\"Notes\": \"\",\r\n\"InHistory\": false,\r\n\"SyncClientCreationId\": null,\r\n\"DueTimeSpecified\": true,\r\n\"OwnerId\": \"676058\"\r\n}"
  }
});
formatter.step({
  "line": 86,
  "name": "I send DELETE request \u0027/api/items/ID_ITEM.json\u0027 with json",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 87,
    "value": ""
  }
});
formatter.step({
  "line": 89,
  "name": "I expected the response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "I send GET request \u0027/api/items/ID_ITEM.json\u0027 with json",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 92,
    "value": ""
  }
});
formatter.step({
  "line": 94,
  "name": "I expected the response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "I expected the response body is equals",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 96,
    "value": "{\r\n\"Id\": ID_ITEM,\r\n\"Content\": \"NAME_ITEM UPDATE\",\r\n\"ItemType\": 1,\r\n\"Checked\": false,\r\n\"ProjectId\": \"EXCLUDE\",\r\n\"ParentId\": \"EXCLUDE\",\r\n\"Path\": \"\",\r\n\"Collapsed\": false,\r\n\"DateString\": null,\r\n\"DateStringPriority\": 0,\r\n\"DueDate\": \"\",\r\n\"Recurrence\": null,\r\n\"ItemOrder\": null,\r\n\"Priority\": 4,\r\n\"LastSyncedDateTime\": \"EXCLUDE\",\r\n\"Children\": [],\r\n\"DueDateTime\": null,\r\n\"CreatedDate\": \"EXCLUDE\",\r\n\"LastCheckedDate\": null,\r\n\"LastUpdatedDate\": \"EXCLUDE\",\r\n\"Deleted\": true,\r\n\"Notes\": \"\",\r\n\"InHistory\": false,\r\n\"SyncClientCreationId\": null,\r\n\"DueTimeSpecified\": true,\r\n\"OwnerId\": \"676058\"\r\n}"
  }
});
formatter.match({
  "location": "MyStepdefs.iHaveToBeAuthenticatedInTodoLy()"
});
formatter.result({
  "duration": 143707900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 7
    },
    {
      "val": "/api/items.json",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.iSendPOSTRequestApiItemsJsonWithJson(String,String,String)"
});
formatter.result({
  "duration": 2115515400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "MyStepdefs.iExpectedTheResponseCode(int)"
});
formatter.result({
  "duration": 4587900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iExpectedTheResponseBodyIsEquals(String)"
});
formatter.result({
  "duration": 9199100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Id",
      "offset": 21
    },
    {
      "val": "ID_ITEM",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.iGetPropertyValueIdAndSaveOnID_PROJECT(String,String)"
});
formatter.result({
  "duration": 547200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content",
      "offset": 21
    },
    {
      "val": "NAME_ITEM",
      "offset": 41
    }
  ],
  "location": "MyStepdefs.iGetPropertyValueIdAndSaveOnID_PROJECT(String,String)"
});
formatter.result({
  "duration": 574100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PUT",
      "offset": 7
    },
    {
      "val": "/api/items/ID_ITEM.json",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.iSendPOSTRequestApiItemsJsonWithJson(String,String,String)"
});
formatter.result({
  "duration": 480127700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "MyStepdefs.iExpectedTheResponseCode(int)"
});
formatter.result({
  "duration": 267800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iExpectedTheResponseBodyIsEquals(String)"
});
formatter.result({
  "duration": 1433600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DELETE",
      "offset": 7
    },
    {
      "val": "/api/items/ID_ITEM.json",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iSendPOSTRequestApiItemsJsonWithJson(String,String,String)"
});
formatter.result({
  "duration": 514393200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "MyStepdefs.iExpectedTheResponseCode(int)"
});
formatter.result({
  "duration": 199200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 7
    },
    {
      "val": "/api/items/ID_ITEM.json",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.iSendPOSTRequestApiItemsJsonWithJson(String,String,String)"
});
formatter.result({
  "duration": 789576800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "MyStepdefs.iExpectedTheResponseCode(int)"
});
formatter.result({
  "duration": 223100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iExpectedTheResponseBodyIsEquals(String)"
});
formatter.result({
  "duration": 1312800,
  "status": "passed"
});
});