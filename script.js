document.querySelector('.img-btn').addEventListener('click', function()
{
    document.querySelector('.cont').classList.toggle('s-signup')
}
);

function validate(){
    var email=document.getElementById("mail").Value;
    var pass=document.getElementById("pass").Value;
    if(email=="Vyankatesh@gmail.com" && pass=="123456"){
        alert('Login Successfully...');
        return false;
    }
    else{
        alert('Invalid user..');
    }
}