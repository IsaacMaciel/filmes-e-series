import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
} from 'reactstrap';

import { Link } from 'react-router-dom';
import api from '../../services/apiLocal';
import './styles.css';

const IndexSerie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get('/series').then((res) => {
      setData(res.data);
    });
  }, []);

  const [genres, setGenres] = useState([]);
  useEffect(() => {
    api.get('/genres/').then((res) => {
      setGenres(res.data);
    });
  }, []);

  function genreName(serieId) {
    const genreFiltered = genres.filter((genre) => genre.id === serieId);
    return genreFiltered.map((genre) => genre.name);
  }

  return (
    <div className="container">
      <div className="header">
        <h3>Gêneros</h3>
        <Link to="/series/add">
          {' '}
          <button className="btn-add"> Adicionar Série/Filme</button>{' '}
        </Link>
      </div>

      <div className="cards-container">
        {data.map((serie) => (
          <Card>
            <CardImg
              img-thumbnail
              height="319px"
              src={serie.poster}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{serie.name}</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Gênero: {genreName(serie.genre_id)}
                {serie.status === 'ASSISTIDO' && (
                  <Badge color="success mr-2 p-2">Assistido</Badge>
                )}
                {serie.status === 'PARA_ASSISTIR' && (
                  <Badge color="warning mr-2 p-2"> Para assistir</Badge>
                )}
              </CardText>
              <Link to={`/series/${serie.id}`}>
                <Button style={{ backgroundColor: '#f0f' }}> Editar</Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IndexSerie;
