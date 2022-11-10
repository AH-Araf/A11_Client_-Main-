import React from 'react';
import w from '././../assets/images/w.jpg';
import x from '././../assets/images/x.jpg';
import y from '././../assets/images/y.jpg';
import z from '././../assets/images/z.jpg';

const HomeSection1 = () => {
    return (
        <div>
            <h2 className='mb-3 bg-info p-2 rounded'>Some of Our Click:</h2>

            <div className='HomeSection01'>
                <img className="d-block" src={w} alt="First slide"/>
                <img className="d-block" src={x} alt="First slide"/>
                <img className="d-block" src={y} alt="First slide"/>
                <img className="d-block" src={z} alt="First slide"/>
                
            </div>
        </div>
    );
};

export default HomeSection1;