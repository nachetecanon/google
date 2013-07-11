G2 = {
	mapDiv: null,
	latlng: null,
	options: null,
	map: null,
	markerOptions:null,
 places: [],
 bounds: null,
	init: function() {
			G2.places.push(new google.maps.LatLng(40.756, -73.986));
			G2.places.push(new google.maps.LatLng(37.775, -122.419));
			G2.places.push(new google.maps.LatLng(47.620, -122.347));
			G2.bounds = new google.maps.LatLngBounds();
			G2.mapDiv = document.getElementById('map');
			G2.latlng = new google.maps.LatLng(37.09, -95.71);
			G2.options = {
				center: G2.latlng,
				zoom: 3,
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
			/* marker options */
			G2.markerOptions = { 
				position:G2.latlng,
				map:G2.map,
				title:'Manhattan',
				icon: '../images/markers/green/blank.png'
			};
			
			
		},
	addmarkerinfo:function(i,marker,info)	 {
			google.maps.event.addListener(marker,'click',function(){
	 			info.setContent("<div id='info'>Marcador "+(i+1)+"</div>");	 		
				info.open(G2.map,marker);
			});
	},
	addmarkers: function() {
		var info= new google.maps.InfoWindow();
		var image = new google.maps.MarkerImage(
			'img/google-maps-icons.png',
new google.maps.Size(30, 37), // The size
new google.maps.Point(12, 42), // The origin
new google.maps.Point(18, 38) // The anchor
);
		for(var i=0;i < G2.places.length;i++) {
			
			var marker = new google.maps.Marker({
					position:G2.places[i],
					map:G2.map,
					title: 'Posición '+(i+1),
					icon: image
				}	);
			G2.addmarkerinfo(i,marker,info);			
			G2.bounds.extend(G2.places[i]);
		 }	
		 G2.map.fitBounds(G2.bounds);				
		}
	
}
	
window.onload = function() {
	G2.init();
	G2.addmarkers();
	
}