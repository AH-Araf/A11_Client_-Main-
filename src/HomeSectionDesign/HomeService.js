import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const HomeService = ({service}) => {
    // console.log(service);
    const {ServiceName, ImageURL, Price, Description, _id } = service;
    return (
        <div>   
            <h4>{ServiceName}</h4>
            {/* <img src={ImageURL} alt="" /> */}
            <PhotoProvider>
                    <div className="foo">
                        <PhotoView src={ImageURL}>
                            <img  src={ImageURL} alt="" />
                        </PhotoView>   
                    </div>
                </PhotoProvider>
            <h5>Price: ${Price}</h5>
            {/* <p>Description: {Description}</p> */}
            {
                        Description.length > 100 ?
                            <>{Description.slice(0, 100) + '...'} <Link to={`/services/${_id}`}>View Details</Link> </>
                            :
                            Description
                    }
        </div>
    );
};

export default HomeService;