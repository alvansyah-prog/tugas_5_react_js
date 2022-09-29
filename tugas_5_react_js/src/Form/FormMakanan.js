import React,{Component} from "react";

class FormMakanan extends Component {
  constructor(props){
    super(props);
    this.state={
      pesanan:"",
      jumlah:""
    };
    this.handelChange=this.handelChange.bind(this);
    this.handelChangeJumlah=this.handelChangeJumlah.bind(this);
    this.handelSubmit=this.handelSubmit.bind(this);
    this.pesanan = React.createRef();
  }
  handelChange(e){
    this.setState({pesanan:e.target.value});
  }
  handelChangeJumlah(e){
    this.setState({jumlah:e.target.value});
  }

  handelSubmit(e){
    console.log(this.state.pesanan);
    e.preventDefault();
    alert(
      "Pesanan Anda Adalah : " + this.state.pesanan + " | Jumlah Pesanan : "+ this.state.jumlah
    );
    this.setState({pesanan:"",jumlah: ""});
    this.pesanan.current.focus();
  }
  render(){
    return(
    <div>
    <center>
      <form onSubmit={this.handelSubmit}>
        <input type="text" onChange={this.handelChange} ref={this.pesanan} value={this.state.pesanan} placeholder="Masukan Pesanan Anda"/>
        <input type="number" onChange={this.handelChangeJumlah} value={this.state.jumlah} placeholder="Masukan Jumlah Pesanan"/>
        <br/><br/>
        <input type="submit" value="Pesan"/>
      </form>
    </center>
    </div>

    );
  }
}
export default FormMakanan;
