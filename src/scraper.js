const cheerio = require('cheerio')
const axios = require('axios');

class Scraper {
    constructor() {}
    //function for converting what was typed into a string that can be passed through in the axios URL
    
    nameConverter(name) {
        const searchName = name.toLowerCase().replace(/ /g,"-"); 
        return searchName;
    }

    getWebsiteURL(name) {
        const URL = "https://seatgeek.com/" + name + "-tickets";
        return URL;
    }

    async getPerformerID(url) {
        let response = await axios.get(url);
        const $ = await cheerio.load(response.data);
        //  $(".PhotoBackground__HiddenImage-sc-192awij-3").each(function(i, element) {
        //         const string = element['attribs']['src'];
        //         console.log(string);
        //         console.log("this is working");
        //         return string;
        //     });
        const scrape = await $(".PhotoBackground__HiddenImage-sc-192awij-3");
        
        return scrape;
            
    }

    // async getPerformerID(url) {
    //     await axios.get(url).then(function (response) {
    //         const stringArray = [];
    //         const $ = cheerio.load(response.data);
    //         $(".PhotoBackground__HiddenImage-sc-192awij-3").each(function(i, element) {
    //             const string = element['attribs']['src'];
    //             return string;
    //         });
    //     })
    // }

    // async scrape(artist) {
    //     const name = await this.nameConverter(artist);
    //     // console.log(name);
    //     const website = await this.getWebsiteURL(name);
    //     const response = await axios.get(website);
    //     const $ = await cheerio.load(response.data);
    //      $(".PhotoBackground__HiddenImage-sc-192awij-3").each(function(i, element) {
    //             const string = element['attribs']['src'];
    //             console.log(string);
    //             console.log("this is working");
    //             return string;
    //         });
        // console.log(website);
        // const string = await this.getPerformerID(website);
        // console.log(string);
        // return string;
    // }
}

const seatGeek = new Scraper();

const scrape = async (artist) => {
    const name = await seatGeek.nameConverter(artist);
    console.log("name is " + name);
    const website = await seatGeek.getWebsiteURL(name);
    console.log("website is " + website);
    const string = await seatGeek.getPerformerID(website);
    console.log("string is " + string);
};

console.log(scrape("Tyler-The-Creator"));

// const artistString = seatGeek.scrape("Tyler the Creator");
// console.log(artistString);
// const string = scrape("Tyler the Creator");
// console.log(string);




// const string = "https://seatgeek.com/images/performers-landscape/tyler-the-creator-5e876c/13719/1200x525.jpg";
// const name = "tyler-the-creator";
// const regexOne = /1200x525.jpg/
// const upperBound = regexOne.exec(string).index - 1;
// const regexTwo = /landscape/
// const lowerBound = regexTwo.exec(string).index + 18 + name.length;
// const peformerId = string.slice(lowerBound, upperBound);
// console.log("performer id is " + peformerId);



