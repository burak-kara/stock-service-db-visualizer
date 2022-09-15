import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const links = [
    { to: "devices", text: "Devices" },
    { to: "vendors", text: "Vendors" },
  ];

  const renderLinks = () =>
    links.map(({ to, text }) => (
      <li
        className="w-1/2 h-2/3 hover:bg-red-100 rounded cursor-pointer"
        key={to}
      >
        <Link
          className="w-full h-full flex justify-center items-center "
          to={to}
        >
          {text}
        </Link>
      </li>
    ));

  return (
    <div>
      <nav className="w-screen h-12 bg-red-50">
        <ul className="w-1/4 h-full flex justify-around items-center">
          {renderLinks()}
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default Layout;
