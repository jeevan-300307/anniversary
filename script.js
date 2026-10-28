const $=id=>document.getElementById(id),sleep=ms=>new Promise(r=>setTimeout(r,ms));
/* ================= EDIT ME ================= */
const SONG='promise.mp3'; // first song: fades in when she taps Open
const SONG2='ring.mp3'; // second song: crossfades in when the ring page opens
const FINAL=['To me, you are my fairy,','the tiny light that finds me in every dark.','And you are my Mahalakshmi,','the blessing of my life and the home of my heart.'];
const FINAL_END='Happy 1st Anniversary, my fairy ♡ Forever yours, Jeevan';
const SINCE='28th of October, 2025'; // the day you two accepted each other (used in the certificate)
const TODAY='28th of October, 2026'; // anniversary day, shown on the certificate
const START='2025-10-28'; // journey start (days counter)
const RING_TEXT='Bangaram lanti neeku naa prematho silver Promise Ring nanna, edhi mana spirtual marriage, Naa bujji pellama. One year down, forever to go.';
// OUR JOURNEY: edit dates, titles and text freely. Add or remove chapters. a/b = mood colours, e = falling emoji, img = optional photo like 'assets/photo1.jpg', moon:true = moon + stars theme for that chapter
const J=[
 {d:'28 Oct 2025',t:'The Yes',x:'One year back, nen madhyanam bajjunnappudu, nuv na kalloki ochinappudu, call chesav nannaa, lift cheygane oka mata annav, "Jeevan, ni inti peru naak estava.."',a:'#ffd0e6',b:'#d9ccff',e:'🌸',img:''},
 {d:'16 Jan 2026',t:'Our First moment',x:'ahhh, one of the most memorable moment, first ring echina roju nanna, and aalso mana first mudhuu..',a:'#ffc4b4',b:'#f3bfe0',e:'💗',img:''},
 {d:'20 Mar 2026',t:'Mana best moment',x:'aa roju anipinchindhi nanna, neetho unte safe ga feel avthan ani, nuv unte jeevitham lo edhaina chesestha aniiii',a:'#6f6dd8',b:'#7fd2d8',e:'✨',img:''},
 {d:'14 Oct 2026',t:'Mana vacha karmana',x:'marchipoleni roju manaki, okalni odhili inkokalni vadhallem anukunnam, inka vidipokudadhu anukunnam, seriralu kalisai, manasulu viduvalekunnam',a:'#9fa8f0',b:'#e3cbff',e:'',moon:true,img:''},
 {d:'Today',t:'Kada dhaka viduvanu',x:'odhalnu nanna nenu, ey problem ochina odhalnu, kapadukuntanu nanna, nuv na first chinni bujji kuthurvi nanna, assal odhalnu.. "neeku jarige chedu antha nake jaragali, naaku jarige machi natha neeke jaragali"',a:'#D3D3FF',b:'#ffffff',e:'💜',img:''},
 {d:'prema',t:'kalakalam',x:'Undham nanna kalsi, vidipovadhu manamu',a:'#4a3b9c',b:'#9b78e6',e:'',moon:true,img:''}
];
const P=[
 // ["name you call her", "your promise, any length"]
 // add or remove lines freely: the dots, count and certificate adjust automatically
 ["Bangaruuu","naa bangaranive nuvvuuu, picchidhanii kudaa, yetu ponu nannaa"],
 ["Bujjithalli","nuv chesepanlu uuff, picchidhana, kavalani arusthavo ledha ento uff ardham kadhey"],
 ["Bujjiamma","Nanna neek gurthundha, mana first meet at chemistry lab, uff devudu raasi pettadeyy"],
 ["Buddiamma","asalu yekkado putti, yekkado perigi, yekkado chadhuvkoni, yekkado join ayyi, chivarki naa deggarki ochi cherav"],
 ["Naa chinnithalli","ninnu endhuku chinnithalli antanu ante, nuv alane chestey buujibaby lagaa, asalu mata vinakundaaa, nen lekapothey emaipothavey"],
 ["Naa bujji pellama","Pelli cheskuntanu nanna, appudu kalsi navvochu, kalsi badha padochu, kalsi yedavochu"],
 ["Pavani","Kashtapadudham, Parents ni oppidham, illukattukundham, pelli cheskundham, edharu bujji babies ni kandham, prashantham ga liffe lead chedham... Promise"]
];
/* ============================================ */
const au=new Audio(SONG),au2=new Audio(SONG2);let cur=au;
[au,au2].forEach(a=>{a.loop=true;a.preload='auto';a.volume=0});
const mu=$('mu');
function sync(){mu.classList.toggle('p',!cur.paused)}
function fade(a,to,ms){clearInterval(a._f);const f=a.volume,t0=performance.now();a._f=setInterval(()=>{const k=Math.min(1,(performance.now()-t0)/ms);a.volume=Math.max(0,Math.min(1,f+(to-f)*k));if(k>=1){clearInterval(a._f);if(!to)a.pause()}},40)}
function play(a,ms){a.play().then(()=>fade(a,.85,ms||4500)).catch(()=>{})}
mu.onclick=()=>cur.paused?play(cur,2500):fade(cur,0,1500);
[au,au2].forEach(a=>{a.onplay=a.onpause=sync});
au.onerror=()=>{mu.style.display='none'};
au2.oncanplay=()=>au2.ok=1;
function toRing(){if(!au2.ok||au.paused)return;fade(au,0,3500);cur=au2;play(au2,5000)}
 
