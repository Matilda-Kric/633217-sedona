var search=document.querySelector(".search-hotels-button"),popup=document.querySelector(".search-form"),arrivalDate=popup.querySelector("[name=arrival-date]"),departureDate=popup.querySelector("[name=departure-date]"),adults=popup.querySelector("[name=adults]");document.addEventListener("DOMContentLoaded",function(){popup.classList.remove("search-form-error"),popup.classList.remove("search-form-show")}),search.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("search-form-error"),popup.classList.toggle("search-form-show"),arrivalDate.focus()}),popup.addEventListener("submit",function(a){arrivalDate.value&&departureDate.value&&adults.value||(a.preventDefault(),popup.classList.remove("search-form-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("search-form-error"))});