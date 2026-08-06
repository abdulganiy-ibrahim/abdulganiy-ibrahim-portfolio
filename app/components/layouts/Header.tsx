import { DesktopNavbar, MobileNavbar} from './index';

export default function Header() {
  return (
    <div className='w-full'>
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
}