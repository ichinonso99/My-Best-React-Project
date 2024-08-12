import React, { useEffect, useState } from 'react'

function CheckOut() {

    // const [subTotal, setSubTotal] useState("");
    // const countobjs = useSelector((store) => store.cartReducer.products);
    // const cartMap = countobjs.products;
    // const dispatch useDispatch();
    // useEffect(() => {
    //     let temp = 0;
    //     cartMap.forEach((item) => {
    //         temp = temp + price * item.quantity;
    //     });
    //     setSubTotal(temp);
    // }, [cartMap]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');



    return (
        <div>

            <div className='container mt-5'>
                <p style={{ background: 'green', textAlign: 'center', color: 'white', fontSize: "24px" }}>Please Login Before Checkout</p>
                <div className='row justify-content-center'>
                    <div className='col-md-5 shadow p-3 mb-5 bg-body rounded mt-3'>
                        <h1>Checkout</h1>
                        <hr></hr>
                        <div className='mb-3'>
                            <h3 style={{ color: 'blue' }}>Item Total Amount:    $0  </h3>
                            <hr></hr>
                            <p>*Item will be delivered in 3-5 days.</p>
                            <p>*Tax and other charges are included ?.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-5 shadow p-3 mb-5 bg-body rounded mt-3'>
                        <form>
                            <div className='mb-3'>
                                <h1 style={{ color: 'blue' }}>Basic Information</h1>
                                <hr></hr>
                                <div className='mb-3'>
                                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name"
                                        value={name} onChange={(e) => setName(e.target.value)}>
                                    </input>
                                </div>
                                <div className='mb-3'>
                                    <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Phone Number"
                                        value={number} onChange={(e) => setNumber(e.target.value)}>
                                    </input>
                                </div>
                                <div className='mb-3'>
                                    <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address"
                                        value={email} onChange={(e) => setEmail(e.target.value)}>
                                    </input>
                                </div>
                                <div className='mb-3'>
                                    <label for="exampleFormControlInput1" classn="form-label">Gender</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Gender"
                                        value={gender} onChange={(e) => setGender(e.target.value)}>
                                    </input>
                                </div>
                                <div className='mb-3'>
                                    <label for="exampleFormControlInput1" classn="form-label">Birth date</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Birth date"
                                        value={date} onChange={(e) => setDate(e.target.value)}>
                                    </input>
                                </div>
                                <div className='mb-3'>
                                    <label for="exampleFormControlInput1" class="form-label">Pin-Code(Zip-code)</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Pin-code"
                                        value={number} onChange={(e) => setName(e.target.value)}>
                                    </input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;