import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import HomeService from '../HomeSectionDesign/HomeService';
import ImageSlider from '../HomeSectionDesign/ImageSlider';
import SlideWriting from '../HomeSectionDesign/SlideWriting';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <SlideWriting></SlideWriting>
            <ImageSlider></ImageSlider>
            <h3 className='d-grid justify-content-center bg-info text-white p-2'>Our Services</h3>
            <div className='display-flex m-3'>
                {
                    services.map(service => <HomeService
                    key={service._id}
                    service={service}
                    >    
                    </HomeService>)
                }
            </div>
            <Link className='blog-container d-grid justify-content-center p-2 m-5' to='/all'>See all services</Link>  
        </div>
    );
};

export default Home;