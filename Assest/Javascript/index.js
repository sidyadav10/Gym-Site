let training = [{
    id:"1",
    img :"Images/training-1.jpg",
    title :"First Training class",
    para:"In the hallowed halls of the gym, where the clink of weights harmonizes with the rhythm of determined breaths, a transformative journey unfolds. It's a sanctuary where ordinary individuals metamorphose into versions of themselves previously unimagined. With each drop of sweat, a commitment is forged, an unspoken pact with one's own potential."
},{
    id:"2",
    img :"Images/training-2.jpg",
    title :"Second Training class",
    para:"In the heart of the gym, where echoes of determination reverberate against the walls of possibility, we find not just a space of iron and sweat, but a sanctuary of self-discovery. It's a symphony of strength, a dance of resilience, and a canvas where sweat becomes the ink of our untold stories. In the gym, we don't just lift weights; we elevate our existence, embracing the relentless pursuit of a stronger, braver, and more empowered self. This is not just a place; it's a testament to the unwavering commitment to unleash our fullest potential, one rep at a time."
},{
    id:"3",
    img :"Images/training-3.jpg",
    title :"Third Training class",
    para:"In the sacred space of the gym, where determination meets dedication, we embark on a profound journey of self-transformation. It's not merely a workout; it's an ode to our inner strength, a commitment to rewriting the narrative of our capabilities. The gym is a crucible where challenges are embraced, limits are shattered, and ordinary becomes extraordinary. we rise, evolve, and redefine our potential with every intentional breath and purposeful rep."
},{
    id:"4",
    img :"Images/training-4.jpg",
    title :"Fourth Training class",
    para:
    "In the gym's realm of iron and sweat, we sculpt resilience, weave determination into every fiber. Amidst the clang of weights, we discover not just strength but a relentless spirit awakening. It's not a mere workout; it's an ode to self-discovery, a symphony of transformation. Here, in the gym, we don't just lift; we rise, embodying the embodiment of our own limitless possibilities."
}
];


let a = training.map(x=>x.img);






let navlist = document.querySelector(".navlist");
let header = document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 580){
    header.classList.add("sticky")
    }else{
    header.classList.remove("sticky")
    }
});    

        let menu = document.querySelector(".menubar");
        
        menu.addEventListener("click",()=>{
            menu.classList.toggle("click")
            navlist.classList.toggle("active")
        });
        navlist.addEventListener("click",(e)=>{
            let active = document.querySelector(".select");
            if(active){
                active.classList.remove("select");
                menu.classList.remove("click")
            }
          
            e.target.classList.add("select");
            navlist.classList.remove("active")
            
        });
        
      let list = document.querySelector(".class-list");
      list.addEventListener("click",(e)=>{
       let target = e.target;
       let active_list = document.querySelector(".list-active");
       if(active_list){
        active_list.classList.remove("list-active")
       }
       if (target.tagName === "LI" && target !== list.lastElementChild) {
        target.classList.add("list-active");
      }
        let t = training.find(x=> x.id === target.id);
        let training_img = document.querySelector(".class-training");
        let training_title = document.querySelector(".training-title");
        let trining_desc = document.querySelector(".training-para");
        training_img.src = t.img;
        training_title.innerHTML = t.title;
        trining_desc.innerHTML = t.para;

        
    
        
      
      })
        
    