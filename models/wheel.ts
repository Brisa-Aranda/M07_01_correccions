class Wheel{
    public marcaRueda1: string;
    public marcaRueda2: string;
    public marcaRueda3: string;
    public marcaRueda4: string;
    public diametroRueda1: number;
    public diametroRueda2: number;
    public diametroRueda3: number;
    public diametroRueda4: number;

    
    public getRueda1() {
        return this.marcaRueda1;
    }
    public setRueda1(marcaRueda1: string) {
        this.marcaRueda1 = marcaRueda1;
    }
    public getRueda2() {
        return this.marcaRueda2;
    }
    public setRueda2(marcaRueda2: string) {
        this.marcaRueda2 = marcaRueda2;
    }
    public getRueda3() {
        return this.marcaRueda3;
    }
    public setRueda3(marcaRueda3: string) {
        this.marcaRueda3 = marcaRueda3;
    }
    public getRueda4() {
        return this.marcaRueda4;
    }
    public setRueda4(marcaRueda4: string) {
        this.marcaRueda4 = marcaRueda4;
    }

    public getDiametro1() {
        return this.diametroRueda1;
    }
    public setDiametro1(diametroRueda1: number) {
        this.diametroRueda1 = diametroRueda1;
    }

    public getDiametro2() {
        return this.diametroRueda2;
    }
    public setDiametro2(diametroRueda2: number) {
        this.diametroRueda2 = diametroRueda2;
    }

    public getDiametro3() {
        return this.diametroRueda3;
    }
    public setDiametro3(diametroRueda3: number) {
        this.diametroRueda3 = diametroRueda3;
    }

    public getDiametro4() {
        return this.diametroRueda4;
    }
    public setDiametro4(diametroRueda4: number) {
        this.diametroRueda4 = diametroRueda4;
    }

    constructor(marcaRueda1 ?:string,marcaRueda2 ?:string, marcaRueda3 ?:string, marcaRueda4 ?:string,
                diametroRueda1 ?:number, diametroRueda2 ?:number, diametroRueda3 ?:number, diametroRueda4 ?:number){
       this.marcaRueda1=marcaRueda1;
       this.marcaRueda2=marcaRueda2;
       this.marcaRueda3=marcaRueda3;
       this.marcaRueda4=marcaRueda4;
       this.diametroRueda1=diametroRueda1;
       this.diametroRueda2=diametroRueda2;
       this.diametroRueda3=diametroRueda3;
       this.diametroRueda4=diametroRueda4;
    }

}