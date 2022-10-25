import {useRef, useEffect, useState} from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css';

function App() {
  const mapRef = useRef(null)

  useEffect(()=> {
    if(!mapRef.current) return;
    
    const map = L.map(mapRef.current).setView([40.7831, -73.949], 13);

    let baseMap = L.tileLayer(
      "https://api.mapbox.com/styles/v1/zhik/cl9ellgx3000v15mqnndy3zoh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemhpayIsImEiOiJjaW1pbGFpdHQwMGNidnBrZzU5MjF5MTJiIn0.N-EURex2qvfEiBsm-W9j7w",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; Mapbox',
        maxZoom: 18,
        minZoom: 11,
        bounds: L.latLngBounds(
          [40.496133, -74.5555913],
          [40.9155327, -73.30078125]
        ),
        attribution:
          'Mapbox | &copy; <a href="http://osm.org/copyright">OSM</a> contributors',
      }
    ).addTo(map);

    return () => {
      map.remove()
    }

  }, [mapRef])
  
  return (
    <div className="App">
      <div id="map" ref={mapRef}></div>
    </div>
  );
}

export default App;
