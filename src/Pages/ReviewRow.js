import React from 'react';

const ReviewRow = ({x, handleDelete, handleStatusUpdate}) => {
    const { _id, serviceName, customar, email, review, yourPhotoURL, status } = x;

    return (
        <div className='review-container'>
                    <button onClick={() => handleDelete(_id)} className='blog-container mt-5 mb-5'>❌Delete</button>
                    <button 
                        onClick={() => handleStatusUpdate(_id)}
                        className="blog-container mt-5 mb-5 btn-xs me-5">{status ? status : 'Pending'}
                    </button>

            <div className='upper'>
                <img className='review-img' src={yourPhotoURL} alt="" /><br />
                <h5>{customar}</h5> 
            </div>
            <div className='lower'>
                <h5>Service Name: {serviceName}</h5>
                <p>Review: {review}</p>
            </div>
            
        </div>
    );
};

export default ReviewRow;