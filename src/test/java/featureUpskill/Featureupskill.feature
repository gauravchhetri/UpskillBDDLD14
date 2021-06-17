#Author: gchhetri@in.ibm.com
Feature: Register in upskill page and send email functionality

  Background: Click on the Upskill link #http://elearningm1.upskills.in/index.php#
    Given User is on the upskill homepage
    When User click on Sign Up link
    Then Registration page should be displayed

  Scenario Outline: Register a new user and send verification email
    When User selects Course type
    And User enter firstname "<FirstName>"
    And User enter lastname "<LastName>"
    And User enter emailid "<email>"
    And User enter username "<username>"
    And User enter password "<Password>"
    And User enter confirm password "<ConfirmPassword>"
    And User clicks on Register button
    Then verify the Registration confirmation message and firstname "<FirstName>" and lastname "<LastName>"
    And Open the profile dropdown
    And Validate the email "<email>"
    And User click on Inbox link
    And User click on Compose message icon
    And User enters Send to email "<SendToEmail>"
    And user enters Subject "<Subject>"
    And user enters Message to be sent "<Message>"
    And User clicks on Send message button
    And Message sent and verify the acknowledgement

    Examples: 
      |FirstName | LastName |email| username | Password | ConfirmPassword | SendToEmail | Subject| Message|
      |Gaurav|Chhetri|gc@gmail.com|CC25|12345 |12345| NC25|acknowledgement mail |User is verified |
