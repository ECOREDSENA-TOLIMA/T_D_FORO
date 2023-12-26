export default {
  global: {
    componenteFormativo: 'Foro',
    descripcionCurso:
      'Un foro es una herramienta de comunicación asíncrona en línea, permite a los usuarios intercambiar opiniones y comentarios sobre diversos temas. Desarrollados en la web, funcionan como tablones de mensajes, facilitando debates continuos y reflexiones individuales. Según la OPS/OMS, los foros virtuales son soluciones efectivas para debates asíncronos, fomentando el reconocimiento y reflexión de aportes individuales en temas específicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      // {
      //   nombreRuta: 'introduccion',
      //   icono: 'fas fa-info-circle',
      //   titulo: 'Introducción',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Foro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Componentes del foro',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Pasos para realizar el foro',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Recomendaciones para desarrollar el foro',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Herramientas digitales se pueden utilizar como apoyo para la participación en foros',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Ejemplo de un foro',
            hash: 't_1_6',
          },
        ],
      },
      // {
      //   nombreRuta: 'tema2',
      //   numero: '2',
      //   titulo: 'Titulo de primer nivel',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'tema3',
      //   numero: '3',
      //   titulo: 'Titulo de primer nivel',
      //   desarrolloContenidos: true,
      // },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'glosario',
      //   icono: 'fas fa-sort-alpha-down',
      //   titulo: 'Glosario',
      // },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Oratoria.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
    {
      termino: '<em></em>',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia:
        'Organización Panamericana de la Salud. (2015). Cómo desarrollar foros virtuales de discusión de manera efectiva. Metodologías de la OPS/OMS para intercambio de información y gestión del conocimiento en Salud. ',
      link:
        'https://www3.paho.org/hq/index.php?option=com_docman&view=download&category_slug=metodologias-8847&alias=35657-como-desarrollar-foros-virtuales-discusion-manera-efectiva-657&Itemid=270&lang=en',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima  - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Juan Gilberto Giraldo Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima  - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima  - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
