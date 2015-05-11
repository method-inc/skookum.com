import React from 'react';
import {Resolver} from 'react-resolver';

class Todo extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Todo">
        Todo
      </div>
    );
  }
}

Todo.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Todo.displayName = 'Todo';

export default Todo;

