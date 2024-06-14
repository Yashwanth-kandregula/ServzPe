// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import React from "react";

function Card({ src, title, buttonText }) {
  return (
    <article className="flex overflow-hidden relative flex-col justify-center mt-24 aspect-[1.02]">
      <img loading="lazy" src={src} alt={title} className="object-cover absolute inset-0 size-full" />
      <div className="flex overflow-hidden relative flex-col px-5 py-6 border border-solid aspect-[1.02] backdrop-blur-[25px] border-neutral-400 border-opacity-10 fill-zinc-300 fill-opacity-10 stroke-[1px] stroke-neutral-400 stroke-opacity-10">
        <div className="relative text-2xl font-extrabold">{title}</div>
        <div className="relative self-end mt-48 text-xs font-semibold">
          <span className="font-bold">{buttonText}</span> <span className="text-base">&gt;</span>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const cards = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f05b414cd2608e7544646b805626513eaa6d1e0ae6b3ca8f5d23ebf8c393c5d3?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&",
      title: "Food Delivery",
      buttonText: "Know more"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/58348fa6d80a695f1b3ec6daa0e50f7a7f666a109274e2cd96a1f0bfae08cd72?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&",
      title: "Zero Brokerage Housing",
      buttonText: "Know more"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c039c4a91aa935688f94b060e5ef7db5517cbf131c963d4cea792af640024885?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&",
      title: "Easy Freelance",
      buttonText: "Know more"
    }
  ];

  return (
    <div className="flex flex-col justify-center mx-auto w-full bg-stone-950 max-w-[480px]">
      <header className="flex flex-col items-center px-5 pb-4 w-full bg-black">
        <div className="flex flex-col self-stretch px-14 py-16 w-full text-black">
          <div className="flex gap-5 justify-between px-3.5 py-2 mr-5 ml-5 text-xs font-semibold text-center text-white bg-white rounded-3xl">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b329e6da018150d72d8a2972a7e12ca97072cd41ee159147eb9ddce2ff6ec?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" alt="Servzpe Logo" className="shrink-0 my-auto aspect-[4.76] w-[75px]" />
            <div className="justify-center px-2.5 py-2 rounded-md bg-neutral-950">Become Servzpe Partner</div>
          </div>
          <h1 className="mt-14 text-4xl font-semibold text-white bg-clip-text">What you need is what you get with Servzpe</h1>
          <button className="justify-center self-center px-11 py-4 mt-96 text-xl font-semibold bg-white rounded-lg">Get Started</button>
          <p className="mt-20 text-2xl font-semibold text-white">Be Smarter and Save Money with Servzpe.</p>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </header>
      <section className="flex overflow-hidden relative flex-col self-stretch px-10 py-16 w-full aspect-[0.28]">
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfa7bc15fca54780342330ca55925ba49a085da75abab733d98982572bcc8ad8?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" alt="Unlock Servzpe Wallet" className="object-cover absolute inset-0 size-full" /> */}
        <h2 className="relative self-center text-3xl font-semibold text-center bg-clip-text text-zinc-100 w-[243px]">
          <span className="text-6xl">Unlock</span> <span className="text-zinc-100">Servzpe Wallet</span>
        </h2>
        <div className="flex relative gap-3 mt-14">
          <div className="flex flex-col justify-center items-center px-1.5 w-5 h-5 bg-white rounded-full">
            <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-stone-500" />
          </div>
          <p className="flex-auto text-base font-light text-zinc-300">Earn money through freelance</p>
        </div>
        <div className="flex relative gap-3 mt-8">
          <div className="flex flex-col justify-center items-center px-1.5 w-5 h-5 bg-white rounded-full">
            <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-stone-500" />
          </div>
          <p className="flex-auto text-base font-light text-zinc-300">Spend on Servzpe services</p>
        </div>
        <div className="flex relative gap-3 mt-8">
          <div className="flex flex-col justify-center items-center self-start px-1.5 w-5 h-5 bg-white rounded-full">
            <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-stone-500" />
          </div>
          <p className="flex-auto text-base font-light text-zinc-300">Get exclusive coupons, cashback and extra rewards</p>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad77ede617eaece5ac698e08c690de1d0c3b74ef592b44c289aff617997505a0?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" alt="" className="self-center mt-12 max-w-full aspect-[0.53] w-[216px]" />
        <p className="relative mt-10 text-xl font-medium text-neutral-400">With smart technology and top-notch service, it's the perfect solution to be smarter.</p>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1507c99b00f99c90084cbff4a67725d0728e5b4d9bc0609587fd4e25c1e348de?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" alt="" className="mt-16 mb-11 w-full aspect-[1.16]" />
      </section>
      <section className="mt-24 text-2xl font-semibold text-center text-white bg-clip-text">
        <span className="font-bold">Excited?</span> <span className="font-bold">Join our waitlist</span>
      </section>
      <form className="flex flex-col items-start pt-14 pl-10 mt-11 w-full font-bold rounded-3xl bg-black bg-opacity-80 max-w-[324px] shadow-[0px_0px_10px_rgba(42,27,133,1)]">
        <label htmlFor="waitlistEmail" className="text-2xl text-white">Be the first to experience the future of student empowerment!</label>
        <p className="mt-5 text-sm font-[275] text-neutral-400">Join our waitlist for beta access to the Servzpe and unlock a world of earning, spending, and saving opportunities tailored for students.</p>
        <input id="waitlistEmail" type="email" placeholder="Enter your email" className="mt-6 px-6 py-3.5 text-black rounded-xl shadow-sm" />
        <button className="justify-center px-6 py-3.5 mt-6 text-xl text-black rounded-xl shadow-sm">Join now</button>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/18d07b6704b865472bd561902bcc69dfba0ae5f04cf1f817f1b52e0b807d15f4?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" alt="" className="z-10 self-end mt-0 max-w-full aspect-[1.22] w-[163px]" />
      </form>
      <footer className="flex gap-5 justify-between mt-48 w-full text-xs font-medium text-indigo-500">
        <div className="flex gap-2 self-start">
          <div className="grow">Designed and developed by <span className="text-indigo-500">students</span> for <span className="text-indigo-500">students</span> in</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ab6c6d305c36bd774aeecd54a3b58dabf238a7a379f63d2f59160e0341944a1?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" alt="Design" className="shrink-0 self-start w-2.5 aspect-[1.43]" />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/566a55f1d0a9801f4644a2b56ad979a9225bfaec3aa14b709614936aa166fc48?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" alt="Developer" className="shrink-0 aspect-[4.55] w-[50px]" />
      </footer>
    </div>
  );
}