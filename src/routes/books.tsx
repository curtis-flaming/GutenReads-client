import { getBooksOptions } from "@/api/endpoints/books/options";
import { BookCard } from "@/components/books/BookCard";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: books } = useQuery(getBooksOptions());

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {books?.map((book) => (
        <BookCard book={book} />
      ))}
    </div>
  );
}
