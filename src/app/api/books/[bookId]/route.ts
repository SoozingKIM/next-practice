import { books } from '../bookdata';

type Params = {
  params: {
    bookId: string;
  };
};

function getBook(bookId: string) {
  return books.find((book) => book.id === +bookId);
}

export async function GET(_request: Request, { params: { bookId } }: Params) {
  const book = books.find((book) => book.id === +bookId);
  return Response.json(book);
}

export async function PATCH(request: Request, { params: { bookId } }: Params) {
  const { title } = await request.json();
  const book = getBook(bookId);
  if (!book) {
    throw new Error('404 Not Found');
  }
  book.title = title;

  return Response.json(book);
}

export async function DELETE(
  _request: Request,
  { params: { bookId } }: Params
) {
  const idx = books.findIndex((book)=>)
  const book = books.find((book) => book.id === +bookId);
  return Response.json(book);
}
