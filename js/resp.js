burger = document.querySelector('.burger')
leftNav = document.querySelector('.left-nav')
rightNav = document.querySelector('.right-nav')
navbar = document.querySelector('.navbar')

burger.addEventListener('click', ()=>{
    leftNav.classList.toggle('resp-nav')
    rightNav.classList.toggle('resp-nav')
    navbar.classList.toggle('resp-height')
})

function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "js10092000@gmail.com",
        Password : "sharma@10jyoti",
        To : 'mail4sudha12@gmail.com',
        From : document.getElementById("mail").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );    
}