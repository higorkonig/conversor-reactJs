import React, { Component } from "react";
import { toast } from "react-toastify";
import TextLoop from "react-text-loop";

import "react-toastify/dist/ReactToastify.css";
import "./Main.css";

toast.configure();
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escolha: "USD",
      num1: "",
      result: "",
      class: "",
      button: "Converter",
      disabled: false,
      money: "R$",
      moneyResult: "$"
    };
    this.handleChange = this.handleChange.bind(this);
    this.convert = this.convert.bind(this);
    this.limpar = this.limpar.bind(this);
    this.click = this.click.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  click() {
    if (this.state.escolha === "USD") {
      this.setState({
        moneyResult: "$"
      });
    } else if (this.state.escolha === "EUR") {
      this.setState({
        moneyResult: "€"
      });
    } else if (this.state.escolha === "ARS") {
      this.setState({
        moneyResult: "ARS"
      });
    } else if (this.state.escolha === "JPY") {
      this.setState({
        moneyResult: "円"
      });
    }
  }

  convert() {
    if (this.state.num1 === "") {
      this.setState({ class: "is-invalid" });
      toast.error("Por favor, não deixe o campo em branco 😑", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      setTimeout(() => {
        this.setState({ class: "" });
      }, 4000);
    } else {
      this.setState({ button: "Carregando...", disabled: true });
      let escolha = this.state.escolha;
      fetch(`https://economia.awesomeapi.com.br/all/${escolha}-BRL`)
        .then(Response => {
          return Response.json();
        })
        .then(data => {
          //Desculpa, não consegui fazer de outro modo
          if (escolha === "USD") {
            let valor = data.USD.high;
            valor = valor.replace(",", ".");
            valor = Number(valor);
            let total = valor * this.state.num1;
            this.setState({
              result: total.toFixed(2),
              button: "Converter",
              disabled: false
            });
          } else if (escolha === "EUR") {
            let valor = data.EUR.high;
            valor = valor.replace(",", ".");
            valor = Number(valor);
            let total = valor * this.state.num1;
            this.setState({
              result: total.toFixed(2),
              button: "Converter",
              disabled: false
            });
          } else if (escolha === "ARS") {
            let valor = data.ARS.high;
            valor = valor.replace(",", ".");
            valor = Number(valor);
            let total = valor * this.state.num1;
            this.setState({
              result: total.toFixed(2),
              button: "Converter",
              disabled: false
            });
          } else if (escolha === "JPY") {
            let valor = data.JPY.high;
            valor = valor.replace(",", ".");
            valor = Number(valor);
            let total = valor * this.state.num1;
            this.setState({
              result: total.toFixed(2),
              button: "Converter",
              disabled: false
            });
          }
        });
    }
  }

  limpar() {
    this.setState({
      num1: "",
      result: "",
      class: "",
      moneyResult: "$"
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-3">
            Conversor de &nbsp;
            <TextLoop
              springConfig={{ stiffness: 180, damping: 8 }}
              interval={3100}
            >
              <span>Dólar $</span>
              <span>Euro €</span>
              <span>Peso Argentino ARS</span>
              <span>Iene Japones 円</span>
            </TextLoop>
          </h1>
        </div>
        <hr className="my-4" />
        <form>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <select
                  className="form-control"
                  name="escolha"
                  value={this.state.escolha}
                  onChange={this.handleChange}
                  onClick={this.click}
                >
                  <option value="USD" >Dólar $</option>
                  <option value="EUR">Euro €</option>
                  <option value="ARS">Peso Argentino ARS</option>
                  <option value="JPY">Iene Japones 円</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      dangerouslySetInnerHTML={{
                        __html: `${this.state.moneyResult}`
                      }}
                    ></span>
                  </div>
                  <input
                    type="text"
                    className={`form-control ${this.state.class}`}
                    name="num1"
                    placeholder="Entre com um valor"
                    value={this.state.num1}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <div className="form-group">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      dangerouslySetInnerHTML={{
                        __html: `${this.state.money}`
                      }}
                    ></span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Resultado"
                    name="result"
                    disabled
                    value={this.state.result}
                  />
                </div>
              </div>
            </div>
            <div className="col-3">
              <input
                type="button"
                className="btn btn-outline-success btn-block"
                onClick={this.convert}
                value={`${this.state.button}`}
                disabled={this.state.disabled}
              />
            </div>
            <div className="col-3">
              <button
                type="reset"
                className="btn btn-outline-warning btn-block"
                onClick={this.limpar}
              >
                Limpar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
