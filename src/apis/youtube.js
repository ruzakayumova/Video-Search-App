import axios from 'axios';

const KEY = 'AIzaSyCaisRAEZ0qPKR36_D7RQuXwMC8_sM0u-Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})