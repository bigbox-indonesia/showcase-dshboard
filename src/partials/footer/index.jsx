import React from 'react'
import useStyles from './styles.index'
import Container from '../../components/container';

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.wrapper}>
                    <div className={classes.itemWrapper}>
                        <h3 className={classes.heading}>Sign Up for Email Updates</h3>
                        <p>
                            To get information updates please 
                            insert your email address below.
                        </p>
                        <div className={classes.inputWrapper}>
                            <input type="text" className={classes.input} />
                            <button type="button" className={classes.btnSubs}>Subscribe</button>
                        </div>
                    </div>
                    <div className={classes.itemWrapper}>
                        <h3 className={classes.heading}>Useful Links</h3>
                        <ul className={classes.linkWrapper}>
                            <li>Satu Data Indonesia</li>
                            <li>Bappenas</li>
                            <li>Badan Informasi Geospasial</li>
                        </ul>
                    </div>
                    <div className={classes.itemWrapper}>
                        <h3 className={classes.heading}>Social Media</h3>
                        <div className={classes.socialIconWrapper}>
                            <img src="/youtube-icon.svg" alt="" />
                            <img src="/facebook-icon.svg" alt="" />
                            <img src="/linkedin-icon.svg" alt="" />
                            <img src="/twitter-icon.svg" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
            <hr className={classes.hr} />
            <div className={classes.copyright}>
                Dinas Komunikasi, Informatika, Statistik dan Persandian
                <br />
                Bidang Statistik © 2021
            </div>
        </div>
    )
}