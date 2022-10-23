const puppeteer = require('puppeteer')
const fs = require('fs')

async function scrape(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)
    
    
    const image = await page.evaluate(() => {
        return document.querySelector('img#screenshot-image').src
    })
    const pageForImage = await page.goto(image)
    
    myURL = `./img/${image.split("/").pop()}`
    myDATA = await pageForImage.buffer()

    await fs.writeFile(myURL, myDATA, (err, success) => {
        if (err) {
            console.log(err)
        }
    })

    // const images = await page.$$eval('img#screenshot-image', (imgs) => {
    //     return imgs.map(x => x.src)
    // })

    // for (const img of images) {
    //     const pageForImage = await page.goto(img)
    //     await fs.writeFile(img.split("/").pop(), await pageForImage.buffer())
    // }
    await browser.close()
};

module.exports = scrape;