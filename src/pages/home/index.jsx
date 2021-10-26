import React from 'react';
import Header from '../../partials/header';
import Banner from '../../partials/home/banner';
import SummaryDataWidget from '../../partials/home/summary-data-widget';
import ChartWidget from '../../partials/home/chart-widget';
import HighlightArticle from '../../partials/home/highlight-article';
import Footer from '../../partials/footer'

export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <SummaryDataWidget />
            <ChartWidget />
            <HighlightArticle />
            <Footer />
        </div>
    )
}