// cursor + sparkles
const fine=matchMedia('(pointer:fine)').matches,B=document.body;if(fine)B.classList.add('fine');
const cd=$('cd'),cr=$('cr'),sp=$('sp'),sx=sp.getContext('2d');
let mx=-100,my=-100,rx=-100,ry=-100,lx=-100,ly=-100,seen=false,ps=[];
function rs(){sp.width=innerWidth;sp.height=innerHeight}rs();addEventListener('resize',rs);
function spr(h){const c=document.createElement('canvas');c.width=c.height=32;const g=c.getContext('2d'),r=g.createRadialGradient(16,16,0,16,16,16);r.addColorStop(0,'#fff');r.addColorStop(.35,`hsla(${h},100%,80%,.85)`);r.addColorStop(1,`hsla(${h},100%,75%,0)`);g.fillStyle=r;g.fillRect(0,0,32,32);return c}
const SP=[spr(330),spr(265)];
function add(x,y,n){for(let i=0;i<n&&ps.length<140;i++)ps.push({x,y,vx:(Math.random()-.5)*1.6,vy:Math.random()*-1.4-.2,l:1,s:Math.random()*14+8,k:Math.random()<.5?0:1})}
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;cd.style.transform=`translate3d(${mx}px,${my}px,0)`;
if(!seen){seen=true;rx=mx;ry=my;B.classList.add('v')}
if(Math.hypot(mx-lx,my-ly)>16){lx=mx;ly=my;add(mx,my,1)}});
addEventListener('pointerdown',e=>add(e.clientX,e.clientY,12));
document.documentElement.addEventListener('mouseleave',()=>B.classList.remove('v'));
document.documentElement.addEventListener('mouseenter',()=>{if(seen)B.classList.add('v')});
document.addEventListener('pointerover',e=>{cr.classList.toggle('b',!!(e.target.closest&&e.target.closest('button')))});
(function loop(){rx+=(mx-rx)*.3;ry+=(my-ry)*.3;cr.style.transform=`translate3d(${rx}px,${ry}px,0)`;
sx.clearRect(0,0,sp.width,sp.height);
if(ps.length){ps=ps.filter(p=>p.l>0);for(const p of ps){p.x+=p.vx;p.y+=p.vy;p.l-=.025;sx.globalAlpha=p.l;const z=p.s*p.l+2;sx.drawImage(SP[p.k],p.x-z/2,p.y-z/2,z,z)}sx.globalAlpha=1}
requestAnimationFrame(loop)})();
 
// floating hearts
for(let i=0;i<12;i++){const h=document.createElement('span');h.className='fh';h.textContent='♥';
h.style.cssText=`left:${Math.random()*100}vw;font-size:${12+Math.random()*26}px;animation-duration:${9+Math.random()*12}s;animation-delay:${-Math.random()*18}s;opacity:${.3+Math.random()*.4}`;document.body.appendChild(h)}
 
