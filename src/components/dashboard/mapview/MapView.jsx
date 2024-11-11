import L from "leaflet";
import React, { useState, useEffect, useRef } from "react";
import { Layout, Button } from "antd";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from "esri-leaflet-geocoder";
import rightArrow from "../../../assets/image/dashboard/ep_right (1).png";
import leftArrow from "../../../assets/image/dashboard/ep_right.png";
import calender from "../../../assets/image/dashboard/Vector (2).png";
import "./MapView.css";
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
    if (!mapRef.current) return;

    const searchControl = new ELG.Geosearch().addTo(mapRef.current);

    searchControl.on("results", function (data) {
      if (data.results.length > 0) {
        const { latlng } = data.results[0];
        setMarkers((currentMarkers) => [...currentMarkers, latlng]);
        mapRef.current.setView(latlng, 10);
      }
    });
  }, [mapRef]);

  const toggleAddMarkers = () => {
    setIsAddingMarkers((prev) => !prev);
  };

  return (
    <Layout className="mt-3">
      <Content style={{ height: "100%", position: "relative" }}>
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          zoomControl={false}
          style={{
            height: "80vh",
            width: "78vw",
            margin: "auto",
            borderRadius: "1rem",
            border: "2px solid #ccc",
          }}
          whenCreated={(mapInstance) => {
            mapRef.current = mapInstance;
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          {markers.map((marker, idx) => (
            <Marker
              key={idx}
              position={[marker.lat, marker.lng]}
              icon={customMarkerIcon}
            >
              <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Popup>
            </Marker>
          ))}
          {markers.length > 0 && (
            <Polygon
              positions={markers.map((marker) => [marker.lat, marker.lng])}
              color="purple"
            />
          )}
          <Markers />
          <ZoomControl />
        </MapContainer>
        <div className="map-controls">
          <Button
            style={{
              position: "absolute",
              top: 290,
              left: -30,
              zIndex: 1000,
            }}
            onClick={() => setMarkers([])}
          >
            Delete Markers
          </Button>
        </div>
        <div className="add-field-button">
          <div className="d-flex justify-content-between mx-auto">
            <div>
              <button>
                <img src={calender} alt="calender" />
              </button>
              <button>
                <img src={leftArrow} alt="left arrow" />
              </button>
            </div>
            <button onClick={toggleAddMarkers} className="w-75 add-field">
              Add Field
            </button>
            <button>
              <img src={rightArrow} alt="right arrow" />
            </button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default MapData;
