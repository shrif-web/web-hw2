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
    toggleSignup();
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

function loginSubmit(){
    var x = document.getElementById('email1').value;
    var y = document.getElementById('password1').value;
  if (x == "") {
    $('#login-alert').append('<div class="alert">'+
  '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>'+
  'ایمیل خود را وارد کنید'+
'</div>');
  }
  if ( y== "") {
    $('#login-alert').append('<div class="alert">'+
  '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>'+
  'رمز خود را وارد کنید'+
'</div>');
  }

    
}

function signupSubmit(){
    var x = document.getElementById('email2').value;
    var y = document.getElementById('password2').value;
    var z = document.getElementById('password3').value;
  if (x == "") {
    $('#signup-alert').append('<div class="alert">'+
  '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>'+
  'ایمیل خود را وارد کنید'+
'</div>');
  }
  if ( y == "") {
    $('#signup-alert').append('<div class="alert">'+
  '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>'+
  'رمز عبور را وارد کنید'+
'</div>');
  }
  if ( z == "") {
    $('#signup-alert').append('<div class="alert">'+
  '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>'+
  'رمز عبور را تکرار کنید'+
'</div>');
  }

}

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}