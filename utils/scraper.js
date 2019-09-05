const cheerio = require('cheerio')
const axios = require('axios');

class Scraper {
    constructor() {
        // this.nameConverter = this.nameConverter(name)
        // this.getWebsiteURL = this.getWebsiteURL(name)
        // this.getPerformer = this.getPerformer(url)
        // this.parsePerfID = this.parsePerfID(source, name)
        // this.scrape = this.scrape(name)
    }
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
                    const peformerId = this.parsePerfID(performer, performerName);            
                    resolve(peformerId);
            })  .catch((err) => {
                    // TODO: handle error here... how to tell calling code what to do
                    reject(err);
            });
        })
    }
}

module.exports = Scraper;










    



