
	var search = document.querySelector(".search-hotels-button");
	var popup  = document.querySelector(".search-form");
	var arrivalDate = popup.querySelector("[name=arrival-date]");
	var departureDate = popup.querySelector("[name=departure-date]");
	var adults = popup.querySelector("[name=adults]");

    document.addEventListener("DOMContentLoaded", function(evt){
		popup.classList.remove("search-form-error");
		popup.classList.remove("search-form-show");
	});

	search.addEventListener("click", function(evt){
		evt.preventDefault();
		popup.classList.remove("search-form-error");
		popup.classList.toggle("search-form-show");
		arrivalDate.focus();
	});	

	popup.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value || !adults.value) {
    	evt.preventDefault();
     	popup.classList.remove("search-form-error");
     	popup.offsetWidth = popup.offsetWidth;
     	popup.classList.add("search-form-error");
    }
  });
