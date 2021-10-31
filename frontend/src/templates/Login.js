import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

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

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item sm={4} md={4} lg={3}>
                    <div className={classes.login}>
                        <Typography variant="h4">
                            streamcomp
                        </Typography>
                        <br></br>
                        <TextField style={{ width: "80%"}} placeholder="Username" variant="standard"/>
                        <TextField style={{ width: "80%"}} placeholder="Password" variant="standard"/>
                        <br></br>
                        <br></br>
                        <Button color="inherit">Log in</Button>
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