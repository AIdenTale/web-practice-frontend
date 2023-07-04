import General from '../pages/general'
import { Routes, Route, Navigate } from 'react-router-dom'

function AppRouter() {
    return (
      <Routes>
        <Route path='/' element={<General />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    );
  }

export default AppRouter;