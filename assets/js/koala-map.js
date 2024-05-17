let map;
let markers = [];
let polygon = null;
// array for places that show.
let placeMarkers = [];
function koalaMap() {
    // styles  Map
    const styles = [
        {
            featureType: 'water',
            stylers: [
                { color: '#19a0d8' }
            ]
        },{
            featureType: 'administrative',
            elementType: 'labels.text.stroke',
            stylers: [
                { color: '#ffffff' },
                { weight: 6 }
            ]
        },{
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [
                { color: '#e85113' }
            ]
        },{
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
                { color: '#efe9e4' },
                { lightness: -40 }
            ]
        },{
            featureType: 'transit.station',
            stylers: [
                { weight: 9 },
                { hue: '#e85113' }
            ]
        },{
            featureType: 'road.highway',
            elementType: 'labels.icon',
            stylers: [
                { visibility: 'off' }
            ]
        },{
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [
                { lightness: 100 }
            ]
        },{
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
                { lightness: -100 }
            ]
        },{
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
                { visibility: 'on' },
                { color: '#f0e4d3' }
            ]
        },{
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
                { color: '#efe9e4' },
                { lightness: -25 }
            ]
        }
    ];
    const stylesFeatures = {
        default: [],
        hiding: [
            {
                featureType: "poi.business",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "transit",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
            },
        ],
        silver: [
            {
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }],
            },
            {
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
            },
            {
                elementType: "labels.text.fill",
                stylers: [{ color: "#616161" }],
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#f5f5f5" }],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{ color: "#bdbdbd" }],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#eeeeee" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#757575" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#e5e5e5" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9e9e9e" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }],
            },
            {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [{ color: "#757575" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#dadada" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#616161" }],
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9e9e9e" }],
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{ color: "#e5e5e5" }],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{ color: "#eeeeee" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#c9c9c9" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9e9e9e" }],
            },
        ],
        night: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ],
        retro: [
            { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
            {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{ color: "#c9b2a6" }],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "geometry.stroke",
                stylers: [{ color: "#dcd2be" }],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{ color: "#ae9e90" }],
            },
            {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#93817c" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{ color: "#a5b076" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#447530" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#f5f1e6" }],
            },
            {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ color: "#fdfcf8" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#f8c967" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#e9bc62" }],
            },
            {
                featureType: "road.highway.controlled_access",
                elementType: "geometry",
                stylers: [{ color: "#e98d58" }],
            },
            {
                featureType: "road.highway.controlled_access",
                elementType: "geometry.stroke",
                stylers: [{ color: "#db8555" }],
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [{ color: "#806b63" }],
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "transit.line",
                elementType: "labels.text.fill",
                stylers: [{ color: "#8f7d77" }],
            },
            {
                featureType: "transit.line",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#ebe3cd" }],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [{ color: "#b9d3c2" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#92998d" }],
            },
        ],
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 10,
        styles: styles,
        mapTypeControl: true,
    });
    //select map style
    const styleControl = document.getElementById("style-selector-control");
    // Set the map's style to the initial value of the selector.
    const styleSelector = document.getElementById("style-selector");
    map.setOptions({ styles: stylesFeatures[styleSelector.value] });
    // Apply new JSON when the user selects a different style.
    styleSelector.addEventListener("change", () => {
        map.setOptions({ styles: stylesFeatures[styleSelector.value] });
    });
    //  search within time entry box.
    const timeAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('search-within-time-text'));
    //  use in the geocoder entry box.
    const zoomAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('zoom-to-area-text'));
    //  for the zoom to area text.
    zoomAutocomplete.bindTo('bounds', map);
    //  searchbox in order to execute a places search
    const searchBox = new google.maps.places.SearchBox(
        document.getElementById('places-search'));
    // Bias the searchbox to within the bounds of the map.
    searchBox.setBounds(map.getBounds());
    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.
    let locations = [
        {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
        {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
        {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
        {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
        {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
        {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
    ];
    const largeInfowindow = new google.maps.InfoWindow();
    // Initialize the drawing manager.
    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.POLYGON,
            ]
        }
    });
    // maker icon
    const defaultIcon = makeMarkerIcon('e56d65');
    // Create a "highlighted location" marker color for when the user
    // mouses over the marker.
    const highlightedIcon = makeMarkerIcon('cd3022');
    // The following group uses the location array to create an array of markers on initialize.
    for (let i = 0; i < locations.length; i++) {
        // Get the position,title from the location array.
        const position = locations[i].location;
        const title = locations[i].title;
        // Create a marker per location, and put into markers array.
        const marker = new google.maps.Marker({
            position: position,
            title: title,
            draggable: true,
            geodesic: false,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            id: i
        });
        markers.push(marker);
        //  onclick event to open the large infowindow at each marker.
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
        // Two event listeners - one for mouseover, one for mouseout,
        marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });
    }
    
    document.getElementById('show-listings').addEventListener('click', showListings);

    document.getElementById('hide-listings').addEventListener('click', function() {
        hideMarkers(markers);
    });
    document.getElementById('toggle-drawing').addEventListener('click', function() {
        toggleDrawing(drawingManager);
    });
    document.getElementById('zoom-to-area').addEventListener('click', function() {
        zoomToArea();
    });
    document.getElementById('search-within-time').addEventListener('click', function() {
        searchWithinTime();
    });
    // picklist and retrieve more details for that place.
    searchBox.addListener('places_changed', function() {
        searchBoxPlaces(this);
    });
    // "go" more details for that place.
    document.getElementById('go-places').addEventListener('click', textSearchPlaces);
    // Add an event listener so that the polygon is captured
    drawingManager.addListener('overlaycomplete', function(event) {
        // check if there is an existing polygon.
        if (polygon) {
            polygon.setMap(null);
            hideMarkers(markers);
        }
        // Switching the drawing mode to the HAND.
        drawingManager.setDrawingMode(null);
        // Creating a new editable polygon from the overlay.
        polygon = event.overlay;
        polygon.setEditable(true);
        // Searching within the polygon.
        searchWithinPolygon(polygon);
        // Make sure the search is re-done if the poly is changed.
        polygon.getPath().addListener('set_at', searchWithinPolygon);
        polygon.getPath().addListener('insert_at', searchWithinPolygon);
    });
}
//  allow one infowindow which will open at the marker that is clicked
function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        // Clear the infowindow content to give the streetview time to load.
        infowindow.setContent('');
        infowindow.marker = marker;
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
        });
        const streetViewService = new google.maps.StreetViewService();
        let radius = 50;
        // In case the status is OK, which means the pano was found, compute the
        // position of the streetview image, then calculate the heading, then get a
        // panorama from that and set the options
        function getStreetView(data, status) {
            if (status == google.maps.StreetViewStatus.OK) {
                const nearStreetViewLocation = data.location.latLng;
                const heading = google.maps.geometry.spherical.computeHeading(
                    nearStreetViewLocation, marker.position);
                infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
                let panoramaOptions = {
                    position: nearStreetViewLocation,
                    pov: {
                        heading: heading,
                        pitch: 30
                    }
                };
                const panorama = new google.maps.StreetViewPanorama(
                    document.getElementById('pano'), panoramaOptions);
            } else {
                infowindow.setContent('<div>' + marker.title + '</div>' +
                    '<div>No Street View Found</div>');
            }
        }
        // Use streetview service to get the closest streetview image within 50 meters of the markers position
        streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
        // Open the infowindow on the correct marker.
        infowindow.open(map, marker);
    }
}
// This function will loop through the markers array and display them all.
function showListings() {
    const bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map for each marker and display the marker
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
}
// This function will loop through the listings and hide them all.
function hideMarkers(markers) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}
// This function takes in a COLOR, and then creates a new marker icon of that color.
function makeMarkerIcon(markerColor) {
    const markerImage = new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21,34));
    return markerImage;
}
// This shows and hides the drawing options.
function toggleDrawing(drawingManager) {
    if (drawingManager.map) {
        drawingManager.setMap(null);
        // In case the user drew anything, get rid of the polygon
        if (polygon !== null) {
            polygon.setMap(null);
        }
    } else {
        drawingManager.setMap(map);
    }
}
// This function hides all markers outside the polygon,
function searchWithinPolygon() {
    for (let i = 0; i < markers.length; i++) {
        if (google.maps.geometry.poly.containsLocation(markers[i].position, polygon)) {
            markers[i].setMap(map);
        } else {
            markers[i].setMap(null);
        }
    }
}
// This function takes the input value in the find nearby area text input
function zoomToArea() {
    // Initialize the geocoder.
    const geocoder = new google.maps.Geocoder();
    // Get the address or place that the user entered.
    const address = document.getElementById('zoom-to-area-text').value;
    // Make sure the address isn't blank.
    if (address == '') {
        window.alert('You must enter an area, or address.');
    } else {
        // Geocode the address/area entered to get the center.
        geocoder.geocode(
            { address: address,
                componentRestrictions: {locality: 'New York'}
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    map.setZoom(15);
                } else {
                    window.alert('We could not find that location - try entering a more' +
                        ' specific place.');
                }
            });
        }
    }
