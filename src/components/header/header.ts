/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
        <header>
          <span><img src="./src/Assets/alan-king-KZv7w34tluA-unsplash.jpeg" alt="Funny pet" width="150px">
          <h1>ADOPETS</h1></span>
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Cónocenos</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </nav>
        </header>

    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
