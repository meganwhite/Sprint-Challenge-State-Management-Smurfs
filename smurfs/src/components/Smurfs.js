import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Smurf from './Smurf';

const Smurfs = props => { 
  return (
    <>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Load the Smurf Village'
        )}
      </button>
      {props.smurfs &&
        props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(Smurfs);