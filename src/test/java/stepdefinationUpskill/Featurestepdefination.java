package stepdefinationUpskill;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import driverpackage.DriverClass;
import junit.framework.Assert;

public class Featurestepdefination {
	
	WebDriver driver=DriverClass.driver;
	
	
	@Given("^User is on the upskill homepage$")
	public void user_is_on_the_upskill_homepage() {
	    driver.get("http://elearningm1.upskills.in/index.php");
	    String hometitle=driver.getTitle();
	    System.out.println("Title of the page is = " + hometitle); 
	}

	@When("^User click on Sign Up link$")
	public void user_click_on_Sign_Up_link()  {
		driver.findElement(By.partialLinkText("Sign up!")).click();
	   
	}

	@Then("^Registration page should be displayed$")
	public void registration_Page_should_display()  {
		String regtitle = driver.getTitle();
	    System.out.println("Title of the Registration Page is = " + regtitle);
	 
	}
	
	@When("^User selects Course type$")
	public void user_selects_Course_type() {
		
	    
	}

	@When("^User enter firstname \"([^\"]*)\"$")
	public void user_enter_firstname(String FirstName)  {
	   driver.findElement(By.xpath("//input[@id='registration_firstname']")).sendKeys(FirstName);
	}

	@When("^User enter lastname \"([^\"]*)\"$")
	public void user_enter_lastname(String LastName) {
		driver.findElement(By.xpath("//input[@id='registration_lastname']")).sendKeys(LastName);	
	}

	@When("^User enter emailid \"([^\"]*)\"$")
	public void user_enter_emailid(String email) {
		driver.findElement(By.xpath("//input[@id='registration_email']")).sendKeys(email);
	}

	@When("^User enter username \"([^\"]*)\"$")
	public void user_enter_username(String username)  {
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(username);
	}
	
	@When("^User enter password \"([^\"]*)\"$")
	public void user_enter_password(String password) {
		driver.findElement(By.xpath("//input[@name='pass1']")).sendKeys(password);
	}

	@When("^User enter confirm password \"([^\"]*)\"$")
	public void user_enter_confirm_password(String confirmpassword)  {
		driver.findElement(By.xpath("//input[@name='pass2']")).sendKeys(confirmpassword);
	}

	@When("^User clicks on Register button$")
	public void user_clicks_on_Register_button() throws InterruptedException  {
		driver.findElement(By.xpath("//button[@id='registration_submit']")).click();
		Thread.sleep(9000);
	}

	@Then("^verify the Registration confirmation message and firstname \"([^\"]*)\" and lastname \"([^\"]*)\"$")
	public void verify_the_Registration_confirmation_message_and_firstname_and_lastname(String FirstName, String LastName) {
	    if(driver.getPageSource().contains(FirstName + " " + LastName))
	    {
	    	System.out.println("Registration is successfully for" + FirstName+" "+ LastName);
	    }
	    	else
	    	{
	    		System.out.println("Registration is not successfully for" + FirstName+" "+ LastName);	
	    	}	
	}
	
	@Then("^Open the profile dropdown$")
	public void open_the_profile_dropdown() throws Throwable {
		driver.findElement(By.xpath("//a[@class='dropdown-toggle']")).click();
		Thread.sleep(3000);
	}	
	
	@Then("^Validate the email \"([^\"]*)\"$")
	public void validate_the_email(String email)  {
		
		
	boolean emailpresent = driver.findElement(By.xpath("//p[contains (text(), '"+email+"' )]")).isDisplayed();

	Assert.assertTrue(emailpresent);

	if(emailpresent==true)
		{
			System.out.println("Email Id " + email+ " Registered");
		}
		else
		{
			System.out.println("Email Id " + email+ " not Registered");
		}

	}

	@Then("^User click on Inbox link$")
	public void user_click_on_Inbox_link() {
		driver.findElement(By.xpath("//em[@class='fa fa-envelope']")).click();
	    
	}

	@Then("^User click on Compose message icon$")
	public void user_click_on_Compose_message_icon()   {
		driver.findElement(By.xpath("//a/img[@title='Compose message']")).click();
	    
	}

	@Then("^User enters Send to email \"([^\"]*)\"$")
	public void user_enters_Send_to_email(String SendToEmail) throws InterruptedException   {
		
		driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(SendToEmail);
		Thread.sleep(5000);
		//driver.findElement(By.xpath("//span[@class='select2-results']")).click();		
		driver.findElement(By.xpath("//span/ul/li[contains (text(), '"+SendToEmail+"')]")).click();
		
	   
	}

	@Then("^user enters Subject \"([^\"]*)\"$")
	public void user_enters_Subject(String Subject) {		
		driver.findElement(By.xpath("//input[@id='compose_message_title']")).sendKeys(Subject); 
	}

	@Then("^user enters Message to be sent \"([^\"]*)\"$")
	public void user_enters_Message_to_be_sent(String Message)  {
		
		driver.findElement(By.xpath("//label[contains(text(),'Message')]//following::iframe[1]")).sendKeys(Message);
	}

	@Then("^User clicks on Send message button$")
	public void user_clicks_on_Send_message_button()   {
		driver.findElement(By.xpath("//button[@id='compose_message_compose']")).click();
	   
	}

	@Then("^Message sent and verify the acknowledgement$")
	public void message_sent_and_verify_the_acknowledgement()   {
	    
		WebElement successalert = driver.findElement(By.xpath("//div[@class='alert alert-success']"));
		String successalertmessage = successalert.getText();
		System.out.println(successalertmessage);
		
		boolean successmessage = successalert.isDisplayed();
		
		Assert.assertTrue(successmessage);
		
		if(successmessage==true)
			{
				System.out.println("Message sent successfully");
			}
			else
			{
				System.out.println("Message not sent");
			}
		


	
}


}	
	

		