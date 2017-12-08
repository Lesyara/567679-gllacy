var feedback_form = document.querySelector(".feedback");
var open_button = document.querySelector(".contacts_feedback.button_go");
var close_button = document.querySelector(".feedback_close_button");
var username_field = document.querySelector(".feedback_username input");
var email_field = document.querySelector(".feedback_usermail input");
var text_field = document.querySelector(".feedback_usertext textarea");
var dark_wrap = document.querySelector(".darkening_wrapper");

if(localStorage) {
  var saved_login = localStorage.getItem("userLogin");
  var saved_mail = localStorage.getItem("userMail");    
}

open_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback_form.classList.add("feedback_show"); 
  dark_wrap.classList.add("darkening_on");
  
  if(saved_login && saved_mail) {
    username_field.value = saved_login;
    email_field.value = saved_mail; 
    text_field.focus();
  }
  else if(saved_login) {
    username_field.value = saved_login;
    email_field.focus();
  }
  else {
    username_field.focus();
  }
});

close_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback_form.classList.remove("feedback_show");
  feedback_form.classList.remove("feedback_submit_error");
  dark_wrap.classList.remove("darkening_on");
});

feedback_form.addEventListener("submit", function(evt) {
  if( !username_field.value || !email_field.value ) {
    evt.preventDefault();
    feedback_form.classList.remove("feedback_submit_error");
    feedback_form.offsetWidth = feedback_form.offsetWidth;
    feedback_form.classList.add("feedback_submit_error");
  }
  else if (!text_field.value) {
    evt.preventDefault();
    feedback_form.classList.remove("feedback_submit_error");
    feedback_form.offsetWidth = feedback_form.offsetWidth;
    feedback_form.classList.add("feedback_submit_error");
  }
  else {
    localStorage.setItem("userLogin", username_field.value);
    localStorage.setItem("userMail", email_field.value);
  }
}); 

window.addEventListener("keydown",function(evt) {
  if(evt.keyCode == 27) {
    if (feedback_form.classList.contains("feedback_show") && dark_wrap.classList.contains("darkening_on")) {
      feedback_form.classList.remove("feedback_show");
      feedback_form.classList.remove("feedback_submit_error");
      dark_wrap.classList.remove("darkening_on");
    }
  }
});