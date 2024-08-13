import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'



function AddContact() {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    function handleForm(values) {
        console.log(values);

        const url = "http://localhost:2000/contactform";


        fetch(url, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify(values),
        }).then(res => res.json())
            .then(res => {
                if (res.error === true) {
                    swal.fire({
                        icon: "error",
                        title: res.message,
                    });
                } else {
                    reset()
                    swal.fire({
                        icon: "success",
                        title: res.message,
                        timer: 1500
                    })
                }

            }).catch((e) => {
            console.log(e);
        });
    }

    // useEffect(() => {
    //
    //     console.log(token);
    //
    //     if (!token) {
    //         navigate("/login")
    //
    //     }
    // }, [])
    return(
        <>
            <div className="container">
                <h1> Add Contact </h1>
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

                    <button className={"btn btn-primary"}>Submit</button>
                </form>
            </div>

        </>
    )
}

export default AddContact;