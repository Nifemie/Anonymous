import { Routes, Route, useNavigate } from 'react-router-dom';
import { MessagePage } from '../MessagePage';
import { useEffect } from 'react';

function Redirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/message/guest');
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Routes>
      <Route path="/message/:username" element={<MessagePage />} />
      <Route path="*" element={<Redirect />} />
    </Routes>
  );
}

export default App;
