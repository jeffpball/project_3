const cheerio = require('cheerio')
const axios = require('axios');

class Scraper {
    constructor() {}
    //function for converting what was typed into a string that can be passed through in the axios URL
    nameConverter(name) {
        const searchName = name.toLowerCase().replace(/ /g,"-"); 
        return searchName;
    }

    
}

const seatGeek = new Scraper();

console.log(seatGeek.nameConverter("John Mayer"));




