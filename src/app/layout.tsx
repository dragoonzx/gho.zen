'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WagmiConfig, createConfig, sepolia } from 'wagmi';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import classNames from 'classnames';

const chains = [sepolia];

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    // alchemyId: process.env.ALCHEMY_ID, // or infuraId
    // walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

    alchemyId: '',
    walletConnectProjectId: '',
    // Required
    appName: 'GHO.ZEN',

    // Optional
    appDescription: 'Your App Description',
    appUrl: 'https://family.co', // your app's url
    appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
    chains,
  })
);

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'GHO.ZEN',
  description: 'GHO.ZEN',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, 'bg-[#f7f7f7]')}>
        <WagmiConfig config={config}>
          <ConnectKitProvider>{children}</ConnectKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
