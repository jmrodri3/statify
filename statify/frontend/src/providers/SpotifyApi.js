import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT = process.env.REACT_APP_LOGIN_API;

export default async function authorizeSpotify() {
    let scopes = 'user-read-private user-read-email';
    const response = await axios.get('https://accounts.spotify.com/authorize', {
        params: {
            client_id: CLIENT_ID,
            response_type: "code",
            redirect_uri: REDIRECT,
            scope: scopes,
            state: "af5fdb0e-6e25-4d57-99d4-e4d83f009f6c",
            show_dialog: true
        },
        headers: {
        }
    }).then(res => {
        return res;
    }).catch(err => {
        console.log(err);
    });
    return response;
}
