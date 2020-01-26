

export class GraficaData{

    private meses: string[] = ['enero', 'febrero', 'marzo', 'abril'];
    private opciones: string[] = ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4'];


    private valores: number[] = [1, 2, 3, 4];

    constructor() { }

    getDataGrafica(){
        return [
            {data: this.valores, label: 'Ventas'}
        ]
    }

    getDataGraficaBarra(){
        return [
            {data: this.valores, label: 'Preguntas'}
        ]
    }

    incrementarValor( mes: string, valor: number ){

        mes = mes.toLocaleLowerCase().trim();
        for (let i in this.meses) {
            if (this.meses[i] === mes ) {
                this.valores[i] += valor;                
            }
        }
        return this.getDataGrafica();
    }

    incrementarValorBarra( opcion: number, valor: number ){
        
        this.valores[opcion] += valor;  
        // console.log(this.getDataGrafica());
        return this.getDataGrafica();
    }

    

}