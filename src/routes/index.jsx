import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/home';
import Project from '../pages/project';
import Stack from '../pages/stack';
import Blog from '../pages/blog';
import NotFound from '../pages/not-found';
import MainLayout from '../layouts/main';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index:true,
                element: <Home />,
            },
            {
                path:'project',
                element: <Project />,
            },
            {
                path:'stack',
                element: <Stack />,
            },
            {
                path:'blog',
                element: <Blog />,
            },
            {
                path:'*',
                element: <NotFound />,
            }
        ]
    },

])

export default routes