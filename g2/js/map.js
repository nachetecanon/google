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
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl: true,
				mapTypeControlOptions: {
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
					mapTypeIds: [
						google.maps.MapTypeId.ROADMAP,
						google.maps.MapTypeId.SATELLITE,
						google.maps.MapTypeId.HYBRID
					]
				},
				disableDefaultUI: true,
				navigationControl: true,
				navigationControlOptions: {
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				scaleControl: true,
				scaleControlOptions: {
					  position: google.maps.ControlPosition.TOP_LEFT
					},
				streetViewControl: true
			};
			G2.map = new google.maps.Map(G2.mapDiv,G2.options);
		},
		getZoom: function() {
			var msg= 'El valor de zoom es '+G2.map.getZoom();
			alert(msg);
		},
		gotoLiberty: function() {
			 G2.latlng = new google.maps.LatLng(40.6891, -74.0445);
			 G2.map.setOptions({center:G2.latlng,zoom:18,mapTypeId:google.maps.MapTypeId.SATELLITE});
			}
	}
	
window.onload = function() {
	G2.init();
	document.getElementById("getZoom").onclick = G2.getZoom;		
	document.getElementById("changeLocation").onclick= G2.gotoLiberty;
}