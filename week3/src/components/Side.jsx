// Side.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Side = () => {
  const [songsName, setSongs] = useState([
    "Anuvanuvu", "Deva Shree Ganesha", "Apna Bana Le", "Kesariya", "Believer", "Bones", 
    "Satranga", "Phir Bhi Tumko Chahunga", "Tum Hi Ho", "Khairiyat", "Nijame ne chebutunna", 
    "Uppenantha", "Kalaavathi", "Inkem kavale", "Gaali vaaluga", "Nee kannu", "Ee Raathale", 
    "Naatu Naatu", "Samajavaragamana", "Ta takkara"
  ]);

  const searchSong = () => {
    let search = document.getElementById("id3").value;
    let searchResult = songsName.filter(song => song.toLowerCase().includes(search.toLowerCase()));
    setSongs(searchResult);
  };

  return (
    <div className="side">
      <div className="search">
        <input type="text" id="id3" placeholder="Enter your desired song" />
        <button id="id4" onClick={searchSong}>Search</button>
      </div>
      {songsName.map((item, index) => (
        <div key={index} className="song">
          <Link to={`/songplace/${index}`} id="id10"><h3>{item}</h3></Link>
        </div>
      ))}
    </div>
  );
}

export default Side;
