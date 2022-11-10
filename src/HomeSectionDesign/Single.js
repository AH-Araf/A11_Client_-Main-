import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import AllReview from '../Pages/AllReview';


const Single = () => {
    //Service Information
    const a = useLoaderData();
    const {ServiceName, ImageURL, Price, Description, _id } = a;
    // console.log(a);

    //Auth User
    const { user } = useContext(AuthContext);


    const [review, setreview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviewss?service=${_id}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [_id])




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
            </div> 

            

            <div>
            {
                            review.map(x => <AllReview
                                key={x._id}
                                x={x}
                            ></AllReview>)
                        }
            </div>

            <div className='d-grid justify-content-center'>
                <Link className='blog-container' to={`/reviewPrivate/${_id}`}>Click Here To Add Your Review</Link>
            </div>
        </div>
    );
};

export default Single;