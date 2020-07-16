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

  async function filterGenre(id) {
    if (id) {
      api.get(`/genres/${id}`).then((res) => {
        setData(res.data.genre_for_serie);
      });
    } else {
      api.get('/series').then((res) => {
        setData(res.data);
      });
    }
  }

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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#">
                Features
              </a>
              <a class="nav-item nav-link" href="#">
                Pricing
              </a>
              <a
                class="nav-item nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </div>
          </div>
        </nav>
        <div className="menu">
          <button
            type="button"
            onClick={() => filterGenre('')}
            class="btn btn-secondary btn-sm mr-2 p-2"
          >
            {' '}
            Todos{' '}
          </button>
          {genres.map((genre) => (
            <button
              type="button"
              onClick={() => filterGenre(genre.id)}
              class="btn btn-secondary  btn-sm mr-2 p-2"
            >
              {genre.name}
            </button>
          ))}
        </div>

        <Link to="/series/add">
          {' '}
          <button className="btn-add"> Adicionar Série/Filme</button>{' '}
        </Link>
      </div>

      <div className="cards-container">
        <div className="container">
          <div className="row">
            {data.map((serie) => (
              <Card
                className="col-12 col-sm-6 col-xl-3 col-md-4 p-0"
                style={{ maxWidth: '18rem' }}
              >
                <CardImg
                  img-thumbnail
                  style={{ maxWidth: '18rem' }}
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
                    <Button
                      style={{ backgroundColor: '#36393f', width: '100%' }}
                    >
                      {' '}
                      Editar
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexSerie;
