import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, completeTodo, deleteTodo } from "../../actions";
import { Grid, Segment } from "semantic-ui-react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Todo from "./Todo";
import TodoCompleted from "./TodoCompleted";
import TodoIncompleted from "./TodoIncompleted";

const ComponentTodo = Todo(TodoCompleted)(TodoIncompleted);

const TodoList = props => {
  const [taskName, setTaskName] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(true);

  const addTask = e => {
    e.preventDefault();
    if (taskName !== "") {
      props.addTodo({ value: taskName, completed: taskCompleted });
      setTaskName("");
    }
  };

  const toggleCheckBox = () => {
    setTaskCompleted(!taskCompleted);
  };

  return (
    <>
      <Form onSubmit={addTask}>
        <Grid columns={6} centered>
          <Grid.Column>
            <Form.Field>
              <label>Task Name</label>
              <input
                placeholder="Task Name"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Form.Field>
              <Checkbox
                label="Completed?"
                checked={taskCompleted}
                onChange={toggleCheckBox}
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Button type="submit">Submit</Button>
          </Grid.Column>
        </Grid>
      </Form>
      <Grid columns={2} divided>
        {props.todos.map((todo, key) => (
          <ComponentTodo
            key={key}
            todo={todo}
            id={key}
            handleComplete={props.completeTodo}
            handleDeletation={props.deleteTodo}
          />
        ))}
      </Grid>
    </>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, completeTodo, deleteTodo }
)(TodoList);
