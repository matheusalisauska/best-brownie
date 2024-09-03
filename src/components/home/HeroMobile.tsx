import Image from 'next/image';
import BrownieBox from '@public/assets/photos/brownie-box.jpg';
import ChocolateWave from '@public/assets/ChocolateWave.svg';
import Link from 'next/link';

export const HeroMobile = () => {
    return (
        <>
            <div className='relative space-y-0'>
                <h1 className='text-center text-3xl font-bold text-[#bf5730]'>
                    Melhor Brownie
                </h1>
                <p className='text-center text-sm'>
                    Porque você merece o Melhor!
                </p>
            </div>
            <section className='relative flex flex-col items-center gap-4 p-4'>
                <div className='flex h-72 w-5/6 flex-col gap-4 overflow-hidden rounded-[8px]'>
                    <Image
                        src={BrownieBox}
                        alt='Brownie Box'
                        className='w-full object-cover'
                    />
                </div>
                <p className='text-center text-sm font-light text-white'>
                    Os melhores produtos a pronta entrega e sob encomenda
                </p>
                <Link href='/cardapio'>
                    <button className='rounded bg-[#bf5730] px-4 py-1'>
                        <h2 className='text-start text-white'>Ver Produtos</h2>
                    </button>
                </Link>
                <Image
                    src={ChocolateWave}
                    alt='Chocolate Wave'
                    className='bottom0 absolute -z-10'
                />
            </section>
        </>
    );
};
