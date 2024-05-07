function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.106667, lng: -94.676392 },
        zoom:-1,
        restriction: {
          latLngBounds: {
            north: 39.1997,
            south: 38.7997, 
            east: -93.99995, 
            west: -94.9156,
          },
          strictBounds: true
        }
    });
    var marker = new google.maps.Marker({
        position: { lat: 39.1039, lng: -94.59747 },
        map: map,
        title: 'Marker Location',
      });
      
      var healthIcon = {
        url: 'health icon.png',
        scaledSize: new google.maps.Size(37,37) 
      };
      var healthMarker = new google.maps.Marker({
        position: new google.maps.LatLng( 39.1039,-94.59747),
        map: map,
        icon: healthIcon 
      });
      
      var infoWindow = new google.maps.InfoWindow({
        content: 'This Marker is showing the Health Data at this point and shows Severity of Different Diseases' 
      });
      
    
      healthMarker.addListener('click', function() {
        infoWindow.open(map, healthMarker);
      });

      var zipCodeData = [64030,64102,64109,64113,64053,64105,64110,64114,64119,64079,64106,6411]; 
      zipCodeData.features.forEach(function (feature) {
        var zipCodePolygon = new google.maps.Polygon({
          paths: feature.geometry.coordinates, // Array of coordinates for the zip code boundary
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
      
        zipCodePolygon.setMap(map);
       });
}
