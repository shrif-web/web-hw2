$(function() {
  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');

  });
});

$(function ()
{
    $(window).on('resize', function ()
    {
        if ($(window).width() == 599)
        {
            if ($('#sidebar').hasClass('active')){

            	$('#sidebar').toggleClass('active');
            }

        }
    });
});


function login(){
	window.open("login.html","_self");
}

function register(){
	window.open("register.html","_self");
}

function getData(){
    document.getElementById("home-content").style.display = "none";
    document.getElementById("data-content").style.display = "block";
    document.getElementById("navbar-home").classList.remove("active-link");
    document.getElementById("navbar-home").classList.remove("active");
    document.getElementById("navbar-data").classList.add("active");
    document.getElementById("navbar-data").classList.add("active-link");
    document.getElementById("navbar-data").classList.remove("down-border");
    document.getElementById("navbar-home").classList.add("down-border");

}

function home(){
    document.getElementById("home-content").style.display = "block";
    document.getElementById("data-content").style.display = "none";
    document.getElementById("navbar-home").classList.add("active-link");
    document.getElementById("navbar-home").classList.add("active");
    document.getElementById("navbar-data").classList.remove("active");
    document.getElementById("navbar-data").classList.remove("active-link");
    document.getElementById("navbar-data").classList.add("down-border");
    document.getElementById("navbar-home").classList.remove("down-border");
}

function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="#fff";
    document.getElementById("login-toggle").style.color="#222";
    document.getElementById("signup-toggle").style.backgroundColor="#186aa4";
    document.getElementById("signup-toggle").style.color="#fff";
    document.getElementById("login-form").style.display="none";
    document.getElementById("signup-form").style.display="block";
}

function toggleLogin(){
    document.getElementById("login-toggle").style.backgroundColor="#186aa4";
    document.getElementById("login-toggle").style.color="#fff";
    document.getElementById("signup-toggle").style.backgroundColor="#fff";
    document.getElementById("signup-toggle").style.color="#222";
    document.getElementById("signup-form").style.display="none";
    document.getElementById("login-form").style.display="block";
}

