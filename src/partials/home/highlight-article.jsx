import React from 'react'
import { Grid } from '@mui/material'
import useStyles from './styles.highlight-article'
import Container from '../../components/container'

const featuredHighlight = [1,2];

export default function HiglightArticle() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.highlightCard}>
                    <div>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
                        <div className={classes.readmoreLinkWrapper}>
                            <p>Read more</p>
                            <button
                                type="button"
                                className={classes.btnReadMore}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                    <div className={classes.highlightCapt}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum.</p>
                    </div>
                </div>
                <div>
                    <Grid container spacing={4}>
                        {featuredHighlight.map((v) => (
                            <Grid key={v} item lg={6}>
                                <div className={classes.featuredCard}>
                                    <div>
                                        <h3>Lorem ipsum </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                    <div className={classes.btnFeaturedWrapper}>
                                        <button
                                            type="button"
                                            className={classes.btnReadMore}
                                        >
                                            &gt;
                                        </button>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Container>
        </div>
    )
}