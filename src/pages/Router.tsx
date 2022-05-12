import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DetailPage from './DetailPage';
import Home from './Home';
import PostPage from './PostPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/community/list" />} />
        <Route path="/community/list" element={<Home />} />
        <Route path="/community/post/:post_pk" element={<DetailPage />} />
        <Route path="/community/post/new" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
