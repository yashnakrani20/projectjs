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
    email.setCustomValidity(" Enter");
  } else {
    email.setCustomValidity("");
  }
 
});




fName.addEventListener("invalid", () => {

 
  if(fName.value === ""){
    fiName.setCustomValidity(" Please");
  } else {
    f.setCustomValidity("");
  }
 
});

locations.addEventListener("invalid", () => {

  
  if(locations.value === ""){
    locations.setCustomValidity(" Please");
  } else {
    locations.setCustomValidity("");
  }
 
});


age.addEventListener("invalid", () => {

  
  if(age.value === ""){
    age.setCustomValidity("Enter");
  } else {
    age.setCustomValidity("");
  }
 
});
