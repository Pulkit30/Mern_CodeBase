import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    let todos=this.props.todos
    return (
      <div className="list">
        {
        todos.map((todo,index)=>{
          return (
            <Todo key={index} todo={todo} onRemove={this.props.onRemove} />
          )
        })
        }
        {/* Render the todo here from the props*/}
      </div>
    );
     
  }
}
