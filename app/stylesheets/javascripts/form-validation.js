// Regex pattern for dd/mm/yyyy format
let dateRegex = /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/

// Regex pattern for valid email: user@domain.com | user123.92@domain.net ...
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function validateForm(form){

	if (form.fname.value === "" && form.fname.value < 3) {
		alert('You havent entered first name')
		form.fname.style.border = "2px solid red"
		return false
	}
	if (form.lname.value === "" && form.lname.value < 3) {
		alert('You havent entered last name')
		form.lname.style.border = "2px solid red"
		return false
	}
	if (!dateRegex.test(form.date.value)) {
		alert('Date format must be dd/mm/yyyy')
		form.date.style.border = "2px solid red"
		return false
	}
	if (!emailRegex.test(form.mail.value)) {
		alert('Email format must be user@domain.com')
		form.mail.style.border = "2px solid red"
		return false
	}
	if (form.password === "") {
		alert('Password field is empty')
		form.password.style.border = "2px solid red"
		return false
	}
	else {
		alert('Form is valid and submited')
		return true
	}
}

function validateNewsletterMail(form){
	if (!emailRegex.test(form.email.value)) {
		alert('Newsletter mail address is not valid. Valid email: user@domain.com')
		form.email.style.border = "2px solid red";
		return false
	}else {
		return true
	}
}