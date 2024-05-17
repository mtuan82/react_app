"use client"

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
import { Typography } from '@mui/material';
import Link from 'next/link';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { register } from "../../api/services/authservice";

export default function SignupForm() {
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();
    const [account, setAccount] = useState({
        twoFactorEnabled: false,
        phoneNumber: "",
        email: "",
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        role: ""
    });
    const [error, setError] = useState({
        phoneNumber: "",
        email: "",
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        role: ""
    });

    const validate = (): boolean => {
        error.firstName = "";
        error.lastName = "";
        error.phoneNumber = "";
        error.email = "";
        error.role = "";
        error.userName = "";
        error.password = "";
        if (account.firstName == "") {
            setError({
                ...error,
                firstName: "Invalid First Name",
            });
            return false;
        }
        if (account.lastName == "") {
            setError({
                ...error,
                lastName: "Invalid Last Name",
            });
            return false;
        }
        if (account.email == "") {
            setError({
                ...error,
                email: "Invalid Email",
            });
            return false;
        }
        if (account.phoneNumber == "") {
            setError({
                ...error,
                phoneNumber: "Invalid Phone",
            });
            return false;
        }
        if (account.role == "") {
            setError({
                ...error,
                role: "Invalid Role",
            });
            return false;
        }
        if (account.userName == "") {
            setError({
                ...error,
                userName: "Invalid UserName",
            });
            return false;
        }
        if (account.password == "") {
            setError({
                ...error,
                password: "Invalid Password",
            });
            return false;
        }
        return true;
    }

    const doRegister = (event: any): void => {
        event.preventDefault();
        if (!validate())
            return;
        register(account).then(() => {
            router.push("/auth/login");
        }).catch((error) => {
            setErrorMsg(error.response.data.error);
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
            onSubmit={(event) => doRegister(event)}>
            <div style={{ display: 'inline-grid' }}>
                {
                    (errorMsg != "") ? <Typography fontSize="3" color="red"> {errorMsg} </Typography> : ""
                }
                <Typography sx={{ fontSize: 20, fontWeight: 1000 }}>Get started absolutely free</Typography>
                <Typography fontSize="3"> Already have an account? <Link href="/auth/login">Sign in</Link></Typography>
                <TextField
                    required
                    error={error.firstName.length > 0 ? true : false}
                    helperText={error.firstName}
                    id="firstname"
                    label="First Name"
                    value={account.firstName}
                    onChange={(e) => { account.firstName = e.target.value; setAccount({ ...account }) }}
                />
                <TextField
                    required
                    error={error.lastName.length > 0 ? true : false}
                    helperText={error.lastName}
                    id="lastname"
                    label="Last Name"
                    value={account.lastName}
                    onChange={(e) => { account.lastName = e.target.value; setAccount({ ...account }) }}
                />
                <TextField
                    required
                    error={error.email.length > 0 ? true : false}
                    helperText={error.email}
                    id="email"
                    label="Email"
                    value={account.email}
                    onChange={(e) => { account.email = e.target.value; setAccount({ ...account }) }}
                />
                <TextField
                    required
                    error={error.phoneNumber.length > 0 ? true : false}
                    helperText={error.phoneNumber}
                    id="phone"
                    label="phone"
                    value={account.phoneNumber}
                    onChange={(e) => { account.phoneNumber = e.target.value; setAccount({ ...account }) }}
                />
                <FormControl fullWidth error={error.role.length > 0 ? true : false}>
                    <InputLabel id="Role">Role</InputLabel>
                    <Select
                        error={error.role.length > 0 ? true : false}
                        labelId="Role"
                        id="Role"
                        value={account.role}
                        label="Role"
                        onChange={(e) => { account.role = e.target.value; setAccount({ ...account }) }}>
                        <MenuItem value={"Admin"}>Admin</MenuItem>
                        <MenuItem value={"User"}>User</MenuItem>
                    </Select>
                    <FormHelperText>{error.role}</FormHelperText>
                </FormControl>
                <TextField
                    required
                    error={error.userName.length > 0 ? true : false}
                    helperText={error.userName}
                    id="username"
                    label="User Name"
                    value={account.userName}
                    onChange={(e) => { account.userName = e.target.value; setAccount({ ...account }) }}
                />
                <TextField
                    required
                    error={error.password.length > 0 ? true : false}
                    helperText={error.password}
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={account.password}
                    onChange={(e) => { account.password = e.target.value; setAccount({ ...account }) }}
                />
                <Button type='submit' variant="contained">Create Account</Button>
            </div>
        </Box>
    );
}