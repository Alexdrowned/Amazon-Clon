const Header = () => {
    const view =
        `
        <header>
            <div class='left'>
                <img src="../src/public/assets/icons/gamepad.png" alt="Mando">
                <h2><a href="">Dev-Games</a></h2>
            </div>
            <div class='rigth'>
                    <a href=""> Registrate </a>            
                    <a href=""> Inicia Sesion </a>
                    <a href="#"> Contactanos </a>
                </div>
        </header>
        `;  
        return view;
};

export default Header;