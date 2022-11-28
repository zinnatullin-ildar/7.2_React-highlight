import { ArticleHL, VideoHL } from '../hocs/HighlightWrapper';
import { v4 as uuid } from "uuid";

function VideoList(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <div key={uuid()}>
                        <VideoHL {...item} />
                    </div>
                );

            case 'article':
                return (
                    <div key={uuid()}>
                        <ArticleHL {...item} />
                    </div>
                );

            default:
                return (
                    <></>
                );
        }
    });
}

export default VideoList;
