import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Api.css';
function UsersData() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        setUsers(data);
    }
    return (
        <div>
            <table class="table table-hover ">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">
                            <h2>Name of users</h2>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((val) => (
                        <tr>
                            <td key={val.id}>
                                <Link to={`/Api/${val.id}`}>
                                    {val.name}
                                </Link>
                            </td>
                        </tr>
                    ))
                    }

                </tbody>
            </table>
        </div>
    );
}
export default UsersData;