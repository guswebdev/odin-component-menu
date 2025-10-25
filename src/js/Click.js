import { display } from "./Display";

class Click {
  abrirMenu() {
    display.abrirMenu();
  }

  cerrarMenu() {
    display.cerrarMenu();
  }

  cambiarVista() {
    const mediaQuery = matchMedia("(min-width:768px)");

    if (!mediaQuery.matches) {
      display.cerrarMenu();
    }
  }
}

const click = new Click();

export { click };
