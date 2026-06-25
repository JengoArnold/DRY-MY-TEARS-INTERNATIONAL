import React from 'react'

function Home() {
  return (
    <div>
      <section
  className="relative min-h-screen bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url(https://images.squarespace-cdn.com/content/v1/5a2ba8479f07f51bfa2d71f6/1518285598484-5GDDE7HQS2WZGBYMBTQX/AOO_WEBSITE_IMAGES-04593.jpg)",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent"></div>

  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 md:px-8">
    <div className="w-full rounded-[2rem] border border-white/10 bg-slate-950/30 p-10 shadow-2xl shadow-slate-950/20 md:p-14">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex rounded-full bg-blue-500/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
            Empowering Hope
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Every child deserves a safe tomorrow.
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
            Dry My Tears International brings education, healthcare, and
            community support to children and families who need it most.
            Help us turn tears into strength through meaningful action.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
            <button className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700 ">
              Donate Now
            </button>

            <button className="  rounded-full border border-slate-200 px-4 py-2 text-white transition hover:bg-slate-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home
