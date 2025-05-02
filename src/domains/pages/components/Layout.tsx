import type { ReactNode } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout(): ReactNode {
  return (
    <div className='bg-light-surface'>
        <TopBar />
        <Outlet/>
        <Footer/>
    </div>
  );
}