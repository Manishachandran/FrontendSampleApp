
  //Form validation logic
  function validate() 
  {
	//request data gathering logic
	var uname = document.signform.username.value;
	var password = document.signform.password.value;
	var gender = document.signform.gender.value;
	var address = document.signform.address.value;
	var qualification = document.signform.qualification.value;
	var tech = document.signform.technologies.value;
	var resume = document.signform.f1.value;
	var doj = document.signform.DOJ.value;
	
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
	if (gender == "")
	{
		alert("Please select gender");
		return false;
	}
	if (address == "")
	{
		alert("Please select address");
		return false;
	}
	if (qualification == "Select")
	{
		alert("Please select qualification");
		return false;
	}
	if (tech == "")
	{
		alert("Please select technology");
		return false;
	}
	if (resume == "")
	{
		alert("Please attach resume");
		return false;
	}
	if (doj == "")
	{
		alert("Please select doj");
		return false;
	}
	return true;
	  }
  