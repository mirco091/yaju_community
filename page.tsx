'use client'

import { motion } from 'framer-motion'
import { Bell, Crown, Gem, Home, PackagePlus, Sparkles, Trophy, Wallet, Zap } from 'lucide-react'

const boxes = [
  { title: 'YAJU Genesis Box', owner: 'YAJU_HOLDER', price: '3,000', tag: 'NEW', rarity: 'SSR' },
  { title: 'Community Alpha Box', owner: 'MIRCO_ARMY', price: '5,000', tag: 'HOT', rarity: 'UR' },
  { title: 'Black Vault Dragon', owner: 'DRAGON_DAO', price: '10,000', tag: 'LIMITED', rarity: 'LR' },
  { title: 'Dream Holder Pack', owner: 'LILY_HOLDER', price: '2,500', tag: 'COMMUNITY', rarity: 'SR' }
]

const rankings = [
  ['LEGENDARY VAULT', '2,450,000'],
  ['VOLT BOX', '1,890,000'],
  ['YAJU PREMIUM', '1,200,000'],
  ['HOLDER BOX', '980,000']
]

const live = [
  '0x91...A2 opened YAJU Genesis Box',
  'GOD_HOLDER listed a new SSR prize',
  '0x44...F9 pulled Black Vault Dragon',
  'YAJU Treasury burned 114,514 coins'
]

function Sidebar() {
  const items = [
    [Home, 'ホーム'], [Zap, 'ガチャ'], [Gem, 'ボックス'], [PackagePlus, '出品'], [Trophy, 'ランキング']
  ]
  return (
    <aside className="hidden md:flex w-24 flex-col items-center gap-7 border-r border-white/10 bg-black/35 py-8">
      <div className="text-3xl font-black text-gold">Y</div>
      {items.map(([Icon, label]) => (
        <div key={label as string} className="flex flex-col items-center gap-1 text-xs text-white/60 hover:text-gold">
          {/* @ts-ignore */}<Icon size={23} />
          <span>{label as string}</span>
        </div>
      ))}
    </aside>
  )
}

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-black/40 px-5 py-4 md:px-8">
      <div>
        <div className="text-2xl font-black tracking-widest md:text-3xl"><span className="text-gold">YAJU</span> VAULT</div>
        <div className="text-xs text-white/50">Holder-powered Web3 Oripa</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2 md:block">
          <p className="text-xs text-white/45">$YAJU</p><p className="font-bold">114,514.00</p>
        </div>
        <button className="rounded-2xl bg-gold px-4 py-2 font-bold text-black shadow-gold"><Wallet className="inline" size={18}/> Connect</button>
        <div className="rounded-full bg-white/10 p-3"><Bell size={20}/></div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-purple/15 to-black p-7 shadow-glow md:p-10">
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-purple/30 blur-3xl" />
      <div className="absolute bottom-0 right-8 hidden text-[180px] font-black leading-none text-white/5 md:block">Y</div>
      <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <span className="rounded-full bg-purple px-4 py-1 text-sm font-bold">ホルダー参加型オリパ</span>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">ホルダーが作る、<br/><span className="text-gold">次世代オリパVault。</span></h1>
          <p className="mt-5 max-w-xl text-white/70">YAJU Coinで誰でもガチャを引ける。NFT・カード保有者は景品を出品し、売上を分配。運営は手数料で成長するWeb3マーケットプレイス型オリパ。</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="rounded-2xl bg-gold px-6 py-3 font-black text-black">ガチャを引く</button>
            <button className="rounded-2xl border border-gold/50 px-6 py-3 font-bold text-gold">出品する</button>
          </div>
        </div>
        <motion.div animate={{ y: [0, -16, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="mx-auto flex h-72 w-72 items-center justify-center rounded-[3rem] border border-gold/40 bg-black/60 shadow-gold">
          <div className="text-center">
            <Crown className="mx-auto text-gold" size={80}/>
            <p className="mt-4 text-3xl font-black">VAULT BOX</p>
            <p className="text-neon">ON-CHAIN READY</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function BoxCard({ b }: { b: typeof boxes[number] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-panel p-4 hover:border-gold/60 hover:shadow-gold">
      <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-purple/40 via-black to-gold/20">
        <Sparkles className="text-gold" size={58}/>
      </div>
      <div className="mt-4 flex justify-between"><span className="rounded bg-purple px-2 py-1 text-xs font-bold">{b.tag}</span><span className="text-gold font-black">{b.rarity}</span></div>
      <h3 className="mt-3 text-lg font-black">{b.title}</h3>
      <p className="text-sm text-white/50">提供者：{b.owner}</p>
      <button className="mt-4 w-full rounded-2xl bg-white/10 py-3 font-black hover:bg-gold hover:text-black">{b.price} YAJU</button>
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="mx-auto flex max-w-[1500px]">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="space-y-10 p-5 md:p-8">
            <Hero />

            <section>
              <div className="mb-4 flex items-end justify-between"><h2 className="text-2xl font-black">ピックアップオリパ</h2><a className="text-gold">すべて見る</a></div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{boxes.map(b => <BoxCard key={b.title} b={b}/>)}</div>
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-panel p-6">
                <h2 className="text-2xl font-black">売上ランキング</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">{rankings.map((r, i) => <div key={r[0]} className="rounded-2xl bg-white/5 p-4"><p className="text-gold">#{i+1}</p><p className="font-black">{r[0]}</p><p className="text-neon">{r[1]} YAJU</p></div>)}</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-panel p-6">
                <h2 className="text-2xl font-black">ライブガチャ</h2>
                <div className="mt-5 space-y-3">{live.map(item => <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white/75">LIVE ・ {item}</div>)}</div>
              </div>
            </section>

            <section className="rounded-3xl border border-gold/30 bg-gradient-to-r from-gold/15 to-purple/20 p-7">
              <h2 className="text-3xl font-black">出品して稼ぐ</h2>
              <p className="mt-3 max-w-2xl text-white/70">カード・NFT・限定報酬を出品し、自分だけのBOXを作成。ガチャ売上からクリエイターに分配、運営にはプラットフォーム手数料が入ります。</p>
              <button className="mt-5 rounded-2xl bg-gold px-6 py-3 font-black text-black">BOXを作成する</button>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
