import { useEffect } from "react";
import {
    getDatabase,
    ref,
    query,
    orderByKey,
    get
} from 'firebase/database';
import { useState } from "react/cjs/react.development";

function useAnswerList(videoId) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswer] = useState([]);

    useEffect(() => {
        async function fetchAnswer() {
            // database reladted works
            const db = getDatabase();
            const answerRef = ref(db, `answers/${videoId}/questions`);
            const answerQuery = query(answerRef, orderByKey());
            
            try {
                setError(false);
                setLoading(true);

                // request firebase database

                const result = await get(answerQuery);
                setLoading(false);
                if (result.exists()) {
                    setAnswer((prevAnswer) => {
                        return [...prevAnswer,...Object.values(result.val())]
                    });
                } 
                 
            } catch (err){
                console.log(err);
                setLoading(false);
                setError(true);
            }

        }

        setTimeout(() => {
            fetchAnswer();
        },2000);
    }, [videoId]);
    
    return {
        loading,
        error,
        answers,
    }
}

export default useAnswerList;