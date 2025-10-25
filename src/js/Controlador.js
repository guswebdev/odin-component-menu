import { click } from "./Click";
import { display } from "./Display";

class Controlador {
  DOMContentLoaded() {
    console.log("Hello World");
  }

  click(e) {
    console.log(e.target);

    if (e.target.dataset.btn === display.$btnAbrirMenu.dataset.btn) {
      console.log("ABRIR MENU");
      click.abrirMenu();
    }
    if (e.target.dataset.btn === display.$btnCerrarMenu.dataset.btn) {
      console.log("CERRAR MENU");
      click.cerrarMenu();
    }

    if (e.target.dataset.link === "menu") {
      display.capturarLinksMenu();
      if (display.$linksMenu.includes(e.target)) {
        console.log("CLICK EN ENLACE");
        click.cambiarVista();
      }
    }
  }
}

const controlador = new Controlador();

document.addEventListener("DOMContentLoaded", controlador.DOMContentLoaded);
document.addEventListener("click", controlador.click);

export { controlador };
