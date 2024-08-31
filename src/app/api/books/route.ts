import { NextRequest, NextResponse } from 'next/server';
import { books } from './bookdata';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q');

  const reqHeaders = new Headers(req.headers);
  const authorization = reqHeaders.get('Authorization');
  const userAgent = reqHeaders.get('User-Agent');

  // console.log(q);
  // console.log(authorization);
  // console.log(userAgent);

  const response = NextResponse.json(
    {
      books: q ? books.filter((book) => book.title.includes(q)) : books,
    },
    {
      headers: { 'Custom-Cookie': userAgent!, 'Set-Cookie': 'sid=1123' },
    }
  );

  response.cookies.set('nextjs', 'xx');
  cookies().set('otherCookies', 'oo', {
    maxAge: 300,
    httpOnly: true,
    secure: false,
  });

  return response;
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('body', body);

  const { title, writer = 'Sico' } = body;
  const newer = { id: books.length + 1, title, writer };
  return new Response(JSON.stringify(newer), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
