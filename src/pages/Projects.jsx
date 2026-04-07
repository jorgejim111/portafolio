export default function Projects() {
  return (
    <section>
      {/* Botones arriba a la derecha */}
      <div className="flex justify-end pr-6 mb-4">
        <div className="flex space-x-4">
          <a
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm font-medium"
          >
            ← Back to Home
          </a>
          <a
            href="/assets/JORGEJIMENEZ.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium"
          >
            ⬇ Download CV
          </a>
        </div>
      </div>

      {/* Título centrado */}
      <h1 className="text-3xl font-bold text-center mb-2">Projects</h1>

      {/* Mini resumen atractivo */}
      <p className="text-center text-gray-700 mb-8 text-sm max-w-2xl mx-auto">
        Explore key transformation projects where engineering, digitalization,
        and process optimization delivered measurable impact. Each initiative
        reflects innovation, leadership, and a commitment to continuous
        improvement.
      </p>

      {/* Grid de 3 tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Proyecto 1: Chaos */}
        <a
          href="/projects/chaos"
          className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-center mb-2">
            From Chaos to Flow
          </h2>
          <p className="text-gray-600 text-sm text-center">
            Full plant transformation that turned disorganized workflows into a
            streamlined, data-driven operation with 80%+ productivity gains.
          </p>
          <img
            src="/assets/chaos.png"
            alt="Chaos to Flow Project"
            className="rounded-md mb-4 h-48 object-contain"
          />
        </a>

        {/* Proyecto 2: Kanban */}
        <a
          href="/projects/kanban"
          className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-center mb-2">
            Digitalizing Food Production
          </h2>
          <p className="text-gray-600 text-sm text-center">
            Recipes, planning, and Kanban workflow digitalized to stabilize
            production, improve traceability, and support regional distribution.
          </p>
          <img
            src="/assets/kanban.png"
            alt="Kanban Project"
            className="rounded-md mb-4 h-48 object-contain"
          />
        </a>

        {/* Proyecto 3: DCS */}
        <a
          href="/projects/dcs"
          className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-center mb-2">
            Smart Die Management
          </h2>
          <p className="text-gray-600 text-sm text-center">
            A digital system for die inventory, repairs, and predictive
            analysis, reducing downtime and strengthening production continuity.
          </p>
          <img
            src="/assets/dcs.png"
            alt="DCS Project"
            className="rounded-md mb-4 h-48 object-contain"
          />
        </a>
      </div>
    </section>
  );
}
