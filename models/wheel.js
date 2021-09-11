var Wheel = /** @class */ (function () {
    function Wheel(marcaRueda1, marcaRueda2, marcaRueda3, marcaRueda4, diametroRueda1, diametroRueda2, diametroRueda3, diametroRueda4) {
        this.marcaRueda1 = marcaRueda1;
        this.marcaRueda2 = marcaRueda2;
        this.marcaRueda3 = marcaRueda3;
        this.marcaRueda4 = marcaRueda4;
        this.diametroRueda1 = diametroRueda1;
        this.diametroRueda2 = diametroRueda2;
        this.diametroRueda3 = diametroRueda3;
        this.diametroRueda4 = diametroRueda4;
    }
    Wheel.prototype.getRueda1 = function () {
        return this.marcaRueda1;
    };
    Wheel.prototype.setRueda1 = function (marcaRueda1) {
        this.marcaRueda1 = marcaRueda1;
    };
    Wheel.prototype.getRueda2 = function () {
        return this.marcaRueda2;
    };
    Wheel.prototype.setRueda2 = function (marcaRueda2) {
        this.marcaRueda2 = marcaRueda2;
    };
    Wheel.prototype.getRueda3 = function () {
        return this.marcaRueda3;
    };
    Wheel.prototype.setRueda3 = function (marcaRueda3) {
        this.marcaRueda3 = marcaRueda3;
    };
    Wheel.prototype.getRueda4 = function () {
        return this.marcaRueda4;
    };
    Wheel.prototype.setRueda4 = function (marcaRueda4) {
        this.marcaRueda4 = marcaRueda4;
    };
    Wheel.prototype.getDiametro1 = function () {
        return this.diametroRueda1;
    };
    Wheel.prototype.setDiametro1 = function (diametroRueda1) {
        this.diametroRueda1 = diametroRueda1;
    };
    Wheel.prototype.getDiametro2 = function () {
        return this.diametroRueda2;
    };
    Wheel.prototype.setDiametro2 = function (diametroRueda2) {
        this.diametroRueda2 = diametroRueda2;
    };
    Wheel.prototype.getDiametro3 = function () {
        return this.diametroRueda3;
    };
    Wheel.prototype.setDiametro3 = function (diametroRueda3) {
        this.diametroRueda3 = diametroRueda3;
    };
    Wheel.prototype.getDiametro4 = function () {
        return this.diametroRueda4;
    };
    Wheel.prototype.setDiametro4 = function (diametroRueda4) {
        this.diametroRueda4 = diametroRueda4;
    };
    return Wheel;
}());
