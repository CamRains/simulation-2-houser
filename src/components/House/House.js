import React from 'react' 

export default function House (props) {
  const {id, name, address, city, state, zipcode} = props.house
// class House extends Component 
  return(
      <div className="indivdual-house-card" >
        <div className="house-image">
        <img alt="house goes here" />
        </div>

        <div className="house-info">
        <p>Property Name:{name}</p>
        <p>Address:{address}</p>
        <p>City:{city}</p>
        <p>State:{state}</p>
        <p>Zip:{zipcode}</p>
        </div>

        <button className="house-card-delete-button" onClick={()=> props.deleteHouse(id)} >X</button>
        
      
      
      
      
      
      </div>
  )
}