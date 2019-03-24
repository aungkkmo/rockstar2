import React from 'react';
import Todo from './Todo';
import Done from './Done';
import Header from './Header';
import Item from './Item';
import Add from './Add';

class App extends React.Component {
  state = {
    tasks : [
      {id : 1, subject : "Milk", status : 0},
      {id : 2, subject : "Bread", status : 1},
      {id : 3, subject : "Apple", status : 0},
      {id : 4, subject : "Butter", status : 1},
    ]
  }
  add = subject => {
    let newTask= {id: ++this.autoid,subject,status : 0};

    this.setState({
      tasks : [
          ...this.state.tasks,
          newTask
      ]
    });
  }

  remove = id => {
    this.setState({
      tasks : this.state.tasks.filter(item => item.id !== id)
    });
  }

  done = id => {
    this.setState({
      tasks : this.state.tasks.map(item => {
        if(item.id === id ) item.status =1;
        return item;
      })
    })
  }

  undo = id => {
    this.setState({
      tasks : this.state.tasks.map(item => {
        if(item.id === id) item.status =0;
        return item;
      })
    })
  }

  clear = id => {
    this.setState({
      tasks: this.state.tasks.filter(item => item.status === 0)
    })
  }
  render() {
    return (
      <div>
        <Header count={this.state.tasks.filter(task => {
          return task.status === 0;
        }).length} />
          <Todo
              done={ this.done} 
              undo = {this.undo}
              remove={this.remove} 
              tasks={this.state.tasks.filter(task => {
                return task.status === 0;
              })}
              />
          <hr/>
          <Done 
              done={ this.done} 
              undo = {this.undo}
              remove={this.remove}  
              tasks={this.state.tasks.filter(task => {
                return task.status === 1;
            })}
            />
          <Add add={this.add}/> 

     
      </div>
    );
  }
}

export default App;
