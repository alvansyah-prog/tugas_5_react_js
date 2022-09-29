import React,{Component} from "react";
import DaftarMakanan from "../Lib/DaftarMakanan";
import FormMakanan from "../Form/FormMakanan";

const listmakanan=[
  {
    NamaMakanan:"Nasi Padang",
    Harga:"20000"
  },{
    NamaMakanan:"Sate",
    Harga:"20000"
  },{
    NamaMakanan:"Soto",
    Harga:"10000"
  },{
    NamaMakanan:"Nasi Uduk",
    Harga:"10000"
  },{
    NamaMakanan:"Ayam Geprek",
    Harga:"15000"
  },{
    NamaMakanan:"Pecel Lele",
    Harga:"15000"
  },{
    NamaMakanan:"Pecel",
    Harga:"10000"
  },{
    NamaMakanan:"Mie Ayam",
    Harga:"10000"
  }
]

class MenuMakanan extends Component {
  render(){
    return(
      <div>
        <h3>Daftar Makanan Favourite</h3>
        <table>
          <tbody>
            <tr>
            {DaftarMakanan.map((value, index)=>{
              return(
                <td>
                <img src={value.img} alt="Produk Makanan" width="150" height="100"/>
                <center>
                  <p>{value.Nama_Makanan}</p>
                  <p>Harga : Rp. {value.Harga}</p>
                </center>
                </td>
              );
            })}
            </tr>
          </tbody>
        </table>
        <h4>List Makanan</h4>
        {listmakanan.map((data,index)=>{
          return(
            <div>
            <p>
            {data.NamaMakanan} | Harga Rp. {data.Harga}
            </p>
            </div>
          );
        })}
        <FormMakanan/>
      </div>
    );
  }
}
export default MenuMakanan;
