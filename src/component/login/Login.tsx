import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export interface User {
  userName: string;
  password: string;
}

interface Props {
  handleLogin: (user: User) => void;
}

const initialState: User = {
  userName: "",
  password: "",
};

const Login: React.FC<Props> = ({ handleLogin }) => {
  const [user, setUser] = useState<User>(initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(user);
  };

  return (
    <div className="login_container">
      <form onSubmit={handleSubmit} className="login_form_container">
        <div className="input_container">
          <TextField
            label="Username"
            name="username"
            type="text"
            autoComplete="off"
            variant="outlined"
            fullWidth
            placeholder="root"
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
        </div>
        <div className="input_container">
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            placeholder="root"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="input_container">
          <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            size="large"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
