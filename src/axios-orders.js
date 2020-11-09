import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-project-e5a1f.firebaseio.com/'
});

export default instance;