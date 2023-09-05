import React, { useState, FC, useEffect } from 'react';
import { BlogImg, BlogText, BlogTextWrapper, ImgWrapper, LikeDislakeWrapper, MainBlogTitle, MainWrapperBlog, NameBlog, NameDateWrapper, WrapperForTextIcons } from './styles';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { IFullPost } from '../../Interfaces';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { useParams } from 'react-router-dom';


const getPostById = async (postId: string): Promise<any> => {
    const response = fetch(`https://studapi.teachmeskills.by/blog/posts/${postId}/`)

    return (await response).json();
}


const BlogInfo: FC<IFullPost> = () => {

    const [post, setPost] = useState<IFullPost>();
    useEffect(() => {
        getPostById(postId!).then(post => setPost(post))
    }, [])
    const { postId } = useParams()




    return (
        <div>
            {post ?
                <MainWrapperBlog>
                    <NameDateWrapper>
                        <NameBlog>{post?.title}</NameBlog>
                        <p>{post?.date}</p>
                    </NameDateWrapper>
                    <MainBlogTitle>{post?.title}</MainBlogTitle>
                    <ImgWrapper>
                        <BlogImg src={post.image}></BlogImg>
                    </ImgWrapper>
                    <BlogTextWrapper>
                        <BlogText>
                            {post.text}
                        </BlogText>
                        <WrapperForTextIcons>
                            <LikeDislakeWrapper><ThumbUpOutlinedIcon></ThumbUpOutlinedIcon></LikeDislakeWrapper>
                            <LikeDislakeWrapper><ThumbDownOffAltOutlinedIcon></ThumbDownOffAltOutlinedIcon></LikeDislakeWrapper>
                        </WrapperForTextIcons>
                    </BlogTextWrapper>
                </MainWrapperBlog> : null}
        </div>

    );
};

export default BlogInfo;