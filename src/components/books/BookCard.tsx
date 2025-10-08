import type { Book } from "@/api/openapi-ts/types";
import { Card } from "@/components/ui/card";

export function BookCard({ book }: { book: Book }) {
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
