import React from 'react';

const AddServices = () => {

    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const ServiceName = form.ServiceName.value;
        const ImageURL = form.ImageURL.value;
        const Price = form.Price.value;
        const Description = form.Description.value;

        const order = { 
            ServiceName,
            ImageURL,
            Price,
            Description,
        }
        // console.log(order)

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Service Added Successfully')
                form.reset();
                
            }
        })
        .catch(er => console.error(er));


    }

    return (
        <div>
        <form onSubmit={handleAddService}>
            <div>
                <u><h2 className='bg-success d-grid justify-content-center p-5 m-5'>Add Your Services Here</h2></u>
            </div>
            <div className='service-container'>
                <input name="ServiceName" type="text" placeholder="Service Name" className="" required />
                <input name="ImageURL" type="text" placeholder="Image URL" className="" required />
                <input name="Price" type="number" placeholder="$Price (Number)" className="" required />
                <input name="Description" type="text" placeholder="Description" className="" required />
            </div>
            <input className='blog-container service-container' type="submit" value="Add Your Service" />
        </form>
        </div>
    );
};

export default AddServices;