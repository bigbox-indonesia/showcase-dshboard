import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import useStyles from './styles.chart-widget';
import Container from '../../components/container';
import fetcher from '../../helpers/fetcher';

const chart = [
    {
        name: 'Kab. Situbondo',
        id: '543'
    },
    {
        name: 'Kab. Probolinggo',
        id: '541'
    },
    {
        name: 'Kota Probolinggo',
        id: '542'
    },
    {
        name: 'Kab. Banyuwangi',
        id: '544'
    },
    {
        name: 'Kab. Lumajang',
        id: '540'
    },
    {
        name: 'Kab. Bondowoso',
        id: '546'
    },
    {
        name: 'Kab. Jember',
        id: '545'
    },
];

const indikatorWidget = [1,2,3,4];

const options = (categories, data, title, loading) => ({
    chart: {
      type: 'column',
      events: {
          load() {
            loading && this.showLoading()
          },
      }
    },
    title: {
      text: title,
    },
    colors: ['#026de1'],
    xAxis: {
        categories,
        title: {
            text: 'OPD/Urusan'
        },
        crosshair: true,
        labels: {
            enabled: false
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Jumlah'
        }
    },
    series: [{
        name: 'Jumlah',
        data,
    }],
    legend: {
        enabled: false,
    },
    loading: {

    },
    credits: {
        text: "source: Satu Data Bigbox",
        href: "https://bigbox.co.id/products/big-one/satu-data-platform",
        style: {
            color: '#999999',
            cursor: 'pointer',
            fontSize: '9px'
        }
    }
  })

export default function ChartWidget() {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const [datas, setDatas] = useState([]);
    
    useEffect(() => {
      async function fetchData() {
          try {
              setIsLoading(true)
              for (let i = 0; i < chart.length; i++) {
                const { data } = await fetcher(chart[i].id)
                setDatas((prev) => [
                    ...prev,
                    {
                        ...chart,
                        categories: data.map((v) => v.Urusan),
                        series: data.map((v) => v.Count),
                    }
                ])
            }
          } catch (error) {
            console.log(error)
          } finally {
            setIsLoading(false)
        }
      }

      fetchData()
    }, [])

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={5}>
                    {!isLoading && datas.map((v, k) => {
                        const optionss = options(v.categories, v.series, v[k].name, false)
                        return (
                            <Grid
                                item
                                lg={4}
                                key={v[k].name}
                                className={classes.card}
                            >
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={optionss}
                                />
                            </Grid>
                        )
                    })}
                    {isLoading && (
                        chart.map((v, k) => {
                        const optionss = options([''], [''], v.name, true)
                        return (
                            <Grid
                                item
                                lg={4}
                                key={v.name}
                                className={classes.card}
                            >
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={optionss}
                                />
                            </Grid>
                        )
                    }))}
                </Grid>
                {/* <div
                    className={classes.indicatorWidgetContainer}
                >
                    <h3>Indikator Kinerja Daerah Provinsi Jawa Timur Tahun 2020</h3>
                    <Grid container spacing={5}>
                        {indikatorWidget.map((v) => {
                            return (
                                <Grid
                                    item 
                                    lg={3}
                                    key={v}
                                    className={classes.cardWidget}
                                >
                                    <div>
                                        <p>{v}</p>
                                        <p>Indeks Pembangunan Manusia (IPM)</p>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div> */}
            </Container>
        </div>
    )
}