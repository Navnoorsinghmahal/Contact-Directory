import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faWrench } from '@fortawesome/free-solid-svg-icons';
import swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ViewContact() {
    const [name, setName] = useState([]);
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        Fetch_details();
    }, []);

    function Fetch_details() {
        const url = 'http://localhost:2000/view_user';
        fetch(url, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                let data = res.records;
                setName(data);
            })
    }

    function handleEdit(id, status) {
        const url = 'http://localhost:2000/change_status';

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: id, status: status }),
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
                        Fetch_details();
                    })
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    function handleView(id) {
        const url = 'http://localhost:2000/view_user_contact';
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: id }),
        })
            .then(res => res.json())
            .then(res => {
                let data = res.records;
                setData(data);
                setShowModal(true);
            })
    }

    return (
        <>
            <div className="container">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Change Status/View Contacts</th>
                    </tr>
                    </thead>
                    <tbody>
                    {name.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="text-center text-danger">No User found</td>
                        </tr>
                    ) : (
                        name.map((x) => (
                            <tr key={x.id}>
                                <td>{x.firstname}</td>
                                <td>{x.lastname}</td>
                                <td>{x.email}</td>
                                <td>{x.status}</td>
                                <td>
                                    <button
                                        className="btn btn-primary btn-sm me-2"
                                        onClick={() => handleEdit(x.id, x.status)}
                                    >
                                        <FontAwesomeIcon icon={faWrench} />
                                    </button>
                                    <button
                                        className="btn btn-primary btn-sm me-2"
                                        onClick={() => handleView(x.id)}
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>View Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center text-danger">No Contact Details</td>
                            </tr>
                        ) : (
                            data.map((contact) => (
                                <tr key={contact.id}>
                                    <td>{contact.firstname}</td>
                                    <td>{contact.lastname}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.mobile}</td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <style jsx>{`
                .table {
                    margin-top: 20px;
                }

                .table th, .table td {
                    text-align: center;
                    vertical-align: middle;
                }

                .thead-dark th {
                    background-color: #007bff;
                    color: #fff;
                }

                .table-striped tbody tr:nth-of-type(odd) {
                    background-color: #f0f8ff;
                }

                .table-bordered {
                    border: 1px solid #007bff;
                }

                .table-bordered th, .table-bordered td {
                    border: 1px solid #007bff;
                }

                .btn-primary {
                    background-color: #007bff;
                    border: none;
                }

                .btn-primary:hover {
                    opacity: 0.8;
                }
            `}</style>
        </>
    );
}

export default ViewContact;
