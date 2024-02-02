import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        alt="logo"
        src="/verve-logo-landscape.svg"
        width={512}
        height={512}
      />
    </main>
  );
}
