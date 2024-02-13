function validateInputField(){
    let titleValue = document.getElementById("#titlename").value;
    let description = document.getElementById("#titledescription").value;

 if (titleValue === "") {
   errorName.innerHTML = "titleValue empty";
   return false;
 }
else if (description === "") {
   errorCode.innerHTML = "description empty";
   return false;
 }
 console.log(titleValue);
 console.log(description);
}