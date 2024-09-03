import { Menu, Search } from 'lucide-react';
import { Input } from '../ui/input';

export const HeaderAdmin = () => {
    return (
        <header className='flex flex-col gap-4 bg-white p-6'>
            <div className='mt-0 flex items-center justify-between'>
                <Menu />
                <p className='font-semibold text-xl'>Home</p>
                <div className='size-10 rounded-full bg-purple-400'></div>
            </div>
            <Input
                icon={<Search color='#718EBF' />}
                variant={'default'}
                className='rounded-3xl border-none py-4 pl-4'
                placeholder='Procure por algo'
            />
        </header>
    );
};
