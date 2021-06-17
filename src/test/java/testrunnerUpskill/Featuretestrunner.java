package testrunnerUpskill;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(
	  features="src/test/java/featureUpskill"
	  ,glue = {"stepdefinationUpskill","driverpackage"},
	  dryRun = false,
	  monochrome = true,
			  plugin = {"pretty","html:reports/","json:reports/jsonreport.json","junit:reports/xmlreport"}
		
		)
	  
	   

public class Featuretestrunner {
	

}
