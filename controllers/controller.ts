const reg: RegExp = /^(\b\d{4}\w{3})$/igm;
const reg1: RegExp = /^(\w{3,10})$/igm;

var editor = new EditorCoche();
editor.setMatricula(1702);
editor.setMarca("citroen");
editor.setColor("verde");
editor.setTimeline(4000);


// Validar Formulario Coche

var coches = [];

function validarMatricula(e) {
    e.preventDefault();
    var txtMatricula: any = (<HTMLInputElement>document.getElementById('matricula')).value;
    if (txtMatricula.match(reg)) {
        (<HTMLInputElement>document.getElementById('matricula')).classList.add('is-valid');
        (<HTMLInputElement>document.getElementById('matricula')).classList.remove('is-invalid');
        (<HTMLInputElement>document.getElementById('caja1')).classList.add('d-none');
        return true;
    } else {
        (<HTMLInputElement>document.getElementById('caja1')).classList.add('msg-error');
        (<HTMLInputElement>document.getElementById('matricula')).classList.add('is-invalid');
        (<HTMLInputElement>document.getElementById('caja1')).innerText = "La matrícula debe comenzar con 4 números y terminar con 3 letras. ";
        (<HTMLInputElement>document.getElementById('caja1')).classList.remove('d-none');
        return false;
    }
}

function validarMarca(e) {
    e.preventDefault();
    var txtMarca: any = (<HTMLInputElement>document.getElementById('marca')).value;
    if (txtMarca.match(reg1)) {
        (<HTMLInputElement>document.getElementById('marca')).classList.add('is-valid');
        (<HTMLInputElement>document.getElementById('marca')).classList.remove('is-invalid');
        (<HTMLInputElement>document.getElementById('caja2')).classList.add('d-none');
        return true;
    } else {
        (<HTMLInputElement>document.getElementById('caja2')).classList.add('msg-error');
        (<HTMLInputElement>document.getElementById('marca')).classList.add('is-invalid');
        (<HTMLInputElement>document.getElementById('caja2')).innerText = "Agregue la marca (+ de 3 y menos de 11 caracters)";
        (<HTMLInputElement>document.getElementById('caja2')).classList.remove('d-none');
        return false;
    }
}

function validarColor(e) {
    e.preventDefault();

    var txtColor: any = (<HTMLInputElement>document.getElementById('color')).value;

    if (txtColor.match(reg1)) {
        (<HTMLInputElement>document.getElementById('color')).classList.add('is-valid');
        (<HTMLInputElement>document.getElementById('color')).classList.remove('is-invalid');
        (<HTMLInputElement>document.getElementById('caja3')).classList.add('d-none');
        return true;
    } else {
        (<HTMLInputElement>document.getElementById('caja3')).classList.add('msg-error');
        (<HTMLInputElement>document.getElementById('color')).classList.add('is-invalid');
        (<HTMLInputElement>document.getElementById('caja3')).innerText = "Agregue un color (+ de 3 y menos de 11 caracters)";
        (<HTMLInputElement>document.getElementById('caja3')).classList.remove('d-none');
        return false;
    }
}

function guardar(e) {
    e.preventDefault();

    validarMatricula(e);
    validarMarca(e);
    validarColor(e);

    var caja1 = (<HTMLInputElement>document.getElementById("caja1")).value;
    var caja2 = (<HTMLInputElement>document.getElementById("caja2")).value;
    var caja3 = (<HTMLInputElement>document.getElementById("caja3")).value;

    if (typeof (caja1) == "undefined" && typeof (caja2) == "undefined" && typeof (caja3) == "undefined") {
        var matricula = (<HTMLInputElement>document.getElementById("matricula")).value;
        var marca = (<HTMLInputElement>document.getElementById("marca")).value;
        var color = (<HTMLInputElement>document.getElementById("color")).value;

        if (matricula == "" && marca == "" && color == "") {
            document.getElementById("mensaje").style.display = "block";
            document.getElementById("caja1").style.display = "none";
            document.getElementById("caja2").style.display = "none";
            document.getElementById("caja3").style.display = "none";
            document.getElementById("listado").style.display = "none";
        }
    }

    // ***********************
    //     Listado Coche
    //************************  
    var coche = new Car();
    coche.setMatricula(matricula);
    coche.setMarca(marca);
    coche.setColor(color);

    coches.push(coche);

    var list = "";
    for (var i = 0; i < coches.length; i++) {
        list = list + "<li>" + "Matrícula: " + coches[i].getMatricula() + "</li>"
        list = list + "<li>" + "Marca: " + coches[i].getMarca() + "</li>";
        list = list + "<li>" + "Color: " + coches[i].getColor() + "</li>" + "<br>";
    }
    var listado = <HTMLElement>document.getElementById("listado");
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById("matricula")).value = "";
    (<HTMLInputElement>document.getElementById("marca")).value = "";
    (<HTMLInputElement>document.getElementById("color")).value = "";
}

