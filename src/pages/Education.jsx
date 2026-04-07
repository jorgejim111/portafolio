export default function Education() {
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
      <h1 className="text-3xl font-bold text-center mb-2">
        Education & Certification
      </h1>

      {/* Mini resumen */}
      <p className="text-center text-gray-700 mb-8 text-sm max-w-2xl mx-auto">
        Academic foundation in Industrial Engineering complemented by Lean Six
        Sigma certification and ongoing Data Analytics training. These
        credentials demonstrate both technical rigor and continuous professional
        development.
      </p>
      {/* Fotos del título escaneado */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
        <img
          src="/assets/tituloF.png"
          alt="Bachelor Degree Certificate"
          className="rounded-md shadow-md h-64 object-contain"
        />
        <img
          src="/assets/TituloB.png"
          alt="Bachelor Degree Certificate"
          className="rounded-md shadow-md h-64 object-contain"
        />
      </div>

      {/* Grid de 3 tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Tarjeta 1: Bachelor + WES */}
        <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center">
          <img
            src="/assets/wes.jpg"
            alt="WES Credential Assessment"
            className="rounded-md mb-4 h-48 object-contain"
          />
          <h2 className="text-lg font-semibold text-center">
            Bachelor’s in Industrial Engineering
          </h2>
          <p className="text-gray-600 text-sm text-center">
            Universidad de La Salle Bajío, León, Mexico (2008) <br />
            Validated by WES Canada – Bachelor’s degree equivalency
          </p>
          <p className="text-xs text-gray-500 mt-2 italic">
            *Título físico pendiente de escanear
          </p>
        </div>

        {/* Tarjeta 2: Yellow Belt */}
        <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center">
          <img
            src="/assets/YellowBelt.png"
            alt="Lean Six Sigma Yellow Belt Certificate"
            className="rounded-md mb-4 h-48 object-contain"
          />
          <h2 className="text-lg font-semibold text-center">
            Lean Six Sigma Yellow Belt
          </h2>
          <p className="text-gray-600 text-sm text-center">
            Greenbox Institute, Jun 2024 <br />
            Certified in Lean methodologies and process improvement
          </p>
        </div>

        {/* Tarjeta 3: Data Analytics */}
        <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center">
          {/*<img
            src="/assets/dataanalytics.jpg"
            alt="Diploma in Data Analytics"
            className="rounded-md mb-4 h-48 object-contain"
          />*/}
          <h2 className="text-lg font-semibold text-center">
            Diploma in Python Programming
          </h2>
          <p className="text-gray-600 text-sm text-center">
            In Progress <br />
            Practical training in Python programming, covering automation, data
            handling, and applied problem-solving for manufacturing and
            analytics. <br />
          </p>
          <h2 className="text-lg font-semibold text-center mt-8">
            Diploma in Data Analytics
          </h2>
          <p className="text-gray-600 text-sm text-center">
            In Progress <br />
            Expanding expertise in data-driven decision making and visualization
          </p>
        </div>
      </div>
    </section>
  );
}
