function initialize() {

  var start = new google.maps.LatLng(0,0)
  var mapOptions = {
      zoom: 2,
      center: start,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  getFileFromServer("toilet-database.csv", function(text) {

    if (text === null)
      return

    rows = text.split("\n");
    var headers= rows[0].split("\t");

    markers = [];
    infoWindowContent = [];


    // Main cities from australia (with high zindex)
    markers.push(['test', -33.868, 151.207, "FF0000", 999]);
    markers.push(['test', -37.814, 144.963, "FF0000", 999]);
    markers.push(['test', -27.468, 153.028, "FF0000", 999]);
    markers.push(['test', -31.952, 115.861, "FF0000", 999]);
    markers.push(['test', -34.929, 138.599, "FF0000", 999]);
    markers.push(['test', -28, 153.431, "FF0000", 999]);
    markers.push(['test', -35.283, 149.128, "FF0000", 999]);
    markers.push(['test', -32.927, 151.776, "FF0000", 999]);
    markers.push(['test', -34.424, 150.893, "FF0000", 999]);
    markers.push(['test', -27.639, 153.109, "FF0000", 999]);

    for(i = 1; i < rows.length; i++) {
      // row 0: ID of sample (title) 44563383.3.txt
      // row 13: coordinates
      //
      var cols = rows[i].split(",");
      if(cols.length == 1)
        continue;

      var lat = cols[3];
      var lon = cols[4];

      var contentString = "<b>" + cols[0] + "</b><br>";
      for(j = 1; j < cols.length; j++) {
        if(cols[j] != "NA" && cols[j] != "na")
        contentString = contentString + headers[j] + ":" + cols[j] + "<br>";
      }

      console.log(cols[2])
      switch(cols[2]) {
        case "water":
          color = "80D0FF"
          break;
        case "soil":
          color = "D0B060"
          break;
        default:
          color = "E0E0E0"
      }

      markers.push([cols[0], lat, lon, color, 8])
      infoWindowContent.push(contentString);
    }





    var infoWindow = new google.maps.InfoWindow(), marker, i;

    for(i = 0; i < markers.length; i++) {
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(markers[i][1],markers[i][2]),
          map: map,
          title: markers[i][0],
          zIndex: markers[i][4],
          icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + markers[i][3], new google.maps.Size(21, 34), new google.maps.Point(0,0), new google.maps.Point(10, 34))
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infoWindow.setContent(infoWindowContent[i]);
          infoWindow.open(map, marker);
        }
      })(marker, i));
    }

 });

}

google.maps.event.addDomListener(window, 'load', initialize);


function getFileFromServer(url, doneCallback) {
  var xhr;

  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = handleStateChange;
  xhr.open("GET", url, true);
  xhr.send();

  function handleStateChange() {
    if (xhr.readyState === 4) {
      doneCallback(xhr.status == 200 ? xhr.responseText : null);
    }
  }
}

