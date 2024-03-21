import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Box, Heading, Button, Input, Stack, FormControl, FormLabel } from '@chakra-ui/react'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("init part", email);
        const response = await axios.post("http://localhost:3001/login", { email, password },{withCredentials: true})
        console.log("response", response)
        if (response.data === "login successful") {
            navigate("/");
            console.log("valid Login")
        } else if(response.data.data=="Password is incorrect"){
            alert("Wrong Password! Try Again.");
        }
        else{
            console.log("Invalid Login")
        }
    }

    return (
        <Box>
            <Heading as="h1">Login</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>

                    <FormControl>
                        <FormLabel htmlFor="email">Email:</FormLabel>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="password">Password:</FormLabel>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>

                    <Button type="submit" colorScheme="blue">Log in</Button>

                    <Link to="/signup">
                        <Button variant="outline">Sign up</Button>
                    </Link>

                    <Link to="/forgotPassword">Forgot Password</Link>
                </Stack>
            </form>
        </Box>
    );
}

export default Login;
