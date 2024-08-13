import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ViewContact() {
    const [name, setName] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editContact, setEditContact] = useState({
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        mobile: ''
    });

    const token = localStorage.getItem('token');

    useEffect(() => {
        Fetch_details()
    }, []);

    function Fetch_details() {
        const url = 'http://localhost:2000/view_contact';
        fetch(url, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + token
            },
        })
            .then(res => res.json())
            .then(res => {
                let data = res.records;
                setName(data)
            })
    }

    function handleEdit(id) {
        let contact;
        for (let i = 0; i < name.length; i++) {
            if (name[i].id === id) {
                contact = name[i];
                break;
            }
        }
        setEditContact(contact);
        setShowModal(true);
    }

    function handleDelete(data) {
        let url = 'http://localhost:2000/delete_contact';
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({ id: data })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error === true) {
                    swal.fire({
                        icon: "error",
                        title: res.message,
                    })
                } else {
                    swal.fire({
                        icon: "success",
                        title: res.message,
                        timer: 1500
                    }).then(() => {
                        Fetch_details()
                    })
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    function handleSaveChanges() {
        let url = 'http://localhost:2000/edit_contact';
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify(editContact),
        })
            .then(res => res.json())
            .then(res => {
                if (res.error === true) {
                    swal.fire({
                        icon: "error",
                        title: res.message,
                    });
                } else {
                    setShowModal(false);
                    swal.fire({
                        icon: "success",
                        title: res.message,
                        timer: 1500
                    })
                    Fetch_details()
                }
            })
            .catch((e) => {
                console.log(e);
            });
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
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {name.length === 0 ? <tr>
                        <td colSpan={5} className="text-center text-danger">No Contacts found</td>
                    </tr> : name.map((x) => (
                        <tr key={x.id}>
                            <td>{x.firstname}</td>
                            <td>{x.lastname}</td>
                            <td>{x.email}</td>
                            <td>{x.mobile}</td>
                            <td>
                                <button
                                    className="btn btn-primary btn-sm me-2"
                                    onClick={() => handleEdit(x.id)}
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(x.id)}
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                value={editContact.firstname}
                                onChange={(e) => setEditContact({ ...editContact, firstname: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastname"
                                value={editContact.lastname}
                                onChange={(e) => setEditContact({ ...editContact, lastname: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={editContact.email}
                                onChange={(e) => setEditContact({ ...editContact, email: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mobile"
                                value={editContact.mobile}
                                onChange={(e) => setEditContact({ ...editContact, mobile: e.target.value })}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save changes
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

                .btn-danger {
                    background-color: #dc3545;
                    border: none;
                }

                .btn-primary:hover, .btn-danger:hover {
                    opacity: 0.8;
                }
            `}</style>
        </>
    )
}

export default ViewContact;
