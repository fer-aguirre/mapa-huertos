import './mapa.css';
import React from 'react';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import data from './huertos.json';


const icon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/fer-aguirre/mapa-huertos-urbanos/main/src/components/mapa/plant.png',
  iconSize: [50, 50],
  iconAnchor: [20, 40],
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  shadowSize: [50, 50],
  shadowAnchor: [32, 25],
  popupAnchor:  [-5, -29]
});




export default function Mapa(){

  return (
    <MapContainer center={[19.427074398015293, -99.12289930564387]} zoom={7}>

      <TileLayer
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <TileLayer
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png"
      />

      {data &&
        data.map(({nombre, descripcion, tipo, latitud, longitud, redes_sociales, id}, i) => (
          <Marker
            key={id}
            position={[latitud, longitud]}
            icon={icon}>
      
          <Popup className="popup-text">
            <h5><b>{nombre}</b></h5>
            <hr></hr>
            <b>Tipo de huerto:</b> {tipo}
            <br></br>
            <br></br>
            <b>Descripción: </b>{descripcion}
            <br></br>
            <br></br>
            <a href={redes_sociales} target="_blank" rel='noreferrer noopener' >Redes Sociales</a>
          </Popup>
          </Marker>
        ))}


      </MapContainer>
  );
}