/*****************************************************************************/
class EditorRueda extends Wheel {

    public timelineRueda: number;

    setTimelineRueda(timelineRueda: number) {
        this.timelineRueda = timelineRueda;
    }
    getTimelineRueda() {
        return this.timelineRueda;
    }
    getAllDataRueda(): string {
        return this.getRueda1() + "-" + this.getDiametro1() + "-" + this.getRueda2() + "-" + this.getDiametro2() + "-" + this.getRueda3() + "-" + this.getDiametro3() + this.getRueda4() + "-" + this.getDiametro4() + "-" + this.getTimelineRueda();
    }
}

var editorRueda = new EditorRueda();
editorRueda.setRueda1("RDC");
editorRueda.setRueda2("RDC");
editorRueda.setRueda3("RDC");
editorRueda.setRueda4("RDC");
editorRueda.setDiametro1(2);
editorRueda.setDiametro2(2);
editorRueda.setDiametro3(2);
editorRueda.setDiametro4(2);
editorRueda.setTimelineRueda(4000);


var ruedas = [];

// Validaciones Formulario Ruedas

//Rueda 1
function validarMarcaRueda1(e) {
    e.preventDefault();
    var txtMarcaRueda1: any = (<HTMLInputElement>document.getElementById('marcaRueda1')).value;
    if (txtMarcaRueda1.match(reg1)) {
        (<HTMLInputElement>document.getElementById('marcaRueda1')).classList.add('is-valid');
        (<HTMLInputElement>document.getElementById('marcaRueda1')).classList.remove('is-invalid');
        (<HTMLInputElement>document.getElementById('caja4')).classList.add('d-none');
        return true;
    } else {
        (<HTMLInputElement>document.getElementById('caja4')).classList.add('msg-error');
        (<HTMLInputElement>document.getElementById('marcaRueda1')).classList.add('is-invalid');
        (<HTMLInputElement>document.getElementById('caja4')).innerText = "Agregue la marca";
        (<HTMLInputElement>document.getElementById('caja4')).classList.remove('d-none');
        return false;
    }
}

function validarDiametro1(e) {
    e.preventDefault();
    var txtDiametroRueda1: number = parseFloat((<HTMLInputElement>document.getElementById('diametroRueda1')).value);
    if (txtDiametroRueda1 >= 0.4  && txtDiametroRueda1<= 2 ) {
        (<HTMLInputElement>document.getElementById('diametroRueda1')).classList.add('is-valid');
        (<HTMLInputElement>document.getElementById('diametroRueda1')).classList.remove('is-invalid');
        (<HTMLInputElement>document.getElementById('caja5')).classList.add('d-none');
        return true;
    } else {
        (<HTMLInputElement>document.getElementById('caja5')).classList.add('msg-error');
        (<HTMLInputElement>document.getElementById('diametroRueda1')).classList.add('is-invalid');
        (<HTMLInputElement>document.getElementById('caja5')).innerText = "Introduce diámetro rueda";
        (<HTMLInputElement>document.getElementById('caja5')).classList.remove('d-none');
        return false;
    }
}
 
//Rueda 2
function validarMarcaRueda2(e) {
    e.preventDefault();
    var txtMarcaRueda2: any = (<HTMLInputElement>document.getElementById('marcaRueda2')).value;
    if (txtMarcaRueda2.match(reg1)) {
        (<HTMLInputElement>document.getElementById('marcaRueda2')).classList.add('is-valid');
        (<HTMLInputElement>document.getElementById('marcaRueda2')).classList.remove('is-invalid');
        (<HTMLInputElement>document.getElementById('caja6')).classList.add('d-none');
        return true;
    } else {
        (<HTMLInputElement>document.getElementById('caja6')).classList.add('msg-error');
        (<HTMLInputElement>document.getElementById('marcaRueda2')).classList.add('is-invalid');
        (<HTMLInputElement>document.getElementById('caja6')).innerText ="Agregue la marca";
        (<HTMLInputElement>document.getElementById('caja6')).classList.remove('d-none');
        return false;
    }
}

function validarDiametro2(e) {
    e.preventDefault();
    var txtDiametroRueda2: number = parseFloat((<HTMLInputElement>document.getElementById('diametroRueda2')).value);
    if (txtDiametroRueda2 >= 0.4  && txtDiametroRueda2<= 2 ) {
        (<HTMLInputElement>document.getElementById('diametroRueda2')).classList.add('is-valid');
        (<HTMLInputElement>document.getElementById('diametroRueda2')).classList.remove('is-invalid');
        (<HTMLInputElement>document.getElementById('caja7')).classList.add('d-none');
        return true;
    } else {
        (<HTMLInputElement>document.getElementById('caja7')).classList.add('msg-error');
        (<HTMLInputElement>document.getElementById('diametroRueda2')).classList.add('is-invalid');
        (<HTMLInputElement>document.getElementById('caja7')).innerText = "Introduce diámetro rueda";
        (<HTMLInputElement>document.getElementById('caja7')).classList.remove('d-none');
        return false;
    }
}