function burst(x,y){for(let i=0;i<16;i++){const s=document.createElement('span');s.textContent='♥';
s.style.cssText=`position:fixed;left:${x}px;top:${y}px;z-index:70;pointer-events:none;color:${i%2?'#ff7fb8':'#fff'};text-shadow:0 0 10px #fff;font-size:${14+Math.random()*16}px`;document.body.appendChild(s);
const a=Math.random()*6.28,d=60+Math.random()*120;s.animate([{transform:'translate(-50%,-50%) scale(.3)',opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d-40}px) scale(1.3)`,opacity:0}],{duration:1100+Math.random()*500,easing:'cubic-bezier(.2,.8,.3,1)'}).onfinish=()=>s.remove()}}
 
function show(id){B.classList.toggle('jy',id==='jy'||id==='fn');if(id!=='jy')B.classList.remove('moon');document.querySelectorAll('.stage').forEach(s=>s.classList.toggle('on',s.id===id))}
 
// intro
(async()=>{const il=$('il');
for(const t of ["Bangaram","chaalaaaa twaraga ayipoyindhi 1 yearr ♡","uffff, chala godavalu, patchups, explanations, but unnam manam","Happy 1st Anniversary, naa bujjidhana ♡","Chaalaa kashtapadi, alochinchiiii chesan nannaa."]){il.textContent=t;il.classList.remove('h');await sleep(2000);il.classList.add('h');await sleep(900)}
il.textContent="For my Naa Bujji Pellama";il.classList.remove('h');$('hn').classList.remove('hide');await sleep(1200);$('ib').classList.remove('hide')})();
$('open').onclick=e=>{burst(e.clientX,e.clientY);play(au);startJ()};
 
// promises
let i=0;const dots=$('dots');P.forEach(()=>dots.appendChild(document.createElement('i')));
function render(){const[n,t]=P[i];$('pn').textContent=`Promise ${i+1} of ${P.length}`;$('pnm').textContent=n+',';
$('ptx').innerHTML=t.split(' ').map((w,k)=>`<span style="animation-delay:${.4+k*.11}s">${w}&nbsp;</span>`).join('');
[...dots.children].forEach((d,k)=>d.classList.toggle('a',k==i));
$('nx').textContent=i==P.length-1?'I do ♡ Forever':'I promise ♡';$('cardin').classList.remove('o')}
function startP(){i=0;render();show('pr')}
$('nx').onclick=async e=>{burst(e.clientX,e.clientY);$('cardin').classList.add('o');await sleep(600);
if(i<P.length-1){i++;render()}else showRing()};
$('rp').onclick=startP;
addEventListener('pointermove',e=>{const c=$('cardin');if(!c)return;const x=(e.clientX/innerWidth-.5)*10,y=(e.clientY/innerHeight-.5)*-10;c.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`});
 
// certificate
let drawn=false;
async function drawCert(){if(drawn)return;
try{await Promise.all([document.fonts.load('80px "Great Vibes"'),document.fonts.load('500 30px "Cormorant Garamond"'),document.fonts.load('italic 500 30px "Cormorant Garamond"')])}catch(e){}
const c=$('cv'),x=c.getContext('2d'),W=c.width=1600,H=c.height=1130,G='#c9a24d',V='#43358a',L='#6b5bb5';
const S='"Great Vibes",cursive',C='"Cormorant Garamond",Georgia,serif';
let g=x.createLinearGradient(0,0,W,H);g.addColorStop(0,'#fff');g.addColorStop(.55,'#efecff');g.addColorStop(1,'#D3D3FF');x.fillStyle=g;x.fillRect(0,0,W,H);
x.save();x.globalAlpha=.05;x.fillStyle='#7a63d6';x.textAlign='center';x.font='760px serif';x.fillText('♥',W/2,H/2+260);x.restore();
x.strokeStyle='#7a63d6';x.lineWidth=10;x.strokeRect(40,40,W-80,H-80);
x.strokeStyle=G;x.lineWidth=2.5;x.strokeRect(62,62,W-124,H-124);
x.strokeStyle='#7a63d6';x.lineWidth=1.5;x.setLineDash([2,7]);x.strokeRect(76,76,W-152,H-152);x.setLineDash([]);
[[0,0,1,1],[W,0,-1,1],[0,H,1,-1],[W,H,-1,-1]].forEach(([a,b,fx,fy])=>{
x.save();x.translate(a,b);x.scale(fx,fy);x.strokeStyle=G;x.lineWidth=3;x.beginPath();x.moveTo(62,200);x.bezierCurveTo(62,115,115,62,200,62);x.stroke();
x.lineWidth=1.5;x.beginPath();x.moveTo(62,155);x.bezierCurveTo(70,105,105,70,155,62);x.stroke();x.restore();
x.fillStyle='#ff7fb8';x.font='38px serif';x.textAlign='center';x.fillText('♥',a+fx*112,b+fy*112+13)});
const T=(s,y,f,col,ls)=>{x.font=f;x.fillStyle=col;x.letterSpacing=ls||'0px';x.textAlign='center';x.shadowColor='rgba(170,150,255,.55)';x.shadowBlur=12;x.fillText(s,W/2,y);x.shadowBlur=0};
T('Certificate of Forever',215,'112px '+S,V);
T('THIS CERTIFIES THAT',290,'500 27px '+C,L,'8px');
T('Jeevan  ♥  Pavani',425,'128px '+S,'#7a4fd6');
x.strokeStyle=G;x.lineWidth=2;[[560,740],[860,1040]].forEach(l=>{x.beginPath();x.moveTo(l[0],478);x.lineTo(l[1],478);x.stroke()});
x.fillStyle='#ff7fb8';x.font='30px serif';x.letterSpacing='0px';x.textAlign='center';x.fillText('♥',800,489);
x.fillStyle=G;[[762,478],[838,478]].forEach(p=>{x.save();x.translate(p[0],p[1]);x.rotate(.785);x.fillRect(-5,-5,10,10);x.restore()});
T('Since the '+SINCE+', when two hearts quietly said yes,',548,'500 35px '+C,V);
T('they have been writing one story, one promise at a time.',595,'500 35px '+C,V);
T('Now, with love as their witness and forever as their home,',655,'italic 500 37px '+C,V);
T('they stand beneath the stars, already married in every way that matters.',702,'italic 500 37px '+C,V);
T('Sealed with '+P.length+' promises on the '+TODAY,775,'500 29px '+C,L);
T('First Anniversary · One Year of Choosing Each Other',815,'italic 500 27px '+C,'#9a86e0');
x.strokeStyle=V;x.lineWidth=2;[[300,660],[940,1300]].forEach(l=>{x.beginPath();x.moveTo(l[0],955);x.lineTo(l[1],955);x.stroke()});
x.fillStyle=V;x.textAlign='center';x.font='84px '+S;x.letterSpacing='0px';x.fillText('Jeevan',480,940);x.fillText('Pavani',1120,940);
x.font='500 24px '+C;x.letterSpacing='5px';x.fillStyle=V;x.fillText('WIFE',1120,1000);
x.fillText('HUSBAND',480,1000);
x.fillStyle='#e8639f';[1,-1].forEach(d=>{x.beginPath();x.moveTo(800+d*-35,950);x.lineTo(800+d*-65,1005);x.lineTo(800+d*-32,992);x.lineTo(800+d*-10,1010);x.lineTo(800+d*5,950);x.closePath();x.fill()});
x.save();x.translate(800,925);x.strokeStyle=G;x.globalAlpha=.75;x.lineWidth=1.5;for(let k=0;k<18;k++){x.rotate(Math.PI/18);x.beginPath();x.ellipse(0,0,92,36,0,0,7);x.stroke()}x.restore();
let rg=x.createRadialGradient(780,900,5,800,925,78);rg.addColorStop(0,'#ffb0d4');rg.addColorStop(1,'#ec6aa6');
x.shadowColor='#ff7fb8';x.shadowBlur=28;x.fillStyle=rg;x.beginPath();x.arc(800,925,76,0,7);x.fill();x.shadowBlur=0;
x.strokeStyle=G;x.lineWidth=5;x.beginPath();x.arc(800,925,76,0,7);x.stroke();
x.strokeStyle='#fff';x.lineWidth=3;x.beginPath();x.arc(800,925,62,0,7);x.stroke();
x.fillStyle='#fff';x.font='62px serif';x.letterSpacing='0px';x.textAlign='center';x.fillText('♥',800,946);
T('Certificate No. 2810-2026 · Witnessed by the Universe',1040,'italic 500 24px '+C,L,'2px');
drawn=true}
$('dl').onclick=async e=>{burst(e.clientX,e.clientY);const nt=$('nt'),fn='Pavani-Marriage-Promise-Certificate.png';
try{const b=await new Promise(r=>$('cv').toBlob(r,'image/png'));
const d=window.claude?await claude.use('downloads'):null;
if(d){await d.save({filename:fn,data:b})}
else{const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=fn;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),5000)}
nt.textContent='Saved. Keep it forever, Bangaru ♡'}
catch(err){nt.textContent=err&&err.code=='declined'?'Whenever you are ready ♡':'Press and hold the certificate to save it ♡'}};
 
