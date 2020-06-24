import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Badge } from 'reactstrap';
import { infoMovie, infoSerie } from '../../services/getMovies';
import api from '../../services/apiLocal';

const InfoSerie = ({ match }) => {
  const { id } = match.params;

  const [form, setForm] = useState({
    name: '',
  });
  const [sucess, setSucess] = useState(false);
  const [genreId, setGenreId] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    api.get(`/series/${id}`).then((res) => {
      setData(res.data);
      setForm(res.data)
    });
  }, []);

  const [genres, setGenres] = useState([]);
  useEffect(() => {
    api.get('/genres/').then((res) => {
      setGenres(res.data);
    });
  }, []);

  console.log(genres);

  function genreName(serieId) {
    const genreFiltered = genres.filter((genre) => genre.id === serieId);
    return genreFiltered.map((genre) => genre.name);
  }
  const masterHeader = {
    height: '50vh',
    minHeight: '500px',
    backgroundImage: `url('${data.background}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const genre_set = (event) => {
    setGenreId(event.target.value);
  };

  const setValue = (field) => (event) => {
    setForm({
      ...form,
      [field]: event.target.value,
    });
  };
  const save = () => {
    api
      .post(`/series/`, {
        ...form,
        genre_id: genreId,
      })
      .then(console.log('FUNFOU'));

    setSucess(true);
  };

  const destroy = () => {
    api
    .delete(`/series`,{
      id:data.id
    })
    .then(
      alert('Série Deletada com sucesso')
    )
  }

  console.log(data.id)
  // if (sucess) {
  //     return <Redirect to='/series'/>
  // }
  return (
    <div>
      <header style={masterHeader}>
        <div className="h-100" style={{ background: 'rgba(0,0,0,0.7)' }}>
          <div className="h-100 container">
            <div className="row h-100 align-items-center">
              <div className="col-3">
                <img
                  alt={data.name}
                  className="img-fluid img-thumbnail"
                  src={data.poster}
                  alt=""
                />
              </div>
              <div className="col-8">
                <h1 className="font-weight-light text-white">{data.name}</h1>
                <div className="lead text-white">
                  {data.status === 'ASSISTIDO' && (
                    <Badge color="success mr-2 p-2">Assistido</Badge>
                  )}
                  {data.status === 'PARA_ASSISTIR' && (
                    <Badge color="warning mr-2 p-2"> Para assistir</Badge>
                  )}

                  <Badge color="danger p-2">{genreName(data.genre_id)}</Badge>

                  <div className="mt-3">{data.overview}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
  
      </div>
        <div className="container">
        <h1> Editar novo Filme ou Série</h1>
          

          <form>
            <div className="form-group">
              <label htmlFor="name"> Gênero</label>
              <select
                onChange={genre_set}
                defaultValue={data.genre_id}
                className="form-control"
              >
                <option value=""> Selecione um gênero...</option>
                {genres.map((genre) => (
                  <option key={genre.id} selected={genre.id === data.genre_id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="item">
                  Status:
            </div>   
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="status"
                id="assistido"
                value="ASSISTIDO"
                checked={form.status === 'ASSISTIDO'}
                onChange={setValue('status')}
              />
              <label htmlFor="assistido" className="form-check-label">
                {' '}
                Assistido
              </label>
            </div>
               
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="status"
                id="paraAssistir"
                value="PARA_ASSISTIR"
                checked={form.status === 'PARA_ASSISTIR'}
                onChange={setValue('status')}
              />
              <label htmlFor="paraAssistir" className="form-check-label">
                {' '}
                Para assistir
              </label>
            </div>

            <button
              onClick={save}
              type="submit"
              className="btn btn-primary my-3"
            >
              {' '}
              Editar{' '}
            </button>
            <button
              onClick={destroy}
              type="submit"
              className="btn btn-primary my-3"
            >
              {' '}
              Deletar{' '}
            </button>
          </form>
        </div>
    </div>
  );
};
export default InfoSerie;
