import { Prize } from '@/components/prize';
import { PrizeCardMobile } from '@/components/PrizeCardMobile';
import { getPrizes } from '@/lib/actions';

export default async function Cardapio() {
    const prizes = await getPrizes();
    return (
        <main className='mt-24 flex flex-col gap-12 p-4 sm:px-8'>
            <div className='space-y-1'>
                <h1 className='text-center text-3xl font-bold text-[#bf5730] sm:text-red-500'>
                    Nosso Cardápio
                </h1>
                <p className='text-center text-sm '>
                    Os Melhores Produtos à Pronta Entrega!
                </p>
            </div>
            <Prize.Container title='Copos Recheados '>
                <Prize.WrapperList>
                    {prizes.map((prize, index) => (
                        <PrizeCardMobile key={index} prize={prize} />
                    ))}
                </Prize.WrapperList>
            </Prize.Container>
        </main>
    );
}
