document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault()
    alert('form is submitted')
})


/*const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit',(e) => {
    let messages = []
    if(name.value === '' || name.value == null) {
        messages.push('name required')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
    
})*/
function validation()
{
    var form = document.getElementById('form');
    var email = document.getElementById('email').value;
    var text = document.getElementById('text');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "email is valid";
        text.style.color = "#00ff00";
    }
    else 
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "email is NOT valid";
        text.style.color = "#ff0000";
    }
    if (email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }

}