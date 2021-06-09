const mxStateData = [
  {
    name: 'Aguascalientes',
    abbr: 'Ags.',
    area: '5,618 km2',
    largest_city: 'Aguascalientes',
    capital: 'Aguascalientes',
    nickname: 'Estado Libre y Soberano de Aguascalientes',
    population: 1425607
  },
  {
    name: 'Baja California',
    abbr: 'B.C.',
    area: '71,450 km2',
    largest_city: 'Tijuana',
    capital: 'Mexicali',
    nickname: 'Estado Libre y Soberano de Baja California',
    population: 3769020
  },
  {
    name: 'Baja California Sur',
    abbr: 'B.C.S.',
    area: '75,675 km2',
    largest_city: 'La Paz',
    capital: 'La Paz',
    nickname: 'Estado Libre y Soberano de Baja California Sur',
    population: 798447
  },
  {
    name: 'Campeche',
    abbr: 'Camp.',
    area: '57,924 km2',
    largest_city: 'San Francisco de Campeche',
    capital: 'San Francisco de Campeche',
    nickname: 'Estado Libre y Soberano de Campeche',
    population: 928363
  },
  {
    name: 'Chiapas',
    abbr: 'Chis.',
    area: '73,211 km2',
    largest_city: 'Tuxtla Gutiérrez',
    capital: 'Tuxtla Gutiérrez',
    nickname: 'Estado Libre y Soberano de Chiapas',
    population: 5217908
  },
  {
    name: 'Chihuahua',
    abbr: 'Chih.',
    area: '6446SKM',
    largest_city: 'Wilmington',
    capital: 'Dover',
    nickname: 'First State',
    population: 971180
  },
  {
    name: 'Ciudad de México',
    abbr: 'C.D.Mx.',
    area: '170312SKM',
    largest_city: 'Jacksonville',
    capital: 'Tallahassee',
    nickname: 'Sunshine State',
    population: 21312211
  },
  {
    name: 'Coahuila de Zaragoza',
    abbr: 'Coah.',
    area: '423967SKM',
    largest_city: 'Los Angeles',
    capital: 'Sacramento',
    nickname: 'Golden State',
    population: 39776830
  },
  {
    name: 'Colima',
    abbr: 'Col.',
    area: '103642SKM',
    largest_city: 'Denver',
    capital: 'Denver',
    nickname: 'Centennial State',
    population: 5684203
  },
  {
    name: 'Durango',
    abbr: 'Dgo.',
    area: '57513SKM',
    largest_city: 'Atlanta',
    capital: 'Atlanta',
    nickname: 'Peach State',
    population: 10545138
  },
  {
    name: 'Guanajuato',
    abbr: 'Gto.',
    area: '6423SKM',
    largest_city: 'Honolulu',
    capital: 'Honolulu',
    nickname: 'Aloha State',
    population: 1426393
  },
  {
    name: 'Guerrero',
    abbr: 'Gro.',
    area: '82643SKM',
    largest_city: 'Boise',
    capital: 'Boise',
    nickname: 'Gem State',
    population: 1753860
  },
  {
    name: 'Hidalgo',
    abbr: 'Hgo.',
    area: '149995SKM',
    largest_city: 'Chicago',
    capital: 'Springfield',
    nickname: 'Prairie State',
    population: 12768320
  },
  {
    name: 'Jalisco',
    abbr: 'Jal.',
    area: '35826SKM',
    largest_city: 'Indianapolis',
    capital: 'Indianapolis',
    nickname: 'Hoosier State',
    population: 6699629
  },
  {
    name: 'Estado de México',
    abbr: 'Edo. Méx.',
    area: '55857SKM',
    largest_city: 'Des Moines',
    capital: 'Des Moines',
    nickname: 'Hawkeye State',
    population: 3160553
  },
  {
    name: 'Michoacán de Ocampo',
    abbr: 'Mich.',
    area: '213100SKM',
    largest_city: 'Wichita',
    capital: 'Topeka',
    nickname: 'Sunflower State',
    population: 2918515
  },
  {
    name: 'Morelo',
    abbr: 'Mor.',
    area: '104656SKM',
    largest_city: 'Louisville',
    capital: 'Frankfort',
    nickname: 'Bluegrass State',
    population: 4472265
  },
  {
    name: 'Nayarit',
    abbr: 'Nay.',
    area: '135659SKM',
    largest_city: 'New Orleans',
    capital: 'Baton Rouge',
    nickname: 'Pelican State',
    population: 4682509
  },
  {
    name: 'Nuevo León',
    abbr: 'N.L.',
    area: '91633SKM',
    largest_city: 'Portland',
    capital: 'Augusta',
    nickname: 'Pine Tree State',
    population: 1341582
  },
  {
    name: 'Oaxaca',
    abbr: 'Oax.',
    area: '32131SKM',
    largest_city: 'Baltimore',
    capital: 'Annapolis',
    nickname: 'Old Line State',
    population: 6079602
  },
  {
    name: 'Puebla',
    abbr: 'Pue.',
    area: '7800SKM',
    largest_city: 'Boston',
    capital: 'Boston',
    nickname: 'Bay State',
    population: 6895917
  },
  {
    name: 'Querétaro',
    abbr: 'Qro.',
    area: '250487SKM',
    largest_city: 'Detroit',
    capital: 'Lansing',
    nickname: 'Great Lakes State',
    population: 9991177
  },
  {
    name: 'Quintana Roo',
    abbr: 'Q. Roo.',
    area: '68595SKM',
    largest_city: 'Oklahoma City',
    capital: 'Oklahoma City',
    nickname: 'Sooner State',
    population: 3940521
  },
  {
    name: 'San Luis Potosí',
    abbr: 'S.L.P.',
    area: '254799SKM',
    largest_city: 'Portland',
    capital: 'Salem',
    nickname: 'Beaver State',
    population: 4199563
  },
  {
    name: 'Sinaloa',
    abbr: 'Sin.',
    area: '119280SKM',
    largest_city: 'Philadelphia',
    capital: 'Harrisburg',
    nickname: 'Keystone State',
    population: 12823989
  },
  {
    name: 'Sonora',
    abbr: 'Son.',
    area: '1034SKM',
    largest_city: 'Providence',
    capital: 'Providence',
    nickname: 'Ocean State',
    population: 1061712
  },
  {
    name: 'Tabasco',
    abbr: 'Tab.',
    area: '82933SKM',
    largest_city: 'Charleston',
    capital: 'Columbia',
    nickname: 'Palmetto State',
    population: 5088916
  },
  {
    name: 'Tamaulipas',
    abbr: 'Tamps.',
    area: '199729SKM',
    largest_city: 'Sioux Falls',
    capital: 'Pierre',
    nickname: 'Mount Rushmore State',
    population: 877790
  },
  {
    name: 'Tlaxcala',
    abbr: 'Tlax.',
    area: '41235SKM',
    largest_city: 'Nashville',
    capital: 'Nashville',
    nickname: 'Volunteer State',
    population: 6782564
  },
  {
    name: 'Veracruz de Ignacio de la Llave',
    abbr: 'Ver.',
    area: '695662SKM',
    largest_city: 'Houston',
    capital: 'Austin',
    nickname: 'Lone Star State',
    population: 28704330
  },
  {
    name: 'Yucatán',
    abbr: 'Yuc.',
    area: '82170SKM',
    largest_city: 'Salt Lake City',
    capital: 'Salt Lake City',
    nickname: 'Beehive State',
    population: 3159345
  },
  {
    name: 'Zacatecas',
    abbr: 'Zac.',
    area: '225163SKM',
    largest_city: 'Minneapolis',
    capital: 'St. Paul',
    nickname: 'North Star State',
    population: 5628162
  }
];

module.exports = mxStateData;
