G2 = {
	mapDiv: null,
	latlng: null,
	options: null,
	map: null,
	init: function() {
			G2.mapDiv = document.getElementById('map');
			G2.latlng = new google.maps.LatLng(34.9586,-105.386);
			G2.options = {
				center: G2.latlng,
				zoom: 9,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			G2.map = new google.maps.Map(G2.mapDiv,G2.options);
		}
		
	}
	
window.onload = function() {
	G2.init();		
}