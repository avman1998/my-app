// type HeaderProps = {
//   title: string;
//   desc: string;
// };

interface HeaderProps {
  title: string;
  desc: string;
  teacher?: string;
}

const Header = ({ title, desc, teacher = "Srikant" }: HeaderProps) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>{teacher}</p>
    </>
  );
};

export default Header;
