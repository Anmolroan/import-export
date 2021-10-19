async function getdata(url){
    let res = await fetch(url)
    let data =await res.json()
    return data.meals 
}
function append(container,data){
data.forEach(({strMealThumb,strMeal,idMeal}) => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    let title=document.createElement("p")
    let id=document.createElement("p")
    img.src=strMealThumb;
    title.innerText=strMeal;
    id.innerText= "Meal Id : "+idMeal;
    div.append(img,title,id)
    container.append(div)
});
}
function random(container,data){
    data.forEach(({strMealThumb,strMeal,idMeal}) => {
        let div=document.createElement("div")
        let img=document.createElement("img")
        let title=document.createElement("p")
        let id=document.createElement("p")
        img.src=strMealThumb;
        title.innerText=strMeal;
        id.innerText= "Meal Id : "+idMeal;
        div.append(img,title,id)
        container.append(div)
    });
}

export {getdata,append,random}
