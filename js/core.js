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
    document.getElementById("content").style.display = "none";
    document.getElementById("data-table").style.display = "block";
    document.getElementById("navbar-home").classList.remove("active-link");
    document.getElementById("navbar-home").classList.remove("active");
    document.getElementById("navbar-data").classList.add("active");
    document.getElementById("navbar-data").classList.add("active-link");
    document.getElementById("navbar-data").classList.remove("down-border");
    document.getElementById("navbar-home").classList.add("down-border");
    document.getElementById("data-cards").classList.remove("to-hide");
    document.getElementById("data-cards").classList.add("to-show");
    document.getElementById("data-bottom-nav").classList.add("active");
    document.getElementById("data-bottom-nav").classList.remove("top-border");
    document.getElementById("home-bottom-nav").classList.remove("active");
    document.getElementById("home-bottom-nav").classList.add("top-border");

}

function home(){
    document.getElementById("content").style.display = "block";
    document.getElementById("data-table").style.display = "none";
    document.getElementById("navbar-home").classList.add("active-link");
    document.getElementById("navbar-home").classList.add("active");
    document.getElementById("navbar-data").classList.remove("active");
    document.getElementById("navbar-data").classList.remove("active-link");
    document.getElementById("navbar-data").classList.add("down-border");
    document.getElementById("navbar-home").classList.remove("down-border");
    document.getElementById("data-cards").classList.add("to-hide");
    document.getElementById("data-cards").classList.remove("to-show");
    document.getElementById("home-bottom-nav").classList.add("active");
    document.getElementById("home-bottom-nav").classList.remove("top-border");
    document.getElementById("data-bottom-nav").classList.remove("active");
    document.getElementById("data-bottom-nav").classList.add("top-border");

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

