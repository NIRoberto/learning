let manages= document.querySelector(".recent-posts");

postmm = (docss)=>{
let d=new Date();
var n = d.toLocaleDateString();

        manages.innerHTML +=`
       
        <div class="recent-art">
        <div class="data">
       <img id="img" src="/UI/img/web-d.jpg" alt="web development" >
      </div>
       <div class="data">
       <h1 class="title">${docss.data().title}</h1>
       <p class="text">${docss.data().text}</p>
      </div>
      <span>${n}</span>
      <div class="work">
        <div class="read-m">
    <div>         
     <a class="read deletes " href="javascript:deletesss('${docss.id}');">delete</a>
      <a class="read update" href="#">update</a>
      <a class="read comment " href="/UI/html/singleblog.html">comments(0) </a>


      </div></div></div>
      
      </div>
      `}
      //getting databases
      db.collection("blog-database").get().then((snapshot) => {
  
        snapshot.docs.forEach(doc =>{
          postmm(doc);
        
         })
         .catch((snapshot)=> {
            console.error("Error writing document: ", snapshot);
        });
      console.log(snapshot.docs);
     
      });
      deletesss = (id) => {
        db.collection('blog-database').doc(id).delete();
      
      }