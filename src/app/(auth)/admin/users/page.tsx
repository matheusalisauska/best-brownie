import { UserCard } from '@/components/admin/UserCard';
import { getUsers } from '@/lib/actions';
import { ListFilter } from 'lucide-react';

export default async function AdminUsers() {
    const users = await getUsers();

    return (
        <main className='flex flex-col gap-4 bg-[#f8f9fb] h-full min-h-screen pt-4'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4 p-4'>
                    <h2 className='text-2xl font-bold text-[#1A1A1A]'>
                        Meus clientes
                    </h2>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-[#808080]'>
                            {users.length} de {users.length} clientes
                        </p>
                        <ListFilter size={20} />
                    </div>
                </div>
                {users.map((user, index) => (
                    <UserCard key={index} userData={user} />
                ))}
                
            </div>
        </main>
    );
}
