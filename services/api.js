

import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://rebgraxivtibhpprfego.supabase.co/rest/v1',
    headers: {
        apikey: process.env.SUPABASE_APIKEY,
        authorization: `Bearer ${process.env.SUPABASE_APIKEY}`
    }
})


