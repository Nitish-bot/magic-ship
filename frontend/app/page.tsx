import Image from 'next/image';
import Background from '@/components/Background';
import textLogo from '@/public/logo-w-text.svg';
import { ConnectWalletMenu } from '@/solana/ConnectWalletMenu';

export default function Home() {
  return (
    <main>
      <div className='relative flex justify-between items-center gap-12 w-[80vw] py-2 pl-4 pr-8 mt-4 mx-auto bg-white/10 backdrop-blur-lg rounded-4xl z-2'>
        <div>
          <Image src={textLogo} alt="logo" className='h-16 w-auto'></Image>
        </div>
        <ConnectWalletMenu>
          Connect Wallet
        </ConnectWalletMenu>
      </div>
      <Background />
    </main>
  );
}
