import {
  composeRenderProps,
  Button as ReactAriaButton,
  type ButtonProps,
} from "react-aria-components";
import { type VariantProps } from "tailwind-variants";
import { buttonCoreVariants } from "./buttonCoreVariants";

interface ButtonCoreProps extends VariantProps<typeof buttonCoreVariants>, ButtonProps {}

// the one button to rule them all and in the dar2kness bind them
export function ButtonCore({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonCoreProps) {
  return (
    <ReactAriaButton
      {...props}
      className={composeRenderProps(className, (renderClassName, renderProps) =>
        buttonCoreVariants({
          ...renderProps,
          variant,
          size,
          className: renderClassName,
        })
      )}
    >
      {children}
    </ReactAriaButton>
  );
}
