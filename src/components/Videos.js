import { useState } from 'react/cjs/react.development';
import useVideoList from '../hooks/useVideoList';
import Video from './Video';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

function Videos() {

    const [page, setPage] = useState(1);
    const { videos, hasMore } = useVideoList(page);

    return (
        <div>
            {
                <InfiniteScroll
                    className="infinite-scroll-component"
                    dataLength={videos.length}
                    hasMore={hasMore}
                    next={() => {
                        setPage(page + 8);
                    }}
                    loader={<h1>Loading...</h1>}
                >
                    {videos.map((video) => video.noq > 0 ? (
                        <Link to={`/quiz/${video.youtubeID}`}>
                            {<Video
                                key={video.youtubeID}
                                title={video.title}
                                id={video.youtubeID}
                                noq={video.noq}
                            />}
                        </Link>
                    ) : (
                        <Video
                            key={video.youtubeID}
                            title={video.title}
                            id={video.youtubeID}
                            noq={video.noq}
                        />  
                    ))}
                </InfiniteScroll>
            }
        </div>
    )

}

export default Videos;