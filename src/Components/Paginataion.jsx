import React from "react";
import { useNavigate } from "react-router-dom";
import { MdFirstPage, MdChevronLeft, MdChevronRight, MdLastPage } from "react-icons/md";

const Paginataion = ({ pagee, limit, Navito }) => {
  const navigate = useNavigate();
  const numberpage = +limit;
  let pagelist = [];
  for (let i = 0; i < numberpage; i++) {
    pagelist.push(i + 1);
  }

  const Nav = (e) => {
    navigate(`${Navito}?page=${e.target.text}`);
  };
  const NavBF = (e) => {
    navigate(`${Navito}?page=${pagee - 1}`);
  };
  const Nav1 = (e) => {
    navigate(`${Navito}?page=1`);
  };
  const NavLT = (e) => {
    navigate(`${Navito}?page=${numberpage}`);
  };
  const NavNX = (e) => {
    navigate(`${Navito}?page=${+pagee + 1}`);
  };
  return (
    <div className="mx-auto">
      <nav className="w-full sm:w-auto sm:mr-auto">
        <ul className="flex mr-auto">
          {pagee == 1 ? (
            ""
          ) : (
            <li className="flex-1 box" onClick={Nav1}>
              <a className="page-link" href="#">
                <MdFirstPage className="w-4 h-4" />
              </a>
            </li>
          )}
          {pagee == 1 ? (
            ""
          ) : (
            <li className="flex-1 box hover:shrink" onClick={NavBF}>
              <a className="page-link" href="#">
                <MdChevronLeft className="w-4 h-4" />
              </a>
            </li>
          )}

          {pagelist.map((e) => (
            <li
              id={e}
              key={e}
              className={`flex-1 box ${e == pagee ? "active" : ""}  hover:text-lg`}
            >
              <a onClick={Nav} className="page-link" href="#">
                {e}
              </a>
            </li>
          ))}
          {pagee == numberpage || pagelist.length === 1 ? (
            ""
          ) : (
            <li className="flex-1 box" onClick={NavNX}>
              <a className="page-link" href="#">
                <MdChevronRight className="w-4 h-4" />
              </a>
            </li>
          )}
          {pagee == numberpage || pagelist.length === 1 ? (
            ""
          ) : (
            <li className="flex-1 box" onClick={NavLT}>
              <a className="page-link" href="#">
                <MdLastPage className="w-4 h-4" />
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Paginataion;
