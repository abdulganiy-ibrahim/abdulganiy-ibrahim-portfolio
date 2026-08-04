import { DesktopNavbar, MobileNavbar} from './index';

export default function Header() {
  return (
    <header>
      <div className='lg:hidden'>
        <MobileNavbar />
      </div>

      <DesktopNavbar />
    
    </header>
  );
}