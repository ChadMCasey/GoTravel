interface HeaderProps {
  children: Array<React.ReactElement>;
}

export default function Header(props: HeaderProps) {
  return <header className="pb-23 px-24 pt-8">{props.children}</header>;
}
