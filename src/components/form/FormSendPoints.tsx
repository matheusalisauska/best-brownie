'use client';

import { CircleAlert, Coins } from 'lucide-react';
import { SelectUser } from '../admin/SelectUser';
import { Input } from '../ui/input';
import { useState } from 'react';
import { Button } from '../ui/button';
import { useAction } from 'next-safe-action/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendPoints, SendPointsSchema } from '@/types/schema';
import { useForm } from 'react-hook-form';
import { sendPointsAction } from '@/lib/actions';
import { Form, FormControl, FormField, FormItem } from '../ui/form';

interface FormSendPointsProps {
    users: { label: string; value: string }[];
}

export const FormSendPoints = ({ users }: FormSendPointsProps) => {
    const { execute, result, isExecuting } = useAction(sendPointsAction);

    const form = useForm<SendPoints>({
        resolver: zodResolver(SendPointsSchema),
        mode: 'onChange',
        defaultValues: {
            userId: '',
            points: 0,
        },
    });

    const [step, setStep] = useState<number>(1);
    const [userId, setUserId] = useState<string>('');

    async function onSubmit() {
        execute({ userId: userId, points: form.getValues().points.toString() });
        form.reset(form.getValues());
    }

    return (
        <Form {...form}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit(onSubmit)();
                }}
            >
                <div className='flex flex-col gap-4 px-4'>
                    <div className='flex items-start justify-start gap-4'>
                        <div className='rounded-full bg-[#EDEDFE] px-3 py-1 font-bold text-[#605dec]'>
                            1
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-base font-semibold'>
                                Selecione o usuário
                            </h3>
                            <SelectUser
                                users={users}
                                setStep={setStep}
                                setUserId={setUserId}
                            />
                        </div>
                    </div>
                    {step === 2 && (
                        <div className='flex items-start justify-start gap-4'>
                            <div className='rounded-full bg-[#EDEDFE] px-3 py-1 font-bold text-[#605dec]'>
                                2
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-base font-semibold'>
                                    Selecione a quantidade de pontos
                                </h3>
                                <FormField
                                    control={form.control}
                                    name='points'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type='number'
                                                    inputMode='numeric'
                                                    icon={
                                                        <Coins
                                                            size={16}
                                                            color='#718EBF'
                                                        />
                                                    }
                                                    placeholder='Digite a quantidade de pontos'
                                                    className='max-w-[240px]'
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <div className='flex items-center gap-1 text-sm text-[#808080]'>
                                    <CircleAlert size={14} className='mb-.5' />
                                    Você está enviando{' '}
                                    <span className='font-bold text-[#605dec]'>
                                        {form.watch().points || 0}
                                    </span>{' '}
                                    pontos.
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='absolute bottom-8 left-0 w-full px-8'>
                        <Button
                            variant={'outline'}
                            className='h-fit w-full self-center border-none bg-[#605dec] px-6 py-2 text-sm font-bold text-white'
                        >
                            Enviar pontos
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};
