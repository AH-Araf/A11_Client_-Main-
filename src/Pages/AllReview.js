import React from 'react';
import './All.css'

const AllReview = ({x}) => {



    const { _id, serviceName, customar,  review, yourPhotoURL } = x;
    console.log(x)
    return (
        <div className='do'>
            <div className='upperA'>
                <img className='border-0 rounded-circle'  src={yourPhotoURL} alt="" /><br />
                <h5 className='text-success'><u>Name:</u> {customar}</h5> 
            </div>
            <div className='lowerB'>
                <h6><u><b>Service Name:</b></u> <span className='text-danger'>{serviceName}</span></h6>
                <p><u><b>Review:</b></u> {review}</p>
            </div>
            
        </div>
    );
};

export default AllReview;