'use client';
import { User } from '@/types';
import { Coins, Pencil, Trash2, User as UserIcon } from 'lucide-react';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { useGetFile } from '@/hooks/use-get-file';

interface UserCardProps {
    userData: User;
}

export const UserCard =  ({ userData }: UserCardProps) => {
    const { user, points } = userData;
    const {data} = useGetFile(user.profilePicture || '');

    return (
        <div className='flex flex-col gap-4 bg-white p-4 h-fit'>
            <div className='flex items-center gap-2'>
                {data ? (
                    <div className='flex size-10 items-center justify-center overflow-hidden rounded-full bg-gray-200'>
                        <UserIcon size={20} className='opacity-40' />
                    </div>
                ) : (
                    <Image
                        src={data || ''}
                        alt='User Profile Picture'
                        width={40}
                        height={40}
                    />
                )}
                <div className='flex flex-col'>
                    <h2 className='text-lg font-medium leading-4'>
                        {user.name}
                    </h2>
                    <p className='text-sm text-[#808080]'>{user.role}</p>
                </div>
            </div>
            <Separator className='bg-[#E4E4EF]' />
            <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between text-sm'>
                    <p className='text-[#808080] '>Pontos</p>
                    <div className='flex gap-2 font-semibold items-center rounded-xl bg-[#EDEDFE] p-2 text-[#605DEC]'>
                        <Coins size={16} />
                        {points}
                    </div>
                </div>
                <div className='flex items-center justify-between text-sm'>
                    <p className='text-[#808080] '>Telefone</p>
                    <p>{user.phone}</p>
                </div>
                <div className='flex items-center justify-between text-sm'>
                    <p className='text-[#808080] '>Email</p>
                    <p>{user.email}</p>
                </div>
                <div className='flex gap-2 items-center justify-end'>
                        <Trash2 color='#BDBCDB'/>        
                        <Pencil color='#BDBCDB'/>          
                </div>
            </div>
        </div>
    );
};
