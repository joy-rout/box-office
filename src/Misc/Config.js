/* eslint-disable camelcase */
const API_base_url = 'https://api.tvmaze.com';

export  async function apiGet(queryString) {
    const response = await fetch(`${API_base_url}${queryString}`)
    .then(r => r.json()
    );
    return response;
}