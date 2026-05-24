const boxes = [
  {badge:'NEW', name:'ピカチュウex 神速ブレイカー', sub:'POKEMON CARD', provider:'YAJU_HOLDER', price:'3,000', art:'linear-gradient(135deg,#ffe66d,#8d3dff 55%,#111)'},
  {badge:'HOT', name:'モンキー・D・ルフィ', sub:'ONE PIECE CARD', provider:'MIRCO_ARMY', price:'5,000', art:'linear-gradient(135deg,#ff4141,#3b1010 55%,#111)'},
  {badge:'LIMITED', name:'青眼の白龍', sub:'QUARTER CENTURY', provider:'DRAGON_HOLDER', price:'10,000', art:'linear-gradient(135deg,#e8f2ff,#293047 55%,#050505)'},
  {badge:'NEW', name:'リーリエの全力', sub:'DREAM LEAGUE', provider:'LILY_HOLDER', price:'2,500', art:'linear-gradient(135deg,#ff8dd9,#6d3cff 55%,#111)'},
  {badge:'SSR', name:'YAJU Genesis Box', sub:'MEME VAULT', provider:'GOD_HOLDER', price:'11,451', art:'linear-gradient(135deg,#ffcf4a,#111 55%,#5a3300)'},
];
const rankings = ['LEGENDARY BOX','VOLT BOX','YAJU PREMIUM'];
const lives = ['342人が参加中','278人が参加中','185人が参加中','429人が参加中','514人が参加中'];
const grid = document.getElementById('boxGrid');
boxes.forEach(b=>{
  const el=document.createElement('article'); el.className='oripa-card';
  el.innerHTML=`<div class="art" style="--art:${b.art}"><span class="badge">${b.badge}</span><span class="community">COMMUNITY</span></div><h3>${b.name}</h3><p>${b.sub}</p><div class="provider"><span class="avatar"></span>提供者：${b.provider}</div><div class="price"><i class="coin yaju"></i>${b.price}</div>`;
  el.onclick=()=>openModal(); grid.appendChild(el);
});
const ranking = document.getElementById('rankingList');
rankings.forEach((r,i)=>{ const el=document.createElement('div'); el.className='rank-item'; el.innerHTML=`<div>♛ ${i+1}</div><div class="rank-box">Y BOX</div><b>${r}</b><small>提供者：${i===0?'GOD_HOLDER':i===1?'THUNDERDAO':'YAJU_TEAM'}</small><span>${['2,450,000','1,890,000','1,200,000'][i]} Y</span>`; ranking.appendChild(el); });
const liveRow=document.getElementById('liveRow'); lives.forEach((l,i)=>{ const el=document.createElement('article'); el.className='live-card'; el.innerHTML=`<span class="timer">00:${String(12+i*2).padStart(2,'0')}:${String(34-i*3).padStart(2,'0')}</span><div class="live-box">VAULT ${i+1}</div><p>♙ ${l}</p>`; liveRow.appendChild(el); });
const modal=document.getElementById('modal'); const result=document.getElementById('result');
function openModal(){modal.classList.add('show');result.textContent='';}
document.getElementById('openGacha').onclick=openModal; document.getElementById('bottomGacha').onclick=openModal; document.getElementById('closeModal').onclick=()=>modal.classList.remove('show');
document.getElementById('drawBtn').onclick=()=>{ result.textContent='抽選中...'; setTimeout(()=>{ const rewards=['SSR：YAJU Genesis Card','SR：Holder Revenue Ticket','R：演出NFT Fragment','N：Community Point']; result.textContent='🎉 '+rewards[Math.floor(Math.random()*rewards.length)]+' を獲得！'; },900); };
setInterval(()=>{ const n=document.getElementById('liveUsers'); n.textContent=(1230+Math.floor(Math.random()*80)).toLocaleString(); },1800);
const dealerLines=['次のブロックが熱い。虹演出の期待値が上昇中です。','ホルダーBOXの流入が増えています。神引きチャンス。','YAJUバーン発生。コミュニティプールに自動分配中。','AI判定：今はLIMITED BOXが一番荒れています。']; let di=0; setInterval(()=>{di=(di+1)%dealerLines.length; document.getElementById('dealerText').textContent=dealerLines[di]},2600);
