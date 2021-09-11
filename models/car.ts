class Car{
    public matricula: any;
    public marca: string;
    public color: string;

    
    public getMatricula() {
        return this.matricula;
    }
    public setMatricula(matricula: any) {
        this.matricula = matricula;
    }

    public getMarca() {
        return this.marca;
    }
    public setMarca(marca: string) {
        this.marca = marca;
    }

    public getColor() {
        return this.color;
    }
    public setColor(color: string) {
        this.color = color;
    }
    
    wheels:Wheel[]=new Array();
    
    constructor(matricula ?:any,color ?:string,marca ?:string){
        this.matricula=matricula;
        this.color=color;
        this.marca=marca;
    }
    
    addWheel(wheel:Wheel):void{
        this.wheels.push(wheel);
    }
}

class EditorCoche extends Car {
    public timeline: number;

    setTimeline(timeline: number) {
        this.timeline = timeline;
    }
    getTimeline() {
        return this.timeline;
    }
    getAllData(): string {
        return this.getMatricula() + "-" + this.getMarca() + "-" + this.getColor() + "-" + this.getTimeline();
    }
}