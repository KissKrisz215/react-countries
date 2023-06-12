import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/:id" element={<ProjectDetailPage />}></Route>
    </Routes>
  );
}

export default App;
