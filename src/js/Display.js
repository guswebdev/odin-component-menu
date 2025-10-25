const d = document;

class Display {
  $btnAbrirMenu = d.querySelector(`[data-btn="abrirMenu"]`);
  $btnCerrarMenu = d.querySelector(`[data-btn="cerrarMenu"]`);
  $menu = d.querySelector(`[data-menu]`);
  $linksMenu;

  abrirMenu() {
    this.$menu.style.display = `flex`;
  }
  cerrarMenu() {
    this.$menu.style.display = `none`;
  }
  capturarLinksMenu() {
    this.$linksMenu = Array.from(d.querySelectorAll(`[data-link="menu"]`));
  }
}

const display = new Display();

export { display };
