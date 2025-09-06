import logo from "../assets/logo/logo.svg";

const Header = () => {
  return (
    <div className="w-full flex justify-center  items-center">
      <img src={logo} alt="Abdul Aziz" className="object-cover" />
    </div>
  );
};

export default Header;
