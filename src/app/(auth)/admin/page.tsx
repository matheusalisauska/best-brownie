import { HeaderAdmin } from '@/components/admin/HeaderAdmin';
import { PrizeCarousel } from '@/components/admin/PrizeCarousel';
import { PrizesRedeemedList } from '@/components/admin/PrizeRedeemedList';
import { getPrizes } from '@/lib/actions';
import { Package, Send, Settings, User } from 'lucide-react';
import Link from 'next/link';

export default async function Admin() {
    const prizes = await getPrizes();
    //const prizesRedeemed = await getPrizesReedemed();

    return (
        <main className='max-w-screen flex h-screen flex-col gap-4 overflow-x-hidden bg-[#f5f7fa]'>
            <HeaderAdmin />
            <div className='flex flex-col gap-8 p-6'>
                <div className='grid grid-cols-4 gap-4'>
                    <Link href='/admin/send-points' className='flex flex-col items-center gap-2'>
                        <div className='rounded-full bg-[#FFE0EB] p-4'>
                            <Send color='#FF82AC' />
                        </div>
                        <p className='text-sm text-[#8696BB]'>Enviar</p>
                    </Link>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='rounded-full bg-[#FFF5D9] p-4'>
                            <Package color='#FFBB38' />
                        </div>
                        <p className='text-sm text-[#8696BB]'>Prêmios</p>
                    </div>
                    <Link
                        href={'/admin/users'}
                        className='flex flex-col items-center gap-2'
                    >
                        <div className='rounded-full bg-[#E7EDFF] p-4'>
                            <User color='#396AFF' />
                        </div>
                        <p className='text-sm text-[#8696BB]'>Clientes</p>
                    </Link>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='rounded-full bg-[#DCFAF8] p-4'>
                            <Settings color='#16DBCC' />
                        </div>
                        <p className='text-sm text-[#8696BB]'>Gerenciar</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-semibold text-[#333B69]'>
                        Meus Produtos
                    </h2>
                    <PrizeCarousel prizes={prizes} />
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-semibold text-[#333B69]'>
                        Resgatados recentemente
                    </h2>
                    <PrizesRedeemedList prizes={prizes} />
                </div>
            </div>
        </main>
    );
}
