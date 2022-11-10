import React from 'react';

const AllReview = ({x}) => {

    

    const { _id, serviceName, customar, email, review, yourPhotoURL, status } = x;
    console.log(x)
    return (
        <div className='review-container'>
            <div className='upper'>
                <img className='w-25 h-50 border-0 rounded-circle'  src={yourPhotoURL} alt="" /><br />
                <h5 className='text-success'>{customar}</h5> 
            </div>
            <div className='lower'>
                <h6><u><b>Service Name:</b></u> <span className='text-danger'>{serviceName}</span></h6>
                <p><u><b>Review:</b></u> {review}</p>
            </div>
            
        </div>
    );
};

export default AllReview;