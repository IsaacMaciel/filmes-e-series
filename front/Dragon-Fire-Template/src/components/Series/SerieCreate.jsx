import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { searchMovie, searchSerie } from '../../services/getMovies';
import {Button} from 'reactstrap'

import './styles.css';

const SerieCreate = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  async function getFilms() {
    const results = await searchMovie(search);
    setData(results);
  }
  async function getSeries() {
    const results = await searchSerie(search);
    setData(results);
  }
  function buttonClick(title) {
    console.log(title);
  }

  return (
    <div className="container">
      <h1>Hello</h1>

      <div className="container-search">
        <input
          type="text"
          name=""
          placeholder="Informe o nome da Série ou filme"
          id=""
          onChange={handleSearch}
        />
        <div className="search-options m-1">
        <Button onClick={getFilms}  style={{ backgroundColor: '#36393f',width: '100%' }}> Pesquisar por Filmes</Button>
        <Button onClick={getSeries} style={{ backgroundColor: '#36393f',width: '100%' }}> Pesquisar por Serie</Button>

        </div>
      </div>

      <div className="cards-container">
        {data.map((card) => (
          <div className="card-container">
            <div className="card-title">
              {card.title ? <h5> {card.title}</h5> : <h5>Sem título</h5>}
            </div>
            <img className="card-img-top" src={card.poster} alt={card.title} />
            <div className="card-footer">
              <Link to={`/series/${card.id}/${card.type}`}>
                <button className="button-look">ACESSAR</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SerieCreate;
