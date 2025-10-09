import { ButtonCore } from "@/component-custom/core/button-core";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/components")({
  component: RouteComponent,
});

function RouteComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-20">
      <div className="border-2 grid-cols-4 gap-3 p-10">
        <ButtonCore
          onPress={() => setCount((prev) => prev + 1)}
          variant="blue"
          //   className={"bg-amber-400"}
          //   isDisabled
        >
          Button: {count}
        </ButtonCore>
      </div>
    </div>
  );
}
