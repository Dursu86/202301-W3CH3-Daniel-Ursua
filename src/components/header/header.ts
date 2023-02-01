/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'Learning DOM') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
        <header>
          <span><img src="" alt=""></span>
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
