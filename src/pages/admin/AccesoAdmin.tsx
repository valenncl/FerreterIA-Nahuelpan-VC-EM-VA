export function AccesoAdministrativo() {
  return (
    <main aria-label="Acceso administrativo">
      <header>
        <h1>Bulonería y Ferretería Nahuelpan — Área Administrativa</h1>
      </header>

      <section aria-labelledby="login-title">
        <div aria-label="Formulario de acceso administrativo">
          <div aria-hidden="true">
            <span>Logo</span>
          </div>

          <h2 id="login-title">Acceso Administrativo</h2>
          <p>Ingrese sus credenciales para continuar</p>

          <form noValidate>
            <div>
              <label htmlFor="usuario-admin">Usuario o correo electrónico</label>
              <input
                id="usuario-admin"
                name="usuario"
                type="text"
                placeholder="Ingresar usuario o correo electrónico"
              />
            </div>

            <div>
              <label htmlFor="password-admin">Contraseña</label>
              <input
                id="password-admin"
                name="password"
                type="password"
                placeholder="Ingresar contraseña"
              />
            </div>

            <div>
              <label>
                <input type="checkbox" name="recordarme" />
                Recordarme
              </label>

              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit">Iniciar Sesión</button>
          </form>

          <div role="alert" aria-live="polite">
            <p>Mensaje de error de autenticación</p>
          </div>

          <p>Acceso restringido — solo personal autorizado</p>
        </div>
      </section>
    </main>
  );
}
