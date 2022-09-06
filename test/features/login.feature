@UI
Feature: Login
Description: Login into CXone app
Test Case Description: Login Sample

@Login
Scenario: CXone App Login into DO92
Given the user has set the text "administrator01.studiogbu.do0092.1@niceincontact.com" in the 'Username' on the 'LoginPage'
And the user has clicked the 'Next' button on the 'LoginPage'
And the user has set the text "{Password}" in the 'Password' on the 'LoginPage'
When the user clicks the 'SignIn' on the 'LoginPage'
Then the user should see the 'CXone' icon displayed on the 'CXonePage'
