let arr;
let bodyEl=document.getElementsByClassName('body-container');
fetch('./Data/data.json')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    arr=data;
    createProject(data);
})
.catch(error=>console.log(error));




function createProject(data){
    // console.log(data);
    
    data.map((d)=>{
         bodyEl[0].innerHTML+=`
        <div class="project-container">
             <div class="project-Name">
               <h2>${d.heading}</h2>
             </div>
             <div class="project-explanation">
               <p>
                 ${d.text}
               </p>
             </div>
             <div class="btn-2">
               <button><a href='${d.Live_link}' target=_blank>Live show</a></button>
               <button><a href='${d.github_link}'>Github link</a></button>
             </div>
           </div>
        `
    })
}