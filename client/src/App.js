import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashBoard, Landing, Register, Error } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/register" element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
