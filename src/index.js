const scrp = require('./scraper')
const fs = require('fs/promises')
const id = require('./id_generator')
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers = [1,2,3,4,5,6,7,8,9,0,5]

// ungabunga changing the nr of images to download goes brrrrrrr 
// let number = parseInt(prompt('nr of images to download: '))
let number = 100


async function p() {
    let newList = new Array(number)
    try {
        for (i of newList) {
            await scrp(`https://prnt.sc/${id(2, 4, letters, numbers)}`)
        }
        console.log(newList)
    } catch (err) {
        console.log(err)
    }
}

p()