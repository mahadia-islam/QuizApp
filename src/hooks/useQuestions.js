import { useEffect } from "react";
import {
    getDatabase,
    ref,
    query,
    orderByKey,
    get
} from 'firebase/database';
import { useState } from "react/cjs/react.development";

function useVideoList(videoId) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            // database reladted works
            const db = getDatabase();
            const questionRef = ref(db, `quiz/${videoId}/questions`);
            const questionQuery = query(questionRef, orderByKey());
            
            try {
                setError(false);
                setLoading(true);

                // request firebase database

                const result = await get(questionQuery);
                setLoading(false);
                if (result.exists()) {
                    setQuestions((prevQuestion) => {
                        return [...prevQuestion,...Object.values(result.val())]
                    });
                } 
                 
            } catch (err){
                console.log(err);
                setLoading(false);
                setError(true);
            }

        }

        setTimeout(() => {
            fetchQuestions();
        },2000);
    }, [videoId]);
    
    return {
        loading,
        error,
        questions,
    }
}

export default useVideoList;