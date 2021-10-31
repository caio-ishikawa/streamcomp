import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useHistory } from 'react-router';
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
    }
});

const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitData = () => {
        let data = {
            username: username,
            password: password
        };

        Axios.post('http://localhost:3002/auth/login', data)
            .then((res) => {
                history.push({
                    pathname: "/content",
                    state: res.data 
                });
            });
    };

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item sm={4} md={4} lg={3}>
                    <div className={classes.login}>
                        <Typography variant="h4">
                            streamcomp
                        </Typography>
                        <br></br>
                        <TextField style={{ width: "80%"}} placeholder="Username" variant="standard" onChange={(e) => setUsername(e.target.value)}/>
                        <TextField style={{ width: "80%"}} placeholder="Password" variant="standard" onChange={(e) => setPassword(e.target.value)}/>
                        <br></br>
                        <br></br>
                        <Button color="inherit" onClick={submitData}>Log in</Button>
                        <br></br>
                        <br></br>
                        <Typography variant="subtitle2">
                            Don't have an account yet? Click <Link to="/register"> here </Link> to register.
                        </Typography>
                    </div>
                </Grid>
                <Grid item sm={8} md={8} lg={9}>
                    <div className={classes.side}></div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Login;