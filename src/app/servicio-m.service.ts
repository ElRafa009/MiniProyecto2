import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioMService {


  imagenes:any[] = [
    {
      link:'https://ca-times.brightspotcdn.com/dims4/default/2215203/2147483647/strip/true/crop/4000x2250+0+209/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F50%2Fc5%2F79c335f348028e5fe988fc9b2aba%2Fla105304.jpg',
      descripcion:'Esta es una imagen del simi'
    },
    {
      link:'https://cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/62TY67Z7PPER5ZGNJVAPHK5E6Q.jpg',
      descripcion:'Esta es una imagen nueva del simi'
    },
    {
      link:'https://c8.alamy.com/compes/2b3pkp9/farmaceutico-en-el-baile-de-disfraces-del-dr-simi-fuera-de-las-farmacias-similares-similares-pharmacy-acapulco-mexico-2b3pkp9.jpg',
      descripcion:'Esta es una imagen nueva del simi'
    },
    {
      link:'https://piedepagina.mx/wp-content/uploads/2020/06/pdp_medicos_farmacias_covid_Duilio_Rodriguez-1-1200x750.jpg',
      descripcion:'Esta es una imagen nueva del simi'
    },
    {
      link:'https://c8.alamy.com/compes/2b3pmc1/farmaceutico-en-el-baile-de-disfraces-del-dr-simi-fuera-de-las-farmacias-similares-similares-pharmacy-acapulco-mexico-2b3pmc1.jpg',
      descripcion:'Esta es una imagen nueva del simi'
    },
    {
      link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_uY-uVyUwHUBs7tQG8RvzgkBUQ_9yCxEBQ&usqp=CAU',
      descripcion:'Esta es una imagen nueva del simi'
    },
    {
      link:'https://images.reporteindigo.com/wp-content/uploads/2022/03/Me-pagan-por-bailar-no-por-cuidar-Dr.-Simi-huye-de-asalto-en-farmacia-VIDEO.jpeg',
      descripcion:'Esta es una imagen nueva del simi'
    },
    {
      link:'https://cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/E22SW2VASOCZL5UEUU4YJMBGUM.jpg',
      descripcion:'Esta es una imagen nueva del simi'
    },
    {
      link:'https://cdn2.mediotiempo.com/uploads/media/2022/03/27/el-video-se-hizo-viral-1.jpg',
      descripcion:'Esta es una imagen nueva del simi'
    },
    {
      link:'https://quinto-poder.mx/u/fotografias/m/2022/3/28/f1280x720-10726_142401_5050.jpg',
      descripcion:'Esta es una imagen nueva del simi'
    },
    {
      link:'https://cdn2.mediotiempo.com/uploads/media/2023/02/07/dr-simi-personaje-cadena-farmacias.jpg',
      descripcion:'Esta es una imagen nueva del simi'
    },
    {
      link:'https://cdn-3.expansion.mx/dims4/default/3a49e33/2147483647/strip/true/crop/1196x628+2+0/resize/1200x630!/format/jpg/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F42%2Ff0%2F12fae0f54405a9df5ef06afd20d6%2Fdr-simi-candidato-presidente.jpg',
      descripcion:'Esta es una imagen nueva del simi'
    },

  ]

  obtenerLinks(){
    return this.imagenes;
    }
}

