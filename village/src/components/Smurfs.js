import React, { Component } from 'react';
import styled from 'styled-components'

import Smurf from './Smurf';




const UlSmurfList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
class Smurfs extends Component {
  render() {
    return (
      <div className='Smurfs'>
        <UlSmurfList>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </UlSmurfList>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;