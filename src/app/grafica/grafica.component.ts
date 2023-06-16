import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent {
  title = 'GraficasJS';
  @ViewChild('myChart') myChart!: ElementRef<HTMLCanvasElement>;
  chartInstance: any;
  datosTabla: number[] = [];
  xValues = ["Odontologia", "Estomatologia", "Oftalmologia", "Ginecologia", "Pediatria"];

  ngAfterViewInit() {
    this.crearGrafico();
  }

  generarDatosAleatorios() {
    var yValues = [];
    for (var i = 0; i < 5; i++) {
      var valorAleatorio = Math.floor(Math.random() * 100) + 1;
      yValues.push(valorAleatorio);
    }
    return yValues;
  }

  crearGrafico() {
    var yValues = this.generarDatosAleatorios();
    var barColors = ["purple", "green", "blue", "orange", "brown"];
    const ctx = this.myChart.nativeElement.getContext('2d');

    if (ctx) {
      this.chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.xValues,
          datasets: [{
          data: yValues,
          backgroundColor: barColors
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  actualizarGrafico() {
    var yValues = this.generarDatosAleatorios();

    if (this.chartInstance) {
      this.chartInstance.data.datasets[0].data = yValues;
      this.chartInstance.update();
      localStorage.setItem('datosGrafico', JSON.stringify(yValues));
      this.datosTabla = yValues;
    }
  }
}

