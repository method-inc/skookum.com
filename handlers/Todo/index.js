import React, {Component} from 'react';
import Hero from 'Hero';

class Todo extends Component {
  render(): ReactElement {
    return (
      <div className="Todo">
        <Hero title="Todo" />
      </div>
    );
  }
}

Todo.propTypes = {};

Todo.displayName = 'Todo';

export default Todo;

