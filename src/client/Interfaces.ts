export interface IFullPost {
    id: string;
    image?: string;
    text?: string;
    date?: string;
    lesson_num?: number;
    title?: string;
    description?: string;
    author?: number;
}

export interface IUserInfoProps {
    name?: string;
    userName?: string;
    id: string;
    email?: string;
    children?: string;
}
