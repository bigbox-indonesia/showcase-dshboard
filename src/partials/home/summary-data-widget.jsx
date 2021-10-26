import React, { useState, useEffect } from 'react';
import useStyles from './styles.summary-data-widget';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '../../components/container';
import fetcher from '../../helpers/fetcher';
import getSession from '../../services/get-session';

const card = [
    {
        bg: '#184E77',
        id: '547',
        name: 'Kota/Kabupaten',
    },
    {
        bg: '#6EBC89',
        id: '539',
        name: 'OPD & Institusi'
    },
    {
        bg: '#1A759F',
        id: '535',
        name: 'Elemen Data'
    },
    {
        bg: '#34A0A4',
        id: '536',
        name: 'Indilator/Insight'
    },
];

export default function SummaryDataWidget() {
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const classes = useStyles();

    // useEffect(() => {
    //     async function fetchSession() {
    //             try {
    //                 const data = await getSession();
    //                 console.log(data.data);
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //     }

    //     fetchSession()
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
              setIsloading(true)
              for (let i = 0; i < card.length; i++) {
                const { data } = await fetcher(card[i].id)
                setDatas((prev) => [
                    ...prev,
                    {
                        ...card[i],
                        result: Object.values(data[0])[0]
                    },
                ])
              }
            } catch (error) {
              const data = await getSession();
              localStorage.setItem('session', data.data)
              window.location.reload();
            } finally {
              setIsloading(false)
            }
        }

        fetchData();
    }, [])

    useEffect(() => {
        console.log('summary rendered');
    }, [])

    return (
        <div className={classes.root}>
            <Container>
               <h1 className={classes.heading}>
                STATISTIK SATU DATA BAKORWIL V PEMERINTAH PROVINSI JAWA TIMUR
               </h1>
               <div className={classes.cardContainer}>
                    {!isLoading && datas.map((v, k) => (
                        <div
                            key={v.name}
                            className={classes.card}
                            style={{ backgroundColor: v.bg }}
                        >
                            <p>{v.result}</p>
                            <p>{v.name}</p>
                        </div>
                    ))}
                    {isLoading && (
                        card.map((v) => (
                            <div
                                key={v.name}
                                className={classes.card}
                                style={{ backgroundColor: v.bg }}
                            >
                                <CircularProgress style={{ color: 'white', marginBottom: '18px' }} />
                                <p>{v.name}</p>
                            </div>
                        ))
                    )}
               </div>
            </Container>
        </div>
    )
}