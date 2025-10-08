import { getBooksOptions } from "@/api/endpoints/books/options";
import type { components } from "@/api/openapi-ts/generated-schema";
import { Card } from "@/components/ui/card";
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

function BookCard({ book }: { book: components["schemas"]["Book"] }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{book.title}</Card.Title>
      </Card.Header>
      <Card.Content>
        <div className="flex gap-2">
          <p className="flex-1">{book.summaries?.[0]}</p>
          <div className="">
            <img className="w-40" src={book.imageUrl} alt={book.title} />
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
