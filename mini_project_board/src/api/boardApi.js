//https://www.amazon.com/Structures-Algorithms-JavaScript-Michael-McMillan/dp/1449364934/ref=sr_1_3?ie=UTF8&qid=1474211857&sr=8-3&keywords=javascript+algorithms

const contents = [
{
    id: "1",
    title: "Careless Mistakes",
    content: "This is very disappointing. I have had the book for about 3 hours now and I have noticed several mistakes",
    author:"Pat J Ryll",
    date:"2014/4/13"

},
{
    id:"2",
    title:"Hindered by many, many mistakes",
    content:"The explanation is good and the exercises are helpful but I've found several critical mistakes in the first few chapters alone",
    author:"Joshua Cunningham",
    date:"2014/6/03"
},
{
    id:"3",
    title:"like CS 101 with JS",
    content:"Mike McMillan's 'Data Structures and Algorithms with JavaScript' uses JavaScript as a vehicle for introducing a number of fundamental computer science concepts",
    author:"R. Friesel Jr.",
    date:"2014/3/30"
},
{
    id:"4",
    title:"Incomplete",
    content:"This book has no proofcoding. The examples and exercises rely on unfinished code. Call in sick to work, you'll need an entire day to code all the missing bits and pieces.",
    author:"Audioeye",
    date:"2015/3/30"
}
]

export default class boardApi {
    static getAllContents() {
            return new Promise((resolve, reject) => {
                resolve(Object.assign([], contents));
            });
    }

    static saveContent(content) {
        content = Object.assign({}, content);
        return new Promise((resolve, reject) => {
                const minLength = 1;
                content.id = String(parseInt(contents[contents.length - 1].id) + 1)
                content.date = new Date().toLocaleDateString().replace(/(\s*)/g,"").split('.').slice(0,3).join('/');
                contents.push(content);

                resolve(content);
        });
    }

    static updateContent(content) {
        content = Object.assign({}, content);
        return new Promise((resolve, reject) => {
            let targetIndex = contents.findIndex(a => a.id === content.id);

            content.date =
            new Date()
            .toLocaleDateString()
            .replace(/(\s*)/g,"")
            .split('.')
            .slice(0,3)
            .join('/');

            resolve(content);
        });
    }

    static deleteContent(boardId) {
        return new Promise((resolve, reject) => {
            let targetIndex = contents.findIndex(a => a.id === boardId);
            contents.splice(targetIndex, 1);
            contents.map((v,i) => { v.id = String(i + 1); });
            resolve(contents);
        });
    }
}


