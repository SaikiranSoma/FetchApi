// // let data1={"name":"saikiran","age":21,"branch":"CSM"};
// // console.log(data1);
// // console.log(data1.name);
// // console.log(data1.branch);

// // let arr=["ORGANGE","GREEN","PINK","BLUE"];
// // console.log(arr);



// // //array of objects;

// // let arrayobjects=[{"name":"saikiran","age":21,"branch":"CSM"},{"name":"Vignesh","age":20,"branch":"BBA"},{"name":"manoj","age":21,"branch":"ece"}]
// // console.log(arrayobjects);
// // console.log(arrayobjects[2].name);

// // let data={
// //     palce:["HYDerabad","karimnagar","jagital"],
// //     myname:"Saikiran"
// // }
// // console.log(data.palce);


// // let jsondata={"name":"Saikiran","AGE":21,"Branch":"CSM","COLOR":{"col1":"blue","col2":"red","col3":"Black"},"arr":["PRactuce","until","You are different from others"]}

// // let data=`{"name":"SAIKIRAN","AGE":21,"STATUS":"Learning"}`;

// // console.log(data);

// // let objdata=JSON.parse(data);

// // console.log(objdata);


// let data={"name":"SAIKIRAN","DATE":"03/07/23",today:new Date()};
// console.log("data stored in object",data);
// let data1=JSON.stringify(data);
// localStorage.setItem("datastored",data1);

// console.log(data1);

// let d=localStorage.getItem("datastored");
// let text=JSON.parse(d);
// console.log(text);

// // console.log(data1.DATE);

// // let datedata=new Date(data1.DATE);
// // console.log(datedata);


// const myresponse=new Promise((resolve,reject)=>{
     
//       meeting=true;
//       if(meeting)
//       {
//        resolve("You have met your friends anyway");
//       }
//       else{
//         reject("You havent met your friends!");
//       }

//     });
//       myresponse.then((data)=>{
//         console.log("You have made meet "+data);
//       }).catch((error)=>{
//         console.log("You have didnt come to "+error);
//       })

                //    const colorDisplay = new Promise((resolve,reject)=>{
                //     setTimeout(()=>{
                //         let color=["red","green","blue"];
                //         // console.log(color);
                //         resolve(color);
                //     },3000);
                //    });
                //    colorDisplay.then((data)=>{
                //     console.log(data);
                //    }).catch((error)=>{
                //     console.log(error);
                //    })

                // const d1= fetch("https://fakestoreapi.com/products");
                // const d2=JSON.stringify(d1);
                // console.log(d2);
                   
//Fetch api is used to get the data from the api it return promises

fetch('https://fakestoreapi.com/products').then((data)=>{
        return data.json();
}).then((completedata)=>{
    // console.log(completedata[2].title);
    let data1='';
    completedata.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">${values.title}</h1>
    <img class=images src=${values.image} alt="">                
    <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`;
    });

    document.getElementById("cards").innerHTML=data1;
    
}).catch((error)=>{
    console.log(error);
})
    