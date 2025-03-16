interface HeaderProps {
  children: Array<React.ReactElement>;
}

export default function Header(props: HeaderProps) {
  return <header>{props.children}</header>;
}
