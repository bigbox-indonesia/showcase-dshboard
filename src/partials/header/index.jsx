import React from 'react'
import useStyles from './styles.index'
import Container from '../../components/container';
import { Grid } from '@mui/material';

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item lg={6}>
                        <div className={classes.logoContainer}>
                            <img
                                width={32}
                                height={50}
                                src="/provinsi-jawa-timur-logo.png"
                                alt="logo prov jatim"
                                className={classes.logo}
                            />
                            <div>
                                <p>Provinsi</p>
                                <p>Jawa Timur</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        <nav className={classes.nav}>
                            <ul>
                                <li>Analytics</li>
                                <li>Catalog</li>
                                <li>Sectors</li>
                                <li>Indicator</li>
                                <li>APIs</li>
                                <li>Login</li>
                            </ul>
                        </nav>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}