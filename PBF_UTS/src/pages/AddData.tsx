import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axios from 'axios';

interface User {
  username: string;
  email: string;
  password: string;
}

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({ username: '', email: '', password: '' });

  const onBackTextClick = useCallback(() => {
    navigate("/manage-user");
  }, [navigate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Create new user
    axios.post(`http://34.101.67.154:8000/api/users`, user)
      .then(response => {
        console.log('User created successfully:', response.data);
        // Navigate to another page or show a success message
        navigate("/manage-user");
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#092230,_#1c6a96)] h-[1024px] overflow-hidden text-left text-xl text-black font-poppins">
      <div className="absolute top-[66px] left-[330px] rounded-mini [background:linear-gradient(242.61deg,_rgba(113,_199,_236,_0.77)_32.37%,_rgba(64,_113,_134,_0.77))] w-[1240px] h-[893px] overflow-hidden">
        <div className="absolute top-[110px] left-[0px] bg-white box-border w-[1240px] h-[783px] border-[1px] border-solid border-black" />
        <div className="absolute top-[36px] left-[53px] text-31xl font-semibold text-white flex items-center w-[283px] h-[39px]">
          Add User
        </div>
        <form onSubmit={handleSubmit}>
          <div className="absolute top-[253px] left-[88px] font-semibold flex items-center w-[238px] h-[49px]">
            Username
          </div>
          <TextField
            sx={{
              backgroundColor: "gainsboro",
              position: "absolute",
              top: "302px",
              left: "88px",
              borderRadius: "0.375rem",
              width: "1064px",
              height: "57px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
            }}
            variant="outlined"
            value={user.username}
            name="username"
            onChange={handleChange}
            InputProps={{ disableUnderline: true }}
          />
          <div className="absolute top-[436px] left-[88px] font-semibold flex items-center w-[238px] h-[49px]">
            Email
          </div>
          <TextField
            sx={{
              backgroundColor: "gainsboro",
              position: "absolute",
              top: "485px",
              left: "88px",
              borderRadius: "0.375rem",
              width: "1064px",
              height: "57px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
            }}
            variant="outlined"
            value={user.email}
            name="email"
            onChange={handleChange}
            InputProps={{ disableUnderline: true }}
          />

          <div className="absolute top-[619px] left-[88px] font-semibold flex items-center w-[238px] h-[49px]">
            Personal PIN
          </div>
          <TextField
            sx={{
              backgroundColor: "gainsboro",
              position: "absolute",
              top: "668px",
              left: "88px",
              borderRadius: "0.375rem",
              width: "1064px",
              height: "57px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
            }}
            variant="outlined"
            type="password"
            value={user.password}
            name="password"
            onChange={handleChange}
            InputProps={{ disableUnderline: true }}
          />
          <Button 
            type="submit" 
            sx={{ 
              position: "absolute", 
              top: "787px", 
              left: "1023px", 
              backgroundColor: "skyblue", 
              width: "129px", 
              height: "73px",
              "&:hover": {
                backgroundColor: "skyblue",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                animation: "1s ease 0s infinite normal none shadow-inset-center",
                opacity: "1",
              }
            }}
          >
            <span className="text-xl font-semibold font-poppins text-white">
              Save
            </span>
          </Button>
          <div
            className="absolute top-[165px] left-[139px] text-[25px] font-semibold flex items-center w-[124px] h-[34px] cursor-pointer"
            onClick={onBackTextClick}>
            Back
          </div>
          <img
            className="absolute top-[157px] left-[80px] w-[50px] h-[50px] overflow-hidden"
            alt=""
            src="/ionchevronbackoutline.svg"
            onClick={onBackTextClick}
          />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
