import Link from 'next/link';

export default function Api() {
  return (
    <div className='flex justify-center'>
      <ul>
        <li>
          <Link href="/api/books">Books</Link>
          <Link href="/api/books">Books1</Link>
        </li>
      </ul>
    </div>
  );
}
