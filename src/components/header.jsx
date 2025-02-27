import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from './buttons';
import Menu from './Menu';
import logo from '/Theme=dark.png';


// Imports ends here
// ------------=======================-----------
const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 flex justify-between items-center w-full px-[15px] md:px-[30px] lg:px-[60px] py-[10px] border-b border-solid bg-white">
      {/* Logo section */}
      <Link onClick={() => window.location.href = '/'}>
        <div className="flex items-center justify-center p-[5px]">
          <img src={logo} alt='Alpha training lab logo' className="w-[70px] h-[40px] md:w-[80px] md:h-[50px] object-contain" />
        </div>
      </Link>
      {/* Navigation and buttons */}
      <div className="flex items-center gap-[2px] md:gap-[20px]">
        {/* Desktop navigation */}
        <nav className="hidden lg:flex lg:items-center gap-[20px]">
          <Link to="/" className='hover:text-primary'>Home</Link>
          <Link to="/about" className='hover:text-primary'>About</Link>
          <Link to='/testimonial' className='hover:text-primary'>Testimonials</Link>
          <Link to="/Key players" className='hover:text-primary'>Key Players</Link>
          <Link to='/blog' className='hover:text-primary'>Blog</Link>
          <Link to='/maintenance' className='hover:text-primary'>Reach out</Link>
        </nav>

        {/* Auth Buttons - only show if not logged in */}
        {!isLoggedIn && (
          <div className="flex items-center">
            <SecondaryButton onClick={() => window.location.href = '/login'} className="border-0 hover:border hover:border-solid hover:border-grey-900">
              Log In
            </SecondaryButton>
            <div className="hidden md:block">
              <PrimaryButton onClick={() => window.location.href = '/ICredirection'}>
                Become a member
              </PrimaryButton>
            </div>
          </div>
        )}

        {/* Hamburger Menu for Mobile */}
        <div className="menuicon flex flex-col justify-between h-6 w-8 lg:hidden p-[2px]" onClick={toggleMenu}>
          <span className="w-full h-[2px] bg-black"></span>
          <span className="w-full h-[2px] bg-black"></span>
          <span className="w-full h-[2px] bg-black"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} isLoggedIn={isLoggedIn} />
    </header>
  );
};

export default Header;