import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import CardWidgets from "../cartWidgets/CardWidgets";
import { CloseOutlined, MenuOpenOutlined, VideogameAsset } from "@mui/icons-material";
import database from "../../services/firebase";
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
    <section id="header">
      <Link to={"/"} className="logo"><div>Owl House</div><VideogameAsset /></Link>
    
      <div>
          <ul id="navbar">
          {titles.map((page) => {
            return page.title === "Categorías" ? (
              <li key={page.id}>
                <Button className="btn-category"
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
              </li>
            ) : (
              <li key={page.id}>
                <Link to={page.url}>{page.title}</Link>
              </li>
            );
          })}
          <li>
            <Link to={""}><CardWidgets /></Link> 
          </li>
          <Link to={""} id="close"><CloseOutlined /></Link>
          </ul>
      </div>
      <div id="mobile">
          <Link to={""}><CardWidgets /></Link>
          <Link to={""} id="bar"><MenuOpenOutlined /></Link>
      </div>
    </section>
  );
};

export default Navbar;