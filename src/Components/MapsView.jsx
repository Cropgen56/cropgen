import L from 'leaflet';
import React, { useState, useEffect, useRef } from 'react';
import { Layout, Switch, Button } from 'antd';
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import '../App.css'; // Ensure to include your custom CSS

const { Content } = Layout;

const MapData = () => {
  const [markers, setMarkers] = useState([]);
  const [isAddingMarkers, setIsAddingMarkers] = useState(false);
  const mapRef = useRef();

  const customMarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
  });

  const Markers = () => {
    useMapEvents({
      click: (e) => {
        if (isAddingMarkers) {
          const { lat, lng } = e.latlng;
          setMarkers((currentMarkers) => {
            const newMarkers = [...currentMarkers, { lat, lng }];
            return newMarkers.length > 12 ? newMarkers.slice(-12) : newMarkers;
          });
        }
      },
    });
    return null;
  };

  useEffect(() => {
    // if (mapRef.current) {
    //   const geocoder = L.Control.geocoder({
    //     defaultMarkGeocode: false
    //   })
    //   .on('markgeocode', function(e) {
    //     const bbox = e.geocode.bbox;
    //     const poly = L.polygon([
    //       bbox.getSouthEast(),
    //       bbox.getNorthEast(),
    //       bbox.getNorthWest(),
    //       bbox.getSouthWest()
    //     ]).addTo(mapRef.current);
    //     mapRef.current.fitBounds(poly.getBounds());
    //   })
    //   .addTo(mapRef.current);
    // }
  }, []);

  return (
    <Layout style={{ height: '100vh' }}>
      <Content style={{ height: '100%', position: 'relative'}}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          {markers.map((marker, idx) => (
            <Marker key={idx} position={[marker.lat, marker.lng]} icon={customMarkerIcon}>
              <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
          ))}
          {markers.length > 0 && <Polygon positions={markers.map((marker) => [marker.lat, marker.lng])} color="purple" />}
          <Markers />
        </MapContainer>
        <div className="map-controls">
          <Switch
            checked={isAddingMarkers}
            checkedChildren="Disable Adding"
            unCheckedChildren="Enable Adding"
            onChange={(checked) => setIsAddingMarkers(checked)}
            style={{ position: 'absolute', top: 350, left: 50, zIndex: 1000 }}
          />
          <Button style={{ position: 'absolute', top: 345, left: 190, zIndex: 1000 }} onClick={() => setMarkers([])}>Delete Markers</Button>
        </div>
      </Content>
    </Layout>
  );
};

export default MapData;
