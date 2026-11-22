const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',(event)=>{glow.style.left=`${event.clientX}px`;glow.style.top=`${event.clientY}px`;});
const progress=document.querySelector('.progress span');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${(scrollY/max)*100}%`;},{passive:true});
const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting)entry.target.classList.add('in-view');}),{threshold:.14});
document.querySelectorAll('.reveal').forEach((element)=>observer.observe(element));
document.querySelectorAll('a[href^="mailto:"]').forEach((link)=>{link.href='mailto:viorelgilruiz@gmail.com';if(link.textContent.includes('@'))link.childNodes[0].textContent='viorelgilruiz@gmail.com ';});
document.querySelectorAll('img[alt*="Viorel"]').forEach((image)=>{image.src='viorel-gil.jpg';});
document.querySelectorAll('.work-image,.skill-feature').forEach((card)=>{card.addEventListener('pointermove',(event)=>{const box=card.getBoundingClientRect();const x=(event.clientX-box.left)/box.width-.5;const y=(event.clientY-box.top)/box.height-.5;card.style.transform=`perspective(900px) rotateX(${y*-5}deg) rotateY(${x*5}deg) translate3d(${x*5}px,${y*5}px,0)`;});card.addEventListener('pointerleave',()=>{card.style.transform='';});});
