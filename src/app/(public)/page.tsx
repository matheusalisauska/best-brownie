import { AboutMobile } from '@/components/home/AboutMobile';
import { HeroMobile } from '@/components/home/HeroMobile';

export default function Page() {
    return (
        <main className='mt-24 flex flex-col'>
            <HeroMobile  />
            <AboutMobile />
        </main>
    );
}
