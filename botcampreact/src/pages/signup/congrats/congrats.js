import React, { Component } from 'react';
import Navibar from "../../components/Navibar"

import {Link} from 'react-router-dom';

export default class Congrats extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="geral mainBackground">
        <Navibar />
        <section>
          <span>Parabéns {this.props.name}, sua conta está pronta para uso.</span>

          <Link>
            <button className="itensHovered btnOutline btnDefault">Voltar</button>
          </Link>
        </section>
      </div>
    );
  }
}
