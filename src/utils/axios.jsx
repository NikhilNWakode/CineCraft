import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODc2MjI4ZGI1M2Q1NWRjN2QxMjZhYzc3YzkxNmQ3YSIsIm5iZiI6MTcyOTgwMTM5OC42Nzk3NTksInN1YiI6IjY3MWFhOTMzMjY4NWNiNjU2M2MwYjViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aXqEUQazjTXCCjnsKsu2ealdNnWK95MPyphj8usgC10'
      },
})

export default instance;