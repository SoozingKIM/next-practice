import { getTodo } from '@/app/lib/todo';

export default async function Todo({ params }: { params: { todoId: string } }) {
  const { todoId } = params;
  const todo = await getTodo(todoId);
  return (
    <>
      <h2>Todo: #{todoId} </h2>
      <p><strong>{todo.title}</strong></p>
      <p>completed: {todo.completed ? "done":"not yet"}</p>
    </>
  );
}
