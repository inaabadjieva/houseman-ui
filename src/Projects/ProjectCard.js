import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Card, Button, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import { ButtonDropdown, DropdownToggle,
  DropdownMenu, DropdownItem } from 'reactstrap';

class ProjectCard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { id, name, description, tasks } = this.props.project;

    return (
      <Card>
      
        <CardBody>
          <CardTitle>{ name }</CardTitle>
          <CardText>{ description }</CardText>
          <Link to={'/projects/' + id}>
            <Button>Open Project</Button>
          </Link>
        </CardBody>
        
        <CardFooter>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <Button color="primary">Tasks</Button>
            <DropdownToggle caret color="primary" />
            <DropdownMenu>
              {
                tasks.map((task, idx) => (
                  <div key={'div' + idx}>
                    <DropdownItem header key={task.taskStatus.name + idx}>{ task.taskStatus.name }</DropdownItem>
                    <DropdownItem key={task.name + idx}>{ task.name }</DropdownItem>
                    <DropdownItem key={'divider' + idx} divider/>
                  </div>
                ))
              }
              <Button color="success">Add new task</Button>
            </DropdownMenu>
          </ButtonDropdown>
        </CardFooter>

      </Card>
    );
  }
}

export default ProjectCard;
