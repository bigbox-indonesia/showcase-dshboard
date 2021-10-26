import axios from "axios"

const getSession = async () => {
    try {
      const { data } = await axios.get('https://api.bigbox.co.id/api/bigquery/get-session')
      return data
    } catch (error) {
      throw new Error(error)
    }
}

export default getSession;
