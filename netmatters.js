// Cookie storage
(function() {
  if (!localStorage.getItem("cookieconsent")) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(request.responseText);
        var eu_country_codes = [
          "AL",
          "AD",
          "AM",
          "AT",
          "BY",
          "BE",
          "BA",
          "BG",
          "CH",
          "CY",
          "CZ",
          "DE",
          "DK",
          "EE",
          "ES",
          "FO",
          "FI",
          "FR",
          "GB",
          "GE",
          "GI",
          "GR",
          "HU",
          "HR",
          "IE",
          "IS",
          "IT",
          "LT",
          "LU",
          "LV",
          "MC",
          "MK",
          "MT",
          "NO",
          "NL",
          "PO",
          "PT",
          "RO",
          "RU",
          "SE",
          "SI",
          "SK",
          "SM",
          "TR",
          "UA",
          "VA"
        ];
        if (eu_country_codes.indexOf(data.countryCode) != -1) {
          // If the country falls under GDPR law
          document.body.innerHTML +=
            '\
					<div class="cookieconsent" style="position:fixed;padding:20px;left:0;bottom:0;background-color:#000;color:#FFF;text-align:center;width:100%;z-index:99999;">\
						This site uses cookies. By continuing to use this website, you agree to their use. \
						<a href="#" style="color:#CCCCCC;">I Understand</a>\
					</div>\
					'; // Setting the HTML code and styling for the first time the user lands on the site and until the prompt is clicked
          document.querySelector(".cookieconsent a").onclick = function(e) {
            e.preventDefault();
            document.querySelector(".cookieconsent").style.display = "none";
            localStorage.setItem("cookieconsent", true);
          };
        }
      }
    };
    request.open("GET", "http://ip-api.com/json", true); // Getting cookie info
    request.send();
  }
})();

function openSlideMenu() {
  document.getElementById("bodyid").id = "bodyidmoved"; // Changing the body id (or the div that acts as it) to allow for it to be moved
  document.getElementById("pagedim").style.opacity = "0.5"; // Dimming the page in front of a black background
  document.getElementById("menuclick").innerHTML =
    '<button id="menubutton"><i class="fas fa-times nmsideclick"></i><br>MENU</button>'; //Changing the icon of the menu button to a cross
  document.getElementById("bodyscroll").style.overflow = "hidden"; // Disabling scrolling
  setTimeout(function() {
    document.getElementById("sidebar").style.zIndex = "2"; // Delayed code to prevent clashing
    document
      .getElementById("menuclick")
      .setAttribute("onClick", "closeSlideMenu()");
    document
      .getElementById("bgcolor")
      .setAttribute("onClick", "closeSlideMenu()");
  }, 450); // Allowing menu to be closed by a page click
}

function closeSlideMenu() {
  document.getElementById("bodyidmoved").id = "bodyid"; // Changing the body id back so that it's back to its original placement
  document.getElementById("pagedim").style.opacity = "1"; // Returning the opacity to normal
  document
    .getElementById("menuclick")
    .setAttribute("onClick", "openSlideMenu()"); // Menu can now be clicked to re-open the sidebar
  document.getElementById("menuclick").innerHTML =
    '<button id="menubutton"><i class="fas fa-bars nmsideclick"></i><br>MENU</button>'; // Returning the menu button HTML to the bar icon
  document.getElementById("bodyscroll").style.overflow = "visible"; // Allowing scrolling
  setTimeout(function() {
    document.getElementById("bgcolor").setAttribute("onClick", ""); // HTML for bgcolour now does nothing
    document.getElementById("sidebar").style.zIndex = "-1"; // Menu gets hidden back under the body div
  }, 100);
}

$(".slides").slick({
  autoplay: true, // Carousel automatically moves without input or hovering
  autoplaySpeed: 4000, // Four seconds per slide
  arrows: false, // Navigation arrows disabled
  dots: true, // A dot appears for each slide
  speed: 250 // The speed of the transition animation, in this case 0.25s
});

let mq = window.matchMedia("(max-width: 992px)"); // JS media query for the second break point, where the nav bar disappears
let prevScrollpos = window.pageYOffset;
$(window).scroll(function() {
  let sticky = $(".sticky"),
    scroll = $(window).scrollTop();
  if (scroll >= 216) {
    //Condition for when scrolling past the 216px threshold at the top of the page
    document.getElementById("navbar").style.position = "fixed"; // Navbar is fixed when the 216px threshold is passed
    window.onscroll = function() {
      // Begin function on scroll
      let currentScrollPos = window.pageYOffset; // Current scroll position is defined as wherever the user currently is
      if (prevScrollpos > currentScrollPos) {
        // Conditional for if the user scrolls up (which will bring down the menu)
        document.getElementById("navbar").style.top = "0";
      } else {
        if (mq.matches) {
          // Media query for different screen sizes
          // window width is at less than 992px
          document.getElementById("navbar").style.top = "-110px";
        } else {
          // window width is greater than 992px
          document.getElementById("navbar").style.top = "-210px";
        }
      }
      prevScrollpos = currentScrollPos;
    };
    if (mq.matches) {
      // Media query for different screen sizes
      // window width is at less than 992px
      document.getElementById("content").style.paddingTop = "110px";
    } else {
      // window width is greater than 992px
      document.getElementById("content").style.paddingTop = "210px";
    }
  } else {
    if (scroll > prevScrollpos) {
      // If scrolling up, the navbar doesn't move away even when within the 110-210px range
      document.getElementById("content").style.paddingTop = "";
      document.getElementById("navbar").style.position = "static";
    }
  }
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
