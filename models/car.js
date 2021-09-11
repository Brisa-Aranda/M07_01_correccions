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
var Car = /** @class */ (function () {
    function Car(matricula, color, marca) {
        this.wheels = new Array();
        this.matricula = matricula;
        this.color = color;
        this.marca = marca;
    }
    Car.prototype.getMatricula = function () {
        return this.matricula;
    };
    Car.prototype.setMatricula = function (matricula) {
        this.matricula = matricula;
    };
    Car.prototype.getMarca = function () {
        return this.marca;
    };
    Car.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    return Car;
}());
var EditorCoche = /** @class */ (function (_super) {
    __extends(EditorCoche, _super);
    function EditorCoche() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorCoche.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EditorCoche.prototype.getTimeline = function () {
        return this.timeline;
    };
    EditorCoche.prototype.getAllData = function () {
        return this.getMatricula() + "-" + this.getMarca() + "-" + this.getColor() + "-" + this.getTimeline();
    };
    return EditorCoche;
}(Car));
