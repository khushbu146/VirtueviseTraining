import React from 'react';
import './Home.css';
import Card from "./components/Card";
const Home = () => {
    return(
        <div className='background  divide-x-4 
        divide-green-500'>
            <div>
                <div className='container'>
                    <Card/>
                </div>
            </div>            
        </div>
        
    );
}
export default Home;