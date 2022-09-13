import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <button onClick={toggleTheme}>toggle</button>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPage />}/>
                <Route path={'/'} element={<MainPage />}/>
            </Routes>
        </Suspense>        
    </div>
  )
}
