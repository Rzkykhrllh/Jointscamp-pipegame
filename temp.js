
            

class Cell{
    deg = 0;
    elm = "";
    id = "";

    putar(){
        this.deg+=90;

        console.log(`${this.elm}`);
        console.log(`${this.id}`);


        // this.elm.style.transform=`rotate(${deg}deg)`;
        // this.elm.style.transitionDuration = "1s";
    }

    constructor(id, elm){
        this.id=id;
        this.elm = elm;
        // console.log(this.Cell);

        this.elm.addEventListener("click", this.putar)
    }
}

const cell = (id) => {
    this.id = id;
    this.elm;
    this.deg = 0

    this.click = () => {

        this.deg+=90;
        this.elm.style.transform=`rotate(${deg}deg)`;
        this.elm.style.transitionDuration = "1s";

    }

    this.attach = () => {
        this.elm = document.getElementById(this.id);
        
        console.log(this.id);
        console.log(this.elm);

        // this.elm.addEventListener("click", this.click)
    }

    this.cetak = () => {
        console.log("halo dunia")
    }

    return this;
}




tabel[0][0].attach();

<!--     
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> -->


<!-- Start of game -->
      <section class="game">
        <div class="d-flex align-items-center">
          <div class="container-fluid game h-100 bg-danger" >
            <!-- Start of baris 0 -->
            <div class="row justify-content-center">
              <div class="col-1 bg_cover" id="cell_0_0" style="background-image: url('image/keran_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_0_1" style="background-image: url('image/3_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_0_2" style="background-image: url('image/2l_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_0_3" style="background-image: url('image/3_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_0_4" style="background-image: url('image/3_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_0_5" style="background-image: url('image/2l_1.jpg');">
              </div>

         
            
            </div>

            <!-- Start of baris 1 -->
            <div class="row justify-content-center">
              <div class="col-1 bg_cover" id="cell_1_0" style="background-image: url('image/2l_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_1_1" style="background-image: url('image/22_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_1_2" style="background-image: url('image/22_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_1_3" style="background-image: url('image/3_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_1_4" style="background-image: url('image/keran_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_1_5" style="background-image: url('image/keran_1.jpg');">
              </div>
            </div>

            <!-- Start of baris 2 -->
            <div class="row justify-content-center">
              <div class="col-1 bg_cover" id="cell_2_0" style="background-image: url('image/2l_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_2_1" style="background-image: url('image/22_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_2_2" style="background-image: url('image/3_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_2_3" style="background-image: url('image/3_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_2_4" style="background-image: url('image/2_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_2_5" style="background-image: url('image/3_1.jpg');">
              </div>
            </div>

             <!-- Start of baris 3 -->
             <div class="row justify-content-center">
              <div class="col-1 bg_cover" id="cell_3_0" style="background-image: url('image/2l_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_3_1" style="background-image: url('image/3_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_3_2" style="background-image: url('image/4.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_3_3" style="background-image: url('image/4.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_3_4" style="background-image: url('image/2_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_3_5" style="background-image: url('image/3_1.jpg');">
              </div>
            </div>

             <!-- Start of baris 4 -->
            <div class="row justify-content-center">
              <div class="col-1 bg_cover" id="cell_4_0" style="background-image: url('image/2_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_4_1" style="background-image: url('image/2l_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_4_2" style="background-image: url('image/3_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_4_3" style="background-image: url('image/22_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_4_4" style="background-image: url('image/2_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_4_5" style="background-image: url('image/3_1.jpg');">
              </div>
            </div>

             <!-- Start of baris 5 -->
            <div class="row justify-content-center">
              <div class="col-1 bg_cover" id="cell_5_0" style="background-image: url('image/2l_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_5_1" style="background-image: url('image/2_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_5_2" style="background-image: url('image/3_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_5_3" style="background-image: url('image/3_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_5_4" style="background-image: url('image/2_1.jpg');">
              </div>

              <div class="col-1 bg_cover" id="cell_5_5" style="background-image: url('image/2l_1.jpg');">
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- end of game -->