import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import swal from 'sweetalert2';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Forgot_password() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, // Added to reset form fields
    } = useForm();

    const [showOTPForm, setShowOTPForm] = useState(false);
    const [values, setValues] = useState({});
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    function handleForm(data) {
        setEmail(data.email);
        const url = "http://localhost:2000/forgot_password";
        setIsSubmitting(true); // Disable button on submit
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => {
                setIsSubmitting(false); // Enable button after response
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
                    });
                    setShowOTPForm(true);
                    reset();
                }
            })
            .catch((e) => {
                setIsSubmitting(false); // Enable button if error occurs
                console.log(e);
            });
    }

    function verify_OTP(e) {
        e.preventDefault(); // Prevent form submission
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
                    }).then(() => {
                        navigate('/resetpassword', { state: { email } });
                    });
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <div className="container">
            <h1>Forgot Password</h1>
            <hr />
            {!showOTPForm ? (
                <div className="alert alert-primary">
                    <form onSubmit={handleSubmit(handleForm)} id={'form'}>
                        <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <input {...register('email', { required: 'This field is required' })} type="email"
                                   className={"form-control"} />
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({ message }) => <p className={"text-danger"}>{message}</p>}
                            />
                        </div>
                        <button
                            className={"btn btn-primary"}
                            type="submit"
                            disabled={isSubmitting} // Disable button when submitting
                        >
                            {isSubmitting ? 'Sending...' : 'Request OTP'}
                        </button>
                    </form>
                </div>
            ) : (
                <div className="alert alert-primary">
                    <form onSubmit={verify_OTP} id={'otp-form'}>
                        <div className="mb-3">
                            <label htmlFor="randomCode" className="form-label">Enter OTP</label>
                            <input
                                type="text"
                                className="form-control"
                                id="randomCode"
                                onChange={(e) => setValues({ ...values, randomCode: e.target.value })}
                            />
                        </div>
                        <button className={"btn btn-primary"} type="submit">Verify OTP</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Forgot_password;
