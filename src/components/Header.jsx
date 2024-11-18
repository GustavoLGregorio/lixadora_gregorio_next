import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-[4rem] fixed top-0 w-full bg-[gray]">
      <Link href="/" className="uppercase">
        ICON lixadora gregorio
      </Link>
    </header>
  );
}
