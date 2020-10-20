import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT = process.env.REACT_APP_REDIRECT_URI;

export default async function authorizeSpotify() {
    let scopes = 'user-read-private user-read-email';
    const response = await axios.get('https://accounts.spotify.com/authorize', {
        params: {
            client_id: '05cee2369b00449d8143fccc4c26d7fe',
            response_type: "code",
            redirect_uri: 'https://f266fb238463.ngrok.io/login/',
            scope: scopes,
            state: "uniqueId",
            show_dialog: true
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
