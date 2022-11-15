import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';


const MyReview = () => {

    const { user } = useContext(AuthContext);
    const [review, setreview] = useState([])

    useEffect(() => {
        fetch(`https://b-assignment-11-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [user?.email])


    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            fetch(`https://b-assignment-11-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remaining = review.filter(odr => odr._id !== id);
                    setreview(remaining);
                }
            })
        }
    }
    const handleStatusUpdate = id => {
        fetch(`https://b-assignment-11-server.vercel.app/reviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = review.filter(odr => odr._id !== id);
                const approving = review.find(odr => odr._id === id);
                approving.status = 'Approved'
                const newOrders = [approving, ...remaining];
                setreview(newOrders);
            }
        })
    }
    


    

    return (
        <div>
            
                {
                review.length===0?
                    <>
                        <h2 className='bg-danger d-grid justify-content-center p-5'>No reviews were added</h2>
                    </>
                    :
                    <>
                        <h4 className='d-grid p-2 bg-success justify-content-center m-5'>My Total Reviews: {review.length}</h4>
                    </>
                }
            
            {
                            review.map(x => <ReviewRow
                                key={x._id}
                                x={x}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></ReviewRow>)
                        }
        </div>
    );
};

export default MyReview;