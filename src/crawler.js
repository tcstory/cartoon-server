import request from 'superagent';
import cheerio from 'cheerio';
import path from 'path';
import Promise from 'promise'


function getHotComics() {
    return new Promise(function (resolve, reject) {
        request
            .get('http://www.dm5.com/')
            .set({
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
            })
            .end(function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    let d = [];
                    let $ = cheerio.load(res.text);
                    $('#abc_1').children().not('.li_end').each(function (index, elem) {
                        let obj = {};
                        let $a = $(elem).find('a');
                        obj.url = path.join('http://www.dm5.com/',$a.attr('href'));
                        obj.title = $a.attr('title');
                        d.push(obj);
                    });
                    resolve(d);
                }
            });
    })
}

export default {
    getHotComics
};