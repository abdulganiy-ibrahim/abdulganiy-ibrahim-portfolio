import { BrandLogo, BrandName } from '../brand';
import MenuButton from './MenuButton';

export default function MobileNavbar() {

  return (
    <div className='flex items-center justify-between py-6 px-4 rounded-full shadow-soft lg:hidden'>

      <div className="flex items-center space-x-2">
        <BrandLogo />
        <BrandName />
      </div>

      <div>
        <MenuButton />
      </div>
    </div>
  )
}