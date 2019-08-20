import React from 'react';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';

const Smurf = props => {
  return (
    <div className='smurf'>
      <h4>{props.smurf.name}</h4>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <button onClick={()=>{
          console.log(props.smurf.id)
          props.deleteSmurf(props.smurf)
      }}>Delete</button>
    </div>
  );
};


export default connect(
    null,
    { deleteSmurf }
  )(Smurf);

