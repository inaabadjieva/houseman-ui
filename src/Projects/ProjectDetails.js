import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import { projects } from '../samples/projects';
import './ProjectDetails.css';

class ProjectDetails extends Component {

  constructor({ match }) {
    super();

    this.renderTasksOn = this.renderTasksOn.bind(this);

    const projectId = parseInt(match.params.id, 10);
    this.state = {
      project: projects.find(p => p.id === projectId)
    };
  }

  renderTasksOn(status) {
    const tasks = this.state.project.tasks.filter(_ => _.taskStatus.name === status);
    return (
      <ul>
        { tasks.map((task, idx) => <li key={status + idx}>{ task.name }</li>) }
      </ul>
    );
  }

  render() {
    const { project } = this.state;
    return (
      <Container>
        <Row>
          <h2>{ project.name }</h2>
        </Row>
        <Row>
          <p>{ project.description }</p>
        </Row>
        <Row>
          <Col className="col-wrapper">
            <h5 className="col-title">To Do</h5>
            { this.renderTasksOn('To Do') }
          </Col>
          <Col className="col-wrapper" md={{ offset: 1 }}>
            <h5 className="col-title">In Progress</h5>
            { this.renderTasksOn('In Progress') }
          </Col>
          <Col className="col-wrapper" md={{ offset: 1 }}>
            <h5 className="col-title">Done</h5>
            { this.renderTasksOn('Done') }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectDetails;

