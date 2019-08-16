var fName = document.getElementById("firstName");
var age = document.getElementById("age");
var locations = document.getElementById("locations");
var email = document.getElementById("mail");





email.addEventListener("input", function (event) {

   if(emial.validity.typeMismatch){
    email.setCustomValidity("Enter@sample.com");
} else {
  email.setCustomValidity("");
}
});


email.addEventListener("invalid", () => {

  
  if(email.value === ""){
    email.setCustomValidity("Enter your email ");
  } else {
    email.setCustomValidity("");
  }
 
});




fName.addEventListener("invalid", () => {

 
  if(fName.value === ""){
    fiName.setCustomValidity(" Please enter your name");
  } else {
    f.setCustomValidity("");
  }
 
});

locations.addEventListener("invalid", () => {

  
  if(locations.value === ""){
    locations.setCustomValidity(" Please select the location");
  } else {
    locations.setCustomValidity("");
  }
 
});


age.addEventListener("invalid", () => {

  
  if(age.value === ""){
    age.setCustomValidity("please Enter your age s");
  } else {
    age.setCustomValidity("");
  }
 
});
