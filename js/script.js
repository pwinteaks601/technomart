var feedbackLink = document.querySelector(".write-us-btn");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = document.querySelector(".feedback-close");

var cartLink = document.querySelectorAll(".goods-buy-btn");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = document.querySelector(".cart-close");

var mapLink = document.querySelector(".open-modal-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".map-close");
var username = feedbackPopup.querySelector("[name=user-name]")

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault ()
  feedbackPopup.classList.add("modal-feedback-show");
  username.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault ()
  feedbackPopup.classList.remove("modal-feedback-show");
});


for (var i = 0; i < cartLink.length; i++) {
    cartLink[i].addEventListener('click', function (event) {
        event.preventDefault();
        cartPopup.classList.add('modal-cart-show');
    });
}

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault ()
  cartPopup.classList.remove("modal-cart-show");
});



mapLink.addEventListener("click", function (evt) {
  evt.preventDefault ()
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault ()
  mapPopup.classList.remove("modal-map-show");
});





function initMap() {
        var place = {lat: 59.9387942, lng: 30.3230833};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: {lat: 59.938693, lng: 30.328756}
        });

       var marker = new google.maps.Marker({
         position: place,
         map: map
       });

      }
