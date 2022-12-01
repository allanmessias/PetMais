type IconProps = {
  name: string;
};

export default function Icon({ name }: IconProps) {
  return <span className="material-icons">{name}</span>;
}
