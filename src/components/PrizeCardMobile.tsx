import { getFile } from '@/lib/actions';
import { Prize } from '@/types';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface PrizeCardMobileProps {
    prize: Prize;
}

export const PrizeCardMobile = async ({ prize }: PrizeCardMobileProps) => {
    const prizeImage = await getFile(prize.fileKey);
    return (
        <div className='flex w-full gap-3'>
            <Image
                src={prizeImage}
                alt='Chocolate Cup'
                width={112}
                height={150}
                className='rounded-l-lg'
            />
            <div className='flex w-full flex-col justify-center gap-2 py-1'>
                <div className='flex w-full flex-col gap-1'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-base font-semibold text-gray-800'>
                            {prize.title}
                        </h3>
                        <div className='flex flex-row gap-1'>
                            <Star size={14} fill='#ffca28' color='#ffca28' />
                            <Star size={14} fill='#ffca28' color='#ffca28' />
                            <Star size={14} fill='#ffca28' color='#ffca28' />
                        </div>
                    </div>
                    <p className='text-xs text-[#bf5730]'>COPOS RECHEADOS</p>
                    <p className='text-sm'>{prize.price} pontos</p>
                    <button className='w-full rounded bg-[#bf5730] text-white'>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};
