"use client"

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
import { Typography } from '@mui/material';
import Link from 'next/link';
import { User } from "../../api/interfaces/User";
import { login } from "../../api/services/authservice";

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();

    const loginUser = (event: any): void => {
        event.preventDefault();
        const user: User = {
            email: username,
            password: password
        };
        login(user).then((response) => {
            if (response.status == 200) {
              setErrorMsg("");
              router.push("/features/dashboard");
            }
          }).catch((error) => {
            setErrorMsg(error.errorMsg);
            alert(error.errorMsg);
          });
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
            onSubmit={(event) => loginUser(event)}
        >
            <div style={{ display: 'inline-grid' }}>
                <Typography sx={{ fontSize: 20, fontWeight: 1000 }}>Get started absolutely free</Typography>
                <Typography fontSize="3"> Already have an account? <Link href="/auth/login">Sign in</Link></Typography>
                <TextField
                    required
                    id="firstname"
                    label="First Name"
                    variant="filled"
                />
                <TextField
                    required
                    id="lastname"
                    label="Last Name"
                    variant="filled"
                />
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
                <Button type='submit' variant="contained">Create Account</Button>
            </div>
        </Box>
    );
}