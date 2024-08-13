import {useEffect, useState} from "react";

// const Table = () => {
//
//     const[users, setUsers] = useState([]);
//
//     useEffect(()=>{
//         const url = "https://jsonplaceholder.typicode.com/users"
//
//         fetch(url).then(res => res.json()).then(data => {
//             console.log(data)
//             setUsers(data)
//         })
//         }, []
//     )
//     return(
//         <>
//           <div className="container">
//               <table className="table table-dark table-hover">
//                   <thead>
//                   <tr>
//                       <th>id</th>
//                       <th>name</th>
//                       <th>username</th>
//                       <th>email</th>
//                       <th>phone</th>
//                       <th>website</th>
//                   </tr>
//                   </thead>
//                   <tbody>
//                   {users.map((x) => (
//                       <tr key={x.id}>
//                           <td>{x.id}</td>
//                           <td>{x.name}</td>
//                           <td>{x.username}</td>
//                           <td>{x.email}</td>
//                           <td>{x.phone}</td>
//                           <td>{x.website}</td>
//                       </tr>
//                   ))}
//                   </tbody>
//               </table>
//           </div>
//
//         </>
//
//     )
//
// }

const Table = () => {

    const [rows, setRows] = useState([]);

    useEffect(()=> {
        const url = "http://localhost:2000/formdata";

        fetch(url).then(res => res.json())
            .then(res => {
                let  data = res.records;
                console.log(data)
                setRows(data)
        }, []
        )
    })


return(
    <>
        <div className="container">
            <table className="table table-dark table-hover">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Gender</th>
                    <th>Street Name</th>
                    <th>City</th>
                    <th>Pin Code</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((x) => (
                    <tr key={x.id}>
                        <td>{x.firstname}</td>
                        <td>{x.lastname}</td>
                        <td>{x.email}</td>
                        <td>{x.mobile}</td>
                        <td>{x.gender}</td>
                        <td>{x.streetName}</td>
                        <td>{x.city}</td>
                        <td>{x.pinCode}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>

)

}

export default Table