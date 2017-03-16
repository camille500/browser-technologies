/* BASIC CONFIGURATION DATA
------------------------------------------------  */
const config = {
  request: new XMLHttpRequest(),
  fundaListBaseUrl: 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/271175433a7c4fe2a45750d385dd9bfd/?',
  fundaDetailBaseUrl: 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/detail/271175433a7c4fe2a45750d385dd9bfd/',
  googleApiKey: '&key=AIzaSyC_MvSpOU_4XLoneCkdMy_CG1eg8lK7UIA',
  googleBaseUrl: 'https://maps.googleapis.com/maps/api/geocode/json?'
}

/* ALL DOM ELEMENTS THAT ARE NEEDED IN THE CODE
------------------------------------------------  */
const elements = {
  allSections: document.querySelectorAll('.wrapper'),
  listSection: document.querySelector('.listSection'),
  detailSection: document.querySelector('.detailSection'),
  filterSection: document.querySelector('.filterSection'),
  filters: document.querySelectorAll('.filter'),
  sortOptions: document.querySelector('.sortOptions'),
  loader: document.querySelector('.loading'),
  meerResultaten: document.querySelector('.meerResultaten'),
  locatieData: document.querySelector('.LocatieData'),
  aanbevelingSection: document.querySelector('.listSection')
}
