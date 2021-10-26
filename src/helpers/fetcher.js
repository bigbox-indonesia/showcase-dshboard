import axios from "axios";


const fetcher = (id) => {
    return axios({
            headers: {
                'X-Metabase-Session': localStorage.getItem('session'),
            },
            method: 'GET',
            url: `https://api.bigbox.co.id/api/bigquery/card/${id}`,
        })
};

export default fetcher
