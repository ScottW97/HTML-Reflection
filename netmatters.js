(function() {
	if (!localStorage.getItem('cookieconsent')) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var data = JSON.parse(request.responseText);
				var eu_country_codes = ['AL', 'AD', 'AM', 'AT', 'BY', 'BE', 'BA', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FO', 'FI', 'FR', 'GB', 'GE', 'GI', 'GR', 'HU', 'HR', 'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MC', 'MK', 'MT', 'NO', 'NL', 'PO', 'PT', 'RO', 'RU', 'SE', 'SI', 'SK', 'SM', 'TR', 'UA', 'VA'];
				if (eu_country_codes.indexOf(data.countryCode) != -1) {
					document.body.innerHTML += '\
					<div class="cookieconsent" style="position:fixed;padding:20px;left:0;bottom:0;background-color:#000;color:#FFF;text-align:center;width:100%;z-index:99999;">\
						This site uses cookies. By continuing to use this website, you agree to their use. \
						<a href="#" style="color:#CCCCCC;">I Understand</a>\
					</div>\
					';
					document.querySelector('.cookieconsent a').onclick = function(e) {
						e.preventDefault();
						document.querySelector('.cookieconsent').style.display = 'none';
						localStorage.setItem('cookieconsent', true);
					};
				}
			}
		};
		request.open('GET', 'http://ip-api.com/json', true);
		request.send();
	}
})();

function openSlideMenu(){
	document.getElementById("bodyid").id = "bodyidmoved";
	document.getElementById('pagedim').style.opacity = '0.5';
	document.getElementById('menuclick').innerHTML = '<button id="menubutton"><i class="fas fa-times nmsideclick"></i><br>MENU</button>';
	document.getElementById('bodyscroll').style.overflow = 'hidden';
	setTimeout(function openSlideMenu(){
		document.getElementById('sidebar').style.zIndex = '2';
		document.getElementById('menuclick').setAttribute( "onClick", "closeSlideMenu()" );
		document.getElementById('bgcolor').setAttribute( "onClick", "closeSlideMenu()" );
	}, 450);
}

function closeSlideMenu(){
	document.getElementById("bodyidmoved").id = "bodyid";
	document.getElementById('pagedim').style.opacity = '1';
	document.getElementById('menuclick').setAttribute( "onClick", "openSlideMenu()" );
	document.getElementById('menuclick').innerHTML = '<button id="menubutton"><i class="fas fa-bars nmsideclick"></i><br>MENU</button>';
	document.getElementById('bodyscroll').style.overflow = 'visible';
	setTimeout(function openSlideMenu(){document.getElementById('bgcolor').setAttribute( "onClick", "" );}, 100);
	setTimeout(function openSlideMenu(){document.getElementById('sidebar').style.zIndex = '-1';}, 100);
}
