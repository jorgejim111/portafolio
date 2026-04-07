export default function Experience() {
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
      <h1 className="text-3xl font-bold text-center mb-8">
        Professional Experience
      </h1>

      {/* Grid en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Columna derecha: Professional Summary */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-xl font-semibold mb-3">Professional Summary</h2>
          <p className="text-gray-700 text-left leading-relaxed text-sm">
            Set Up & Manufacturing Technician (NOC 22302) with 20+ years of
            experience in plastic processing, extrusion, molding, and advanced
            manufacturing operations. Expert in equipment set-up, process
            optimization, troubleshooting, and parameter control for
            thermoplastic materials. Strong background in Lean Manufacturing,
            TPM, preventive maintenance, and quality systems. Proven ability to
            reduce downtime, stabilize processes, and improve product
            performance in high-volume production environments. Seeking
            technical roles where hands-on expertise in polymer processing and
            manufacturing reliability can add immediate value.
          </p>
        </div>

        {/* Columna izquierda: Core Competencies */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-xl font-semibold mb-3">Core Competencies</h2>
          <ul className="list-disc list-inside space-y-1 text-left text-gray-700 text-sm">
            <li>Equipment Set-Up & Changeovers</li>
            <li>Manufacturing Process Optimization</li>
            <li>
              Plastic Extrusion, Injection Molding – Polymer Processing (PE, PP,
              PVC, TR, TPU, ABS)
            </li>
            <li>Troubleshooting & Root Cause Analysis</li>
            <li>Lean Manufacturing & TPM</li>
            <li>Preventive & Predictive Maintenance</li>
            <li>Quality Control & Documentation</li>
            <li>Safety Compliance & SOPs</li>
            <li>Cross-Functional Collaboration</li>
          </ul>
        </div>
      </div>

      {/* Tarjeta del empleo */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto mt-8">
        <h1 className="text-xl font-bold text-left mb-4">
          Set Up & Manufacturing Operator Technician – Masternet Ltd.
          <div className="text-gray-600 text-sm">
            Mississauga, ON (October 2020– February 2026)
          </div>
        </h1>
        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Challenge:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            Improve die management practices and strengthen maintenance skills
            to reduce downtime and ensure production continuity.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Action:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            Designed and implemented an automated Die Control System to
            digitalize die inventory, damage reports, dimensional tracking, and
            repair workflows. In parallel, advanced my expertise in machinery
            maintenance by applying preventive strategies, learning to operate
            machine tools, and interpreting technical diagrams to support
            reliable operations.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Result:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            The Die Control System eliminated manual documentation, reduced
            production stops caused by damaged dies, and optimized inventory
            levels through FIFO rotation and predictive analysis. On the
            maintenance side, my hands-on experience with tools, equipment, and
            technical schematics significantly enhanced my ability to
            troubleshoot, stabilize processes, and extend machine lifespan.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Job Description:
          </h2>
          <ul className="list-disc list-inside text-left text-gray-700 text-sm space-y-1">
            <li>
              Executed full machine set-up processes including tooling,
              downstream equipment, and material control for plastic extrusion
              lines.
            </li>
            <li>
              Started up, operated, and inspected extrusion processes to ensure
              consistent product quality and compliance with specifications.
            </li>
            <li>
              Troubleshot, repaired, and maintained extrusion machinery,
              reducing unplanned downtime by 15% and improving equipment
              reliability.
            </li>
            <li>
              Implemented preventive and predictive maintenance strategies,
              extending machine lifespan and stabilizing production schedules.
            </li>
            <li>
              Developed a spare parts management system that lowered inventory
              costs by 10% while ensuring critical component availability.
            </li>
            <li>
              Completed production reporting, scrap analysis, and downtime
              documentation to support continuous improvement initiatives.
            </li>
            <li>
              Led continuous efforts to improve product quality, introducing
              process adjustments that reduced defects and enhanced customer
              satisfaction.
            </li>
            <li>
              Promoted a safe and healthy workplace by adhering to company
              safety rules and training operators in best practices.
            </li>
          </ul>
        </div>
      </div>
      {/* Don Teodolo */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto mt-8">
        <h1 className="text-xl font-bold text-left mb-2">
          Senior Operations Manager – Productora y Distribuidora Gastronómica
          <div className="text-gray-600 text-sm">
            Mexico City (May 2020 – Oct 2020)
          </div>
        </h1>

        {/* Challenge */}
        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Challenge:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            Transitioning a traditional family-run bakery into a structured,
            scalable food production system while reducing waste, stabilizing
            purchasing, and ensuring traceability of perishable products.
          </p>
        </div>

        {/* Action */}
        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Action:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            Led the digitalization of recipes and workflows, developed an
            automated material requirements system, and implemented a hybrid
            Pull–Push workflow supported by Kanban replenishment. Standardized
            baker practices, optimized layout for food-safe flow, and introduced
            batch-level traceability to strengthen operational control.
          </p>
        </div>

        {/* Result */}
        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Result:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            Achieved stable weekly planning aligned with real demand, eliminated
            shortages, and reduced ingredient waste by 8%. Production flow
            improved by 10% per shift, enabling the opening of a third shift.
            Full traceability of small batches was established, supporting
            expansion into Walmart, Chedraui, and regional distribution while
            strengthening operational stability.
          </p>
        </div>

        {/* Job Description */}
        <div>
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Job Description:
          </h2>
          <ul className="list-disc list-inside text-left text-gray-700 text-sm space-y-1">
            <li>
              Increased operational efficiency by 12% through workflow redesign
              and Lean tools.
            </li>
            <li>
              Reduced ingredient waste by 8% via process standardization and
              improved forecasting.
            </li>
            <li>
              Led production, logistics, and procurement for a high-volume food
              manufacturing operation.
            </li>
            <li>
              Implemented continuous improvement initiatives to streamline
              processes and reduce costs.
            </li>
          </ul>
        </div>
      </div>
      {/* Eclipse */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto mt-8">
        <h1 className="text-xl font-bold text-left mb-2">
          Owner/General Manager – Industria y Operadora de Curtidos (Brand:
          Eclipce)
          <div className="text-gray-600 text-sm">
            León, Mexico (Apr 2018 – May 2020)
          </div>
        </h1>

        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Challenge:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            Lead a mid-sized tannery and footwear production brand (Eclipce)
            through industry downturns, ensuring product consistency,
            sustainability, and profitability.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Action:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            Introduced new tanning and finishing techniques, expanded into
            footwear production (flats, sandals, boots), negotiated supplier
            contracts, and developed workforce training programs focused on
            safety and compliance.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Result:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            Improved product consistency, reduced chemical consumption by 15%,
            expanded customer base into regional export markets, and maintained
            profitability despite industry challenges.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Job Description:
          </h2>
          <ul className="list-disc list-inside text-left text-gray-700 text-sm space-y-1">
            <li>
              Implemented new tanning and finishing techniques that improved
              product consistency and reduced chemical consumption by 15%.
            </li>
            <li>
              Established and managed a mid-sized tannery and footwear brand
              (Eclipcd), producing flats, sandals, and boots.
            </li>
            <li>
              Negotiated supplier contracts and client agreements, expanding
              customer base into regional export markets.
            </li>
            <li>
              Developed workforce training programs to upskill operators in
              safety, environmental compliance, and modern tanning processes.
            </li>
            <li>
              Oversaw financial planning, procurement, and logistics, ensuring
              profitability during industry downturns.
            </li>
          </ul>
        </div>
      </div>
      {/* Suelas JB */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto mt-8">
        {/* Título del empleo */}
        <h1 className="text-xl font-bold text-left mb-2">
          Plant Manager – Suelas y Plásticos JB SA de CV
          <div className="text-gray-600 text-sm">
            León, Mexico (Jan 2001 – Apr 2018)
          </div>
        </h1>

        {/* Challenge */}
        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Challenge:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            Lead a footwear sole manufacturing plant producing women’s flats,
            plastic sandals, and boots, while managing extensive recycling of
            PVC, TR, ABS, PS, PP, and PE. The operation faced chaotic workflows,
            excessive scrap, and unstable scheduling, requiring a full
            transformation to support long-term growth and customer expansion.
          </p>
        </div>

        {/* Action */}
        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Action:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            Directed a full plant transformation project: redesigned layouts and
            material flow, reorganized warehouses, implemented Lean
            Manufacturing tools (5S, VSM, standardized work), introduced
            demand-driven scheduling, and created the Set Up–Supervisor role to
            stabilize machine setups and parameter control. Strengthened
            maintenance strategies and consolidated productivity through
            preventive programs.
          </p>
        </div>

        {/* Result */}
        <div className="mb-3">
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Result:
          </h2>
          <p className="text-gray-700 text-sm text-left">
            Reduced raw material inventory by 35–45%, decreased downtime by
            60%+, and improved scheduling stability by 90%. Increased plant
            output from 1,200 pairs/day to 3,500 pairs/day, reaching 46
            tons/month of transformed material. Scrap was reduced to historic
            lows, machine uptime improved, and overall productivity grew by more
            than 80%, consolidating the plant as a scalable, data-driven
            operation.
          </p>
        </div>

        {/* Job Description */}
        <div>
          <h2 className="text-lg font-semibold text-left text-gray-800">
            Job Description:
          </h2>
          <ul className="list-disc list-inside text-left text-gray-700 text-sm space-y-1">
            <li>
              Directed 100+ employees across three shifts, overseeing
              production, quality, and logistics.
            </li>
            <li>
              Increased plant output by 20% through process redesign and
              equipment upgrades.
            </li>
            <li>
              Reduced waste and improved efficiency through Lean Manufacturing
              initiatives.
            </li>
            <li>
              Increased plant output from 1,200 pairs per day to 3,500 pairs per
              day through process redesign and equipment upgrades.
            </li>
            <li>
              Led cross-functional teams in planning, design, implementation,
              and continuous improvement.
            </li>
            <li>
              Ensured compliance with safety, quality, and operational standards
              while optimizing resource utilization.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
