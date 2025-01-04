import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container px-8 mx-auto ",
        props.large ? " max-w-7xl" : " max-w-screen-lg",
        !props.alt && "py-5",
        props.className
      )}>
      {props.children}
    </div>
  );
}
