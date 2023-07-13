//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


function sendMail(){
    var params= {
        from_name : document.getElementById("from_name").value,
        emailsubject : document.getElementById('subject').value,
        Mobile : document.getElementById('Mobile no').value,
        email : document.getElementById('Email_id').value,
        Yourmessage : document.getElementById('message').value
    }
    emailjs.send("service_iw4y0ik","template_0iouybm",params).then(function(res){
        alert(" Mail Send SuccessFully 👍" );
    })


     // Clear all content and go to the top of the page
     var elements = document.querySelectorAll('input, textarea');
     for (var i = 0; i < elements.length; i++) {
         elements[i].value = '';
     }
     window.scrollTo(0, 0);
}