import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faVideo, 
  faEdit, 
  faTrash,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

import AppNavbar from './Components/Navbar';

import Home from './Components/Home';
import Genres, { AddGenres, EditGenres } from './Components/Genres';
import Series, { AddSeries, EditSeries } from './Components/Series';

library.add(faVideo, faEdit, faTrash, faPlus);

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Switch>
          <Route path={["/", "/home"]} exact component={Home} />
          <Route path='/genres' exact component={Genres} />
          <Route path='/genres/add' exact component={AddGenres} />
          <Route path='/genres/edit/:id' exact component={EditGenres} />
          <Route path='/series' exact component={Series} />
          <Route path='/series/add' exact component={AddSeries} />
          <Route path='/series/edit/:id' exact component={EditSeries} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
