import React from "react";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import App from "./App";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";
import Kontak from "./Page/Kontak";

const AppRoute = ()=> {   
    return(
        <Router>
        <Routes>
            <Route path="/" exact Component={App}/>
            <Route path="/menu_makanan" Component={MenuMakanan}/>
            <Route path="menu_minuman" Component={MenuMinuman}/>
            <Route path="kontak" Component={Kontak}/> 
        </Routes> 
        </Router>
    )   
              
    };

export default AppRoute