function init() {
  var myLatlng = new google.maps.LatLng(47.74554, 8.9659135); // Santé Café Radolfzell

  var mapOptions = {
    zoom: 17,
    center: myLatlng,
    scrollwheel: true,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        stylers: [{ visibility: "off" }]
      },
      {
        elementType: "geometry",
        stylers: [{ color: "#ebe3cd" }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#523735" }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#f5f1e6" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fdfcf8" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#f8c967" }]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#e98d58" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9c9c9" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#92998d" }]
      }
    ]
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: 'images/loc.png', // eigenes Marker-Icon
    title: 'Santé Café'
  });
}

google.maps.event.addDomListener(window, 'load', init);
