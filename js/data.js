export const platillos = [
  { id: 'ceviche', name: 'Ceviche Acapulqueño', cat: 'Mariscos', catClass: 'cat-mariscos', sub: 'Plato estrella', bg: 'gastro-img-bg-ceviche', emoji: '🦐',
    desc: 'El ceviche de Acapulco es una obra maestra del mar. Camarón, pulpo y pescado fresco marinados en jugo de limón, mezclados con jitomate, cebolla, cilantro, chile serrano y aguacate. Servido en tostadas crujientes o en vaso, es el sabor más representativo del puerto.',
    ingredients: ['Camarón fresco','Pulpo','Limón','Jitomate','Aguacate','Chile serrano'], price: '$120 MXN',
    tags: [{label:'Mariscos', bg:'#E0F2FE', color:'#0369A1'},{label:'Plato estrella', bg:'#FEF3C7', color:'#92400E'}],
    dondeProbarlo: [
      { label: 'Restaurante 1', sub: 'Especialidad en ceviche', icon: '📍', url: 'https://maps.google.com/maps?q=Ceviche+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Restaurante 2', sub: 'Tradición local', icon: '📍', url: 'https://maps.google.com/maps?q=Mariscos+El+Amigo+Miguel+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Restaurante 3', sub: 'Frente a la playa', icon: '📍', url: 'https://maps.google.com/maps?q=Restaurante+Mariscos+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Restaurante 4', sub: 'Sabor casero', icon: '📍', url: 'https://maps.google.com/maps?q=Cevichería+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Restaurante 5', sub: 'Muy recomendado', icon: '📍', url: 'https://maps.google.com/maps?q=Mariscos+Acapulco+Diamante&t=&z=15&ie=UTF8&iwloc=&output=embed' }
    ]
  },
  { id: 'pozole', name: 'Pozole Guerrerense', cat: 'Sopas', catClass: 'cat-sopas', sub: 'Tradición ancestral', bg: 'gastro-img-bg-pozole', emoji: '🍲',
    desc: 'El pozole guerrerense es único en su tipo. A diferencia de otras versiones, se prepara con chile ancho y mulato, maíz cacahuazintle y carne de cerdo o pollo, acompañado de tostadas, lechuga y orégano. Un platillo que data de la época prehispánica.',
    ingredients: ['Maíz cacahuazintle','Carne de cerdo','Chile ancho','Chile mulato','Orégano','Tostadas'], price: '$85 MXN',
    tags: [{label:'Sopas', bg:'#FEF3C7', color:'#92400E'},{label:'Tradición', bg:'#F3E8FF', color:'#7E22CE'}],
    dondeProbarlo: [
      { label: 'Pozolería 1', sub: 'Jueves pozolero', icon: '📍', url: 'https://maps.google.com/maps?q=Pozolería+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Pozolería 2', sub: 'Sabor tradicional', icon: '📍', url: 'https://maps.google.com/maps?q=Pozole+Guerrerense+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Pozolería 3', sub: 'Con música en vivo', icon: '📍', url: 'https://maps.google.com/maps?q=El+Zorrito+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Pozolería 4', sub: 'Receta familiar', icon: '📍', url: 'https://maps.google.com/maps?q=Pozolería+Centro+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Pozolería 5', sub: 'El favorito local', icon: '📍', url: 'https://maps.google.com/maps?q=Restaurante+Mexicano+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' }
    ]
  },
  { id: 'pescado', name: 'Pescado a la Talla', cat: 'Pescados', catClass: 'cat-pescados', sub: 'Ícono de Acapulco', bg: 'gastro-img-bg-pescado', emoji: '🐟',
    desc: 'Originario de las costas de Guerrero, el pescado a la talla es un huachinango abierto en mariposa, marinado con chile ancho y mayonesa, y asado lentamente sobre brasas de leña. Su sabor ahumado y picante lo ha convertido en un ícono gastronómico nacional.',
    ingredients: ['Huachinango','Chile ancho','Mayonesa','Ajo','Limón','Sal de mar'], price: '$180 MXN',
    tags: [{label:'Pescados', bg:'#D1FAE5', color:'#065F46'},{label:'Ícono de Acapulco', bg:'#FEF3C7', color:'#92400E'}],
    dondeProbarlo: [
      { label: 'Restaurante 1', sub: 'A la leña', icon: '📍', url: 'https://maps.google.com/maps?q=Pescado+a+la+talla+Barra+Vieja+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Restaurante 2', sub: 'Vista al mar', icon: '📍', url: 'https://maps.google.com/maps?q=Beto+Godoy+Barra+Vieja&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Restaurante 3', sub: 'Especialidad', icon: '📍', url: 'https://maps.google.com/maps?q=Restaurante+Cofre+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Restaurante 4', sub: 'Sabor original', icon: '📍', url: 'https://maps.google.com/maps?q=Mariscos+Barra+Vieja&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Restaurante 5', sub: 'Receta secreta', icon: '📍', url: 'https://maps.google.com/maps?q=Pescado+a+la+talla+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' }
    ]
  },
  { id: 'tostadas', name: 'Tostadas de Mariscos', cat: 'Antojitos', catClass: 'cat-antojitos', sub: 'Snack del puerto', bg: 'gastro-img-bg-tostadas', emoji: '🍤',
    desc: 'Las tostadas de mariscos son el antojito perfecto del puerto. Tostadas crujientes coronadas con ceviche, pulpo en su tinta, camarón o jaiba, aderezadas con chile y limón. Se disfrutan mejor frente al mar mientras sopla la brisa del Pacífico.',
    ingredients: ['Tostada crujiente','Camarón','Pulpo','Jaiba','Chile','Limón'], price: '$45 MXN',
    tags: [{label:'Antojitos', bg:'#FCE7F3', color:'#9D174D'},{label:'Snack del puerto', bg:'#F0FDF4', color:'#166534'}],
    dondeProbarlo: [
      { label: 'Marisquería 1', sub: 'Las más crujientes', icon: '📍', url: 'https://maps.google.com/maps?q=Mariscos+Costera+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Marisquería 2', sub: 'Gran variedad', icon: '📍', url: 'https://maps.google.com/maps?q=Tostadas+Mariscos+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Marisquería 3', sub: 'Salsa especial', icon: '📍', url: 'https://maps.google.com/maps?q=Coctelería+Acapulco&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Marisquería 4', sub: 'A orilla del mar', icon: '📍', url: 'https://maps.google.com/maps?q=Restaurante+Mariscos+Playa+Condesa&t=&z=15&ie=UTF8&iwloc=&output=embed' },
      { label: 'Marisquería 5', sub: 'Las favoritas', icon: '📍', url: 'https://maps.google.com/maps?q=Mercado+Central+Acapulco+Mariscos&t=&z=15&ie=UTF8&iwloc=&output=embed' }
    ]
  },
  { id: 'tamales', name: 'Tamales de Rajas', cat: 'Antojitos', catClass: 'cat-antojitos', sub: 'Cocina tradicional', bg: 'gastro-img-bg-tamales', emoji: '🌽',
    desc: 'Los tamales guerrerenses son envueltos en hoja de maíz y rellenos de rajas de chile poblano con queso Oaxaca. La masa es suave y húmeda, preparada con manteca y caldo. Una tradición que se prepara en fiestas y reuniones familiares.',
    ingredients: ['Masa de maíz','Chile poblano','Queso Oaxaca','Manteca','Caldo','Hoja de maíz'], price: '$30 MXN',
    tags: [{label:'Antojitos', bg:'#FCE7F3', color:'#9D174D'},{label:'Tradicional', bg:'#FEF3C7', color:'#92400E'}],
    dondeProbarlo: []
  },
  { id: 'camarones', name: 'Camarones al Mojo de Ajo', cat: 'Mariscos', catClass: 'cat-mariscos', sub: 'Especialidad costera', bg: 'gastro-img-bg-camarones', emoji: '🦐',
    desc: 'Camarones jumbo salteados en abundante mantequilla con ajo dorado, vino blanco y un toque de chile de árbol. Servidos con arroz a la mexicana y frijoles de olla, es el platillo estrella de los restaurantes frente al mar de la Costera.',
    ingredients: ['Camarón jumbo','Ajo','Mantequilla','Vino blanco','Chile de árbol','Perejil'], price: '$220 MXN',
    tags: [{label:'Mariscos', bg:'#E0F2FE', color:'#0369A1'},{label:'Especialidad costera', bg:'#FEF9C3', color:'#854D0E'}],
    dondeProbarlo: []
  }
];
// Exportamos el arreglo de mapas
export const mapPlaces = [
  { label: 'Vista General', sub: 'Mapa completo de Acapulco', icon: '🗺️', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122248.65340656685!2d-99.9672726665798!3d16.83610996827014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca598bd03164a5%3A0xde7bd86fcb81f185!2sAcapulco%20de%20Ju%C3%A1rez%2C%20Gro.!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx' },
  { label: 'La Quebrada', sub: 'Ícono Cultural', icon: '🏔️', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.424754564564!2d-99.917540585145!3d16.845833388404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca581b7a2b9d27%3A0x6b7b744d039f694e!2sLa%20Quebrada!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx' },
  { label: 'Playa Condesa', sub: 'Playa', icon: '🏖️', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.172935251!2d-99.865912!3d16.853032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5b81a2f6fb39%3A0xcf8b8095b5e391b!2sPlaya%20Condesa!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx' },
  { label: 'Fuerte de San Diego', sub: 'Historia', icon: '🏰', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.288591873!2d-99.902345!3d16.849187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5814cc5a5ebf%3A0xa196963f25c7e148!2sFuerte%20de%20San%20Diego!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx' },
  { label: 'Playa Icacos', sub: 'Playa', icon: '⚓', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.348591873!2d-99.851245!3d16.847187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5bc1cc5a5ebf%3A0xa196963f25c7e148!2sPlaya%20Icacos!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx' },
  { label: 'Isla La Roqueta', sub: 'Naturaleza', icon: '🌿', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.488591873!2d-99.908345!3d16.824187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5814cc5a5ebf%3A0xa196963f25c7e148!2sIsla%20La%20Roqueta!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx' },
  { label: 'Costera Miguel Alemán', sub: 'Entretenimiento', icon: '🌙', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.288591873!2d-99.882345!3d16.854187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5814cc5a5ebf%3A0xa196963f25c7e148!2sCostera%20Miguel%20Alem%C3%A1n!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx' }
];