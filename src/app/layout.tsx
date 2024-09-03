import '@/styles/globals.css';
import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import Header from '@/components/Header';
import Provider from '@/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Melhor Brownie',
    description: 'APP_DESCRIPTION',
    manifest: '/manifest.json',
    icons: [],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='pt-BR' className={inter.className}>
            <head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
                <link rel='manifest' href='/manifest.json' />
                <meta
                    name='apple-mobile-web-app-status-bar-style'
                    content='black-translucent'
                />
                <meta
                    name='viewport'
                    content='initial-scale=1, viewport-fit=cover'
                />
                <meta property='og:image' content='<generated>' />
                <meta property='og:image:type' content='<generated>' />
                <meta property='og:image:width' content='<generated>' />
                <meta property='og:image:height' content='<generated>' />
            </head>
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
