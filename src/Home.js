import React, { Component } from 'react';

import { Container } from 'reactstrap';

import { projects } from './samples/projects';
import ProjectsList from './Projects/ProjectsList';

class Home extends Component {

  constructor() {
    super();

    this.state = {
      projects: projects
    };
  }

  render() {
    return (
      <Container>
        <ProjectsList projects={this.state.projects} />
      </Container>
    );
  }

}

export default Home;
