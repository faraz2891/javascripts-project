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
	female = document.getElementById('female'),
	allStudentDetails = [],
	idForSingleStudent = 0;

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
		//console.log("dateOfBirth => ", dateOfBirth, "currentDate => ", currentTime);
		//console.log("dateOfBirthArry => ", dateOfBirthArry, "dateOfBirthYear" , dateOfBirthYear , "dateOfBirthMonth", dateOfBirthMonth, "dateOfBirthDate ", dateOfBirthDate);
		//console.log("currentTime => ", currentTime, "currentTimeYear" , currentTimeYear , "currentTimeMonth", currentTimeMonth, "currentTimeDate ", currentTimeDate);

		if(currentTimeMonth>dateOfBirthMonth){
			return currentTimeYear-dateOfBirthYear;
		}else if(currentTimeMonth<dateOfBirthMonth){
			return (currentTimeYear-dateOfBirthYear)-1;
		}else if(currentTimeMonth==dateOfBirthMonth){
			if(currentTimeDate<dateOfBirthDate){
				return (currentTimeYear-dateOfBirthYear)-1;
			}else{
				return currentTimeYear-dateOfBirthYear;
			}
		}
}

function dateUpDate(){
	age.value = getAge(dob.value);
}


function appendValueInTable(obj){
	parent = document.getElementById('main-table'); 
	var tableRow = `<tr>
					<td>${obj.name}</td>
					<td>${obj.fathersName}</td>
					<td>${obj.dob}</td>
					<td>${obj.class}</td>
					<td>${obj.gender}</td>
					<td>${obj.state}</td>
					<td onClick="viewChildDetails(${obj.id})"><i class="fa fa-eye" aria-hidden="true"></i></td>
					<td onClick="editDetailsChilds(${obj.id})"><i class="fa fa-pencil" aria-hidden="true"></i></td>
					<td onClick="deleteDetailsChilds(${obj.id})"><i class="fa fa-trash" aria-hidden="true"></i></td>
				</tr>`;
	parent.insertAdjacentHTML('beforeend', tableRow);
	//console.log("tableRow ==> ", tableRow);
}
function resetSelectOption(selectElementId){
	document.getElementById(selectElementId).selectedIndex = 0;
}
function formReset(){
	fullName.value = '';
	fathrName.value = '';
	dob.value = null;
	age.value = '';
	resetSelectOption("selectclassOpt");
	rollNum.value = '';
	findGender("female");
	address.value = '';
	resetSelectOption("state");
	pincode.value = '';
	
}

function viewChildDetails(studenId){
	var overlay = document.getElementById('overlay'),
		currentStudentObject;
	for(i in allStudentDetails){
		if(allStudentDetails[i].id == studenId){
			currentStudentObject = allStudentDetails[i];
			break;
		}
	}	
	console.log('currentStudentObject ==> ', currentStudentObject);
	var stdntName = document.getElementsByClassName("stdntName")[0],
		fathrNam = document.getElementsByClassName("fathrNam")[0],
		stdntDob = document.getElementsByClassName("stdntDob")[0],
		stdntAge = document.getElementsByClassName("stdntAge")[0],
		sdntClass = document.getElementsByClassName("sdntClass")[0],
		stdntRoll = document.getElementsByClassName("stdntRoll")[0],
		stdntGendr = document.getElementsByClassName("stdntGendr")[0],
		stdntAddrs = document.getElementsByClassName("stdntAddrs")[0],
		stdntStat = document.getElementsByClassName("stdntStat")[0],
		stdntPin = document.getElementsByClassName("stdntPin")[0];

		stdntName.innerHTML = currentStudentObject.name;
		fathrNam.innerHTML = currentStudentObject.fathersName;
		stdntDob.innerHTML = currentStudentObject.dob;
		stdntAge.innerHTML = currentStudentObject.age;
		sdntClass.innerHTML = currentStudentObject.class;
		stdntRoll.innerHTML = currentStudentObject.rollNo;
		stdntGendr.innerHTML = currentStudentObject.gender;
		stdntAddrs.innerHTML = currentStudentObject.address;
		stdntStat.innerHTML = currentStudentObject.state;
		stdntPin.innerHTML =  currentStudentObject.pinCode;
		
		overlay.style.display = "block";
}
function editDetailsChilds(studenId){
	alert('edit');
}
function deleteDetailsChilds(studenId){
	alert('delete');
}
function hideDiv(closeDivId){
	document.getElementById(closeDivId).style.display = "none";
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
	var singleStudentDetails = {};
	/*
	if(fullNameValue != "" && fathrNameValue != "" && dobValue != "" && selectclassOptValue != "" && rollNumValue != "" && addressValue != "" && stateValue != ""){ */
		singleStudentDetails.id = idForSingleStudent++;
		singleStudentDetails.name = fullNameValue;
		singleStudentDetails.fathersName = fathrNameValue;
		singleStudentDetails.dob = dobValue;
		singleStudentDetails.age = ageValue;
		singleStudentDetails.class = selectclassOptValue;
		singleStudentDetails.rollNo = rollNumValue;
		singleStudentDetails.gender = genderValue;
		singleStudentDetails.address = addressValue;
		singleStudentDetails.state = stateValue;
		singleStudentDetails.pinCode = pincodeValue;

		allStudentDetails.push(singleStudentDetails);
		appendValueInTable(singleStudentDetails);
		console.log("allStudentDetails => ", allStudentDetails)
	/*
	}else{
		alert('please fill all input');
	}
	*/

	formReset();
	/*
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
	*/
}


	
