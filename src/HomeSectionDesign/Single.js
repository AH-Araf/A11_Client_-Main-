import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const Single = () => {
    //Service Information
    const a = useLoaderData();
    const {ServiceName, ImageURL, Price, Description, _id } = a;
    // console.log(a);

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
        <div className='single-course-container review-detail'>
            <h4>{ServiceName}</h4>
            <PhotoProvider>
                    <div className="foo">
                        <PhotoView src={ImageURL}>
                            <img  src={ImageURL} alt="" />
                        </PhotoView>   
                    </div>
                </PhotoProvider>
            <h5>Price: ${Price}</h5>
            <p className='mb-5'>Description: {Description}</p>
            


            <div className='Review'>
                <h2 className='bg-success p-3  d-grid justify-content-center'>REVIEW SECTION</h2>


                


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

export default Single;