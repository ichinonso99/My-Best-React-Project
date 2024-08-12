import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProducts() {

    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const navigate = useNavigate();


    const AddProductsInfo = async () => {
        let formField = new FormData()

        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        if (image !== null) {
            formField.append('image', image)
        }

        await axios({
            method: 'post',
            url: `http://localhost:8000/Product/`,
            data: formField
        }).then((response) => {
            console.log(response.data);
            navigate('/all');
            setTimeout(() =>window.scrollTo({ top: 0, behavior: 'smooth'}), 100);
        })


    }

    return (
        <div>

            <div className='container mt-5 text-center'>
                <h1>Add Product</h1>

                <div className='form-group'>
                    <label>Select Image To Upload</label>
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
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <textarea
                                type='text'
                                className='form-control form-control-lg'
                                placeholder='Enter Product Description'
                                name='description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
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


                        <button className='btn btn-success mt-3' onClick={AddProductsInfo}>Add Product</button>


                    </div>
                </div>
            </div>
        </div>



    )
}

export default AddProducts;