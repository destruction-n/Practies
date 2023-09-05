import React, { FC, useContext } from 'react';
import { IUserInfoProps } from '../../Interfaces';
import { MainUserInfoWrapper, UserInfoWrapper, UserInitialsWrapper, UserNameText } from './styles';
import UserIcon from '../UserIcon/UserIcon';
import { FormControlLabel, Switch } from '@mui/material';
import App, { AppContext } from '../../../App';
import { Link } from 'react-router-dom';



const getUsers = async (userId: string): Promise<any> => {
    return (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/`)).json()
}



const UserInfo: FC<IUserInfoProps> = ({ id }) => {
    const { user } = useContext(AppContext)

    // React.useEffect(() => { getUsers(id).then(user => setUser(user)) }, [])

    const initials = user?.name?.split(' ').reduce((initials, nameOrSurname) => initials + nameOrSurname[0].toUpperCase(), '')
    console.log(user);

    return (

        <div>
            <div onClick={() => {
                console.log(123);
            }}>
                {user ? <UserInfoWrapper>
                    <MainUserInfoWrapper>
                        <UserInitialsWrapper>{initials}</UserInitialsWrapper>
                        <UserNameText>{user?.name}</UserNameText>
                    </MainUserInfoWrapper>
                </UserInfoWrapper> : (<Link to='/log-in'><UserIcon /></Link>)}

            </div>
        </div>
    );
};

export default UserInfo;