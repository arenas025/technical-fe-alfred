"use client";

// TP
import React, { useEffect, useRef } from "react";
import type L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const mapRef = useRef<L.Map | null>(null);

  //extract ?
  useEffect(() => {
    import("leaflet").then((L) => {
      if (mapRef.current !== null) return;

      mapRef.current = L.map("map").setView([latitude, longitude], 13, {});

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      L.marker([latitude, longitude], {
        icon: L.icon({
          iconAnchor: [10, 10],
          iconSize: [20, 20],
          iconUrl: "https://www.svgrepo.com/show/302636/map-marker.svg",
        }),
      }).addTo(mapRef.current);
    });

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "95%",
        height: "600px",
        maxWidth: 1550,
        marginBottom: 50,
        borderRadius: 10,
        marginTop: 50,
      }}
    ></div>
  );
};

export default Map;
