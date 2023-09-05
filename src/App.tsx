import React, { useState } from 'react';
import Layout from './client/components/Layout/Layout';
import BlogInfo from './client/components/BlogInfo/BlogInfo';
import { } from '@mui/material';
import { ThemeModes, createTheme } from './Styles/theme';
import { ThemeProvider } from 'styled-components'
import MainPost from './client/components/MainPost/MainPost';
import PostPage from './client/components/PostPage/PostPage';
import { Provider } from 'react-redux';
import { store } from './client/Store';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { userRoutes } from './client/UserRoutes/userRoutes';
import PrivateRoute from './client/UserRoutes/PrivateRoute/PrivateRoute';

type User = {
  id: string,
  name: string,
  email: string,
}

export const AppContext = React.createContext<IAppContext>(
  {
    themeMode: ThemeModes.LIGHT,
    toggleTheme: () => { },
    user: null,
    authorizeUser: () => { },
  }
)



interface IAppContext {
  themeMode: ThemeModes,
  toggleTheme: (themeMode: ThemeModes) => void,
  user: User | null,
  authorizeUser: (user: User) => void,

}



function App() {
  const [user, setUser] = useState<User | null>(null)
  const [userTheme, setUserTheme] = useState(ThemeModes.LIGHT)
  const currentTheme = createTheme(userTheme)
  const handleChangeTheme = (themeMode: ThemeModes) => {
    setUserTheme(themeMode)
  }

  const authorizeUser = (userData: User) => {
    setUser(userData)
  }


  const context = {
    themeMode: userTheme,
    toggleTheme: handleChangeTheme,
    user,
    authorizeUser,

  }

  return (
    <AppContext.Provider value={context}>
      <Provider store={store}>
        <ThemeProvider theme={currentTheme}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<PostPage />} />
              {/* <BlogInfo id='99'></BlogInfo>
          <PostPage /> */}
              {userRoutes.map(({ path, id, Component, componentAdditionalProps, strict }) => {
                return <Route
                  key={id}
                  path={path}
                  element={!strict ? (<Component {...componentAdditionalProps} />) :
                    (<PrivateRoute>
                      <Component {...componentAdditionalProps} />
                    </PrivateRoute>)} />

              })}
            </Route>
          </Routes>
        </ThemeProvider>
      </Provider>
    </AppContext.Provider>


  );
}

export default App;
