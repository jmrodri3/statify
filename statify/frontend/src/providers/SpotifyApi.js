import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

export default async function authorizeSpotify() {
    let scopes = 'user-read-private user-read-email';
    const response = await axios.get('https://accounts.spotify.com/authorize', {
        params: {
            client_id: CLIENT_ID,
            response_type: "code",
            redirect_uri: "http://localhost:3000/",
            scope: scopes,
            state: "uniqueId"
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then(res => {
        console.log(res);
        return res;
    }).catch(err => {
        console.log(err);
    });
    return response;
}
