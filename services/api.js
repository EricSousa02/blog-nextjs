

import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://rebgraxivtibhpprfego.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYmdyYXhpdnRpYmhwcHJmZWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMDU4NTQsImV4cCI6MjAxMjc4MTg1NH0.jw-au9rrCNAm0-8FX4o3wXbtZ7gI-0wJtmy3nslYgzE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYmdyYXhpdnRpYmhwcHJmZWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMDU4NTQsImV4cCI6MjAxMjc4MTg1NH0.jw-au9rrCNAm0-8FX4o3wXbtZ7gI-0wJtmy3nslYgzE"
    }
})


