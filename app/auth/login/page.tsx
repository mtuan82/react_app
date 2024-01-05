"use client"

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
import { Typography } from '@mui/material';
import Link from 'next/link';
import { User } from "../../context/api/interfaces/User";
import { login } from "../../context/api/services/authservice"

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const doLogin = (event: any): void => {
    event.preventDefault();
    const user: User = {
      username: username,
      password: password
    };
    var res = login(user);
    if (res.status == 200) {
      alert('res.token ' + res.token)
      setErrorMsg("");
      router.push("/features/dashboard");
    }
    else {
      setErrorMsg(res.errorMsg);
      alert(errorMsg);
    }
}

return (
  <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { marginTop: 1, marginBottom: 2, width: '35ch' },
      flexDirection: 'column',
      textAlign: 'center',
    }}
    noValidate
    autoComplete="off"
    onSubmit={(e) => doLogin(e)}
  >
    <div style={{ display: 'inline-grid' }}>
      <TextField
        required
        id="username"
        label="User Name"
        variant="filled"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        required
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Typography sx={{ marginBottom: 2, textAlign: 'right' }}><Link href="/auth/forgetpassword">Forget password</Link></Typography>
      <Button type='submit' variant="contained">Login</Button>
      <Typography sx={{ marginTop: 2, textAlign: 'left' }}> not have account? <Link href="/auth/signup">Create account</Link></Typography>
    </div>
  </Box>
);
}