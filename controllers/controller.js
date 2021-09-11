var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var reg = /^(\b\d{4}\w{3})$/igm;
var reg1 = /^(\w{3,10})$/igm;
var editor = new EditorCoche();
editor.setMatricula(1702);
editor.setMarca("citroen");
editor.setColor("verde");
editor.setTimeline(4000);
// Validar Formulario Coche
var coches = [];
function validarMatricula(e) {
    e.preventDefault();
    var txtMatricula = document.getElementById('matricula').value;
    if (txtMatricula.match(reg)) {
        document.getElementById('matricula').classList.add('is-valid');
        document.getElementById('matricula').classList.remove('is-invalid');
        document.getElementById('caja1').classList.add('d-none');
        return true;
    }
    else {
        document.getElementById('caja1').classList.add('msg-error');
        document.getElementById('matricula').classList.add('is-invalid');
        document.getElementById('caja1').innerText = "La matrícula debe comenzar con 4 números y terminar con 3 letras. ";
        document.getElementById('caja1').classList.remove('d-none');
        return false;
    }
}
function validarMarca(e) {
    e.preventDefault();
    var txtMarca = document.getElementById('marca').value;
    if (txtMarca.match(reg1)) {
        document.getElementById('marca').classList.add('is-valid');
        document.getElementById('marca').classList.remove('is-invalid');
        document.getElementById('caja2').classList.add('d-none');
        return true;
    }
    else {
        document.getElementById('caja2').classList.add('msg-error');
        document.getElementById('marca').classList.add('is-invalid');
        document.getElementById('caja2').innerText = "Agregue la marca (+ de 3 y menos de 11 caracters)";
        document.getElementById('caja2').classList.remove('d-none');
        return false;
    }
}
function validarColor(e) {
    e.preventDefault();
    var txtColor = document.getElementById('color').value;
    if (txtColor.match(reg1)) {
        document.getElementById('color').classList.add('is-valid');
        document.getElementById('color').classList.remove('is-invalid');
        document.getElementById('caja3').classList.add('d-none');
        return true;
    }
    else {
        document.getElementById('caja3').classList.add('msg-error');
        document.getElementById('color').classList.add('is-invalid');
        document.getElementById('caja3').innerText = "Agregue un color (+ de 3 y menos de 11 caracters)";
        document.getElementById('caja3').classList.remove('d-none');
        return false;
    }
}
function guardar(e) {
    e.preventDefault();
    validarMatricula(e);
    validarMarca(e);
    validarColor(e);
    var caja1 = document.getElementById("caja1").value;
    var caja2 = document.getElementById("caja2").value;
    var caja3 = document.getElementById("caja3").value;
    if (typeof (caja1) == "undefined" && typeof (caja2) == "undefined" && typeof (caja3) == "undefined") {
        var matricula = document.getElementById("matricula").value;
        var marca = document.getElementById("marca").value;
        var color = document.getElementById("color").value;
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
        list = list + "<li>" + "Matrícula: " + coches[i].getMatricula() + "</li>";
        list = list + "<li>" + "Marca: " + coches[i].getMarca() + "</li>";
        list = list + "<li>" + "Color: " + coches[i].getColor() + "</li>" + "<br>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("matricula").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("color").value = "";
}
/*****************************************************************************/
var EditorRueda = /** @class */ (function (_super) {
    __extends(EditorRueda, _super);
    function EditorRueda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorRueda.prototype.setTimelineRueda = function (timelineRueda) {
        this.timelineRueda = timelineRueda;
    };
    EditorRueda.prototype.getTimelineRueda = function () {
        return this.timelineRueda;
    };
    EditorRueda.prototype.getAllDataRueda = function () {
        return this.getRueda1() + "-" + this.getDiametro1() + "-" + this.getRueda2() + "-" + this.getDiametro2() + "-" + this.getRueda3() + "-" + this.getDiametro3() + this.getRueda4() + "-" + this.getDiametro4() + "-" + this.getTimelineRueda();
    };
    return EditorRueda;
}(Wheel));
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
    var txtMarcaRueda1 = document.getElementById('marcaRueda1').value;
    if (txtMarcaRueda1.match(reg1)) {
        document.getElementById('marcaRueda1').classList.add('is-valid');
        document.getElementById('marcaRueda1').classList.remove('is-invalid');
        document.getElementById('caja4').classList.add('d-none');
        return true;
    }
    else {
        document.getElementById('caja4').classList.add('msg-error');
        document.getElementById('marcaRueda1').classList.add('is-invalid');
        document.getElementById('caja4').innerText = "Agregue la marca";
        document.getElementById('caja4').classList.remove('d-none');
        return false;
    }
}
function validarDiametro1(e) {
    e.preventDefault();
    var txtDiametroRueda1 = parseFloat(document.getElementById('diametroRueda1').value);
    if (txtDiametroRueda1 >= 0.4 && txtDiametroRueda1 <= 2) {
        document.getElementById('diametroRueda1').classList.add('is-valid');
        document.getElementById('diametroRueda1').classList.remove('is-invalid');
        document.getElementById('caja5').classList.add('d-none');
        return true;
    }
    else {
        document.getElementById('caja5').classList.add('msg-error');
        document.getElementById('diametroRueda1').classList.add('is-invalid');
        document.getElementById('caja5').innerText = "Introduce diámetro rueda";
        document.getElementById('caja5').classList.remove('d-none');
        return false;
    }
}
//Rueda 2
function validarMarcaRueda2(e) {
    e.preventDefault();
    var txtMarcaRueda2 = document.getElementById('marcaRueda2').value;
    if (txtMarcaRueda2.match(reg1)) {
        document.getElementById('marcaRueda2').classList.add('is-valid');
        document.getElementById('marcaRueda2').classList.remove('is-invalid');
        document.getElementById('caja6').classList.add('d-none');
        return true;
    }
    else {
        document.getElementById('caja6').classList.add('msg-error');
        document.getElementById('marcaRueda2').classList.add('is-invalid');
        document.getElementById('caja6').innerText = "Agregue la marca";
        document.getElementById('caja6').classList.remove('d-none');
        return false;
    }
}
function validarDiametro2(e) {
    e.preventDefault();
    var txtDiametroRueda2 = parseFloat(document.getElementById('diametroRueda2').value);
    if (txtDiametroRueda2 >= 0.4 && txtDiametroRueda2 <= 2) {
        document.getElementById('diametroRueda2').classList.add('is-valid');
        document.getElementById('diametroRueda2').classList.remove('is-invalid');
        document.getElementById('caja7').classList.add('d-none');
        return true;
    }
    else {
        document.getElementById('caja7').classList.add('msg-error');
        document.getElementById('diametroRueda2').classList.add('is-invalid');
        document.getElementById('caja7').innerText = "Introduce diámetro rueda";
        document.getElementById('caja7').classList.remove('d-none');
        return false;
    }
}
// Rueda 3
function validarMarcaRueda3(e) {
    e.preventDefault();
    var txtMarcaRueda3 = document.getElementById('marcaRueda3').value;
    if (txtMarcaRueda3.match(reg1)) {
        document.getElementById('marcaRueda3').classList.add('is-valid');
        document.getElementById('marcaRueda3').classList.remove('is-invalid');
        document.getElementById('caja8').classList.add('d-none');
        return true;
    }
    else {
        document.getElementById('caja8').classList.add('msg-error');
        document.getElementById('marcaRueda3').classList.add('is-invalid');
        document.getElementById('caja8').innerText = "Agregue la marca";
        document.getElementById('caja8').classList.remove('d-none');
        return false;
    }
}
function validarDiametro3(e) {
    e.preventDefault();
    var txtDiametroRueda3 = parseFloat(document.getElementById('diametroRueda3').value);
    if (txtDiametroRueda3 >= 0.4 && txtDiametroRueda3 <= 2) {
        document.getElementById('diametroRueda3').classList.add('is-valid');
        document.getElementById('diametroRueda3').classList.remove('is-invalid');
        document.getElementById('caja9').classList.add('d-none');
        return true;
    }
    else {
        document.getElementById('caja9').classList.add('msg-error');
        document.getElementById('diametroRueda3').classList.add('is-invalid');
        document.getElementById('caja9').innerText = "Introduce diámetro rueda";
        document.getElementById('caja9').classList.remove('d-none');
        return false;
    }
}
//Rueda 4
function validarMarcaRueda4(e) {
    e.preventDefault();
    var txtMarcaRueda3 = document.getElementById('marcaRueda4').value;
    if (txtMarcaRueda3.match(reg1)) {
        document.getElementById('marcaRueda4').classList.add('is-valid');
        document.getElementById('marcaRueda4').classList.remove('is-invalid');
        document.getElementById('caja10').classList.add('d-none');
        return true;
    }
    else {
        document.getElementById('caja10').classList.add('msg-error');
        document.getElementById('marcaRueda4').classList.add('is-invalid');
        document.getElementById('caja10').innerText = "Agregue la marca";
        document.getElementById('caja10').classList.remove('d-none');
        return false;
    }
}
function validarDiametro4(e) {
    e.preventDefault();
    var txtDiametroRueda4 = parseFloat(document.getElementById('diametroRueda4').value);
    if (txtDiametroRueda4 >= 0.4 && txtDiametroRueda4 <= 2) {
        document.getElementById('diametroRueda4').classList.add('is-valid');
        document.getElementById('diametroRueda4').classList.remove('is-invalid');
        document.getElementById('caja11').classList.add('d-none');
        return true;
    }
    else {
        document.getElementById('caja11').classList.add('msg-error');
        document.getElementById('diametroRueda4').classList.add('is-invalid');
        document.getElementById('caja11').innerText = "Introduce diámetro rueda";
        document.getElementById('caja11').classList.remove('d-none');
        return false;
    }
}
var marcaRueda1;
var marcaRueda2;
var marcaRueda3;
var marcaRueda4;
var diametroRueda1;
var diametroRueda2;
var diametroRueda3;
var diametroRueda4;
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
    var caja4 = document.getElementById("caja4").value;
    var caja5 = document.getElementById("caja5").value;
    var caja6 = document.getElementById("caja6").value;
    var caja7 = document.getElementById("caja7").value;
    var caja8 = document.getElementById("caja8").value;
    var caja9 = document.getElementById("caja9").value;
    var caja10 = document.getElementById("caja10").value;
    var caja11 = document.getElementById("caja11").value;
    if (typeof (caja4) == "undefined" && typeof (caja5) == "undefined" && typeof (caja6) == "undefined" && typeof (caja7) == "undefined" && typeof (caja8) == "undefined" && typeof (caja9) == "undefined" && typeof (caja10) == "undefined" && typeof (caja11) == "undefined") {
        marcaRueda1 = document.getElementById("marcaRueda1").value;
        diametroRueda1 = document.getElementById("diametroRueda1").value;
        marcaRueda2 = document.getElementById("marcaRueda2").value;
        diametroRueda2 = document.getElementById("diametroRueda2").value;
        marcaRueda3 = document.getElementById("marcaRueda3").value;
        diametroRueda3 = document.getElementById("diametroRueda3").value;
        marcaRueda4 = document.getElementById("marcaRueda4").value;
        diametroRueda4 = document.getElementById("diametroRueda4").value;
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
    var listado2 = document.getElementById("listado2");
    listado2.innerHTML = list2;
    document.getElementById("marcaRueda1").value = "";
    document.getElementById("diametroRueda1").value = "";
    document.getElementById("marcaRueda2").value = "";
    document.getElementById("diametroRueda2").value = "";
    document.getElementById("marcaRueda3").value = "";
    document.getElementById("diametroRueda3").value = "";
    document.getElementById("marcaRueda4").value = "";
    document.getElementById("diametroRueda4").value = "";
}
