import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'


const Forms3 = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function handleForm(data) {
        console.log(data);
        const { password, confirmPassword } = data;

        if (password !== confirmPassword) {
            swal.fire({
                icon: "error",
                title: "Passwords do not match",
            });
            return;
        }

        const url = "http://localhost:2000/form";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => {
                if (res.error === true) {
                    swal.fire({
                        icon: "error",
                        title: res.message,
                    });
                } else {
                    document.getElementById('form').reset()
                    swal.fire({
                        icon: "success",
                        title: res.message,
                        timer: 1500
                    }).then(()=>{
                        navigate('/login')
                    })
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <>
            <div className="container">
                <h1> User Sign Up </h1>
            </div>

            <hr/>
            <div className="alert alert-primary">
                <form onSubmit={handleSubmit(handleForm)} id={'form'}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="">First Name</label>
                            <input {...register('firstname', {required: 'First Name is required'})} type="text"
                                   className={"form-control"}/>
                            <ErrorMessage
                                errors={errors}
                                name="firstname"
                                render={({message}) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="">Last Name</label>
                            <input {...register('lastname', {required: 'First Name is required'})} type="text"
                                   className={"form-control"}/>
                            <ErrorMessage
                                errors={errors}
                                name="lastname"
                                render={({message}) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="">Email</label>
                            <input {...register('email', {required: 'This field is required'})} type="email"
                                   className={"form-control"}/>
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({message}) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="">Mobile</label>
                            <input {...register('mobile', {required: 'This field is required'})} type="tel"
                                   className={"form-control"}/>
                            <ErrorMessage
                                errors={errors}
                                name="mobile"
                                render={({message}) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="">Password</label>
                            <input {...register('password', {required: 'This field is required'})} type="password"
                                   className={"form-control"}/>
                            <ErrorMessage
                                errors={errors}
                                name="password"
                                render={({message}) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="">Confirm Password</label>
                            <input {...register('confirmPassword', {required: 'This field is required'})} type="password"
                                   className={"form-control"}/>
                            <ErrorMessage
                                errors={errors}
                                name="confirmPassword"
                                render={({message}) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="">Gender</label>
                            <select {...register("gender", {required: 'Gender is required'})}
                                    className={"form-control"}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                            <ErrorMessage
                                errors={errors}
                                name="gender"
                                render={({message}) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="">Street Name</label>
                            <input {...register('streetName', {required: 'Street Name is required'})} type="text"
                                   className={"form-control"}/>
                            <ErrorMessage
                                errors={errors}
                                name="streetName"
                                render={({message}) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="">City</label>
                            <input {...register('city', {required: 'City is required'})} type="text"
                                   className={"form-control"}/>
                            <ErrorMessage
                                errors={errors}
                                name="city"
                                render={({message}) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="">State</label>
                            <input {...register('state', {required: 'State is required'})} type="text"
                                   className={"form-control"}/>
                            <ErrorMessage
                                errors={errors}
                                name="state"
                                render={({message}) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="">Pin Code</label>
                            <input {...register('pinCode', {required: 'Pin Code is required'})} type="number"
                                   className={"form-control"}/>
                            <ErrorMessage
                                errors={errors}
                                name="pinCode"
                                render={({message}) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>
                    </div>

                    <button className={"btn btn-primary"}>Submit</button>
                </form>
            </div>
        </>
    );
};

export default Forms3;