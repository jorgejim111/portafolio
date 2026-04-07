import foto from "../assets/foto.jpg"; // sube un nivel y entra a assets
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Header */}
      <h1 className="text-5xl font-bold text-center p-6">Jorge Jiménez</h1>

      {/* Sobre mí */}

      <section className="flex items-center justify-center p-6">
        <img
          src={foto}
          alt="Foto de Jorge Jiménez"
          className="w-52 h-40 rounded-full mr-8 shadow-lg border-4 border-stone-300"
        />
        <div>
          <h2 className="text-3xl text-left font-semibold mb-4 p-1">
            About me
          </h2>
          <p className="text-left ">
            I am an Industrial Engineer born in Mexico, with over two decades of
            experience in advanced manufacturing and the plastics sector.
            Throughout my career, I have specialized in extrusion, molding, and
            process optimization, always focusing on efficiency, safety, and
            quality. My professional journey also includes leadership roles in
            the food industry, where I gained firsthand knowledge of the strict
            standards of sanitation, traceability, and compliance required in
            high-volume operations. This diverse background has given me a
            comprehensive view of production: from equipment reliability and
            process improvement to meeting demanding hygiene and safety
            regulations. I see myself as resilient and curious, committed to
            continuous improvement and to delivering value in every
            project—whether in plastics, food manufacturing, or any environment
            that demands excellence.
          </p>
        </div>
      </section>

      <section className="p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Projects */}
        <Link
          to="/projects"
          className="bg-[#C19A6B] border rounded-lg shadow-md p-6 text-center hover:scale-105 transition-transform"
        >
          <h3 className="text-lg text-blue-900 font-bold mb-4">Projects</h3>
          <p className="text-sm text-indigo-900">
            From full plant overhauls to food production digitalization and
            advanced die control systems, my portfolio showcases real
            engineering transformations that turned chaotic operations into
            structured, data‑driven environments. Each project highlights
            measurable results—productivity boosts, scrap reduction, digital
            traceability, and workflow redesign—delivered through Lean tools,
            automation, and hands‑on leadership. Click to explore how these
            initiatives evolved step by step, from mini‑summaries to full
            project stories, and discover the practical engineering solutions
            behind the results.
          </p>
        </Link>

        {/* Education */}
        <Link
          to="/education"
          className="bg-white border rounded-lg shadow-md p-6 text-center hover:scale-105 transition-transform"
        >
          <h3 className="text-lg font-bold mb-4">Education</h3>
          <p className="text-sm text-stone-500">
            Bachelor’s degree in Industrial Engineering, fully recognized in
            Canada as a four‑year degree by WES. Complemented by Lean Six Sigma
            Yellow Belt certification (2024) and ongoing studies in Data
            Analytics, this academic foundation blends engineering rigor with
            process improvement and analytical skills. Together, these
            credentials reinforce a career built on technical mastery,
            continuous learning, and the ability to drive measurable
            improvements in manufacturing and operations.
          </p>
        </Link>

        {/* Experience */}
        <Link
          to="/experience"
          className="bg-[#C19A6B] border rounded-lg shadow-md p-6 text-center hover:scale-105 transition-transform"
        >
          <h3 className="text-lg text-blue-900 font-bold mb-4">Experience</h3>
          <p className="text-sm text-indigo-900">
            20+ years in advanced manufacturing, plastics processing, and
            process optimization, I bring proven expertise in extrusion,
            molding, and equipment reliability. My career is defined by
            measurable results—boosting plant output, reducing downtime, and
            driving continuous improvement through Lean Manufacturing and
            preventive maintenance. Combining technical mastery with hands‑on
            leadership, I deliver immediate impact in high‑volume production
            environments.
          </p>
        </Link>
      </section>

      {/* Contacto */}
      <footer className="bg-gray-800 text-white p-6 mt-8">
        <h2 className="text-lg text-white font-semibold mb-2">Contacto</h2>
        <p>LinkedIn | GitHub | Email</p>
      </footer>
    </div>
  );
}

export default Home;
