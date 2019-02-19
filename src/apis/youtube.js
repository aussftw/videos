import axios from 'axios';

const KEY = 'AIzaSyDGCj4nfTbk_g7CjxquuOgVkvPfAu5ipOw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
