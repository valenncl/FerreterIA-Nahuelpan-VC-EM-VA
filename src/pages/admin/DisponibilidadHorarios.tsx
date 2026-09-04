export function DisponibilidadHorarios() {
  return (
    <main aria-label="Disponibilidad y gestión de horarios">
      <header>
        <h1>Panel Admin – Bulonería y Ferretería Nahuelpan</h1>
      </header>

      <section aria-labelledby="disponibilidad-titulo">
        <h2 id="disponibilidad-titulo">Disponibilidad y Gestión de Horarios</h2>

        <div>
          <section aria-labelledby="disponibilidad-categoria-titulo">
            <h3 id="disponibilidad-categoria-titulo">Disponibilidad por Categoría</h3>

            <table>
              <thead>
                <tr>
                  <th scope="col">Categoría</th>
                  <th scope="col">Estado actual</th>
                  <th scope="col">Activar/Desactivar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Herramientas</td>
                  <td>Disponible</td>
                  <td>
                    <label>
                      <input type="checkbox" defaultChecked />
                      <span>Activo</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Pinturas</td>
                  <td>Disponible</td>
                  <td>
                    <label>
                      <input type="checkbox" defaultChecked />
                      <span>Activo</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Plomería</td>
                  <td>No disponible</td>
                  <td>
                    <label>
                      <input type="checkbox" />
                      <span>Inactivo</span>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section aria-labelledby="horario-atencion-titulo">
            <h3 id="horario-atencion-titulo">Horario de Atención</h3>

            <form>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Día</th>
                    <th scope="col">Apertura</th>
                    <th scope="col">Cierre</th>
                    <th scope="col">Cerrado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Lunes</th>
                    <td><input type="time" name="lunes-apertura" defaultValue="08:00" /></td>
                    <td><input type="time" name="lunes-cierre" defaultValue="18:00" /></td>
                    <td><input type="checkbox" name="lunes-cerrado" /></td>
                  </tr>
                  <tr>
                    <th scope="row">Martes</th>
                    <td><input type="time" name="martes-apertura" defaultValue="08:00" /></td>
                    <td><input type="time" name="martes-cierre" defaultValue="18:00" /></td>
                    <td><input type="checkbox" name="martes-cerrado" /></td>
                  </tr>
                  <tr>
                    <th scope="row">Miércoles</th>
                    <td><input type="time" name="miercoles-apertura" defaultValue="08:00" /></td>
                    <td><input type="time" name="miercoles-cierre" defaultValue="18:00" /></td>
                    <td><input type="checkbox" name="miercoles-cerrado" /></td>
                  </tr>
                  <tr>
                    <th scope="row">Jueves</th>
                    <td><input type="time" name="jueves-apertura" defaultValue="08:00" /></td>
                    <td><input type="time" name="jueves-cierre" defaultValue="18:00" /></td>
                    <td><input type="checkbox" name="jueves-cerrado" /></td>
                  </tr>
                  <tr>
                    <th scope="row">Viernes</th>
                    <td><input type="time" name="viernes-apertura" defaultValue="08:00" /></td>
                    <td><input type="time" name="viernes-cierre" defaultValue="18:00" /></td>
                    <td><input type="checkbox" name="viernes-cerrado" /></td>
                  </tr>
                  <tr>
                    <th scope="row">Sábado</th>
                    <td><input type="time" name="sabado-apertura" defaultValue="09:00" /></td>
                    <td><input type="time" name="sabado-cierre" defaultValue="14:00" /></td>
                    <td><input type="checkbox" name="sabado-cerrado" /></td>
                  </tr>
                  <tr>
                    <th scope="row">Domingo</th>
                    <td><input type="time" name="domingo-apertura" defaultValue="09:00" /></td>
                    <td><input type="time" name="domingo-cierre" defaultValue="14:00" /></td>
                    <td><input type="checkbox" name="domingo-cerrado" /></td>
                  </tr>
                </tbody>
              </table>

              <button type="submit">Guardar horarios</button>
            </form>
          </section>
        </div>
      </section>

      <section aria-labelledby="cierre-temporal-titulo">
        <h3 id="cierre-temporal-titulo">Cierre Temporal</h3>

        <form>
          <label>
            <input type="checkbox" name="reporte-cierre" />
            Reportar cierre temporal del negocio
          </label>

          <div>
            <label htmlFor="motivo-cierre">Motivo del cierre</label>
            <input id="motivo-cierre" name="motivoCierre" type="text" placeholder="Ingresar motivo del cierre" />
          </div>

          <div>
            <label htmlFor="fecha-inicio-cierre">Fecha de inicio</label>
            <input id="fecha-inicio-cierre" name="fechaInicio" type="date" />
          </div>

          <div>
            <label htmlFor="fecha-reapertura">Fecha de reapertura</label>
            <input id="fecha-reapertura" name="fechaReapertura" type="date" />
          </div>

          <button type="submit">Confirmar cierre temporal</button>
        </form>
      </section>
    </main>
  );
}
