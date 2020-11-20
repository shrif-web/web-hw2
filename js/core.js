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
    window.open("data.html","_self")
}

function home(){
    window.open("index.html","_self")
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

