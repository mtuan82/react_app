"use client"

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
import { Typography } from '@mui/material';
import Link from 'next/link';
import { User } from "../../context/api/interfaces/User";
import { authservice } from "../../context/api/services/authservice";

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();

    const login = (event: any): boolean => {
        event.preventDefault();
        const user: User = {
            username: username,
            password: password
        };
        var res = authservice.login(user);
        if (res.status == 200) {
            window.localStorage.setItem("token", res.token);
            setErrorMsg("");
            return true;
        }
        else {
            setErrorMsg(res.errorMsg);
            return false;
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
            onSubmit={(event) => login(event) == true ? router.push("/features/dashboard") : alert(errorMsg)}
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