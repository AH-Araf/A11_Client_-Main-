import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const ReviewPrivateRoute = () => {

    const a = useLoaderData();
    const {ServiceName, ImageURL, Price, Description, _id } = a;


    //Auth User
    const { user } = useContext(AuthContext);



    //Adding Review
    const handleAddReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.fName.value} ${form.lName.value}`
        const email = form.email.value;
        const review = form.review.value;
        const yourPhotoURL = form.yourImgURL.value;
        

        const rev = {
            service: _id,
            serviceName: ServiceName,
            customar: name,
            email,
            review,
            yourPhotoURL
        }


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rev)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review Added Successfully')
                form.reset();
            }
        })
        .catch(er => console.error(er));



    }





    return (
        <div>
            <h3 className='d-grid justify-content-center m-5 bg-info'>Give Review For: {ServiceName}</h3>

            <div className='Review'>
               
                <form onSubmit={handleAddReview}>
                    <div>
                        <u><h4 className=' d-grid justify-content-center p-3'>Add Your Review Here</h4></u>
                    </div>
                    <div className='service-container'>
                        <input name="fName" type="text" placeholder="First Name" className="" required />
                        <input name="lName" type="text" placeholder="Last Name" className="" required />
                        <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="" required readOnly />
                        <input name="yourImgURL" type="text" placeholder="Your Photo URL" defaultValue={user?.photoURL} className="" required readOnly />
                        <input name="review" type="text" placeholder="Type Review" className="" required />
                    </div>
                    <input className='blog-container service-container mb-5' type="submit" value="Add Review" />
                </form>
            </div> 
        </div>
    );
};

export default ReviewPrivateRoute;