import React, { FC } from 'react';
import { IFullPost } from '../../Interfaces';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { FlexContainer, MainPostContainer, MainPostImg } from './styles';

const getPostById = async (postId: string): Promise<any> => {
    const response = fetch(`https://studapi.teachmeskills.by/blog/posts/${postId}/`)

    return (await response).json();
}

const MainPost: FC<IFullPost> = ({ id }) => {

    const [post, setPost] = React.useState<IFullPost>();
    React.useEffect(() => {
        getPostById(id).then(post => setPost(post))
    }, [])

    return (
        <MainPostContainer>
            <div>
                <MainPostImg src={post?.image} />
                <p>{post?.date}</p>
                <p>{post?.title}</p>
            </div>
            <FlexContainer>
                <div><ThumbUpIcon /><ThumbDownAltIcon /></div>
                <div><BookmarkIcon /><MoreHorizIcon /></div>
            </FlexContainer>
        </MainPostContainer>
    );
};

export default MainPost;