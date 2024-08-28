import { books } from './bookdata';

export async function GET() {
  return Response.json(books);
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
