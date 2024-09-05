'use server';

import { Prize, User } from '@/types';
import config from './env';
import { actionClient } from '@/hooks/safe-actions';
import { SendPointsSchema } from '@/types/schema';
import { flattenValidationErrors } from 'next-safe-action';

export const getPrizes = async (): Promise<Prize[]> => {
    const request = await fetch(`${config.API_URL}/prizes`, {
        headers: {
            Authorization: `Bearer ${config.API_TOKEN}`,
        },
        next: {
            revalidate: 60,
        },
    });

    const response = await request.json();
    return response;
};

export const getPrizesReedemed = async (): Promise<Prize[]> => {
    const request = await fetch(`${config.API_URL}/prizes-redeemed`, {
        headers: {
            Authorization: `Bearer ${config.API_TOKEN}`,
        },
        next: {
            revalidate: 60,
        },
    });

    const response = await request.json();
    return response;
};

export const getUsers = async (): Promise<User[]> => {
    const request = await fetch(`${config.API_URL}/company-user`, {
        headers: {
            Authorization: `Bearer ${config.API_TOKEN}`,
        },
        next: {
            revalidate: 60,
        },
    });

    const response = await request.json();
    return response;
};

export const getUser = async (id: string): Promise<User> => {
    const request = await fetch(
        `${config.API_URL}/company-user/${config.COMPANY_ID}/${id}`,
        {
            headers: {
                Authorization: `Bearer ${config.API_TOKEN}`,
            },
            next: {
                revalidate: 60,
            },
        }
    );

    const response = await request.json();
    return response;
};

export const getFile = async (fileKey: string) => {
    const request = await fetch(`${config.API_URL}/get-file/${fileKey}`, {
        method: 'GET',
        cache: 'force-cache',
        next: {
            revalidate: 3600,
            tags: ['file'],
        },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.API_TOKEN}`,
        },
    });

    const response = await request.text();

    return response;
};

export const sendPointsAction = actionClient
    .schema(SendPointsSchema, {
        handleValidationErrorsShape: (ve) =>
            flattenValidationErrors(ve).fieldErrors,
    })
    .action(async ({ parsedInput: { userId, points } }) => {
             const request = await fetch(`${config.API_URL}/company-user/add-points/${config.COMPANY_ID}/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config.API_TOKEN}`,
            },
            body: JSON.stringify({ points }),
        });
        console.log(await request.json())

        //TODO: Error handling

        return {message: 'Points sent successfully'};
    });
