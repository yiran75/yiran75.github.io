:root{--bg:#07080d;--s:#10121b;--s2:#161927;--l:#232740;--t:#f3f1ec;--m:#9296ad;--a1:#7c8cff;--a2:#5cf0d0;
--h:"Unbounded","Segoe UI",system-ui,sans-serif;--b:"Outfit","Segoe UI",system-ui,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--t);font:300 1.08rem/1.7 var(--b);overflow-x:hidden;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}
:focus-visible{outline:2px solid var(--a2);outline-offset:4px;border-radius:6px}
.wrap{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:0 clamp(20px,4vw,40px)}
.cc,.cc *{cursor:none!important}

/* cursor */
#cd,#cr{position:fixed;left:0;top:0;pointer-events:none;z-index:120;display:none}
.cc #cd,.cc #cr{display:block}
#cd{width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:var(--a2)}
#cr{width:38px;height:38px;margin:-19px 0 0 -19px;border-radius:50%;border:1.5px solid rgba(92,240,208,.6);transition:width .25s,height .25s,margin .25s,background .25s}
#cr.h{width:66px;height:66px;margin:-33px 0 0 -33px;background:rgba(92,240,208,.1)}

/* preloader curtain */
#pre{position:fixed;inset:0;z-index:110;background:var(--bg);display:grid;place-items:center;text-align:center;transition:clip-path 1s cubic-bezier(.7,0,.2,1),visibility 0s 1s}
#pre.off{clip-path:inset(0 0 100% 0);visibility:hidden}
#pre b{display:block;font:700 clamp(4rem,16vw,9rem)/1 var(--h);letter-spacing:.06em;background:linear-gradient(100deg,var(--a1),var(--a2));-webkit-background-clip:text;background-clip:text;color:transparent}
#pre small{display:block;margin:14px 0 26px;color:var(--m);letter-spacing:.3em;font-size:.8rem;text-transform:uppercase}
#pl{display:block;height:3px;width:0;max-width:260px;margin:0 auto;border-radius:3px;background:linear-gradient(90deg,var(--a1),var(--a2))}
#bar{position:fixed;top:0;left:0;height:3px;width:0;z-index:70;background:linear-gradient(90deg,var(--a1),var(--a2))}
#glow{position:fixed;width:520px;height:520px;left:0;top:0;margin:-260px 0 0 -260px;border-radius:50%;background:radial-gradient(circle,rgba(124,140,255,.16),transparent 65%);pointer-events:none;z-index:1}
.mesh{position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none}
.mesh i{position:absolute;width:55vw;height:55vw;border-radius:50%;filter:blur(110px);opacity:.28;animation:drift 22s ease-in-out infinite alternate}
.mesh i:first-child{background:#3b46c9;top:-15%;left:-10%}
.mesh i:last-child{background:#0fa58a;bottom:-20%;right:-12%;animation-delay:-9s}
@keyframes drift{to{transform:translate(8vw,6vh) scale(1.15)}}

/* spotlight */
.sp{position:relative;overflow:hidden}
.sp::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;opacity:0;transition:opacity .3s;background:radial-gradient(360px circle at var(--mx,50%) var(--my,50%),rgba(124,140,255,.2),transparent 60%)}
.sp:hover::before{opacity:1}
.sp>*{position:relative;z-index:1}

/* nav */
.nav{position:fixed;top:16px;left:50%;transform:translateX(-50%);width:min(1100px,calc(100% - 28px));z-index:60;display:flex;align-items:center;justify-content:space-between;padding:10px 12px 10px 26px;border-radius:99px;background:rgba(16,18,27,.7);backdrop-filter:blur(16px);border:1px solid var(--l)}
.logo{font:700 1.15rem var(--h)}.logo span{color:var(--a2)}
#lk{display:flex;gap:6px}
#lk a{padding:8px 18px;border-radius:99px;font-size:.95rem;color:var(--m);transition:.25s}
#lk a:hover,#lk a.act{color:var(--t);background:var(--s2)}
.hire{padding:10px 22px;border-radius:99px;background:linear-gradient(100deg,var(--a1),var(--a2));color:#07080d;font-weight:600;font-size:.92rem;transition:.25s}
.hire:hover{transform:scale(1.06)}
.burger{display:none;width:42px;height:42px;border-radius:50%;border:1px solid var(--l);font-size:1.1rem}
#menu{position:fixed;inset:0;z-index:90;background:rgba(7,8,13,.97);display:grid;place-content:center;gap:16px;text-align:center;transform:translateY(-100%);transition:transform .7s cubic-bezier(.7,0,.2,1)}
#menu.on{transform:none}
#menu a{font:700 clamp(2rem,9vw,3.4rem) var(--h)}
#menu a:hover{color:var(--a2)}
#close{position:absolute;top:24px;right:28px;font-size:1.5rem}

/* hero */
.hero{min-height:100vh;display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:center;padding-top:110px;padding-bottom:50px}
.tag{display:inline-flex;align-items:center;gap:10px;padding:7px 16px;border-radius:99px;border:1px solid var(--l);background:var(--s);font-size:.85rem;color:var(--m)}
.tag i{width:8px;height:8px;border-radius:50%;background:#3ddc97;color:#3ddc97;animation:ping 2s infinite}
@keyframes ping{0%{box-shadow:0 0 0 0 currentColor}70%,100%{box-shadow:0 0 0 12px transparent}}
.hi{margin:26px 0 8px;color:var(--m);font-size:1.15rem}
.wave{display:inline-block;animation:wave 2.4s infinite;transform-origin:70% 70%}
@keyframes wave{10%,30%{transform:rotate(16deg)}20%,40%{transform:rotate(-10deg)}50%,100%{transform:none}}
h1{font:700 clamp(2.4rem,6vw,4.6rem)/1.08 var(--h);letter-spacing:-.03em}
.ln{display:block;overflow:hidden;padding-bottom:.08em}
.ln span{display:block;animation:up 1s cubic-bezier(.2,.8,.2,1) both;animation-delay:2s}
.ln:nth-child(2) span{animation-delay:2.15s}.ln:nth-child(3) span{animation-delay:2.3s}
@keyframes up{from{transform:translateY(110%)}}
h1 em{font-style:normal;background:linear-gradient(100deg,var(--a1),var(--a2),var(--a1));background-size:200%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:flow 4s linear infinite}
@keyframes flow{to{background-position:200% 0}}
.rl{margin:20px 0 14px;font:500 1.25rem var(--h);color:var(--a2);min-height:2rem}
.d{color:var(--m);max-width:50ch;margin-bottom:32px}
.btns{display:flex;gap:14px;flex-wrap:wrap}
.btn{display:inline-block;padding:14px 30px;border-radius:99px;border:1px solid var(--l);font-weight:500;transition:.3s;cursor:pointer}
.btn.pr{background:linear-gradient(100deg,var(--a1),var(--a2));color:#07080d;border:0;font-weight:600}
.btn:hover{transform:translateY(-4px);box-shadow:0 16px 36px -14px var(--a1)}
.hr{--r:min(255px,46vw);position:relative;display:grid;place-items:center;padding:30px 0}
.bigo{position:absolute;font:700 clamp(8rem,20vw,15rem) var(--h);letter-spacing:-.05em;color:transparent;-webkit-text-stroke:1.5px rgba(124,140,255,.28);z-index:0;user-select:none}
.frame{position:relative;z-index:1;width:min(360px,78vw);aspect-ratio:3/4;border-radius:180px 180px 30px 30px;overflow:hidden;border:1px solid var(--l);box-shadow:0 40px 90px -30px rgba(124,140,255,.5);transition:transform .2s;animation:rev 1.4s cubic-bezier(.2,.8,.2,1) 2s both,gl 6s ease-in-out 3.4s infinite}
@keyframes rev{from{clip-path:inset(100% 0 0 0)}to{clip-path:inset(0)}}
@keyframes gl{50%{box-shadow:0 40px 100px -24px rgba(92,240,208,.55)}}
.frame img{width:100%;height:100%;object-fit:cover;object-position:center 30%}
/* orbiting language chips */
.orb{position:absolute;left:50%;top:50%;width:0;height:0;z-index:2;animation:rot 34s linear infinite}
.orb span{position:absolute;left:0;top:0;transform:rotate(calc(var(--i)*72deg)) translateY(calc(var(--r)*-1))}
.orb b{display:block;translate:-50% -50%;rotate:calc(var(--i)*-72deg);animation:rot 34s linear infinite reverse;padding:8px 18px;border-radius:99px;background:rgba(22,25,39,.85);backdrop-filter:blur(10px);border:1px solid var(--k);color:var(--k);font:600 .82rem var(--h);box-shadow:0 0 22px -6px var(--k);white-space:nowrap}
.orb span:nth-child(1){--i:0}.orb span:nth-child(2){--i:1}.orb span:nth-child(3){--i:2}.orb span:nth-child(4){--i:3}.orb span:nth-child(5){--i:4}
.gc{position:absolute;z-index:3;padding:12px 20px;border-radius:18px;background:rgba(22,25,39,.78);backdrop-filter:blur(14px);border:1px solid var(--l);animation:fl 5s ease-in-out infinite}
.gc b{display:block;font:700 1.4rem var(--h);color:var(--a2)}.gc span{font-size:.82rem;color:var(--m)}
.g1{top:20%;left:-4%}.g2{bottom:12%;right:-4%;animation-delay:-2.5s}
@keyframes fl{50%{transform:translateY(-14px)}}
.spin{position:absolute;z-index:3;width:104px;right:0;top:0;animation:rot 14s linear infinite}
.spin text{font:600 9.5px var(--b);fill:var(--t);letter-spacing:.06em}
@keyframes rot{to{transform:rotate(360deg)}}

/* marquee */
.mq{position:relative;z-index:2;border-block:1px solid var(--l);background:rgba(16,18,27,.6);overflow:hidden;padding:14px 0;display:grid;gap:10px}
.tr{display:flex;gap:44px;width:max-content;animation:mq 34s linear infinite;font:700 1.4rem var(--h);color:transparent;-webkit-text-stroke:1px var(--m)}
.tr.rev{animation-direction:reverse;-webkit-text-stroke:0;color:var(--m);opacity:.6}
.tr span::after{content:"✦";margin-left:44px;color:var(--a2);-webkit-text-stroke:0}
@keyframes mq{to{transform:translateX(-50%)}}

/* sections */
section.wrap{padding-top:110px;padding-bottom:20px}
.eb{font:500 .85rem var(--b);letter-spacing:.3em;text-transform:uppercase;color:var(--a2);margin-bottom:22px}
h2{font:700 clamp(1.7rem,3.6vw,2.6rem)/1.15 var(--h);letter-spacing:-.02em}
h2.sec{margin-bottom:34px;max-width:20ch}
h2 em{font-style:normal;background:linear-gradient(100deg,var(--a1),var(--a2));-webkit-background-clip:text;background-clip:text;color:transparent}

/* bento */
.bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:minmax(150px,auto);gap:16px}
.b{background:var(--s);border:1px solid var(--l);border-radius:26px;padding:28px;transition:.3s;position:relative;overflow:hidden}
.b:hover{border-color:var(--a1);transform:translateY(-5px)}
.b h3{font:600 1.05rem var(--h);margin-bottom:10px}
.b p{color:var(--m);font-size:1rem}.b p b{color:var(--t);font-weight:500}
.big{grid-column:span 2;grid-row:span 2;display:flex;flex-direction:column;justify-content:center;gap:18px}
.img{grid-column:span 2;grid-row:span 3;padding:0;min-height:420px}
.img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 40%;transition:transform 1s}
.img:hover img{transform:scale(1.06)}
.img::after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 55%,rgba(7,8,13,.9))}
.img span{position:absolute;left:24px;right:24px;bottom:22px;z-index:2;font:500 1.1rem var(--h)}
.st{display:flex;flex-direction:column;justify-content:center}
.st b{font:700 3rem var(--h);line-height:1;background:linear-gradient(100deg,var(--a1),var(--a2));-webkit-background-clip:text;background-clip:text;color:transparent}
.st span{color:var(--m);font-size:.92rem;margin-top:8px}
.bento .b:nth-child(5),.bento .b:nth-child(6){grid-column:span 2}

