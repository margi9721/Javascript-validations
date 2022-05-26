function fnameValidate() {
  var fname = document.getElementById("fname").value;
  var regex = /^[a-zA-Z\s]+$/;
  if (fname == "") {
    document.getElementById("fnameErr").innerHTML = "First name required";
  }
  else {
    if (regex.test(fname) === false) {
      document.getElementById("fnameErr").innerHTML = "Enter valid name";
    }
    else {
      document.getElementById("fnameErr").innerHTML = "";
    }
  }

}

function lnameValidate() {
  var lname = document.getElementById("lname").value;
  var regex = /^[a-zA-Z\s]+$/;
  if (lname == "") {
    document.getElementById("lnameErr").innerHTML = "Last name required";

  }
  else {
    if (regex.test(lname) === false) {
      document.getElementById("lnameErr").innerHTML = "Enter valid Last name";
    }
    else {
      document.getElementById("lnameErr").innerHTML = "";
    }
  }

}

function addValidate() {
  var regex = /^[a-zA-Z\s]+$/;
  var addline1 = document.getElementById("add1").value;
  if (addline1 == "") {
    document.getElementById("add1Err").innerHTML = "Address required";
  }
  else {
    if (regex.test(addline1) === false) {
      document.getElementById("add1Err").innerHTML = "Enter valid address";
    }
    else {
      document.getElementById("add1Err").innerHTML = "";
    }
  }

  var addline2 = document.getElementById("add2").value;
  if (addline2 == "") {
    document.getElementById("add2Err").innerHTML = "Address required";
  }
  else {
    if (regex.test(addline2) === false) {
      document.getElementById("add2Err").innerHTML = "Enter valid address";
    }
    else {
      document.getElementById("add2Err").innerHTML = "";
    }
  }
}

// function add2Validate(){


// }

function cityValidate() {
  var city = document.getElementById("city").value;
  if (city == "") {
    document.getElementById("cityErr").innerHTML = " city required";
  }
  else {
    document.getElementById("cityErr").innerHTML = "";
  }

}

function stateValidate() {
  var state = document.getElementById("state").value;
  if (state == "") {
    document.getElementById("stateErr").innerHTML = "details required";
  }
  else {
    document.getElementById("stateErr").innerHTML = "";
  }

}

function pinValidate() {
  var pcode = document.getElementById("pin").value;
  var pinRegex = /^\d{4}$|^\d{6}$/;
  if (pcode == "") {
    document.getElementById("zipErr").innerHTML = " details required";
  }
  else {
    if (pinRegex.test(pcode) === false) {
      document.getElementById("zipErr").innerHTML = "Enter valid PIN code";
    }
    else {
      document.getElementById("zipErr").innerHTML = "";
    }
  }

}

function phoneValidate() {
  var phoneNum = document.getElementById("phone").value;
  var phoneregex = /^[6-9]\d{9}$/;
  if (phoneNum == "") {
    document.getElementById("phoneErr").innerHTML = "Phone number required";
  }
  else {
    if (phoneregex.test(phoneNum) === false) {
      document.getElementById("phoneErr").innerHTML = "Enter valid phone number";
    }
    else {
      document.getElementById("phoneErr").innerHTML = "";
    }
  }
}

//email validation
function emailValidate() {
  var email = document.getElementById("email").value;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegex.test(email) === false) {
    document.getElementById("emailErr").innerHTML = "Enter valid email-id";
  }
  else {
    document.getElementById("emailErr").innerHTML = "";
  }

}

function selectValidate() {
  let select = document.getElementById("about").value;
  if (select == "") {
    document.getElementById("selectErr").innerHTML = "Select required";
  }
  else {
    document.getElementById("selectErr").innerHTML = "";
  }

}

function maxLen() {
  var feedback = document.getElementById("fdb");
  var suggestion = document.getElementById("suggest")
  // var maxregex = /^.{1,15}$/;
  if (feedback.value.length > 15) {
    document.getElementById("fdbErr").innerHTML = "Maximum 15 chataters only";
  }
  else {
    document.getElementById("fdbErr").innerHTML = "";

  }

  if (suggestion.value.length > 15) {
    document.getElementById("suggErr").innerHTML = "Maximum 15 chataters only";
  }
  else {
    document.getElementById("suggErr").innerHTML = "";
  }
}

function checkboxValidate() {
  var check = document.getElementById("check");
  if (!check.checked) {
    document.getElementById("checkBoxErr").innerHTML = "Checkbox not selected";
  }
  else {
    document.getElementById("checkBoxErr").innerHTML = "";
  }
}

function radioBtn() {
  if ((form1.gender[0].checked == false) && (form1.gender[1].checked == false) && (form1.gender[2].checked == false)) {
    document.getElementById("radioErr").innerHTML = "Gender not selecte;d";
  }
}

function genderValidate() {
  var ml = document.getElementsByName('gender');
  var genValue = false;
  for (var i = 0; i < ml.length; i++) {
    if (ml[i].checked == true) {
      genValue = true;
    }
  }
  if (!genValue) {
    document.getElementById('genErr').innerHTML = "*Please choose the gender";
  }
  else {
    document.getElementById('genErr').innerHTML = "";
  }
}



function validateform() {
  var submit = document.getElementById("submitBtn").value;
  if (fname == "" || lname == "" || addline1 == "" || addline2 == "" || city == "" || state == "" || pcode == "" || phoneNum == "" || email == "") {
    document.getElementById("submitErr").innerHTML = "Fill required details";
  }
}
