export function DashboardPrincipal() {
  return (
    <main aria-label="Dashboard principal">
      <header>
        <h2>Panel Admin – Bulonería y Ferretería Nahuelpan</h2>
      </header>

      <section aria-labelledby="resumen-titulo">
        <h2 id="resumen-titulo">Dashboard Principal</h2>

        <div>
          <article aria-label="Total de categorías">
            <h3>Total Categorías</h3>
            <p>12</p>
          </article>

          <article aria-label="Categorías disponibles">
            <h3>Disponibles</h3>
            <p>9</p>
          </article>

          <article aria-label="Categorías no disponibles">
            <h3>No disponibles</h3>
            <p>3</p>
          </article>

          <article aria-label="Última edición">
            <h3>Última edición</h3>
            <p>Hoy</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="actividad-titulo">
        <h2 id="actividad-titulo">Actividad Reciente</h2>

        <table>
          <thead>
            <tr>
              <th scope="col">Descripción</th>
              <th scope="col">Fecha</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Categoría Pinturas editada</td>
              <td>Hoy, 10:32 am</td>
              <td>Activo</td>
            </tr>
            <tr>
              <td>Estado Plomería: No disp.</td>
              <td>Ayer, 4:15 pm</td>
              <td>Atención</td>
            </tr>
            <tr>
              <td>Horario sábado actualizado</td>
              <td>Ayer, 11:00 am</td>
              <td>Activo</td>
            </tr>
            <tr>
              <td>Nueva categoría: Adhesivos</td>
              <td>Lun 5 ago</td>
              <td>Activo</td>
            </tr>
          </tbody>
        </table>
      </section>

      <aside aria-labelledby="acciones-rapidas-titulo">
        <h2 id="acciones-rapidas-titulo">Acciones Rápidas</h2>

        <ul>
          <li>
            <button type="button">Nueva categoría</button>
          </li>
          <li>
            <button type="button">Editar disponibilidad</button>
          </li>
          <li>
            <button type="button">Actualizar horario</button>
          </li>
          <li>
            <button type="button">Subir imagen/video</button>
          </li>
          <li>
            <button type="button">Cerrar sesión</button>
          </li>
        </ul>
      </aside>
    </main>
  );
}
