import { FormSendPoints } from '@/components/form/FormSendPoints';
import { Separator } from '@/components/ui/separator';
import { getUsers } from '@/lib/actions';

export default async function SendPoints() {
    const users = await getUsers();
    const transformedUsers = users.map((user) => ({
        label: user.user.name,
        value: user.user.id,
    }));

    return (
        <main className='flex h-full min-h-screen flex-col gap-4 bg-[#f8f9fb] pt-4 relative'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col p-4'>
                    <h2 className='text-2xl font-bold text-[#1A1A1A]'>
                        Enviar pontos
                    </h2>
                    <h3 className='text-sm text-[#808080]'>
                        Selecione um usuário para receber os pontos
                    </h3>
                    <Separator className='mt-4 bg-[#E4E4EF]' />
                </div>
                <FormSendPoints users={transformedUsers} />
            </div>
        </main>
    );
}
