
  //Form validation logic
  function validate() 
  {
	//request data gathering logic
	var uname = document.loginform.username.value;
	var password = document.loginform.password.value;
	if (uname == "")
	{
		alert("Please enter username");
		return false;
	}
	if (password == "")
	{
		alert("Please enter password");
		return false;
	}
	if (password.length < 6)
	{
		alert("Password should be atleast 6 characters");
		return false;
	}
	return true;
	  }
  