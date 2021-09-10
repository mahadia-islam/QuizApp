import { useEffect } from "react";
import {
    getDatabase,
    ref,
    query,
    orderByKey,
    get,
    startAt,
    limitToFirst
} from 'firebase/database';
import { useState } from "react/cjs/react.development";

function useVideoList(page) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            // database reladted works
            const db = getDatabase();
            const videosRef = ref(db, 'videos');
            const videoQuery = query(videosRef, orderByKey(),startAt(''+page),limitToFirst(8));
            
            try {
                setError(false);
                setLoading(true);

                // request firebase database

                const result = await get(videoQuery);
                setLoading(false);
                if (result.exists()) {
                    setVideos((prevVideos) => {
                        return [...prevVideos,...Object.values(result.val())]
                    });
                } else {
                    setHasMore(false);
                } 
                 
            } catch (err){
                console.log(err);
                setLoading(false);
                setError(true);
            }

        }

        setTimeout(() => {
            fetchVideos();
        },2000);
    }, [page]);
    
    return {
        loading,
        error,
        videos,
        hasMore
    }
}

export default useVideoList;