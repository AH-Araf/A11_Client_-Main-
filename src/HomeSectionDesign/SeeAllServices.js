import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import All from './All';


const SeeAllServices = () => {
    const servicess = useLoaderData();
    return (
        <div>
            <h3 className='d-grid justify-content-center bg-info text-white p-2'>Our total services: {servicess.length}</h3>
            <div className='display-flex m-3'>
                {
                    servicess.map(service => <All
                    key={service._id}
                    service={service}
                    >    
                    </All>)
                }
            </div>
            {/* <Link className='blog-container d-grid justify-content-center p-2 m-5' to='/all'>See all services</Link>   */}
        </div>
    );
};
export default SeeAllServices;