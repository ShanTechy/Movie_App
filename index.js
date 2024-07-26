function getData(){
    let input=document.getElementById("input");
    if(input.value==""){
        alert("please fill the input")
    }else{
        let data=fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ab21982a&type=movie&s=${input.value}`);
        data.then(function(res){
            return res.json()
        }).then(function(res){
            showData(res.Search)
        })
        input.value=""
    }
}

function showData(data){
    document.getElementById("container").innerHTML=""
    data.forEach(function(ele){
        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=ele.Poster;

        let title=document.createElement("h3");
        title.innerHTML=`Title : ${ele.Title}`;

        let year=document.createElement("p")
        year.innerText=`Year : ${ele.Year}`


        div.append(image,title,year)
        document.getElementById("container").append(div)
    })
}