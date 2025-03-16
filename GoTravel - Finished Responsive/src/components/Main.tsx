interface MainProps {
  children: Array<React.ReactElement>;
}

export default function Main(props: MainProps) {
  return <main>{props.children}</main>;
}
