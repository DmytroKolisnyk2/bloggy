import axios from 'axios';

axios.defaults.baseURL = new URL(process.env.NEXT_PUBLIC_API_ROUTE).href;

export { axios };
