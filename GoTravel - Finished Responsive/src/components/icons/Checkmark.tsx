export default function Checkmark(props: {
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      className={props.className}
    >
      <path
        fill={props.fill}
        d="m0 5.634.884-.884 2.244 2.243L9.12 1l.883.884L3.127 8.76 0 5.634Z"
      />
    </svg>
  );
}