/* languages */
.lgs{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:16px}
.lg{background:var(--s);border:1px solid var(--l);border-radius:26px;padding:28px 24px;transition:transform .35s,border-color .3s}
.lg:hover{transform:translateY(-10px) rotate(-1.5deg);border-color:var(--a)}
.lg b{display:block;font:700 3.2rem/1 var(--h);margin-bottom:20px;background:linear-gradient(135deg,var(--a),#fff);-webkit-background-clip:text;background-clip:text;color:transparent;transition:.4s}
.lg:hover b{transform:scale(1.1);filter:drop-shadow(0 0 16px var(--a))}
.lg h3{font:600 1.1rem var(--h);margin-bottom:6px}
.lg p{color:var(--m);font-size:.95rem}

/* projects */
.row{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;padding:56px 0;border-top:1px solid var(--l)}
.row.alt .pw{order:2}
.pw{position:relative;display:grid;place-items:center;padding:20px}
.pw::before{content:"";position:absolute;width:340px;height:340px;border-radius:50%;background:var(--a);filter:blur(90px);opacity:.3}
.ty{font-size:.85rem;letter-spacing:.2em;text-transform:uppercase;color:var(--a);margin-bottom:10px}
.tx h3{font:700 clamp(1.6rem,3vw,2.3rem)/1.15 var(--h);margin-bottom:14px}
.tx>p:not(.ty){color:var(--m);max-width:44ch;margin-bottom:20px}
.tk{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:26px}
.tk i{font-style:normal;font-size:.85rem;padding:5px 14px;border:1px solid var(--l);border-radius:99px;color:var(--t);background:var(--s)}
.tx .btn:hover{background:var(--a);border-color:var(--a);color:#07080d}
.more{display:flex;flex-direction:column;align-items:center;gap:6px;padding:44px 20px;border:1.5px dashed var(--l);border-radius:28px;text-align:center;margin-top:20px;transition:.3s}
.more b{font:700 clamp(1.6rem,4vw,2.6rem) var(--h);background:linear-gradient(100deg,var(--a1),var(--a2));-webkit-background-clip:text;background-clip:text;color:transparent}
.more span{color:var(--m)}
.more:hover{border-color:var(--a2);background:var(--s)}

/* phone mockups */
.phone{position:relative;width:236px;height:470px;border-radius:42px;border:8px solid #1c1f2e;background:#0b0d14;box-shadow:0 40px 80px -30px var(--a);overflow:hidden;transition:transform .2s;will-change:transform;z-index:1}
.phone::before{content:"";position:absolute;top:8px;left:50%;width:70px;height:18px;margin-left:-35px;border-radius:12px;background:#1c1f2e;z-index:5}
.scr{position:absolute;inset:0;overflow:hidden}
/* Lifeline Go screen */
.map{background:#0d1b2a linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px) 0 0/28px 28px;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:28px 28px}
.sos{position:absolute;top:36px;left:14px;padding:5px 14px;border-radius:99px;background:#ff5d73;color:#fff;font:700 .68rem var(--h)}
.route{position:absolute;left:0;top:70px;width:100%;height:270px}
.route path{fill:none;stroke:#ff5d73;stroke-width:4;stroke-linecap:round;stroke-dasharray:8 10;animation:dash 2s linear infinite}
@keyframes dash{to{stroke-dashoffset:-36}}
.pin{position:absolute;right:30px;top:84px;width:16px;height:16px;border-radius:50%;background:#ff5d73;color:#ff5d73;animation:ping 2s infinite}
.amb{position:absolute;left:12px;top:262px;font-size:1.7rem;font-style:normal;animation:fl 3s ease-in-out infinite}
.sheet{position:absolute;left:12px;right:12px;bottom:12px;padding:14px;border-radius:20px;background:rgba(255,255,255,.96);color:#0d1b2a;display:grid;gap:2px}
.sheet b{font:600 .85rem var(--h)}.sheet span{font-size:.78rem;color:#5a6378}
.sheet em{font-style:normal;margin-top:8px;text-align:center;background:#ff5d73;color:#fff;border-radius:12px;padding:8px;font-weight:600;font-size:.82rem}
/* Medicine Alarm screen */
.med{background:#0f1a17;padding:44px 16px 16px;color:#eafff9;display:grid;gap:10px;align-content:start}
.med small{color:#7fb9aa;font-size:.78rem;text-align:center}
.dial{position:relative;width:138px;height:138px;margin:2px auto 8px}
.dial svg{width:100%;height:100%;transform:rotate(-90deg)}
.dial circle{fill:none;stroke-width:9}
.dial .t{stroke:#1e3a33}
.dial .p{stroke:var(--a);stroke-linecap:round;stroke-dasharray:327;stroke-dashoffset:327;animation:fillr 3s ease-out .4s forwards}
@keyframes fillr{to{stroke-dashoffset:90}}
.dial b{position:absolute;inset:0;display:grid;place-items:center;font:700 1.4rem var(--h)}
.pil{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px;background:#16261f;font-size:.82rem}
.pil i{width:22px;height:22px;border-radius:7px;background:var(--a);flex-shrink:0}
.pil span{margin-left:auto;color:#7fb9aa;font-size:.72rem}
.take{text-align:center;padding:12px;border-radius:14px;background:var(--a);color:#07110e;font-weight:600;font-size:.88rem;animation:beat 2s infinite}
@keyframes beat{50%{transform:scale(1.04)}}

/* browser window mockups */
.win{position:relative;z-index:1;width:min(470px,100%);border-radius:18px;background:#0e1019;border:1px solid var(--l);box-shadow:0 40px 80px -30px var(--a);overflow:hidden;transition:transform .2s;will-change:transform}
.wb{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#151827;border-bottom:1px solid var(--l)}
.wb i{width:10px;height:10px;border-radius:50%;background:#ff5f57}
.wb i:nth-child(2){background:#febc2e}.wb i:nth-child(3){background:#28c840}
.wb span{margin-left:14px;flex:1;font-size:.75rem;color:var(--m);background:#0e1019;border-radius:8px;padding:3px 12px}
.wd{display:flex;min-height:290px}
.sd{width:46px;background:#121522;padding:14px 10px;display:grid;gap:12px;align-content:start}
.sd i{height:22px;border-radius:7px;background:#20243a}.sd i.on{background:var(--a)}
.wm{flex:1;padding:16px;display:grid;gap:10px;align-content:start}
.wh2{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
.wh2 b{font:600 .95rem var(--h)}
.wh2 em{font-style:normal;font-size:.72rem;padding:5px 12px;border-radius:99px;background:var(--a);color:#07080d;font-weight:600}
.ar{display:flex;align-items:center;gap:12px;padding:10px;border-radius:12px;background:#151827}
.ar s{width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--a),#0e1019);flex-shrink:0}
.ar div{flex:1;min-width:0}
.ar b{display:block;font-size:.82rem;font-weight:500;line-height:1.3}
.ar small{color:var(--m);font-size:.7rem}
.ar em{font-style:normal;font-size:.68rem;padding:3px 10px;border-radius:99px;background:#252a44;color:var(--m)}
.ar em.ok{background:rgba(61,220,151,.16);color:#3ddc97}
.ar em.rw{background:rgba(255,180,84,.16);color:#ffb454}
.rooms{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.rooms i{font-style:normal;text-align:center;padding:16px 0;border-radius:12px;font:600 .8rem var(--h)}
.fr{background:rgba(61,220,151,.14);color:#3ddc97;border:1px solid rgba(61,220,151,.3)}
.bk{background:rgba(255,93,115,.14);color:#ffs
