'use client';

import { useGetUser } from '@/hooks/use-get-user';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Combobox } from '../ui/combobox';
import { SelectedUserCard } from './SelectedUserCard';

interface SelectUserProps {
    users: { label: string; value: string }[];
    setStep: (step: number) => void;
    setUserId: (userId: string) => void;
}

export const SelectUser = ({ users, setStep, setUserId }: SelectUserProps) => {
    const [selectedUser, setSelectedUser] = useState<string>('');
    const { data } = useGetUser(selectedUser);

    useEffect(() => {
        selectedUser ? (setStep(2), setUserId(selectedUser)) : setStep(1);
    }, [selectedUser, setStep]);
    return (
        <div className='flex flex-col gap-4'>
            <Combobox
                setSelected={setSelectedUser}
                buttonClassName='text-[#8BA3CB] gap-1 w-full'
                icon={<Search color='#718EBF' size={18} />}
                options={users}
                placeholder='Procure pelo nome'
            />
            {selectedUser && data && <SelectedUserCard userData={data} />}
        </div>
    );
};
