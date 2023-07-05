const _MapAbbrFullName = {"AZ":"Arizona","AL":"Alabama","AK":"Alaska","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DC":"District of Columbia","DE":"Delaware","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AB":"Alberta","BC":"British Columbia","MB":"Manitoba","NB":"New Brunswick","NF":"Newfoundland","NT":"Northwest Territory","NS":"Nova Scotia","NU":"Nunavut","ON":"Ontario","PE":"Prince Edward Island","QC":"Quebec","SK":"Saskatchewan","YT":"Yukon"};
const _MapFullNameAbbr = {"arizona":"AZ","alabama":"AL","alaska":"AK","arkansas":"AR","california":"CA","colorado":"CO","connecticut":"CT","districtofcolumbia":"DC","delaware":"DE","florida":"FL","georgia":"GA","hawaii":"HI","idaho":"ID","illinois":"IL","indiana":"IN","iowa":"IA","kansas":"KS","kentucky":"KY","louisiana":"LA","maine":"ME","maryland":"MD","massachusetts":"MA","michigan":"MI","minnesota":"MN","mississippi":"MS","missouri":"MO","montana":"MT","nebraska":"NE","nevada":"NV","newhampshire":"NH","newjersey":"NJ","newmexico":"NM","newyork":"NY","northcarolina":"NC","northdakota":"ND","ohio":"OH","oklahoma":"OK","oregon":"OR","pennsylvania":"PA","rhodeisland":"RI","southcarolina":"SC","southdakota":"SD","tennessee":"TN","texas":"TX","utah":"UT","vermont":"VT","virginia":"VA","washington":"WA","westvirginia":"WV","wisconsin":"WI","wyoming":"WY","alberta":"AB","britishcolumbia":"BC","manitoba":"MB","newbrunswick":"NB","newfoundland":"NF","northwestterritory":"NT","novascotia":"NS","nunavut":"NU","ontario":"ON","princeedwardisland":"PE","quebec":"QC","saskatchewan":"SK","yukon":"YT"}

const _StatePopulations = {
    "Alabama": 5024279,
    "Alaska": 733391,
    "Arizona": 7151502,
    "Arkansas": 3011524,
    "California": 39538223,
    "Colorado": 5773714,
    "Connecticut": 3605944,
    "Delaware": 989948,
    "District of Columbia": 689545,
    "Florida": 21538187,
    "Georgia": 10711908,
    "Hawaii": 1455271,
    "Idaho": 1839106,
    "Illinois": 12812508,
    "Indiana": 6785528,
    "Iowa": 3190369,
    "Kansas": 2937880,
    "Kentucky": 4505836,
    "Louisiana": 4657757,
    "Maine": 1362359,
    "Maryland": 6177224,
    "Massachusetts": 7029917,
    "Michigan": 10077331,
    "Minnesota": 5706494,
    "Mississippi": 2961279,
    "Missouri": 6154913,
    "Montana": 1084225,
    "Nebraska": 1961504,
    "Nevada": 3104614,
    "New Hampshire": 1377529,
    "New Jersey": 9288994,
    "New Mexico": 2117522,
    "New York": 20201249,
    "North Carolina": 10439388,
    "North Dakota": 779094,
    "Ohio": 11799448,
    "Oklahoma": 3959353,
    "Oregon": 4237256,
    "Pennsylvania": 13002700,
    "Rhode Island": 1097379,
    "South Carolina": 5118425,
    "South Dakota": 886667,
    "Tennessee": 6910840,
    "Texas": 29145505,
    "Utah": 3271616,
    "Vermont": 643077,
    "Virginia": 8631393,
    "Washington": 7705281,
    "West Virginia": 1793716,
    "Wisconsin": 5893718,
    "Wyoming": 576851,
};

function convertStateToAbbr(input) {
  if(input === undefined) return input;
  var strInput = input.trim();
  if(strInput.length === 2) {
    // already abbr, check if it's valid
    var upStrInput = strInput.toUpperCase();
    return _MapAbbrFullName[upStrInput]?upStrInput :undefined;
  }
  var strStateToFind = strInput.toLowerCase().replace(/\ /g, '');
  var foundAbbr = _MapFullNameAbbr[strStateToFind];
  return foundAbbr;
}
function convertStateToFullName(input) {
  if(input === undefined) return input;
  var strInput = input.trim();
  if(strInput.length !== 2) {
    // already full name, return formatted fullname
    return _MapAbbrFullName[convertStateToAbbr(strInput)];
  }
  var strStateToFind = strInput.toUpperCase().replace(/\ /g, '');
  var foundFullName = _MapAbbrFullName[strStateToFind];
  return foundFullName ;
}
console.log(_StatePopulations);
function populationOfState(abbr) {
    full_name = convertStateToFullName(abbr);
    if (full_name in _StatePopulations) {
        return _StatePopulations[full_name];
    }
    return 0;
}
