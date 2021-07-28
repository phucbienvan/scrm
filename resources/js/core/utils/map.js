/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-new */
/* eslint-disable no-undef */
export default {
  vectorMap () {
    $('#world_map').vectorMap({
      map: 'world_mill',
      normalizeFunction: 'polynomial',
      hoverOpacity: 0.7,
      hoverColor: false,
      regionStyle: {
        initial: {
          fill: '#e3eaef',
        },
      },
      markerStyle: {
        initial: {
          r: 9,
          fill: window.theme.primary,
          'fill-opacity': 0.95,
          stroke: '#fff',
          'stroke-width': 7,
          'stroke-opacity': 0.4,
        },
        hover: {
          stroke: '#fff',
          'fill-opacity': 1,
          'stroke-width': 1.5,
        },
      },
      backgroundColor: 'transparent',
      zoomOnScroll: false,
      markers: [{
        latLng: [31.230391, 121.473701],
        name: 'Shanghai',
      },
      {
        latLng: [28.704060, 77.102493],
        name: 'Delhi',
      },
      {
        latLng: [6.524379, 3.379206],
        name: 'Lagos',
      },
      {
        latLng: [35.689487, 139.691711],
        name: 'Tokyo',
      },
      {
        latLng: [23.129110, 113.264381],
        name: 'Guangzhou',
      },
      {
        latLng: [40.7127837, -74.0059413],
        name: 'New York',
      },
      {
        latLng: [34.052235, -118.243683],
        name: 'Los Angeles',
      },
      {
        latLng: [41.878113, -87.629799],
        name: 'Chicago',
      },
      {
        latLng: [51.507351, -0.127758],
        name: 'London',
      },
      {
        latLng: [40.416775, -3.703790],
        name: 'Madrid',
      },
      ],
    });
    setTimeout(() => {
      $(window).trigger('resize');
    }, 250);
  },
  initMap () {
    const defaultMap = {
      zoom: 14,
      center: {
        lat: 40.712784,
        lng: -74.005941,
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    new google.maps.Map(document.getElementById('default_map'), defaultMap);
    const hybridMap = {
      zoom: 14,
      center: {
        lat: 40.712784,
        lng: -74.005941,
      },
      mapTypeId: google.maps.MapTypeId.HYBRID,
    };
    new google.maps.Map(document.getElementById('hybrid_map'), hybridMap);
    const lightMap = {
      zoom: 14,
      center: {
        lat: 40.712784,
        lng: -74.005941,
      },
      styles: [{
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#e9e9e9',
        }, {
          lightness: 17,
        }],
      }, {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{
          color: '#f5f5f5',
        }, {
          lightness: 20,
        }],
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#ffffff',
        }, {
          lightness: 17,
        }],
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#ffffff',
        }, {
          lightness: 29,
        }, {
          weight: 0.2,
        }],
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
          color: '#ffffff',
        }, {
          lightness: 18,
        }],
      }, {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{
          color: '#ffffff',
        }, {
          lightness: 16,
        }],
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          color: '#f5f5f5',
        }, {
          lightness: 21,
        }],
      }, {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
          color: '#dedede',
        }, {
          lightness: 21,
        }],
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          visibility: 'on',
        }, {
          color: '#ffffff',
        }, {
          lightness: 16,
        }],
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          saturation: 36,
        }, {
          color: '#333333',
        }, {
          lightness: 40,
        }],
      }, {
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off',
        }],
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#f2f2f2',
        }, {
          lightness: 19,
        }],
      }, {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#fefefe',
        }, {
          lightness: 20,
        }],
      }, {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#fefefe',
        }, {
          lightness: 17,
        }, {
          weight: 1.2,
        }],
      }],
    };
    new google.maps.Map(document.getElementById('light_map'), lightMap);
    const darkMap = {
      zoom: 14,
      center: {
        lat: 40.712784,
        lng: -74.005941,
      },
      styles: [{
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{
          saturation: 36,
        }, {
          color: '#000000',
        }, {
          lightness: 40,
        }],
      }, {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{
          visibility: 'on',
        }, {
          color: '#000000',
        }, {
          lightness: 16,
        }],
      }, {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off',
        }],
      }, {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#000000',
        }, {
          lightness: 20,
        }],
      }, {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#000000',
        }, {
          lightness: 17,
        }, {
          weight: 1.2,
        }],
      }, {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{
          color: '#000000',
        }, {
          lightness: 20,
        }],
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          color: '#000000',
        }, {
          lightness: 21,
        }],
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#000000',
        }, {
          lightness: 17,
        }],
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#000000',
        }, {
          lightness: 29,
        }, {
          weight: 0.2,
        }],
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
          color: '#000000',
        }, {
          lightness: 18,
        }],
      }, {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{
          color: '#000000',
        }, {
          lightness: 16,
        }],
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#000000',
        }, {
          lightness: 19,
        }],
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#000000',
        }, {
          lightness: 17,
        }],
      }],
    };
    new google.maps.Map(document.getElementById('dark_map'), darkMap);
    const streetviewMap = {
      position: {
        lat: 42.345573,
        lng: -71.098326,
      },
      pov: {
        heading: 160,
        pitch: 0,
      },
    };
    new google.maps.StreetViewPanorama(document.getElementById('streetview_map'), streetviewMap);
    var markersMap = {
      zoom: 14,
      center: {
        lat: 40.712784,
        lng: -74.005941,
      },
      mapTypeId: google.maps.MapTypeId.TERRAIN,
    };
    // eslint-disable-next-line no-redeclare
    var markersMap = new google.maps.Map(document.getElementById('markers_map'), markersMap);
    // eslint-disable-next-line no-unused-vars
    var marker = new google.maps.Marker({
      position: {
        lat: 40.712784,
        lng: -74.005941,
      },
      map: markersMap,
      title: 'Hello World!',
    });
  },
};
