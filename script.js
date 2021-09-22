
let after= ''
let next = document.querySelector('.btn-next');
let nextPage=''
let sub = ["waifu","waifusgonewild","memes","dankinindia","dankmemes","dank","memes","okbhaibudbak","2Asia4u"];
// let subr = sub[Math.floor(Math.random()*sub.length)]
let waifus =["Waifu","RealGirls","waifusgonewild"];
const memeLoader = function(){
    
    if(document.getElementById('memes')){
        document.getElementById('memes').remove()
    }
    next.style.display='initial'
    let subr = sub[Math.floor(Math.random()*sub.length)]
    let parentDiv = document.createElement('div');
    parentDiv.id='memes'
    nextPage=subr
    
    let url=`https://www.reddit.com/r/${subr}.json?after=`
    // console.log(url);

    fetch(url)
    .then(res=>res.json())
    .then(body=>{
        after=body.data.after
        // console.log(after);
        // console.log(body.data);
        for(let i=0;i<body.data.children.length;i++){
            if(body.data.children[i].data.post_hint==='image'){
                let div = document.createElement('div')
                let h4 = document.createElement('a')
                let img = document.createElement('img')
                img.src=body.data.children[i].data.url_overridden_by_dest
                img.classList.add('normal_img')
                // img.classList.add('hover')
                h4.textContent=body.data.children[i].data.title.slice(0,50)
                console.log(`${body.data.children[i].data.permalink}`);
                h4.setAttribute('href',`https://www.reddit.com${body.data.children[i].data.permalink}`)
                div.appendChild(h4);div.appendChild(img)
                div.classList.add('meme-section');
                parentDiv.appendChild(div)
            }
        }
        document.body.appendChild(parentDiv)
    })
}

// memeLoader()
const memeBtn = document.querySelector('.memes-button');
memeBtn.addEventListener('click',function(e){
    memeLoader()
})



next.addEventListener('click',function(e){
    let url = `https://www.reddit.com/r/${nextPage}.json?after=${after}`
    if(document.getElementById('memes')){
        document.getElementById('memes').remove()
    }
    next.style.display='initial'
    let subr = sub[Math.floor(Math.random()*sub.length)]
    let parentDiv = document.createElement('div');
    parentDiv.id='memes'
    
    fetch(url)
    .then(res=>res.json())
    .then(body=>{
        after=body.data.after
        // console.log(after);
        // console.log(body.data);
        for(let i=0;i<body.data.children.length;i++){
            if(body.data.children[i].data.post_hint==='image'){
                let div = document.createElement('div')
                let h4 = document.createElement('a')
                let img = document.createElement('img')
                img.src=body.data.children[i].data.url_overridden_by_dest
                img.classList.add('normal_img')
                // img.classList.add('hover')
                h4.textContent=body.data.children[i].data.title.slice(0,50)
                console.log(`${body.data.children[i].data.permalink}`);
                h4.setAttribute('href',`https://www.reddit.com${body.data.children[i].data.permalink}`)
                div.appendChild(h4);div.appendChild(img)
                div.classList.add('meme-section');
                parentDiv.appendChild(div)
            }
        }
        document.body.appendChild(parentDiv)
    })
    
})