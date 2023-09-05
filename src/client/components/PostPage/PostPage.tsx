import React from 'react';
import { AdditionalWrapper, MainPostsWrapper, PostWrapper } from './styles';
import MainPost from '../MainPost/MainPost';
import AdditionalPost from '../AdditionalPost/AdditionalPost';

const PostPage = () => {
    return (
        <div>
            <p></p>
            <div></div>


            <MainPostsWrapper>

                <div>
                    <PostWrapper>
                        <MainPost id='1' />
                        <MainPost id='2' />
                    </PostWrapper>
                    <PostWrapper>
                        <MainPost id='3' />
                        <MainPost id='4' />
                    </PostWrapper>
                    <PostWrapper>
                        <MainPost id='5' />
                        <MainPost id='6' />
                    </PostWrapper>
                </div>
                <div>

                    <AdditionalWrapper>
                        <AdditionalPost id='1' />
                        <AdditionalPost id='7' />
                    </AdditionalWrapper>
                    <AdditionalWrapper>
                        <AdditionalPost id='8' />
                        <AdditionalPost id='9' />
                    </AdditionalWrapper>
                    <AdditionalPost id='10' />
                    <AdditionalPost id='11' />
                </div>

            </MainPostsWrapper>


            <div></div>
        </div>
    );
};

export default PostPage;