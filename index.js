const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    }) ;
    const page = await browser.newPage();
    await page.goto('https://www.portaljob-madagascar.com/emploi/liste/page/3')
   const jobs = await page.evaluate(()=>{
       let listOfJobs = [];
       let elements = document.querySelectorAll('body > section.col2_max_min > div > div.max > article');
         for ( let element of elements){
            listOfJobs.push({
                poste : element.querySelector('h3').textContent ,
                societe : element.querySelector('h4').textContent,
                contrat : element.querySelector('h5').textContent,
                description : element.querySelector('a.description ').text,
                dateLimite : element.querySelector('body > section.col2_max_min > div > div.max > article:nth-child(14) > aside.contenu_annonce > div > b > i')
            })
         }    
       return listOfJobs
    })
    
    fs.writeFile('resultsThree.json', JSON.stringify(jobs), function(err) {
        if (err) throw err;
        console.log('complete');
    });

    console.log(jobs);
    await browser.close();

   
})();   