// Rueda 3
function validarMarcaRueda3(e) {
    e.preventDefault();
    var txtMarcaRueda3: any = (<HTMLInputElement>document.getElementById('marcaRueda3')).value;
    if (txtMarcaRueda3.match(reg1)) {
        (<HTMLInputElement>document.getElementById('marcaRueda3')).classList.add('is-valid');
        (<HTMLInputElement>document.getElementById('marcaRueda3')).classList.remove('is-invalid');
        (<HTMLInputElement>document.getElementById('caja8')).classList.add('d-none');
        return true;
    } else {
        (<HTMLInputElement>document.getElementById('caja8')).classList.add('msg-error');
        (<HTMLInputElement>document.getElementById('marcaRueda3')).classList.add('is-invalid');
        (<HTMLInputElement>document.getElementById('caja8')).innerText = "Agregue la marca";
        (<HTMLInputElement>document.getElementById('caja8')).classList.remove('d-none');
        return false;
    }
}

function validarDiametro3(e) {
    e.preventDefault();
    var txtDiametroRueda3: number = parseFloat((<HTMLInputElement>document.getElementById('diametroRueda3')).value);
    if (txtDiametroRueda3 >= 0.4  && txtDiametroRueda3<= 2 ) {
        (<HTMLInputElement>document.getElementById('diametroRueda3')).classList.add('is-valid');
        (<HTMLInputElement>document.getElementById('diametroRueda3')).classList.remove('is-invalid');
        (<HTMLInputElement>document.getElementById('caja9')).classList.add('d-none');
        return true;
    } else {
        (<HTMLInputElement>document.getElementById('caja9')).classList.add('msg-error');
        (<HTMLInputElement>document.getElementById('diametroRueda3')).classList.add('is-invalid');
        (<HTMLInputElement>document.getElementById('caja9')).innerText = "Introduce diámetro rueda";
        (<HTMLInputElement>document.getElementById('caja9')).classList.remove('d-none');
        return false;
    }
}
//Rueda 4
function validarMarcaRueda4(e) {
    e.preventDefault();
    var txtMarcaRueda3: any = (<HTMLInputElement>document.getElementById('marcaRueda4')).value;
    if (txtMarcaRueda3.match(reg1)) {
        (<HTMLInputElement>document.getElementById('marcaRueda4')).classList.add('is-valid');
        (<HTMLInputElement>document.getElementById('marcaRueda4')).classList.remove('is-invalid');
        (<HTMLInputElement>document.getElementById('caja10')).classList.add('d-none');
        return true;
    } else {
        (<HTMLInputElement>document.getElementById('caja10')).classList.add('msg-error');
        (<HTMLInputElement>document.getElementById('marcaRueda4')).classList.add('is-invalid');
        (<HTMLInputElement>document.getElementById('caja10')).innerText = "Agregue la marca";
        (<HTMLInputElement>document.getElementById('caja10')).classList.remove('d-none');
        return false;
    }
}
function validarDiametro4(e) {
    e.preventDefault();
    var txtDiametroRueda4: number = parseFloat((<HTMLInputElement>document.getElementById('diametroRueda4')).value);
    if (txtDiametroRueda4 >= 0.4  && txtDiametroRueda4<= 2 ) {
        (<HTMLInputElement>document.getElementById('diametroRueda4')).classList.add('is-valid');
        (<HTMLInputElement>document.getElementById('diametroRueda4')).classList.remove('is-invalid');
        (<HTMLInputElement>document.getElementById('caja11')).classList.add('d-none');
        return true;
    } else {
        (<HTMLInputElement>document.getElementById('caja11')).classList.add('msg-error');
        (<HTMLInputElement>document.getElementById('diametroRueda4')).classList.add('is-invalid');
        (<HTMLInputElement>document.getElementById('caja11')).innerText = "Introduce diámetro rueda";
        (<HTMLInputElement>document.getElementById('caja11')).classList.remove('d-none');
        return false;
    }
}
var marcaRueda1: string;
var marcaRueda2: string;
var marcaRueda3: string;
var marcaRueda4: string;
var diametroRueda1: any;
var diametroRueda2: any;
var diametroRueda3: any;
var diametroRueda4: any;

