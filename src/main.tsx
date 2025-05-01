import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-light-primary-container'>
      <ThreeDRotation/>
    </div>
  </StrictMode>,
)
