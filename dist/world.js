'use strict';
const data=JSON.parse(document.getElementById('route-data').textContent);
const tabs=[...document.querySelectorAll('[data-place]')];
const panel=document.getElementById('place');
function activate(i){
 tabs.forEach((tab,n)=>{tab.setAttribute('aria-selected',String(i===n));tab.tabIndex=i===n?0:-1});
 const [category,title,text,reflection]=data.places[i];
 panel.setAttribute('aria-labelledby','tab'+i);
 panel.innerHTML=`<p class="eyebrow"></p><h3></h3><p></p><div class="reflection"><span></span><p></p></div>`;
 panel.children[0].textContent=category;
 const heading=panel.children[1];
 title.split('<br>').forEach((part,n)=>{if(n)heading.append(document.createElement('br'));heading.append(document.createTextNode(part))});
 panel.children[2].textContent=text;
 panel.querySelector('.reflection span').textContent=data.reflect;
 panel.querySelector('.reflection p').textContent=reflection;
}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activate(i));tab.addEventListener('keydown',event=>{let next;switch(event.key){case'ArrowRight':next=(i+1)%tabs.length;break;case'ArrowLeft':next=(i-1+tabs.length)%tabs.length;break;case'Home':next=0;break;case'End':next=tabs.length-1;break;default:return}event.preventDefault();activate(next);tabs[next].focus()})});
const header=document.getElementById('header');
const menu=document.querySelector('.menu-toggle');
function closeMenu(){header.classList.remove('menu-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',menu.dataset.open)}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';header.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?menu.dataset.close:menu.dataset.open)});
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
const wide=window.matchMedia('(min-width:761px)');wide.addEventListener('change',e=>{if(e.matches)closeMenu()});
const progress=document.querySelector('.reading-progress');let queued=false;
function updateProgress(){const extent=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${extent>0?Math.min(1,Math.max(0,scrollY/extent)):0})`;queued=false}
addEventListener('scroll',()=>{if(!queued){requestAnimationFrame(updateProgress);queued=true}},{passive:true});addEventListener('resize',updateProgress);updateProgress();
document.getElementById('share').addEventListener('click',async()=>{const status=document.getElementById('share-status');try{await navigator.clipboard.writeText(location.href.split('#')[0]);status.textContent=data.copied}catch{status.textContent=data.fallback}});