// This function allows the user to input a desired travel time, in minutes, and a travel mode, and a location
function searchWithinTime() {
    // Initialize the distance matrix service.
    const distanceMatrixService = new google.maps.DistanceMatrixService;
    const address = document.getElementById('search-within-time-text').value;
    // Check to make sure the place entered isn't blank.
    if (address == '') {
        window.alert('You must enter an address.');
    } else {
        hideMarkers(markers);
        // Use the distance matrix service to calculate the duration of the routes between all our markers
        let origins = [];
        for (let i = 0; i < markers.length; i++) {
            origins[i] = markers[i].position;
        }
        const destination = address;
        const mode = document.getElementById('mode').value;
        // Now that both the origins and destination are defined
        distanceMatrixService.getDistanceMatrix({
            origins: origins,
            destinations: [destination],
            travelMode: google.maps.TravelMode[mode],
            unitSystem: google.maps.UnitSystem.IMPERIAL,
        }, function(response, status) {
            if (status !== google.maps.DistanceMatrixStatus.OK) {
                window.alert('Error was: ' + status);
            } else {
                displayMarkersWithinTime(response);
            }
        });
    }
}
// This function will go through each of the results
function displayMarkersWithinTime(response) {
    const maxDuration = document.getElementById('max-duration').value;
    const origins = response.originAddresses;
    const destinations = response.destinationAddresses;
    // Parse through the results, and get the distance and duration of each.
    let atLeastOne = false;
    for (let i = 0; i < origins.length; i++) {
        const results = response.rows[i].elements;
        for (let j = 0; j < results.length; j++) {
            const element = results[j];
            if (element.status === "OK") {
                // The distance is returned in feet, but the TEXT is in miles.
                const distanceText = element.distance.text;
                // Duration value is given in seconds so we make it MINUTES.
                const duration = element.duration.value / 60;
                const durationText = element.duration.text;
                if (duration <= maxDuration) {
                    markers[i].setMap(map);
                    atLeastOne = true;
                    const infowindow = new google.maps.InfoWindow({
                        content: durationText + ' away, ' + distanceText + '<div>'+'<input type=\"button\" value=\"View Route\" onclick =' + '\"displayDirections(' + origins[i] + ');\"></div>'
                    });
                    infowindow.open(map, markers[i]);
                    markers[i].infowindow = infowindow;
                    google.maps.event.addListener(markers[i], 'click', function() {
                        this.infowindow.close();
                    });
                }
            }
        }
    }
    if (!atLeastOne) {
        window.alert('We could not find any locations within that distance!');
    }
}
// This function is in response to the user selecting "show route" on one
// of the markers within the calculated distance.
function displayDirections(origin) {
    hideMarkers(markers);
    const directionsService = new google.maps.DirectionsService;
    // Get the destination address from the user entered value.
    const destinationAddress =
        document.getElementById('search-within-time-text').value;
    // Get mode again from the user entered value.
    const mode = document.getElementById('mode').value;
    directionsService.route({
        // The origin is the passed in marker's position.
        origin: origin,
        // The destination is user entered address.
        destination: destinationAddress,
        travelMode: google.maps.TravelMode[mode]
    }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            const directionsDisplay = new google.maps.DirectionsRenderer({
                map: map,
                directions: response,
                draggable: true,
                polylineOptions: {
                    strokeColor: 'green'
                }
            });
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
// This function fires when the user selects a searchbox picklist item.
function searchBoxPlaces(searchBox) {
    hideMarkers(placeMarkers);
    const places = searchBox.getPlaces();
    if (places.length == 0) {
        window.alert('We did not find any places matching that search!');
    } else {
        // For each place, get the icon, name and location.
        createMarkersForPlaces(places);
    }
}
// This function firest when the user select "go" on the places search.
function textSearchPlaces() {
    const bounds = map.getBounds();
    hideMarkers(placeMarkers);
    const placesService = new google.maps.places.PlacesService(map);
    placesService.textSearch({
        query: document.getElementById('places-search').value,
        bounds: bounds
    }, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            createMarkersForPlaces(results);
        }
    });
}
// This function creates markers for each place found in either places search.
function createMarkersForPlaces(places) {
    const bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < places.length; i++) {
        const place = places[i];
        const icon = {
            url: place.icon,
            size: new google.maps.Size(35, 35),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(15, 34),
            scaledSize: new google.maps.Size(25, 25)
        };
        // Create a marker for each place.
        const marker = new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location,
            id: place.place_id
        });
        // Create a single infowindow to be used with the place details information
        const placeInfoWindow = new google.maps.InfoWindow();
        // If a marker is clicked, do a place details search on it in the next function.
        marker.addListener('click', function() {
            if (placeInfoWindow.marker == this) {
                console.log("This infowindow already is on this marker!");
            } else {
                getPlacesDetails(this, placeInfoWindow);
            }
        });
        placeMarkers.push(marker);
        if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }
    }
    map.fitBounds(bounds);
}
// it's the most detailed so it's only executed when a marker is selected
function getPlacesDetails(marker, infowindow) {
    const service = new google.maps.places.PlacesService(map);
    service.getDetails({
        placeId: marker.id
    }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            // Set the marker property on this infowindow so it isn't created again.
            infowindow.marker = marker;
            let innerHTML = '<div>';
            if (place.name) {
                innerHTML += '<strong>' + place.name + '</strong>';
            }
            if (place.formatted_address) {
                innerHTML += '<br>' + place.formatted_address;
            }
            if (place.formatted_phone_number) {
                innerHTML += '<br>' + place.formatted_phone_number;
            }
            if (place.opening_hours) {
                innerHTML += '<br><br><strong>Hours:</strong><br>' +
                    place.opening_hours.weekday_text[0] + '<br>' +
                    place.opening_hours.weekday_text[1] + '<br>' +
                    place.opening_hours.weekday_text[2] + '<br>' +
                    place.opening_hours.weekday_text[3] + '<br>' +
                    place.opening_hours.weekday_text[4] + '<br>' +
                    place.opening_hours.weekday_text[5] + '<br>' +
                    place.opening_hours.weekday_text[6];
            }
            if (place.photos) {
                innerHTML += '<br><br><img src="' + place.photos[0].getUrl(
                    {maxHeight: 100, maxWidth: 200}) + '">';
            }
            innerHTML += '</div>';
            infowindow.setContent(innerHTML);
            infowindow.open(map, marker);
            // Make sure the marker property is cleared if the infowindow is closed.
            infowindow.addListener('closeclick', function() {
                infowindow.marker = null;
            });
        }
    });
}
window.koalaMap=koalaMap;