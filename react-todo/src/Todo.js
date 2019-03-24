import React from 'react';
import Item from './Item';


class Todo extends React.Component{
  render(){
    return (
        <ul>
          {this.props.tasks.map(task => {
             return (
                <Item 
                  key={task.id} 
                  task={task} 
                  remove={this.props.remove}
                  done={this.props.done}
                  undo={this.props.undo}
                  />
              )
          })}
        </ul>
      )
  }
}

export default Todo;
