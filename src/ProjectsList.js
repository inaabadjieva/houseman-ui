import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

import ProjectCard from './ProjectCard';

class ProjectsList extends Component {
  render() {
    return (
      <div>
        <Row>
          <h2>Projects</h2>
        </Row>
        <Row>
          {
            this.props.projects
              .map((project, idx) => (
                <Col key={'projectCol' + idx} sm="4">
                  <ProjectCard key={'projectCard' + idx} project={project} />
                </Col>
              ))
          }
        </Row>
      </div>
    );
  }
}

export default ProjectsList;

