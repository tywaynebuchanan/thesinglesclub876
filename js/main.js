// Make mobile nav work
const btn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btn.addEventListener('click',()=>{
    header.classList.toggle("nav-open");
})

/*Smooth Scrolling */

const alllinks = document.querySelectorAll('a:link');
alllinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const href = link.getAttribute("href");
        


        //Scroll to the top
        if(href === '#')
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        if(href !== "#" && href.startsWith("#"))
        {
            const sectionEL = document.querySelector(href);
            sectionEL.scrollIntoView({behavior: "smooth"});
        }

        //Hide nav menu after link is clicked
        if(link.classList.contains("main-nav-link"))
        header.classList.toggle("nav-open");
    }); 
});

//Stick Nav 

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver((entries)=>{
    const ent = entries[0];
    if(!ent.isIntersecting)
    {
        document.body.classList.add("sticky");
    }

    if(ent.isIntersecting)
    {
        document.body.classList.remove("sticky");
    }
    
},{
    root:null,
    threshold: 0,
    rootMargin: '-80px'
});
observer.observe(sectionHeroEl);