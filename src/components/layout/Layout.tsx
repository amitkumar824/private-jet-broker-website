import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNav from './BottomNav';
import Atmosphere from '../ui/Atmosphere';
import CustomCursor from '../ui/CustomCursor';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative cursor-none">
      <div className="grain" />
      <CustomCursor />
      <Atmosphere />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      <Footer />
      </main>
      <BottomNav />
    </div>
  );
}
