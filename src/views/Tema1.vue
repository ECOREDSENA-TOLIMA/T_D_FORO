<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Foro

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Definición

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p De acuerdo con la Organización Panamericana de la Salud (OPS) de la Organización Mundial de la Salud (OMS) (2015) en su documento cómo desarrollar foros virtuales de discusión de manera efectiva, el foro virtual representa una solución de encuentro a través de medios electrónicos en situaciones en las que los participantes no pueden reunirse personalmente, y donde los proyectos permiten debates asíncronos. Los foros propician que cada participante reconozca los aportes de los demás, reflexione sobre ellos y realice sus propias construcciones en torno a una temática.
      
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Componentes del foro

    .tarjeta--container.row.mb-5
      .col-md.tarjeta(style="background-color:#CDF5E2").p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen')
          
        h2.text-center Objetivo
        p El foro virtual tiene como propósito compartir ideas, resolver problemas, promover el conocimiento a través de la interacción entre compañeros y docente, finalmente desarrollar buenas prácticas de comunicación asertiva.

      .col-md.tarjeta(style="background-color:#FAFFD7").p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/3.svg', alt='Texto que describa la imagen')
          
        h2.text-center Resultados esperados
        p Mediante el foro se espera un aprendizaje colaborativo, resolución de problemas, la creación de ideas, intercambio y construcción de conocimiento, el desarrollo de mejores prácticas, la divulgación de lecciones aprendidas o de reflexiones colectivas.

      .col-md.tarjeta(style="background-color:#DBE5F3").p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/4.svg', alt='Texto que describa la imagen')

        h2.text-center Premisas
        p Son condiciones que se deben tener en cuenta para realizar de forma objetiva el foro, entre otras están:

    .row.justify-content-center
      .col
        li #[b Motivación:] se debe generar un ambiente abierto, libre, que estimule la creatividad y el intercambio autónomo de información, construcción de nuevos conocimientos, y un fuerte compromiso personal y de libertad de expresión.
        li #[b Definición de reglas:] deben generar el intercambio de ideas y no limitar o encasillar, sino promover la creatividad y la construcción de criterio.
        li #[b Productividad:] entendida como un efecto secundario, no un objetivo primario, dado que lo que se busca es aprender de la experiencia.
        li #[b Autoevaluación del grupo:] deben generarse mecanismos que le permita al grupo autoevaluarse informalmente acerca del camino crítico que permitirá alcanzar los resultados planteados.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Pasos para realizar el foro

    .row.justify-content-center.mb-4
      
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Visualice videos e imágenes")
            .col.mb-md-0
              p En algunos casos se incluyen video o imágenes como parte de los elementos de análisis o reflexión, examine cuidadosamente, prestando atención a los detalles clave que puedan ser cruciales para abordar las preguntas posteriores.

          .row(titulo="Identifique las preguntas e instrucciones")
            .col.mb-md-0
              p Lea detalladamente todas las preguntas que se realizan en la guía de aprendizaje antes de empezar a responderlas, con ello tendrá una visión general sobre los aspectos que se le preguntan. Asimismo, lea las instrucciones específicas que solicita cada instructor. 
          
          .row(titulo="Responda las preguntas")
            .col.mb-md-0
              p En el espacio que se asigna dentro del LMS responda con la mayor conciencia posible las preguntas que se le realizan, no es necesario hacer una consulta bibliográfica previa para la resolución de las preguntas de reflexión, ya que el objetivo es generar un análisis personal sobre las situaciones presentadas. 
          
          .row(titulo="Reflexione sobre la respuesta de un compañero")
            .col.mb-md-0
              p Una vez haya respondido el foro, lea detalladamente la respuesta de mínimo dos de sus compañeros y realice una reflexión sobre los comentarios que ellos están dando, determine si está de acuerdo o no argumentando su punto de vista de una manera adecuada. 
          
          .row(titulo="Responda las reflexiones realizadas en su respuesta")
            .col.mb-md-0
              p Lea los comentarios que realizan sus compañeros sobre sus respuestas y respóndalas argumentando con respeto su punto de vista.
          
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/5.png", alt="alt").img400.m-auto

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4 Recomendaciones para desarrollar el foro

    .tarjeta(style="border-radius:0;background-color:#ECF7E6").p-5
      .row 
        .col-lg-5.col-12
          figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/6.svg", alt="alt")
        .col-lg-7.col-12
          li Al escribir sus mensajes asegúrese de que los mismos tengan buena ortografía, sean comprensibles y pertinentes al tema de discusión.
          li Maneje un lenguaje adecuado, y trate a las personas con las que se comunica con respeto y cortesía.
          li Sea paciente con los participantes que tengan otros ritmos de comunicación, ya sea por exceso de comunicación o falta de la misma.
          li Tenga en cuenta que participarán miembros de varios sectores, y las diferencias culturales generan diferencias en estilos de comunicación.
          li Evite enviar mensajes muy extensos, trate de resumir las ideas en pocas oraciones claras y concisas.
          li Si comparte archivos, intente optimizar el tamaño del mismo para facilitar la descarga.
          li En caso de consultar información externa, citar de acuerdo con las normas APA 7ª. edición. 
          li El máximo para la subida es de 6000kb (6MB).
          li Tipo de archivos: txt, rtf, pdf, zip, tar.gz, tgz, tar.bz2, doc, docx, xls, xlsx, ppt, pptx, pps, ppsx.
          li Imágenes máximo 4000kb (4MB). 
          li Tipo de archivo de imagen: image/jpeg, image/jpg, image/gif, image/png

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_5 1.5 Herramientas digitales se pueden utilizar como apoyo para la participación en foros
    
    LineaTiempoD.color-acento-botones
      .row(numero="1" titulo="Reddit").justify-content-center
        .col-12
          p  principal página de foros en internet, ejemplifica la interacción entre usuarios. 
      
        .col-12.mb-3
          figure
            img(src='@/assets/curso/temas/7.jpg', alt='Texto que describa la imagen')

        .col-2
          a.boton.color-acento-botones.me-3(href="https://www.reddit.com/" target="_blank" type="web")
            span Enlace web
            i.fas.fa-file-download

      .row(numero="2" titulo="Corrector Online").justify-content-center
        .col-12
          p  Revisión y mejora de gramática de textos  
      
        .col-12.mb-3
          figure
            img(src='@/assets/curso/temas/8.jpg', alt='Texto que describa la imagen')

        .col-2
          a.boton.color-acento-botones.me-3(href="https://www.correctoronline.es/" target="_blank" type="web")
            span Enlace web
            i.fas.fa-file-download

      .row(numero="3" titulo="Language Tool").justify-content-center
        .col-12
          p  Revisión de ortografía y estilo. 
      
        .col-12.mb-3
          figure
            img(src='@/assets/curso/temas/9.jpg', alt='Texto que describa la imagen')

        .col-2
          a.boton.color-acento-botones.me-3(href="https://languagetool.org/es" target="_blank" type="web")
            span Enlace web
            i.fas.fa-file-download

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_6 1.6 Ejemplo de un foro

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Foro LMS</em>
        figure
          img.mb-3(src='@/assets/curso/temas/10.jpg', alt='En la figura 1 se muestra un foro LMS donde hay la participación de un aprendiz con su respectiva retroalimentación por parte de otro aprendiz.')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Foro LMS</em>
        figure
          img.mb-3(src='@/assets/curso/temas/10-m.jpg', alt='En la figura 1 se muestra un foro LMS donde hay la participación de un aprendiz con su respectiva retroalimentación por parte de otro aprendiz.')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
