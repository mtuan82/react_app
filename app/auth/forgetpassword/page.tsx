"use client"
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
import { Typography } from '@mui/material';
import { forgotPassword } from "../../api/services/authservice";

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();

    const forgotPass = (event: any): void => {
        event.preventDefault();
        var res = forgotPassword(email)
        .then( () => {
            setErrorMsg("");
            router.push("/auth/login");
        })
        .catch( (err) =>{
            setErrorMsg(err.errorMsg);
        });
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { marginTop: 1, marginBottom: 2, width: '50ch' },
                flexDirection: 'column',
                textAlign: 'center',
            }}
            noValidate
            autoComplete="off"
            onSubmit={(event) => forgotPass(event)}>
            <div style={{ display: 'inline-grid' }}>
                <Typography sx={{ fontSize: 20, fontWeight: 1000 }}>Forgot your password?</Typography>
                <Typography fontSize="2"> Please enter the email address associated with your account </Typography>
                <Typography fontSize="2"> and We will email you a link to reset your password.</Typography>
                <TextField
                    required
                    id="email"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type='submit' variant="contained">Send Email</Button>
            </div>
        </Box>
    );
}