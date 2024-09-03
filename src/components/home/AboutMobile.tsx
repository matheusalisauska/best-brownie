import BrownieIcon from '@public/assets/BrownieIcon.png';
import BrowniCake from '@public/assets/photos/BrownieCake.jpg';
import StarIcon from '@public/assets/StarIcon.svg';
import Bolsonaro from '@public/assets/clients/bolsonaro.jpg'

import Image from 'next/image';
import { Truck } from 'lucide-react';

export const AboutMobile = () => {
    return (
        <div className='relative h-80 w-full bg-[#50241f] p-4'>
            <Image
                src={BrownieIcon}
                alt='Brownie Icon'
                className='absolute left-1/2 top-6 -translate-x-1/2 rotate-6'
                width={38}
            />
            <div className='mt-8 border-y border-white/40 py-5'>
                <p className='text-center text-white'>
                    Desde 2018 a Melhor Brownie faz com que todos se deslumbrem
                    com melhor brownie do mundo, feito com carinho, sempre
                    fresquinho, do nosso coração para o seu.
                </p>
            </div>
            <div className='mt-16 flex flex-col gap-4 px-6'>
                <div className='h-48 w-full overflow-hidden rounded-md'>
                    <Image
                        src={BrowniCake}
                        alt='Brownie Cake'
                        className='size-full scale-105 object-cover'
                    />
                </div>
                <h2 className='text-center text-2xl font-semibold text-[#bf5730]'>
                    Presente nos seus{' '}
                    <span className='bg-[#bf5730] px-2 pb-0.5 pt-1 font-medium text-white'>
                        melhores momentos
                    </span>
                </h2>
                <p className='text-center'>
                    Conheça nossos produtos sob encomenda e torne os moementos
                    com quem ama ainda mais especiais!
                </p>
                <button className='flex w-fit items-center gap-1 self-center rounded bg-[#bf5730] px-4 py-1 font-normal text-white'>
                    <Truck size={22} />
                    Faça sua encomenda
                </button>
            </div>
            <section className='flex flex-col gap-4 bg-white py-12'>
                <div className='h-[1px] w-[80%] self-center bg-black/20'></div>
                <div className='flex flex-col items-center'>
                    <Image
                        src={StarIcon}
                        alt='Star Icon'
                        className='self-center'
                        width={32}
                    />
                    <h2 className='text-center text-lg font-semibold text-gray-800'>
                        Nossos clientes recomendam
                    </h2>
                </div>

                <div className='flex w-full flex-col gap-2 rounded-md border border-gray-200 px-5 py-3 shadow-lg'>
                    <div className='flex flex-row items-center gap-2'>
                        <div className='size-10 rounded-full overflow-hidden'>
                            <Image src={Bolsonaro} alt='Bolsonaro'  className='object-cover size-full'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm font-medium'>
                                Matheus Alisauska
                            </p>
                            <p className='text-xs text-[#adadad]'>Cliente</p>
                        </div>
                    </div>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque mollitia iste, est esse minima omnis sequi. .
                    </p>
                </div>
                <div className='h-[1px] w-[80%] self-center bg-black/20 mt-6'></div>
            </section>
        </div>
    );
};