// journey
const jy=$('jy');
$('chs').innerHTML=J.map(c=>`<div class="ch"><div class="nd">♥</div><div class="cc"><div class="dt">${c.d}</div><h3 class="script">${c.t}</h3>${c.img?`<img src="${c.img}" alt="">`:''}<p>${c.x}</p></div></div>`).join('');
function parts(e){const p=$('pt');p.innerHTML='';if(!e)return;for(let i=0;i<10;i++){const s=document.createElement('span');s.textContent=[...e][i%[...e].length];s.style.cssText=`left:${Math.random()*100}%;font-size:${14+Math.random()*14}px;animation-duration:${8+Math.random()*8}s;animation-delay:${-Math.random()*10}s`;p.appendChild(s)}}
const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;const c=J[en.target._k];en.target.classList.add('v');B.classList.toggle('moon',!!c.moon);jy.style.setProperty('--c1',c.a);jy.style.setProperty('--c2',c.b);parts(c.e)}),{root:jy,rootMargin:'-20% 0px -35% 0px'});
document.querySelectorAll('.ch').forEach((el,k)=>{el._k=k;io.observe(el)});
jy.addEventListener('scroll',()=>{const m=jy.scrollHeight-jy.clientHeight;$('tl').style.transform=`scaleY(${m?jy.scrollTop/m:0})`});
function startJ(){jy.scrollTop=0;show('jy');const n=Math.max(0,Math.floor((Date.now()-new Date(START+'T00:00:00'))/864e5)),e=$('dn');let k=0;const t=setInterval(()=>{k+=Math.ceil(n/60)||1;if(k>=n){k=n;clearInterval(t)}e.textContent=k},25)}
$('jn').onclick=e=>{burst(e.clientX,e.clientY);startP()};
// ring reveal
function showRing(){toRing();$('rt').innerHTML=RING_TEXT.split(' ').map((w,k)=>`<span style="animation-delay:${1+k*.12}s">${w}&nbsp;</span>`).join('');show('rg')}
$('rn').onclick=e=>{burst(e.clientX,e.clientY);show('ce');drawCert()};
 
