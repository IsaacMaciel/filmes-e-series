import React, { useState, useEffect } from 'react';
import api from '../../services/apiLocal';
import { Link } from 'react-router-dom';

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



const GenresInfo = ({ match }) => {
    const { id } = match.params;

const [data,setData] = useState([]);
useEffect( () => {
    api.get(`/genres/${id}`)
    .then( (res) => {
        setData(res.data.genre_for_serie)
    })
})

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
)

}

export default GenresInfo