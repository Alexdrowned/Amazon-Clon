const Header = () => {
    const view =
        `
        <header>
            <div class='left'>
                <img src="../src/public/assets/icons/gamepad.png" alt="Mando">
                <h2><a href="">Dev-Games</a></h2>
            </div>
            <div class='rigth'>  
                    <h4 id='event' href="" style='cursor:pointer;'> Inicia Sesion </h4>
                    <a href="#"> Contactanos </a>
            </div>
            
        </header>
        `;  
        return view;
};

export default Header;