import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Genres from './components/Genres/Genres';
import SerieCreate from './components/Series/SerieCreate';
import InfoSerie from './components/Series/InfoSerie';
import IndexSerie from './components/Series/indexSeries';
import EditSerie from './components/Series/EditSerie';
import GenresAdd from './components/Genres/GenresAdd'
import GenresInfo from './components/Genres/GenresInfo'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/generos" exact component={Genres} />
        <Route path="/generos/:id" exact component={GenresInfo} />
        <Route path="/generos/add" exact component={GenresAdd} />
        <Route path="/series" exact component={IndexSerie} />
        <Route path="/series/add" exact component={SerieCreate} />
        <Route path="/series/:id" exact component={EditSerie} />
        <Route path="/series/:id/:type" exact component={InfoSerie} />
      </Switch>
    </Router>
  );
}

export default App;
