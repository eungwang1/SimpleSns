import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Detail from './Detail';
import Home from './Home';
import Post from './Post';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/community/list" />} />
        <Route path="/community/list" element={<Home />} />
        <Route path="/community/post/:post_pk" element={<Detail />} />
        <Route path="/community/post/new" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
