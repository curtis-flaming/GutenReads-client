import { tv } from "tailwind-variants";

export const buttonCoreVariants = tv({
  variants: {
    size: {
      sm: "p-0",
    },
    variant: {
      green: "bg-green-500",
      blue: "bg-blue-500",
    },
    isPressed: {
      true: "bg-pink-500",
    },

    default: {
      true: "p-2",
    },
  },
  defaultVariants: {
    default: true,
  },
});
