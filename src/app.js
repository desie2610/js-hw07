import template from './template/template.hbs';
import { products } from './data/data.js';

const html = template({ products });
document.body.innerHTML = html;