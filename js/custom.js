	var classObj = [
	{
		"class":"one",
		"id":1
	},
	{
		"class":"two",
		"id":2
	},
	{
		"class":"three",
		"id":3
	},
	{
		"class":"four",
		"id":4
	},
	{
		"class":"fove",
		"id":5
	},
	{
		"class":"six",
		"id":6
	},
	{
		"class":"seven",
		"id":7
	},
	{
		"class":"eight",
		"id":8
	},
	{
		"class":"nine",
		"id":9
	},
	{
		"class":"ten",
		"id":10
	}
	]
	
	var fullName = document.getElementById('fullName'),
		fathrName = document.getElementById('fathrName'),
		dob = document.getElementById('dob'),
		className = document.getElementById('className'),
		rollNum = document.getElementById('rollNum'),
		gender = document.querySelectorAll('#gender input:checked')[0],
		address = document.getElementById('address'),
		male = document.getElementById('male'),
		female = document.getElementById('female');

		console.log("name ==> ", fullName.value);
		console.log("fathrName ==> ", fathrName.value);
		console.log("dob ==> ", dob.value);
		console.log("className ==> ", className.value);
		console.log("rollNum ==> ", rollNum.value);
		console.log("gender ==> ", gender.value);
		console.log("address ==> ", address.value);

	function registeredStudent(){
		console.log("name ==> ", name.value);
		console.log("fathrName ==> ", fathrName.value);
		console.log("dob ==> ", dob.value);
		console.log("className ==> ", className.value);
		console.log("rollNum ==> ", rollNum.value);
		console.log("gender ==> ", gender.value);
		console.log("address ==> ", address.value);
	}

	function findGender(getGender){
		male.checked = false;
		female.checked = false;
		document.getElementById(getGender).checked = true;
	}
