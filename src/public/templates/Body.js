const Body = () => {
    const view =
        `
        
        <div class="contenedor">
        <header class="column">
            
            <div class="col-xs-9">
                
                    <div id="myCarousel" class="carousel slide contenido" data-ride="carousel">
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                          <li data-target="#myCarousel" data-slide-to="1"></li>
                          <li data-target="#myCarousel" data-slide-to="2"></li>
                          <li data-target="#myCarousel" data-slide-to="3"></li>
                          <li data-target="#myCarousel" data-slide-to="4"></li>
                        </ol>
                      
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" >
                          <div class="item active">
                            <img src="../images/primera.jpg"  alt="" width= col-xs-9 height=300px>
                          </div>
                      
                          <div class="item" >
                            <img src="../images/segunda.jpg"  alt="" width=col-xs-9 height=300px>
                          </div>
                      
                          <div class="item" >
                            <img src="../images/tercera.jpg"  alt="" width=col-xs-9 height=300px>
                          </div>
                          <div class="item" >
                            <img src="../images/cuarta.jpg"  alt="" width=col-xs-9 height=300px>
                          </div>
                          <div class="item" >
                            <img src="../images/quinta.jpg"  alt="" width=col-xs-9 height= 300px>
                          </div>
                        </div>
                      
                        <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                          <span class="glyphicon glyphicon-chevron-left"></span>
                          <span class="sr-only">Anterior</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                          <span class="glyphicon glyphicon-chevron-right"></span>
                          <span class="sr-only">Siguiente</span>
                        </a>
                    </div>
                
            </div>
            <div class="col-xs-3">
                <div class="sidebar">
                    <h1>Sidebar</h1>
                </div>
            </div>

        </header>
        
        </div>
        
        `;  
        return view;
};

export default Body;