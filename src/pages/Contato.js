import React, { Component } from "react";

import "./Main.css";

class Contato extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center display-2">Contato</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Higor Konig"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="konig@podepah.dev"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Assunto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Contratar você"
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label for="exampleInputEmail1">Mensagem</label>
              <textarea
                className="form-control"
                rows="6"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <button type="button" class="btn btn-success">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contato;
