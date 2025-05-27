export default async function mostrarHome() {
  const app = document.getElementById("app");
  app.innerHTML = `<h2>productos</h2><div id="lista" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between; padding: 10px;"></div>`;

  const lista = document.getElementById("lista");

  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();


    data.forEach((producto) => {
  const item = document.createElement("div");
  item.innerHTML = `
    <p>${producto.title}</p>
    <img src="${producto.image}" style="width: 100px; height: 100px;" />
    <p>${producto.price} USD</p>
  `;
  lista.appendChild(item);
});

  } catch (error) {
    app.innerHTML = `<p>Error al cargar los Pokémon: ${error.message}</p>`;
  }
}