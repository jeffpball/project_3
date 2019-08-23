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

    async getPerformer(url) {
        return new Promise((resolve, reject) => {
            axios.get(url).then(function(response){
                const $ = cheerio.load(response.data);
                $(".PhotoBackground__HiddenImage-sc-192awij-3").each(function (i, element) {
                    const string = element['attribs']['src'];
                    resolve(string);
                })
            }).catch((err) => {
                // TODO: add error handling for catching errors
                // look for 400 error? performer not found?  provide error message so user or component knows what to do
                // look for 500 error? server down?
                reject(err);
            });
        });    
    }

    parsePerfID(source, name) {
        const regexOne = /1200x525.jpg/
        const upperBound = regexOne.exec(source).index - 1;
        const regexTwo = /landscape/
        const lowerBound = regexTwo.exec(source).index + 18 + name.length;
        const peformerId = source.slice(lowerBound, upperBound);
        console.log("performer id is " + peformerId);
        return peformerId;
    }

    /**
     * TODO: Write something here 
     * @param {String} name - name of the performer to search for
     */
    async scrape(name) {
        return new Promise((resolve, reject) => {
            const performerName = this.nameConverter(name);
            const url = this.getWebsiteURL(performerName);
            this.getPerformer(url)
                .then((performer) => {
                    console.log("scrape: performer " + performer);
                    const peformerId = this.parsePerfID(performer, performerName);            
                    console.log("scrape: performer id is " + peformerId);
                    resolve(peformerId);
            })  .catch((err) => {
                    // TODO: handle error here... how to tell calling code what to do
                    reject(err);
            });
        })
    }
}

// module.exports = Scraper;
const seatGeek = new Scraper();

seatGeek.scrape("tyler the creator").then((perfID) => 
    console.log("x is " + perfID)
);


// const scrape = async (artist) => {
//     const name = seatGeek.nameConverter(artist);
//     console.log("name is " + name);
//     const website = seatGeek.getWebsiteURL(name);
//     console.log("website is " + website);
//     const string = await seatGeek.getPerformerID(website);
//     console.log("string is " + string);
// };

// console.log(scrape("Tyler-The-Creator"));

// const artistString = seatGeek.scrape("Tyler the Creator");
// console.log(artistString);
// const string = scrape("Tyler the Creator");
// console.log(string);



// TODO: Look at string.split("/");
// const string = "https://seatgeek.com/images/performers-landscape/tyler-the-creator-5e876c/13719/1200x525.jpg";
// const name = "tyler-the-creator";
// const regexOne = /1200x525.jpg/
// const upperBound = regexOne.exec(string).index - 1;
// const regexTwo = /landscape/
// const lowerBound = regexTwo.exec(string).index + 18 + name.length;
// const peformerId = string.slice(lowerBound, upperBound);
// console.log("performer id is " + peformerId);


    



