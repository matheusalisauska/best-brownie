import { MobileMenu } from './MobileMenu';

const Header = () => {
    return (
        <header className='fixed top-0 z-50 flex w-full items-center justify-between  bg-white px-6 py-5'>
            <h1 className='font-semibold text-[#50251f]'>Melhor Brownie</h1>
            <MobileMenu /> 
        </header>
    );
};

export default Header;
