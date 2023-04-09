import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8188ec4468fd49e18325770d1a23f642'
    }
})