import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import useStyles from './styles.banner';
import Container from '../../components/container';

export default function Banner() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.contentWrapper}>
                    <h1>Jatim Satu Data</h1>
                    <p>Temukan semua data yang Anda butuhkan
                       tentang Provinsi Jawa Timur.
                    </p>
                    <div className={classes.inputWrapper}>
                        <input
                            type="search"
                            name="search"
                            className={classes.inputSearch}
                            placeholder="Cari data publik Jawa Timur"
                        />
                        <IconButton className={classes.btnSearch}>
                            <SearchIcon color="white" />
                        </IconButton>
                    </div>
                </div>
            </Container>
        </div>
    )
}