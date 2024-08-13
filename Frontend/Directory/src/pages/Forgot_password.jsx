import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import swal from 'sweetalert2'
import {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';


function Forgot_password() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [showModal, setShowModal] = useState(false);
    const [values, setValues] = useState("")
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    function handleForm(data) {

        setEmail(data.email);
        const url = "http://localhost:2000/forgot_password";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.data)
                if (res.error === true) {
                    swal.fire({
                        icon: "error",
                        title: res.message,
                    });
                } else {

                    swal.fire({
                        icon: "success",
                        title: res.message,
                        timer: 1500
                    })
                    setShowModal(true)
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    function verify_OTP() {
        console.log(values)
        const url = "http://localhost:2000/verifyOTP";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.data)
                if (res.error === true) {
                    swal.fire({
                        icon: "error",
                        title: res.message,
                    });
                } else {
                    swal.fire({
                        icon: "success",
                        title: res.message,
                        timer: 1500
                    })
                        .then(() => {

                            navigate('/resetpassword', { state: { email } });

                        })
                }
            })
            .catch((e) => {
                console.log(e);
            });


    }

    return(
        <>
            <div className="container">
                <h1> Forgot Password </h1>
            </div>

            <hr/>
            <div className="alert alert-primary">
                <form onSubmit={handleSubmit(handleForm)} id={'form'}>
                    <div className="mb-3">
                        <label htmlFor="">Email</label>
                        <input {...register('email', {required: 'This field is required'})} type="email"
                               className={"form-control"}/>
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({message}) => <p className={"text-danger"}>{message}</p>}
                        />
                    </div>


                    <button className={"btn btn-primary"}>Request OTP</button>


                </form>

            </div>

            <div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>

                    <Modal.Title>OTP Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(handleForm)} id={'form'}>
                        <div className="mb-3">
                            <label htmlFor="randomCode" className="form-label">Enter OTP</label>
                            <input
                                type="text"
                                className="form-control"
                                id="randomCode"
                                onChange={(e) => setValues({...values, randomCode: e.target.value})}
                            />
                        </div>


                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={verify_OTP}>
                        Verify OTP
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>

        </>
    )
}

export default Forgot_password