import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,trending,action,comedy,romance,horror,documentaries} from "../src/urls"

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={trending} title="Trending" isSmall/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall/>
      <RowPost url={romance} title="Romance" isSmall/>
      <RowPost url={horror} title="Horror" isSmall/>
      <RowPost url={documentaries} title="Documentaries" isSmall/>
    </div>
  );
}

export default App;
