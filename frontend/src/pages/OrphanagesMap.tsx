import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../assets/images/map-marker.svg'; 


function OrpahagesMaps(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Palmas</strong>
                    <span>Tocantins</span>
                </footer>
            </aside>

            <MapContainer 
                center={[-10.2114428,-48.3438468]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            </MapContainer>

            <Link to="" className="create-orphanage">
                <FiPlus  size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrpahagesMaps;