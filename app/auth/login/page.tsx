"use client"

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
import { Typography } from '@mui/material';
import Link from 'next/link';
import { User } from "../../api/interfaces/User";
import { login } from "../../api/services/authservice"

export default function LoginForm() {
  const [error, setError] = useState({
    username: "",
    password: ""
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const validate = (): boolean => {
    error.username = "";
    error.password = "";
    if (username == "") {
      setError({
        ...error,
        username: "Invalid User Name",
      });
      return false;
    }
    if (password == "") {
      setError({
        ...error,
        password: "Invalid Password",
      });
      return false;
    }
    return true;
  }


  const doLogin = (event: any): void => {
    event.preventDefault();
    const user: User = {
      email: username,
      password: password
    };
    if (!validate())
      return;
    login(user).then(() => {
      setErrorMsg("");
      router.push("/features/dashboard");
    }).catch((err) => {
      setErrorMsg(err.response.data.error);
    });
  }

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { marginTop: 1, marginBottom: 2, width: '35ch' },
        flexDirection: 'column',
        textAlign: 'center'
      }}
      noValidate
      autoComplete="off"
      onSubmit={(e) => doLogin(e)}
    >
      <div style={{ display: 'inline-grid' }}>
        {
          (errorMsg != "") ? <Typography fontSize="3" color="red"> {errorMsg} </Typography> : ""
        }
        <TextField
          required
          error={error.username.length > 0 ? true : false}
          helperText={error.username}
          id="username"
          label="User Name"
          //defaultValue="mtuanbo@gmail.com"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          required
          error={error.password.length > 0 ? true : false}
          helperText={error.password}
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          //defaultValue="Fulva@123"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Typography sx={{ marginBottom: 2, textAlign: 'right' }}><Link href="/auth/forgetpassword">Forget password</Link></Typography>
        <Button type='submit' variant="contained">Login</Button>
        <Typography sx={{ marginTop: 2, textAlign: 'left' }}> not have account? <Link href="/auth/signup">Create account</Link></Typography>
      </div>
    </Box>
  );
}