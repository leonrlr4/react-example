import React, { Component } from 'react'

const Ninjas = ({ninjas, deleteNinja})=> {
    // console.log(this.props);
    const ninjasList = ninjas.map(ninja=>{
      return ninja.age > 20 ? (
        <div className="ninja" key={ninja.id}>
          <div>name: {ninja.name}</div>
          <div>age: {ninja.age}</div>
          <div>belt: {ninja.belt}</div>
          <button onClick={() => {deleteNinja(ninja.id)}}>delete ninja</button>
        </div>
      ) : (
        <div className="ninja" key={ninja.id}>
          <br/>
          <div>{ninja.age} is under 20</div>
          <button onClick={()=>{deleteNinja(ninja.id)}}>delete ninja</button>
          <br/>
        </div>
        )
    })
    return (
      <div className="ninja-list">
        {ninjasList}
      </div>
    )

}
export default  Ninjas