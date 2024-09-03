import { Prize } from '@/types';
import { PrizeReedemedCard } from './PrizeReedemedCard';

interface PrizesRedeemedListProps {
    prizes: Prize[];
}

export const PrizesRedeemedList =  ({
    prizes,
}: PrizesRedeemedListProps) => {
    return (
        <section className='bg-white flex flex-col gap-4 p-5 rounded-2xl'>
            {prizes.map((prize, index) => (
                <div key={index} className='flex gap-2'>
                    <PrizeReedemedCard prize={prize} />
                </div>
            ))}
        </section>
    );
};
