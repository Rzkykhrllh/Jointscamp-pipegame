// variabel for orientation
var ori = new Array(6);
// ori[0] = new Array(6);


// ini function
init = () => {
    
    const tabel = new Array(5);


    // console.log(ori[0][0]);

    for (i=0; i<6; i++){

        ori[i] = new Array(6);
        tabel[i] = new Array(5); 


        for (j=0; j<6; j++){
            const id_temp = "cell_".concat((i).toString()).concat("_").concat((j).toString());
            // console.log(id_temp);

            tabel[i][j]  = new Cell(id_temp);

        }
    }
}

// Cell class
class Cell{
    deg = 0;
    elm;
    id = "";

    // Variabel buat index
    baris = 0;
    kolom = 0;

    putar(){
        this.deg+=90; // update sudut
        let temp_sudut = this.deg % 360;


        console.log(`${this.deg} , ${temp_sudut}`);

        switch(temp_sudut) {
            case 0:
                ori[this.baris][this.kolom] = 0;
                break;
            case 90:
                ori[this.baris][this.kolom] = 1;
                break;
            case 180:
                ori[this.baris][this.kolom] = 2;
                break;
            case 270:
                ori[this.baris][this.kolom] = 3;
                break;
            default:
              console.log("Orientation Error")
          }

        this.elm.style.transform=`rotate(${this.deg}deg)`;
        this.elm.style.transitionDuration = "0.5s";

        console.log(`rotate (${this.baris},${this.kolom} : ${ori[this.baris][this.kolom]})`);
    }

    getBarisKolom(id){
        console.log(id);
        this.baris = parseInt(id.charAt(5));
        this.kolom = parseInt(id.charAt(7));

        ori[this.baris][this.kolom] = 0;

        // console.log(this.baris+" "+this.kolom);
    }   

    constructor(id){
        this.id=id;
        this.elm = document.getElementById(id);

        // console.log(id);
        // console.log(this.elm);

        // this.getBarisKolom(id);
        this.elm.addEventListener("click", this.putar.bind(this));
    }
}
