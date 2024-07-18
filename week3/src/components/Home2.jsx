import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Home2 = () => {
  const { id } = useParams();
  const [songId, setSongId] = useState(parseInt(id));

  const songs = [
    { id: 0, title: "Anuvanuvu", singer: "Arijit singh", duration: "3-min 31-secs", link: `/song1.mp3`, link2: `/img1.png` },
    { id: 1, title: "Deva Shree Ganesha", singer: "Ajay-Atul and Ajay Gogavale", duration: "5-min 56secs", link: `/song2.mp3`, link2: `/img2.png` },
    { id: 2, title: "Apna Bana Le", singer: "Arijit Singh", duration: "3-min 24-secs", link: `/song3.mp3`, link2: `/img3.png` },
    { id: 3, title: "Kesariya", singer: "Arijit Singh", duration: "4-min 28-secs", link: `/song4.mp3`, link2: `/img4.png` },
    { id: 4, title: "Believer", singer: "American pop rock band Imagine Dragons", duration: "3-min 24-secs", link: `/song5.mp3`, link2: `/img5.png` },
    { id: 5, title: "Bones", singer: "American pop rock band Imagine Dragons", duration: "4-min 56-secs", link: `/song6.mp3`, link2: `/img6.png` },
    { id: 6, title: "Satranga", singer: "Arijit Singh", duration: "4-min 31-secs", link: `/song7.mp3`, link2: `/img7.png` },
    { id: 7, title: "Phir Bhi Tumko Chahunga", singer: "Arijit Singh", duration: "5-min 51-secs", link: `/song8.mp3`, link2: `/img8.png` },
    { id: 8, title: "Tum Hi Ho", singer: "Arijit Singh", duration: "4-min 22-secs", link: `/song9.mp3`, link2: `/img9.png` },
    { id: 9, title: "Khairiyat", singer: "Arijit Singh", duration: "4-min 30-secs", link: `/song10.mp3`,   link2: `/img10.png` },
    { id: 10, title: "Nijame ne chebutunna", singer: "Sid sriram", duration: "3-min 35-secs", link: `/song11.mp3`, link2: `/img11.png` },
    { id: 11, title: "Uppenantha", singer: "Devi sri prasad", duration: "5-min 27-secs", link: `/song12.mp3`, link2: `/img12.png` },
    { id: 12, title: "Kalaavathi", singer: "Sid sriram", duration: "4-min 02-secs", link: `/song13.mp3`, link2: `/img13.png` },
    { id: 13, title: "Inkem kavale", singer: "sid sriram", duration: "4-min 26-secs", link: `/song14.mp3`, link2: `/img14.png` },
    { id: 14, title: "Gaali vaaluga", singer: "Anirudh", duration: "4-min 18-secs", link: `/song15.mp3`, link2: `/img15.png` },
    { id: 15, title: "Nee kannu", singer: "Javed Ali", duration: "5-min 12-secs", link: `/song16.mp3`, link2: `/img16.png` },
    { id: 16, title: "Ee Raathale", singer: "Harini Ivaturi and Yuvan Shankar Raja", duration: "3-min 58-secs", link: `/song17.mp3`, link2: `/img17.png` },
    { id: 17, title: "Naatu Naatu", singer: "Rahul Sipligunj and Kaala Bhairava", duration: "3-min 28-secs", link: `/song18.mp3`, link2: `/img18.png` },
    { id: 18, title: "Samajavaragamana", singer: "Sid sriram", duration: "3-min 39-secs", link: `/song19.mp3`, link2: `/img19.png` },
    { id: 19, title: "Ta takkara", singer: "Sanjith Hegde and Dhee", duration: "3-min 27-secs", link: `/song20.mp3`,  link2: `/img20.png` }
  ];

  const increment = () => {
    if (songId < songs.length) {
      setSongId(songId + 1);
    }
  };

  const decrement = () => {
    if (songId > 1) {
      setSongId(songId - 1);
    }
  };

  const song = songs.find((song) => song.id === songId);

  return (
    <div className="home2">
      {song ? (
        <>
          <div className="songplace">
          <h1 id="id5">Title: {song.title}</h1>
            <img src={song.link2} id="id6" />
            <h2 id="id7">Singer: {song.singer}</h2>
            <h2 id="id8">Duration: {song.duration}</h2>
            <audio controls autoPlay src={song.link} id="id9"></audio>
          </div>
          <div className="buttons">
            <button onClick={decrement} id="id11">Previous</button>
            <button onClick={increment} id="id12">Next</button>
          </div>
        </>
      ) : (
        <p>Song not found</p>
      )}
    </div>
  );
};

export default Home2;
