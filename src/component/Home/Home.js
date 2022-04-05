
import { Form, Table } from 'react-bootstrap';
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from 'react';

const Home = () => {


    const [userinfo, setUserInfo] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/userlist`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    })







    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            checkbox: false,

        }
    });






    const onSubmit = data => {

        fetch('http://localhost:5000/userlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We recived your data.');

                }

            })

    };
    return (
        <div className="mx-4">
            <div className="row">
                <div className="col-md-8">
                    <div className=' w-75 h-75 mx-auto my-5 text-start' >
                        <h3 className='fs-5 text-start lh-base  text-success'>Please enter your name and pick the Sectors you are currently involved in.</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                {...register("name")}
                            />

                            <Form.Label className='' htmlFor="inputPassword5">Sectors:</Form.Label>

                            <select
                                required
                                {...register("mulisectors")} class="form-select" size="5" aria-label="size 4 select example">
                                <option value="Construction">    Construction materials</option>
                                <option value="Fish">        Fish & fish products </option>
                                <option value="Food">    Food and Beverage</option>

                                <option value="Air">   Air</option>
                                <option value="Rails">     Rails </option>
                                <option value="Road">  Road</option>
                                <option value="Water">  Water</option>
                            </select>

                            <Controller
                                required
                                name="checkbox"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <input
                                    required
                                    {...field} type="checkbox" />
                                }
                            />
                            <Form.Label htmlFor="inputPassword5" className='my-4 mx-3'>        Agree to terms</Form.Label> <br />
                            <input className='btn btn-success m-0 px-5' type="submit" name="" id="" />
                        </form>
                    </div>
                </div>
                <div className="col-md-4 my-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Cheack Box</th>
                                <th>Sector</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userinfo.map(user =>
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>Agree</td>
                                        <td>{user.mulisectors}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Home;