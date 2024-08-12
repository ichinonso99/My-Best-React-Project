import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {

    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    
    const navigate = useNavigate();
    const { productId } = useParams();

    const loadProducts = async () => {
        const { data } = await axios.get(`http://localhost:8000/Product/${productId}/`);
        console.log(data);
        setImage(data.image)
        setName(data.name)
        setPrice(data.price)
        setDescription(data.description)
        setCategory(data.category)
    }

    useEffect(() => {
        loadProducts();
    }, [])

    // Update Product
    const updateProductsInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        if (image !== null) {
            formField.append('image', image)
        }

        await axios({
            method: 'PUT',
            url: `http://localhost:8000/Product/${productId}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            navigate('/all');
            setTimeout(() =>window.scrollTo({ top: 0, behavior: 'smooth'}), 100);
        })

    } 


  return (
    <div className='container mt-3 text-center'>
        <h1>Edit Page</h1>
        <div className='row'>
        <div className='form-group'>

        <div className='form-group'>

                    <img src={image} height="300" width="150" />

                    <label>Select Image To Edit</label>
                    <input
                        type='file'
                        className='form-control form-control-lg'
                        name='image'
                        onChange={(e) => setImage(e.target.files[0])} />  

                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Enter Product Name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control form-control-lg'
                                placeholder='Enter Product Price'
                                name='price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}/>
                        </div>

                        <div className='form-group'>
                            <textarea
                                type='text'
                                className='form-control form-control-lg'
                                placeholder='Enter Product Description'
                                name='description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}/>
                        </div>

                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control form-control-lg'
                                placeholder='Enter Product Category'
                                name='category'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)} />
                        </div>


                        <button className='btn btn-success mt-3' onClick={updateProductsInfo}>Edit Product</button>


                    </div>
                </div>
                </div>
    </div>
    </div>
  )
}

export default EditProduct