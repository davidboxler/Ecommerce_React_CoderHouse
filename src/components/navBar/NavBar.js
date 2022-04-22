import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CardWidgets from "../cartWidgets/CardWidgets";
import { VideogameAsset } from "@mui/icons-material";
import database from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Navbar = () => {
  const [titles, setTitulos] = useState([]);

  const getItems = async () => {
    const itemCollection = collection(database, "navbar");
    const titulos = await getDocs(itemCollection);
    console.log(titulos);
    const titulosList = titulos.docs.map((doc) => {
      let titulo = doc.data();
      titulo.id = doc.id;
      console.log(titulo);
      return titulo;
    });
    return titulosList;
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
            return (
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
