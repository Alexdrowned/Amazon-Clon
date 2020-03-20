const Inicio = () => {
    const view =
        `
        <div class="contenedor-form">
            <div class="toggle">
                <span> Crear Cuenta</span>
            </div>
            <div class="formulario">
                <h2>Iniciar Sesión</h2>
                <form action="#">
                    <input type="text" placeholder="Usuario" required>
                    <input type="password" placeholder="Contraseña" required>
                    <input type="submit" value="Iniciar Sesión">
                </form>
            </div>
            <div class="formulario">
                <h2>Crea tu Cuenta</h2>
                <form action="#">
                    <input type="text" placeholder="Usuario" required>
                    <input type="password" placeholder="Contraseña" required>
                    <input type="email" placeholder="Correo Electronico" required>
                    <input type="text" placeholder="Teléfono" required>
                    <input type="submit" value="Registrarse">
                </form>
            </div>
            <div class="reset-password">
                <a href="#">¿Ólvido su Contraseña?</a>
            </div>
        </div>
        <script src="../src/jquery-3.1.1.min.js"></script>    
        <script src="../src/inicio.js"></script>
        `;  
        return view;

    };

export default Inicio;