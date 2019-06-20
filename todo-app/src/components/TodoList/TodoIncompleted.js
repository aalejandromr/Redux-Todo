import React from "react";
import { Progress } from "semantic-ui-react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import { Button, Icon } from "semantic-ui-react";

const TodoIncompleted = props => {
  return (
    <Grid.Column textAlign="center" verticalAlign="middle">
      <H1 onClick={() => props.handleComplete(props.todo.id)}>
        {props.todo.value}
      </H1>
      <SpaceGrid
        color="red"
        compact
        onClick={() => props.handleDeletation(props.todo.id)}
      >
        <Icon name="trash" /> Delete
      </SpaceGrid>
    </Grid.Column>
  );
};

const SpaceGrid = styled(Button)`
  &&& {
    margin: 0% 0% 5% 0%;
  }
`;

const H1 = styled.h1`
  &&& {
    margin-bottom: 5%;
  }
`;

const StyledProgressBar = styled(Progress)`
  &&&&& {
    margin-bottom: 0;
  }
`;

export default TodoIncompleted;
