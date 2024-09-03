import { getFile } from '@/lib/actions';
import { Prize } from '@/types';
import Image from 'next/image';

interface PrizeAdminCardProps {
    prize: Prize;
}

export const PrizeAdminCard = async ({ prize }: PrizeAdminCardProps) => {
    const prizeImage = await getFile(prize.fileKey);

    return (
        <div className='flex w-[170px] flex-col gap-2 rounded-lg bg-white p-4'>
            <div className='w-full h-[76px] rounded overflow-hidden'>
                <Image
                    src={prizeImage}
                    alt='Chocolate Cup'
                    width={256}
                    height={256}
                    className=' object-cover size-full'
                />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='font-semibold text-[#232323]'>{prize.title}</p>
                <p className='text-sm text-[#718EBF]'>Pontos: {prize.price}</p>
            </div>
        </div>
    );
};
