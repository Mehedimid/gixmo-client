import React from 'react';
import Header from '../Components/Header';
import Body from '../Components/Body';


function Home(props) {
    return (
        <div>
            <Header></Header>
            
           <div className='my-20'>
           <Body></Body>
           </div>

        </div>
    );
}

export default Home;