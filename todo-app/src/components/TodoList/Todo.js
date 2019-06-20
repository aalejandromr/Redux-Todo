import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const Todo = TodoCompleted => TodoIncompleted =>
  class extends React.Component {
    render() {
      return (
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <h1> TODOs </h1>
            </Segment>
            {this.props.todosI.map(todo => (
              <TodoIncompleted
                todo={todo}
                handleComplete={this.props.handleComplete}
                handleDeletation={this.props.handleDeletation}
              />
            ))}
          </Grid.Column>
          <Grid.Column>
            {/* <Segment>1</Segment>
            <Segment>2</Segment>
            <Segment>2</Segment>
            <Segment>2</Segment>
            <Segment>2</Segment>
            <Segment>2</Segment> */}
            <Segment>
              <h1> COMPLETED </h1>
            </Segment>
            {this.props.todosC.map(todo => (
              <TodoCompleted
                todo={todo}
                handleComplete={this.props.handleComplete}
                handleDeletation={this.props.handleDeletation}
              />
            ))}
          </Grid.Column>
        </Grid.Row>
      );
    }
  };

export default Todo;
