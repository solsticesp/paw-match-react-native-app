import axios from 'axios';

const base = axios.create({
    baseURL: 'https://tnrnmqyhuusbbqpfkitz.supabase.co/',
    headers: {
        'apikey': 'sb_publishable_xoy32Y57BLqTa_vkXRMHhQ_yHJGlklO',
        'content-Type': 'application/json',
    }
});

const api = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/rest/v1`
})

export default api;