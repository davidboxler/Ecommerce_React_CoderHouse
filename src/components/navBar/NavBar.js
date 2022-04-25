import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CardWidgets from "../cartWidgets/CardWidgets";
import { VideogameAsset } from "@mui/icons-material";
import database from "../../firebase";
import { Menu, MenuItem, Button } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";

const Navbar = () => {
  const [titles, setTitulos] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const getItems = async () => {
    const itemCollection = collection(database, "navbar");
    const titulos = await getDocs(itemCollection);
    const titulosList = titulos.docs.map((doc) => {
      let titulo = doc.data();
      titulo.id = doc.id;
      return titulo;
    });
    return titulosList;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setTitulos([]);
    getItems().then((p) => {
      setTitulos(p);
    });
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="language">ES</div>
          <div className="search-container">
            <input />
            <SearchIcon className="search" />
          </div>
        </div>
        <div className="center">
          <Link to={"/"} className="logo">
            <div>Owl House</div>
            <VideogameAsset className="btn-icon" />
          </Link>
        </div>
        <div className="right">
          {titles.map((page) => {
            return page.title === "Categorías" ? (
              <div className="menu-item" key={page.id}>
                <Button
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  {page.title}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClose={handleClose}>
                    <Link to={`${page.url}/accesorios`}>Accesorios</Link>
                  </MenuItem>
                  <MenuItem onClose={handleClose}>
                    <Link to={`${page.url}/sillasgamer`}>Silla Gamer</Link>
                  </MenuItem>
                  <MenuItem onClose={handleClose}>
                    <Link to={`${page.url}/teclados`}>Teclados</Link>
                  </MenuItem>
                  <MenuItem onClose={handleClose}>
                    <Link to={`${page.url}/monitores`}>Monitores</Link>
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div className="menu-item" key={page.id}>
                <Link to={page.url}>{page.title}</Link>
              </div>
            );
          })}
          <div className="menu-item">
            <CardWidgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
