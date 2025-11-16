import '@/styles/index.css';

export const metadata = {
  metadataBase: new URL('https://frooty.ninja/magic-ship'),
  title: 'Magic Ship',
  description: 'Private game of battleships on Solana using MagicBlock',
  openGraph: {
    title: 'Magic Ship',
    description: 'Private game of battleships on Solana using MagicBlock',
    url: 'https://frooty.ninja/magic-ship',
    images: ['/icon.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body className='bg-black'>{children}</body>
      </html>
    </>
  );
}
