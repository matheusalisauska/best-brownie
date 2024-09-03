import { getFile } from '@/lib/actions';
import { Prize } from '@/types';
import Image from 'next/image';

interface PrizeAdminCardProps {
    prize: Prize;
}

export const PrizeReedemedCard = async ({ prize }: PrizeAdminCardProps) => {
    const prizeImage = await getFile(prize.fileKey);

    return (
        <div className='flex flex-row items-center gap-2 w-full'>
            <div className='size-12 overflow-hidden rounded-2xl'>
                <Image
                    src={prizeImage}
                    alt='Chocolate Cup'
                    width={64}
                    height={64}
                    className='size-full object-cover'
                />
            </div>
            <div className='flex items-center justify-between flex-grow'>
                <div className='flex flex-col w-full'>
                    <p className='font-medium text-[#333B69]'>{prize.title}</p>
                    <p className='text-xs text-[#718EBF]'>25 jan 2021</p>
                </div>
                <p className='text-[#16DBAA] text-xs font-medium'>+$780</p>
            </div>
        </div>
    );
};
