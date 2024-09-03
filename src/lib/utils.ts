import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';
import { maskCurrency, maskPhone } from './masks';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export function formatCurrency(valor: number = 0): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valor);
}

export const handlePhoneChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    const formattedValue = maskPhone(value);
    event.target.value = formattedValue;
};

export const handleCurrencyChange = (event: { target: any }) => {
    const { value } = event.target;
    const formattedValue = maskCurrency(value);
    event.target.value = formattedValue;
};
