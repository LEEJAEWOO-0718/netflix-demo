import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import MoviePage from './pages/Movies/MoviePage';
import Homepage from './pages/Homepage/Homepage';
import MovieDetailPage  from './pages/MovieDetail/MovieDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from './pages/NotFoundpage/NotFoundPage';

// 홈페이지 /
// 영화페이지(검색) /movie
// 영화상세페이지 /movies/:id
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="movies">
          <Route index element={<MoviePage/>}/>
          <Route path=":id" element={<MovieDetailPage/>}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
