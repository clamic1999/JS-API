fetch('https://fakestoreapi.com/products?limit=20')
.then((data)=>data.json())
.then(bike=>{console.log(bike[1].title)
    textdata="";

    bike.map((values)=>{
        textdata+=`<tr>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.price}</td>
        <td>${values.description}</td>
        <td>${values.category}</td>
        <td><img src=${values.image}></td>
        <td>${values.rating=[values.rating.rate]+" "+[values.rating.count]}</td>
        </tr>`
    })
    document.getElementById("car").innerHTML=textdata
})