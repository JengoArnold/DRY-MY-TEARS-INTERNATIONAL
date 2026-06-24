import image from './Potifolio.jpg';

function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-184px)] max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 py-16 text-slate-900 md:flex-row md:px-8">
      <div className="w-full max-w-2xl text-center md:text-left">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-600">
          Hello, I am JENGO ARNOLD
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Network Engineer
          <span className="block text-blue-600">& WebApp Developer</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Passionate about networking, cybersecurity, and modern web development. I build secure infrastructures and create responsive,
          user-friendly web applications.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
          <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition hover:bg-blue-700">
            View Projects
          </button>
          <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            Contact Me
          </button>
          <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Download CV
          </button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-4xl font-bold text-slate-900">15+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">Projects</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-4xl font-bold text-slate-900">3+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">Years Learning</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-4xl font-bold text-slate-900">5+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">Certifications</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={image}
          alt="Profile image"
          className="h-[24rem] w-[24rem] rounded-full border-4 border-slate-900 object-cover shadow-2xl transition duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Home
