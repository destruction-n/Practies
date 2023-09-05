import React, { FC } from 'react';
import { IFullPost } from '../../Interfaces';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { FlexContainer, MainPostContainer, MainPostImg, StyledPostText } from './styles';

const getPostById = async (postId: string): Promise<any> => {
    const response = fetch(`https://studapi.teachmeskills.by/blog/posts/${postId}/`)

    return (await response).json();
}

const AdditionalPost: FC<IFullPost> = ({ id }) => {

    const [post, setPost] = React.useState<IFullPost>();
    React.useEffect(() => {
        getPostById(id).then(post => setPost(post))
    }, [])

    return (
        <MainPostContainer>
            <div>

                <StyledPostText>{post?.date}</StyledPostText>
                <StyledPostText>{post?.title}</StyledPostText>
                <div><ThumbUpIcon fontSize={'small'} /><ThumbDownAltIcon fontSize={'small'} /></div>
            </div>
            <FlexContainer>
                <MainPostImg src={post?.image} />

                <div><BookmarkIcon fontSize={'small'} /><MoreHorizIcon fontSize={'small'} /></div>
            </FlexContainer>
        </MainPostContainer>
    );
};

export default AdditionalPost;