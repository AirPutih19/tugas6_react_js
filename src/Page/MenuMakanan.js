import DaftarMakanan from "../Lib/DaftarMakanan";
import Header from "./Header";
import React, {Component} from "react";

class MenuMakanan extends Component{
    render(){
        return(
            <div>
                <Header/>
                <h3> Daftar Makanan favourite</h3>
                <table style={{width:"100%"}}>
                    <tr>
                        {DaftarMakanan.map((data, index) =>{
                            return(
                                <td key={index}>
                                    <center>
                                        <img src={data.img}
                                        alt="Product Makanan"
                                        width="150"
                                        height="100"
                                        />
                                        <p>{data.NamaMakanan}</p>
                                        <p>Harga : {data.Harga}</p>
                                    </center>
                                </td>
                            )
                        })}
                    </tr>
                </table>
            </div>
        );
    }
}
export default MenuMakanan