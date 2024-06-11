import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar1 from "../components/Navbar1";
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface User {
  id: number;
  username: string;
  email:string
  password: string;
}
// interface UsersProps {
//   users: User[];
// }

const ManageUser: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  const onDashboardClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onLogContainerClick = useCallback(() => {
    navigate("/log-activity");
  }, [navigate]);

  const onMonitoringContainerClick = useCallback(() => {
    navigate("/monitoring");
  }, [navigate]);

  
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users`)
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the posts!', error);
        });
  }, []);
  const handleDelete = (id: number) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users/${id}`)
      .then(response => {
        setUsers(users.filter(user => user.id !== id));
        console.log(`User with ID ${id} deleted successfully.`);
      })
      .catch(error => {
        console.error(`There was an error deleting the user with ID ${id}:`, error);
      });
  };


  const filteredUsers = users.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  return (
    <div
      className="w-full relative"
      style={{
        background: 'linear-gradient(180deg, #092230, #1c6a96)',
        height: '1024px',
        overflow: 'hidden',
        color: 'white',
        fontFamily: 'Poppins, sans-serif'
      }}
    >
      <Sidebar 
        onDashboardContainerClick={onDashboardClick}
        onLogContainerClick={onLogContainerClick}
        onMonitoringCameraContainerClick={onMonitoringContainerClick}
      />
      <Navbar1 />

      {/* Header */}
      <div style={{ position: 'relative', top: '170px', width: '80%', left: '300px', padding: '20px', backgroundColor: '#71C7EC', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: '14px', borderTopRightRadius: '14px' }}>
        <h1 style={{ margin: 1 }}>Manage User</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              padding: '5px 30px 5px 10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              position: 'relative',
              outline: 'none',
              marginRight: '10px'
            }}
          />
          <img
            className="absolute top-[50%] right-[150px] transform translate-y-[-50%] w-5 h-5 overflow-hidden"
            alt=""
            src="/phmagnifyingglass.svg"
          />
          <button onClick={() => navigate('/adduser')} style={{ background: '#00f', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
            Add New
          </button>
        </div>
      </div>
      {/* Table */}
      <div style={{ position: 'relative', top: '170px', width: '80%', left: '300px' }}>
        <CTable bordered borderColor="black" style={{
            backgroundColor: 'white',
            overflow: 'hidden'
          }}>
          <CTableHead style={{ backgroundColor: '#f5f5f5' }}>
            <CTableRow>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>No.</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Username</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Email</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Personal PIN</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {currentUsers.map((user, index) => (
              <CTableRow key={user.id}>
                <CTableDataCell style={{ textAlign: 'center' }}>{index + 1}</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>{user.username}</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>{user.email}</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>{user.password}</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>
                  <button onClick={() => navigate(`/edit-data/${user.id}`)} style={{ background: '#00f', color: '#fff', padding: '7px 18px', border: 'none', borderRadius: '5px', marginRight: '5px' }}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(user.id)} style={{ background: '#f00', color: '#fff', padding: '7px 18px', border: 'none', borderRadius: '5px' }}>
                    Delete
                  </button>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
        {filteredUsers.length > itemsPerPage && (
          <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            {Array.from({ length: Math.ceil(filteredUsers.length / itemsPerPage) }, (_, index) => (
              <li key={index} style={{ marginRight: '5px' }}>
                <button onClick={() => paginate(index + 1)} style={{ background: '#00f', color: '#fff', padding: '7px 10px', border: 'none', borderRadius: '5px' }}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ManageUser;
