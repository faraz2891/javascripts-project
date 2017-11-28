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
	];
var stateWithPinCode = [
		{
			"state":"Delhi",
			"pincode": 11,
			"id":1
		},
		{
			"state":"Haryana",
			"pincode": 12,
			"id":2
		},
		{
			"state":"Punjab",
			"pincode": 14,
			"id":3
		},
		{
			"state":"Himachal Pradesh",
			"pincode": 17,
			"id":4
		},
		{
			"state":"Jammu & Kashmir",
			"pincode": 18,
			"id":5
		},
		{
			"state":"Uttar Pradesh",
			"pincode": 20,
			"id":6
		},
		{
			"state":"Rajasthan",
			"pincode": 30,
			"id":7
		},
		{
			"state":"Gujarat",
			"pincode": 36,
			"id":8
		},
		{
			"state":"Maharashtra",
			"pincode": 40,
			"id":9
		},
		{
			"state":"Madhya Pradesh",
			"pincode": 45,
			"id":10
		},
		{
			"state":"Chhattisgarh",
			"pincode": 49,
			"id":11
		},
		{
			"state":"Andhra Pradesh",
			"pincode": 50,
			"id":12
		},
		{
			"state":"TELANGANA",
			"pincode": 50,
			"id":13
		},
		{
			"state":"Karnataka",
			"pincode": 56,
			"id":14
		},
		{
			"state":"Tamil Nadu",
			"pincode": 60,
			"id":15
		},
		{
			"state":"Kerala",
			"pincode": 67,
			"id":16
		},
		{
			"state":"Lakshadweep",
			"pincode": 682,
			"id":17
		},
		{
			"state":"West Bengal",
			"pincode": 70,
			"id":18
		},
		{
			"state":"Andaman & Nicobar",
			"pincode": 744,
			"id":19
		},
		{
			"state":"Orissa",
			"pincode": 75,
			"id":20
		},
		{
			"state":"Assam",
			"pincode":78,
			"id":21
		},
		{
			"state":"Arunachal Pradesh",
			"pincode":79,
			"id":22
		},
		{
			"state":"Manipur",
			"pincode": 79,
			"id":23
		},
		{
			"state":"Meghalaya",
			"pincode": 79,
			"id":24
		},
		{
			"state":"Mizoram",
			"pincode": 79,
			"id":25
		},
		{
			"state":"Nagaland",
			"pincode":79,
			"id":26
		},
		{
			"state":"Tripura",
			"pincode":79,
			"id":27
		},
		{
			"state":"Bihar",
			"pincode": 80,
			"id":28
		},
		{
			"state":"Jharkhand",
			"pincode":80,
			"id":29
		}
	]
	
var fullName = document.getElementById('fullName'),
	fathrName = document.getElementById('fathrName'),
	dob = document.getElementById('dob'),
	age = document.getElementById('age'),
	selectclassOpt = document.getElementById('selectclassOpt'),
	rollNum = document.getElementById('rollNum'),
	gender = document.querySelectorAll('#gender input:checked')[0],
	address = document.getElementById('address'),
	state = document.getElementById('state'),
	pincode = document.getElementById('pincode'),
	male = document.getElementById('male'),
	female = document.getElementById('female');

	/*var fullNameValue = fullName.value,
		fathrNameValue = fathrName.value,
		dobValue = dob.value,
		ageValue = age.value,
		selectclassOptValue = selectclassOpt.value,
		rollNumValue = rollNum.value,
		genderValue = gender.value,
		addressValue = address.value,
		stateValue = state.value,
		pincodeValue = pincode.value;*/

	/*console.log("fullNameValue = >", fullNameValue);
	console.log("fathrNameValue => ", fathrNameValue);
	console.log("dobValue => ", dobValue);
	console.log("ageValue => ", ageValue);
	console.log("selectclassOptValue => ", selectclassOptValue);
	console.log("rollNumValue => ", rollNumValue);
	console.log("genderValue => ", genderValue);
	console.log("addressValue => ", addressValue);
	console.log("stateValue => ", stateValue);
	console.log("pincodeValue => ", pincodeValue);*/

	// create select option from object
function selectOptionCreate(selectId , ObjectName, keyName){
	var selectId = document.getElementById(selectId);
	for(var index in ObjectName){
	    var option = document.createElement("option");
	    option.value = option.text = ObjectName[index][keyName];
	   	selectId.add(option);
	}
}
selectOptionCreate("selectclassOpt", classObj , "class");
selectOptionCreate("state", stateWithPinCode , "state");

function findGender(getGender){
	male.checked = false;
	female.checked = false;
	document.getElementById(getGender).checked = true;
	gender = document.getElementById(getGender);
	//console.log("gender value = >", gender.value)
}

function getselectClassName(){
	selectclassOptValue = selectclassOpt.value;
	//console.log("selectclassOptValue ==> ", selectclassOptValue);
}

function getStateName(){
	stateValue = state.value;
	//update pincode
	for(indx in stateWithPinCode){
		if(stateWithPinCode[indx].state == stateValue){
			pincode.value = stateWithPinCode[indx].pincode;
			break;
		}
	}
	//console.log("stateValue ==> ", stateValue);
}

function getAge(dateOfBirth){
	var dateOfBirthArry = dateOfBirth.split('-');
		dateOfBirthYear = dateOfBirthArry[0],
		dateOfBirthMonth = dateOfBirthArry[1],
		dateOfBirthDate = dateOfBirthArry[2],
		currentTime = new Date(),
		currentTimeYear = currentTime.getFullYear(), 
		currentTimeMonth = currentTime.getMonth()+1,
		currentTimeDate =  currentTime.getDate();
	console.log("dateOfBirth => ", dateOfBirth, "currentDate => ", currentTime);
	console.log("dateOfBirthArry => ", dateOfBirthArry, "dateOfBirthYear" , dateOfBirthYear , "dateOfBirthMonth", dateOfBirthMonth, "dateOfBirthDate ", dateOfBirthDate);
	console.log("currentTime => ", currentTime, "currentTimeYear" , currentTimeYear , "currentTimeMonth", currentTimeMonth, "currentTimeDate ", currentTimeDate);
}

function dateUpDate(){
	getAge(dob.value);
}


function registeredStudent() {
	var fullNameValue = fullName.value,
		fathrNameValue = fathrName.value,
		dobValue = dob.value,
		ageValue = age.value,
		selectclassOptValue = selectclassOpt.value,
		rollNumValue = rollNum.value,
		genderValue = gender.value,
		addressValue = address.value,
		stateValue = state.value,
		pincodeValue = pincode.value;

		console.log("fullNameValue = >", fullNameValue);
		console.log("fathrNameValue => ", fathrNameValue);
		console.log("dobValue => ", dobValue);
		console.log("ageValue => ", ageValue);
		console.log("selectclassOptValue => ", selectclassOptValue);
		console.log("rollNumValue => ", rollNumValue);
		console.log("genderValue => ", genderValue);
		console.log("addressValue => ", addressValue);
		console.log("stateValue => ", stateValue);
		console.log("pincodeValue => ", pincodeValue);
}

	
