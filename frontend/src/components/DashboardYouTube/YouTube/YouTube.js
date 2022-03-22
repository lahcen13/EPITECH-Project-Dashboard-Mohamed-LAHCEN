import axios from "axios";
import { useEffect } from "react";
import ReactPlayer from 'react-player/youtube'


const Dashboard = (props) => {
    const api_key = "AIzaSyC3TQBTqXhTDA2gA_XgcYsP5vX9AimsC3Y";

    let [url_video, setChannel] = useState();
    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${api_key}?part=id?chart=mostPopular?maxResults=1`)
            .then(response => {
                url_video = 'https://www.youtube.com/watch?v=' + response.data.id
            })
    })

    return <ReactPlayer url={url_video} />
}