/* Parth Meriya - Portfolio scripts. Edit CFG to change contact links. */
/* Edit these values to activate links and the resume download */
var CFG={email:"parthmeriya222@gmail.com",phone:"+917574097366",linkedin:"https://www.linkedin.com/in/parth-meriya",github:"https://github.com/parth-meriya",portfolio:"https://parth-meriya.github.io",resume:"resume/Parth_Meriya_Resume.pdf",photo:"assets/images/profile.jpg"};
(function(){
var root=document.documentElement;var ph=document.getElementById("photo");if(CFG.photo&&ph){ph.onload=function(){ph.hidden=false};ph.src=CFG.photo}
try{var t=localStorage.getItem("pm-theme");if(t)root.setAttribute("data-theme",t)}catch(e){}
document.getElementById("theme").onclick=function(){var n=root.getAttribute("data-theme")==="light"?"dark":"light";root.setAttribute("data-theme",n);try{localStorage.setItem("pm-theme",n)}catch(e){}};
var L=document.getElementById("links"),M=document.getElementById("menu");
M.onclick=function(){var o=L.classList.toggle("open");M.setAttribute("aria-expanded",o)};
L.addEventListener("click",function(e){if(e.target.closest("a"))L.classList.remove("open")});
function setLink(sel,href,text){document.querySelectorAll(sel).forEach(function(a){if(href){a.href=href;if(!/^mailto|^tel/.test(href)){a.target="_blank";a.rel="noopener"}var d=a.querySelector("div");if(text&&d)d.lastChild.textContent=text.replace(/^https?:\/\/(www\.)?/,"")}else{a.addEventListener("click",function(e){e.preventDefault()});a.style.opacity=".7"}})}
setLink("[data-gh]",CFG.github,CFG.github);setLink("[data-li]",CFG.linkedin,CFG.linkedin);
setLink("[data-mail]",CFG.email&&"mailto:"+CFG.email,CFG.email);setLink("[data-tel]",CFG.phone&&"tel:"+CFG.phone,CFG.phone);
setLink("[data-web]",CFG.portfolio,CFG.portfolio);
var secs=[].slice.call(document.querySelectorAll("main section[id]")),ls=[].slice.call(document.querySelectorAll("a.l"));
function spy(){var y=window.scrollY+120,cur="home";secs.forEach(function(s){if(s.offsetTop<=y)cur=s.id});if(cur==="workflow")cur="projects";ls.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+cur)})}
window.addEventListener("scroll",spy,{passive:true});spy();
document.getElementById("f").onsubmit=function(e){e.preventDefault();var d=new FormData(e.target),fn=document.getElementById("fn");
if(!CFG.email){fn.textContent="Add your email in CFG.email to enable this form.";return}
location.href="mailto:"+CFG.email+"?subject="+encodeURIComponent("Opportunity from "+d.get("n"))+"&body="+encodeURIComponent(d.get("m")+"\n\n"+d.get("e"))};
})();
