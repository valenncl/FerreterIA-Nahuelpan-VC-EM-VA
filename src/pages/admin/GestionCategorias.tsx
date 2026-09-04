export function GestionCategorias() {
  return (
    <main aria-label="Gestión de categorías y contenido visual">
      <header>
        <h1>Panel Admin – Bulonería y Ferretería Nahuelpan</h1>
      </header>

      <section aria-labelledby="gestion-categorias-titulo">
        <h2 id="gestion-categorias-titulo">Gestión de Categorías y Contenido Visual</h2>

        <button type="button">Nueva Categoría</button>

        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Imagen</th>
                <th scope="col">Descripción</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Herramientas</td>
                <td>imagen</td>
                <td>Herramientas manuales y eléctricas</td>
                <td>Activa</td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>Pinturas</td>
                <td>imagen</td>
                <td>Pinturas para interiores y exteriores</td>
                <td>Activa</td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>Plomería</td>
                <td>imagen</td>
                <td>Accesorios y materiales para plomería</td>
                <td>Inactiva</td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <aside aria-labelledby="editar-categoria-titulo">
        <h2 id="editar-categoria-titulo">Editar categoría</h2>

        <form>
          <div>
            <label htmlFor="categoria-nombre">Nombre de la categoría</label>
            <input id="categoria-nombre" name="nombreCategoria" type="text" placeholder="Ingresar nombre de la categoría" />
          </div>

          <div>
            <label htmlFor="categoria-descripcion">Descripción</label>
            <textarea id="categoria-descripcion" name="descripcionCategoria" placeholder="Ingresar descripción" rows={4} />
          </div>

          <fieldset>
            <legend>Imágenes</legend>
            <input type="file" accept="image/*" multiple />
          </fieldset>

          <fieldset>
            <legend>Video</legend>
            <input type="file" accept="video/*" />
          </fieldset>

          <div>
            <button type="submit">Guardar cambios</button>
            <button type="button">Cancelar</button>
          </div>
        </form>
      </aside>
    </main>
  );
}
