import axios from 'axios';
import config from '../config.js';

class SampleService {
    static getPosts() {
        const url = config.url.base + config.url.posts;
        return axios.get(url).then(response => {
            return response.data;
        });
    }
}

export default SampleService;