import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Home from './Home';
import ProjectDetails from './Projects/ProjectDetails';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/projects/:id" component={ProjectDetails}/>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
