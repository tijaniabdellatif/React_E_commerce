
import React from 'react';
import styled from 'styled-components';

const Testing = () => {

    return (<Wrapper>
         <h1>Testing</h1>
         <p>Introduction</p>
         <button>Click me</button>
     </Wrapper>);
}


const Wrapper = styled.section`

h1{

    color:red;
}

`;

export default Testing;