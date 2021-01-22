import axios from 'axios';

const api = axios.create({
  baseURL: 'https://youtube-to-mp32.p.rapidapi.com/yt_to_mp3',
});

export default api;