function guardarRuedas(e) {
    e.preventDefault();

    validarMarcaRueda1(e);
    validarDiametro1(e);
    validarMarcaRueda2(e);
    validarDiametro2(e);
    validarMarcaRueda3(e);
    validarDiametro3(e);
    validarMarcaRueda4(e);
    validarDiametro4(e);


    var caja4 = (<HTMLInputElement>document.getElementById("caja4")).value;
    var caja5 = (<HTMLInputElement>document.getElementById("caja5")).value;
    var caja6 = (<HTMLInputElement>document.getElementById("caja6")).value;
    var caja7 = (<HTMLInputElement>document.getElementById("caja7")).value;
    var caja8 = (<HTMLInputElement>document.getElementById("caja8")).value;
    var caja9 = (<HTMLInputElement>document.getElementById("caja9")).value;
    var caja10 = (<HTMLInputElement>document.getElementById("caja10")).value;
    var caja11 = (<HTMLInputElement>document.getElementById("caja11")).value;


    if (typeof (caja4) == "undefined" && typeof (caja5) == "undefined" && typeof (caja6) == "undefined" && typeof (caja7) == "undefined" && typeof (caja8) == "undefined" && typeof (caja9) == "undefined" && typeof (caja10) == "undefined" && typeof (caja11) == "undefined") {
        marcaRueda1 = (<HTMLInputElement>document.getElementById("marcaRueda1")).value;
        diametroRueda1 = (<HTMLInputElement>document.getElementById("diametroRueda1")).value;
        marcaRueda2 = (<HTMLInputElement>document.getElementById("marcaRueda2")).value;
        diametroRueda2 = (<HTMLInputElement>document.getElementById("diametroRueda2")).value;
        marcaRueda3 = (<HTMLInputElement>document.getElementById("marcaRueda3")).value;
        diametroRueda3 = (<HTMLInputElement>document.getElementById("diametroRueda3")).value;
        marcaRueda4 = (<HTMLInputElement>document.getElementById("marcaRueda4")).value;
        diametroRueda4 = (<HTMLInputElement>document.getElementById("diametroRueda4")).value;

        if (marcaRueda1 == "" && diametroRueda1 == "" && marcaRueda2 == "" && diametroRueda2 == "" && marcaRueda3 == "" && diametroRueda3 == "" && marcaRueda4 == "" && diametroRueda4 == "") {
            document.getElementById("mensaje2").style.display = "block";
            document.getElementById("caja4").style.display = "none";
            document.getElementById("caja5").style.display = "none";
            document.getElementById("caja6").style.display = "none";
            document.getElementById("caja7").style.display = "none";
            document.getElementById("caja8").style.display = "none";
            document.getElementById("caja9").style.display = "none";
            document.getElementById("caja10").style.display = "none";
            document.getElementById("caja11").style.display = "none";
            document.getElementById("listado2").style.display = "none";
        }
    }

    //listado Ruedas
    var rueda = new Wheel();
    rueda.setRueda1(marcaRueda1);
    rueda.setRueda2(marcaRueda2);
    rueda.setRueda3(marcaRueda3);
    rueda.setRueda4(marcaRueda4);
    rueda.setDiametro1(diametroRueda1);
    rueda.setDiametro2(diametroRueda2);
    rueda.setDiametro3(diametroRueda3);
    rueda.setDiametro4(diametroRueda4);

    ruedas.push(rueda);

    var list2 = "";
    for (var i = 0; i < ruedas.length; i++) {
        list2 = list2 + "<li>" + "Marca / Diámetro Rueda 1: " + ruedas[i].getRueda1() + " " + ruedas[i].getDiametro1() + "</li>";
        list2 = list2 + "<li>" + "Marca / Diámetro Rueda 2: " + ruedas[i].getRueda2() + " " + ruedas[i].getDiametro2() + "</li>" + "</br>";
        list2 = list2 + "<li>" + "Marca / Diámetro Rueda 3: " + ruedas[i].getRueda3() + " " + ruedas[i].getDiametro3() + "</li>";
        list2 = list2 + "<li>" + "Marca / Diámetro Rueda 4: " + ruedas[i].getRueda4() + " " + ruedas[i].getDiametro4() + "</li>" + "</br>";
    }

    var listado2 = <HTMLElement>document.getElementById("listado2");
    listado2.innerHTML = list2;

    (<HTMLInputElement>document.getElementById("marcaRueda1")).value = "";
    (<HTMLInputElement>document.getElementById("diametroRueda1")).value = "";
    (<HTMLInputElement>document.getElementById("marcaRueda2")).value = "";
    (<HTMLInputElement>document.getElementById("diametroRueda2")).value = "";
    (<HTMLInputElement>document.getElementById("marcaRueda3")).value = "";
    (<HTMLInputElement>document.getElementById("diametroRueda3")).value = "";
    (<HTMLInputElement>document.getElementById("marcaRueda4")).value = "";
    (<HTMLInputElement>document.getElementById("diametroRueda4")).value = "";

}

