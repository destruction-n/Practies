import NotFound from "../NotFound/NotFound"
import BlogInfo from "../components/BlogInfo/BlogInfo"
import LoginPage from "../components/LoginPage/LoginPage"
import MainPost from "../components/MainPost/MainPost"
import PostPage from "../components/PostPage/PostPage"

type UserRoutes = {
    id: string | number,
    path: string,
    Component: React.FC<any>,
    componentAdditionalProps?: any,
    index?: boolean,
    strict?: boolean,
    title?: string,
}


export const userRoutes: UserRoutes[] = [

    {
        id: 2,
        path: '/post/:postId',
        Component: BlogInfo,
        componentAdditionalProps: { id: '99' },
        strict: true,
        title: 'Post',
    },
    {
        id: 3,
        path: '/log-in',
        Component: LoginPage,
        title: 'Log In',
    },
    {
        id: 324,
        path: '*',
        Component: NotFound,
    }

]