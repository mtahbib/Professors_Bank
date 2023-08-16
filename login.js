//step-1 add event handler
document.getElementById('submit-button').addEventListener('click',function(){
  //step-2 get email address 
  const emailField= document.getElementById('user-email');
  const email= emailField.value;
  //step-3 password
  const passwordField= document.getElementById('user-password');
  const password= passwordField.value;
  //dont check email and password this is for just learninf

  if(email=== 'mtahbib@gmail.com' && password==='raheeq'){
    console.log('valid user')}

    else
    console.log("invalid user")
  
})