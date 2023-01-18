function validate(){
const login_input = document.getElementById('login_input');

const loginErrBox = document.getElementById('loginErrBox');

login_input.addEventListener('input', ValidateEmail);

const pswd_input = document.getElementById('pswd_input');

const pswBox = document.getElementById('pswBox');

pswd_input.addEventListener('input', ValidatePass);


function ValidateEmail(mail) {
    console.log(mail.target.value);
    const value = mail.target.value;

    loginErrBox.style.display = "none";

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        loginErrBox.style.display = "block";
    }

    if(login_input == 0){
        alert("This field is required!!!");
        return false
    }
    
}

function ValidatePass(pass) {
    console.log(pass.target.value);
    const value = pass.target.value;

    pswBox.style.display = "none";

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}/.test(value)) {
        pswBox.style.display = "block";

    }
   
}
}
