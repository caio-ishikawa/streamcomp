import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Axios from 'axios';

const useStyles = makeStyles({
    text: {
    },
    login: {
        margin: "3vh"
    },
    button: {
        backgroundColor: "black"
    },
    side: {
        height: "100vh",
        width: "100%",
        backgroundColor: "black"
    },
    textfield: {
        margin: "3vh"
    },
    space: {
        width: "100%",
        height: "100vh",
        backgroundColor: "black"
    }
});

const Register = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitData = () => {
        let data = {
            username: username,
            email: email,
            password: password
        };

        Axios.post('http://localhost:3002/auth/register', data)
            .then((res) => console.log(res))

    };

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item sm={4} md={4} lg={3}>
                    <div className={classes.textfield}>
                        <Typography variant="h4">
                            streamcomp
                        </Typography>
                        <br></br>
                        <br></br>
                        <TextField style={{ width: "80%"}} variant="standard" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        <TextField style={{ width: "80%"}} variant="standard" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <TextField style={{ width: "80%"}} variant="standard" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        <br></br>
                        <br></br>
                        <Button variant="contained" onClick={submitData}>Sign up</Button>
                        <br></br>
                        <br></br>
                        <Typography variant="subtitle2">
                            Already have an account? Click <Link to="/login"> here </Link> to sign in.
                        </Typography>
                    </div>
                </Grid>
                <Grid item sm={8} md={8} lg={9}>
                    <div className={classes.space}></div>
                </Grid>
            </Grid>
        </div>
    )

};

export default Register;