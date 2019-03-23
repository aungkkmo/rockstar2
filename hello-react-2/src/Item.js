import React from 'react'

const Item = props => {
  return (
       <li>
      {props.name}
      <button onClick={()=>{
        this.props.remove(props.name)
      }}>&times;</button>
      </li>
      )
}

export default Item;
