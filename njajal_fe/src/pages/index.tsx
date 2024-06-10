import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

const Home: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the posts!', error);
            });
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                        <p>{user.password}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