// moon theme stars
(function(){const st=$('st');for(let i=0;i<30;i++){const s=document.createElement('i');s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${-Math.random()*3}s;animation-duration:${2+Math.random()*3}s`;st.appendChild(s)}})();
 
// final page: fairy + Mahalakshmi
function lotus(){let h='<defs><linearGradient id="pg" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ffd27a"/><stop offset=".55" stop-color="#ffb3d6"/><stop offset="1" stop-color="#fff"/></linearGradient></defs>';const d='M0 0C-26-28-24-76 0-100C24-76 26-28 0 0Z';
for(let k=0;k<9;k++)h+=`<g transform="rotate(${-80+k*20})"><path class="pl" style="animation-delay:${k*.18}s" d="${d}"/></g>`;
for(let k=0;k<5;k++)h+=`<g transform="rotate(${-50+k*25}) scale(.72)"><path class="pl" style="animation-delay:${1.6+k*.2}s" d="${d}"/></g>`;
$('lo').innerHTML=h+'<circle class="ct" cx="0" cy="-6" r="9"/>'}
async function showFinal(){lotus();parts('🪷✨');show('fn');const il=$('fl');il.textContent='';
await sleep(3200);for(const t of FINAL){il.textContent=t;il.classList.remove('h');await sleep(2600);il.classList.add('h');await sleep(900)}
$('ft').classList.remove('hide');await sleep(1400);$('fe').textContent=FINAL_END;$('fe').classList.remove('hide');await sleep(900);$('fb').classList.remove('hide')}
$('fnb').onclick=e=>{burst(e.clientX,e.clientY);showFinal()};
$('fr').onclick=()=>location.reload();
 