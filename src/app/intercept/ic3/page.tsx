import Link from 'next/link';

export default function Ic3() {
  return (
    <>
      <h2 className="2xl">IC3</h2>
      <div>
        <Link href="/intercept/ic1">GO IC1</Link>
      </div>
      <div>
        <Link href="/intercept/ic2">GO IC2</Link>
      </div>
    </>
  );
}
