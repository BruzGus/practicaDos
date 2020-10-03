Feature: Items
  @Bryan
  Scenario: As user I want to create a task To organize my daily activities.
    Given I have to be authenticated in todo.ly
    When I send POST request '/api/items.json' with json
    """
    {
    "Content":"Aves"
    }
    """
    Then I expected the response code 200
    And I expected the response body is equals
    """
    {
    "Id": "EXCLUDE",
    "Content": "Aves",
    "ItemType": 1,
    "Checked": false,
    "ProjectId": "EXCLUDE",
    "ParentId": "EXCLUDE",
    "Path": "",
    "Collapsed": false,
    "DateString": null,
    "DateStringPriority": 0,
    "DueDate": "",
    "Recurrence": null,
    "ItemOrder": null,
    "Priority": 4,
    "LastSyncedDateTime": "EXCLUDE",
    "Children": [],
    "DueDateTime": null,
    "CreatedDate": "EXCLUDE",
    "LastCheckedDate": null,
    "LastUpdatedDate": "EXCLUDE",
    "Deleted": false,
    "Notes": "",
    "InHistory": false,
    "SyncClientCreationId": null,
    "DueTimeSpecified": true,
    "OwnerId": "676058"
    }
    """

    And I get property value Id and save on ID_ITEM
    And I get property value Content and save on NAME_ITEM

    When I send PUT request '/api/items/ID_ITEM.json' with json
    """
    {
    "Content":"NAME_ITEM UPDATE"
    }
    """
    And I expected the response code 200
    And I expected the response body is equals
    """
    {
    "Id": ID_ITEM,
    "Content": "NAME_ITEM UPDATE",
    "ItemType": 1,
    "Checked": false,
    "ProjectId": "EXCLUDE",
    "ParentId": "EXCLUDE",
    "Path": "",
    "Collapsed": false,
    "DateString": null,
    "DateStringPriority": 0,
    "DueDate": "",
    "Recurrence": null,
    "ItemOrder": null,
    "Priority": 4,
    "LastSyncedDateTime": "EXCLUDE",
    "Children": [],
    "DueDateTime": null,
    "CreatedDate": "EXCLUDE",
    "LastCheckedDate": null,
    "LastUpdatedDate": "EXCLUDE",
    "Deleted": false,
    "Notes": "",
    "InHistory": false,
    "SyncClientCreationId": null,
    "DueTimeSpecified": true,
    "OwnerId": "676058"
    }
    """

    When I send DELETE request '/api/items/ID_ITEM.json' with json
    """
    """
    Then I expected the response code 200

    When I send GET request '/api/items/ID_ITEM.json' with json
    """
    """
    Then I expected the response code 200
    Then I expected the response body is equals
    """
    {
    "Id": ID_ITEM,
    "Content": "NAME_ITEM UPDATE",
    "ItemType": 1,
    "Checked": false,
    "ProjectId": "EXCLUDE",
    "ParentId": "EXCLUDE",
    "Path": "",
    "Collapsed": false,
    "DateString": null,
    "DateStringPriority": 0,
    "DueDate": "",
    "Recurrence": null,
    "ItemOrder": null,
    "Priority": 4,
    "LastSyncedDateTime": "EXCLUDE",
    "Children": [],
    "DueDateTime": null,
    "CreatedDate": "EXCLUDE",
    "LastCheckedDate": null,
    "LastUpdatedDate": "EXCLUDE",
    "Deleted": true,
    "Notes": "",
    "InHistory": false,
    "SyncClientCreationId": null,
    "DueTimeSpecified": true,
    "OwnerId": "676058"
    }
    """
