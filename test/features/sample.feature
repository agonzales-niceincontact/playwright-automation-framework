@UI
Feature: [EPIC] STX-3227 WS - UH L0 Menu

	Background:		
		Given a user has logged in to CXone		
	
	@STX-8025
	Scenario Outline: An option to launch CXone Studio should be displayed on the CXone Application menu
        Given the user goes to '<Application>'		
        When the user clicks the 'AppSelector' on the 'CXonePage'        
		Then the user should see the 'CXoneStudioLauncher' option displayed on the 'ApplicationMenu'
		
		Examples:
		    | Application |
		    # | Admin       |
		    | ACD         |
		    # | Dashboard   |
		    # | Reporting   |
		    # | WFI         |

	@Sample
	Scenario: Sample
        Given the user goes to 'ACD'
		When the user waits "5" seconds
		When the user selects the "50" dropdown option in the 'Filter' on the 'ManageUser'

