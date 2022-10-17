import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, TextField } from "@mui/material";
import { getUsers, register } from "../Redux/reducers/taskListSlice";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(getUsers);

  const HandleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    let { email, password } = document.forms[0];
    dispatch(register({ email: email.value, password: password.value }));

    // Find user login info
    const currentUser = userData[email.value];

    // Compare user info
    if (currentUser !== null) {
      // user already exist
      alert("User Already Exist");
    } else {
      let newUser = { email: email.value, password: password.value };
      dispatch(register(newUser));
      alert(" User Registered successfully");
      navigate("/");
    }
  };

  // User Registration form component
  const RegisterForm = (
    <div style={{ marginTop: 200, marginLeft: 600 }}>
      <form onSubmit={HandleSubmit}>
        <FormControl sx={{ border: 1, borderRadius: 2 }}>
          <h6> Registeration Form</h6>
          <TextField
            required
            id="outlined"
            multiline
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
            style={{ margin: 10 }}
          />
          <TextField
            required
            id="outlined"
            multiline
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            style={{ margin: 10 }}
          />
          <br />
          <Button
            type="Submit"
            variant="contained"
            style={{ marginLeft: 40, marginRight: 40 }}
          >
            Register
          </Button>
        </FormControl>
      </form>
    </div>
  );

  return (
    <div className="App">
      <>{RegisterForm}</>
    </div>
  );
}

export default RegisterForm;
