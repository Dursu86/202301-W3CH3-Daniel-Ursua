/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    return `
        <footer>
  <span><img src="./src/Assets/perro.png" alt="Nice dog draw" width="80px"></span>
</footer>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
