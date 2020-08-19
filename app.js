

let searchBtn = document.getElementById("btn-search");
searchBtn.addEventListener("click",function(){


    const searchTerm = document.getElementById("searchTerm").value;
    let url = `https://api.lyrics.ovh/suggest/${searchTerm}`;

     console.log(searchTerm);

     // here i tried a lot to set searchTerm variable but that didn't work, don't know why, but this worked . 
    fetch(url)
    .then((response) => response.json())
    .then((results) => {
        
        const lyricsDiv = document.getElementById("lyricFound");
        console.log(results);
            for (let i = 0; i < 10; i++) {
                const element = results.data[i];
                console.log(element);
                    const div = document.createElement(`div`);
                    div.innerHTML = 
                    ` <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <h3 class="lyrics-name"> ${results.data[i].title} </h3>
                        <p class="author lead">Album by <span>${results.data[i].artist.name}</span></p>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button class="btn btn-success" onclick = "lyricsFull(${results.data[i]})">Get Lyrics</button>
                    </div>
                </div> `;
                    lyricsDiv.appendChild(div);
                    // console.log(results.data[i].link);

                    function lyricsFull(element){
                        let url = element.link;
                        fetch(url)
                        .then((response)=>response.json())
                        .then(res => {
                            // const songTitle = getElementById("songTitle"); 
                            // songTitle.innerText = results.data[i].title;
                            // const lyricsBody = getElementById("lyricsBody");
                            // lyricsBody.innerText = res.data[i].link;
                            console.log(res);
                        })
                    }

            }
          
            // console.log(data); 
               }
    );

    
     
    

});

    



