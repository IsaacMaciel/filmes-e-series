import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import api from '../../services/apiLocal';

const Genres = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get('/genres/').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h3>Gêneros</h3>
        <Link to="/generos/add">
          {' '}
          <button className="btn-add"> Adicionar Gênero</button>{' '}
        </Link>
      </div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Gênero</th>
          </tr>
        </thead>
        <tbody>
          {data.map((genre) => (
            <tr>
              <th scope="row">{genre.id}</th>
              <td>{genre.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Genres;
