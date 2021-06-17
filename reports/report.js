$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Featureupskill.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: gchhetri@in.ibm.com"
    }
  ],
  "line": 2,
  "name": "Register in upskill page and send email functionality",
  "description": "",
  "id": "register-in-upskill-page-and-send-email-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Register a new user and send verification email",
  "description": "",
  "id": "register-in-upskill-page-and-send-email-functionality;register-a-new-user-and-send-verification-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User selects Course type",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter firstname \"\u003cFirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter lastname \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter emailid \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter confirm password \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify the Registration confirmation message and firstname \"\u003cFirstName\u003e\" and lastname \"\u003cLastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Open the profile dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate the email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on Inbox link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on Compose message icon",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters Send to email \"\u003cSendToEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters Subject \"\u003cSubject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user enters Message to be sent \"\u003cMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User clicks on Send message button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Message sent and verify the acknowledgement",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "register-in-upskill-page-and-send-email-functionality;register-a-new-user-and-send-verification-email;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "email",
        "username",
        "Password",
        "ConfirmPassword",
        "SendToEmail",
        "Subject",
        "Message"
      ],
      "line": 30,
      "id": "register-in-upskill-page-and-send-email-functionality;register-a-new-user-and-send-verification-email;;1"
    },
    {
      "cells": [
        "Gaurav",
        "Chhetri",
        "gc@gmail.com",
        "JC25",
        "12345",
        "12345",
        "NC25",
        "acknowledgement mail",
        "User is verified"
      ],
      "line": 31,
      "id": "register-in-upskill-page-and-send-email-functionality;register-a-new-user-and-send-verification-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4722815200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Click on the Upskill link #http://elearningm1.upskills.in/index.php#",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the upskill homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Sign Up link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Registration page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Featurestepdefination.user_is_on_the_upskill_homepage()"
});
formatter.result({
  "duration": 16305435401,
  "status": "passed"
});
formatter.match({
  "location": "Featurestepdefination.user_click_on_Sign_Up_link()"
});
formatter.result({
  "duration": 3214919000,
  "status": "passed"
});
formatter.match({
  "location": "Featurestepdefination.registration_Page_should_display()"
});
formatter.result({
  "duration": 14188499,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Register a new user and send verification email",
  "description": "",
  "id": "register-in-upskill-page-and-send-email-functionality;register-a-new-user-and-send-verification-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User selects Course type",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter firstname \"Gaurav\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter lastname \"Chhetri\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter emailid \"gc@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter username \"JC25\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter password \"12345\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter confirm password \"12345\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify the Registration confirmation message and firstname \"Gaurav\" and lastname \"Chhetri\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Open the profile dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate the email \"gc@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on Inbox link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on Compose message icon",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters Send to email \"NC25\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters Subject \"acknowledgement mail\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user enters Message to be sent \"User is verified\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User clicks on Send message button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Message sent and verify the acknowledgement",
  "keyword": "And "
});
formatter.match({
  "location": "Featurestepdefination.user_selects_Course_type()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaurav",
      "offset": 22
    }
  ],
  "location": "Featurestepdefination.user_enter_firstname(String)"
});
formatter.result({
  "duration": 260988000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chhetri",
      "offset": 21
    }
  ],
  "location": "Featurestepdefination.user_enter_lastname(String)"
});
formatter.result({
  "duration": 168425500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gc@gmail.com",
      "offset": 20
    }
  ],
  "location": "Featurestepdefination.user_enter_emailid(String)"
});
formatter.result({
  "duration": 179559701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JC25",
      "offset": 21
    }
  ],
  "location": "Featurestepdefination.user_enter_username(String)"
});
formatter.result({
  "duration": 186122000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 21
    }
  ],
  "location": "Featurestepdefination.user_enter_password(String)"
});
formatter.result({
  "duration": 155774000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 29
    }
  ],
  "location": "Featurestepdefination.user_enter_confirm_password(String)"
});
formatter.result({
  "duration": 143807501,
  "status": "passed"
});
formatter.match({
  "location": "Featurestepdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 11636392800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaurav",
      "offset": 60
    },
    {
      "val": "Chhetri",
      "offset": 82
    }
  ],
  "location": "Featurestepdefination.verify_the_Registration_confirmation_message_and_firstname_and_lastname(String,String)"
});
formatter.result({
  "duration": 48388700,
  "status": "passed"
});
formatter.match({
  "location": "Featurestepdefination.open_the_profile_dropdown()"
});
formatter.result({
  "duration": 3108775700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gc@gmail.com",
      "offset": 20
    }
  ],
  "location": "Featurestepdefination.validate_the_email(String)"
});
formatter.result({
  "duration": 111729001,
  "status": "passed"
});
formatter.match({
  "location": "Featurestepdefination.user_click_on_Inbox_link()"
});
formatter.result({
  "duration": 2807519199,
  "status": "passed"
});
formatter.match({
  "location": "Featurestepdefination.user_click_on_Compose_message_icon()"
});
formatter.result({
  "duration": 7969863800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NC25",
      "offset": 27
    }
  ],
  "location": "Featurestepdefination.user_enters_Send_to_email(String)"
});
formatter.result({
  "duration": 5304788500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "acknowledgement mail",
      "offset": 21
    }
  ],
  "location": "Featurestepdefination.user_enters_Subject(String)"
});
formatter.result({
  "duration": 170487100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User is verified",
      "offset": 32
    }
  ],
  "location": "Featurestepdefination.user_enters_Message_to_be_sent(String)"
});
formatter.result({
  "duration": 157302200,
  "status": "passed"
});
formatter.match({
  "location": "Featurestepdefination.user_clicks_on_Send_message_button()"
});
formatter.result({
  "duration": 2526073800,
  "status": "passed"
});
formatter.match({
  "location": "Featurestepdefination.message_sent_and_verify_the_acknowledgement()"
});
formatter.result({
  "duration": 98352700,
  "status": "passed"
});
formatter.after({
  "duration": 1521816299,
  "status": "passed"
});
});