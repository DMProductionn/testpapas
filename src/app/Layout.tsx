import { Outlet } from 'react-router-dom';
import { Footer } from '../widgets/footer/Footer';

export const Layout: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col max-w-[1207px] px-[16px] mx-auto">
        <img
          className="-top-[70px] z-[-1] -left-[16px] absolute max-w-[900px] w-full h-auto"
          src="/effect.webp"
          alt="effect"
        />

        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};
