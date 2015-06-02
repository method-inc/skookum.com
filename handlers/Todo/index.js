import React from 'react';

class Todo extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Todo">
        Todo
      </div>
    );
  }
}

Todo.propTypes = {};

Todo.displayName = 'Todo';

export default Todo;

