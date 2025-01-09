import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex w-full h-[45px] bg-red-800 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.249)]">
      <ul className="list-none flex w-full my-2 items-center justify-around">
        <li>
          <Link
            href="/"
            className="no-underline text-white hover:text-gray-400"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href="/nosotros"
            className="no-underline text-white hover:text-gray-400"
          >
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link
            href="/contacto"
            className="no-underline text-white hover:text-gray-400"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
