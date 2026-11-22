const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',(event)=>{glow.style.left=`${event.clientX}px`;glow.style.top=`${event.clientY}px`;});
const progress=document.querySelector('.progress span');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${(scrollY/max)*100}%`;},{passive:true});
const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting)entry.target.classList.add('in-view');}),{threshold:.14});
document.querySelectorAll('.reveal').forEach((element)=>observer.observe(element));
