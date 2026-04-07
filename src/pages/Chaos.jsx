import { useRef } from "react";
import html2pdf from "html2pdf.js";

export default function Chaos() {
  const contentRef = useRef();

  const handleDownload = () => {
    const element = contentRef.current;
    const opt = {
      margin: 0.5,
      filename: "ChaosProject.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <section className="bg-zinc-100 text-gray-900 p-6" ref={contentRef}>
      {/* Botones arriba a la derecha */}
      <div className="flex justify-end pr-6 mb-4">
        <div className="flex space-x-4">
          <a
            href="/projects"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm font-medium"
          >
            ← Back to Projects
          </a>
          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium"
          >
            ⬇ Download PDF
          </button>
        </div>
      </div>

      {/* Título */}
      <h1 className="text-3xl font-bold text-center mb-2">
        Project 1 — Full Plant Transformation and Production Flow Optimization
      </h1>

      {/* Mini resumen */}
      <p className="text-center text-gray-700 mb-8 text-sm max-w-2xl mx-auto">
        Transforming an SME from chaotic workflows to a streamlined, data-driven
        operation with outstanding results.
      </p>

      {/* Insights Gained */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-2 text-center">
          Insights Gained
        </h2>
        <p className="text-gray-600 text-sm text-center">
          This project shaped my foundation as an engineer. I learned how to
          translate theory into real operational solutions, apply tools such as
          Lean Manufacturing, VSM, 5S, flow design, and inventory management,
          and understand how each one drives measurable improvements. More
          importantly, this experience taught me to learn from mistakes, adapt
          quickly, and develop my own practical engineering criteria. It was the
          project where I truly grew from theory into real-world engineering.
        </p>
      </div>

      {/* Grid de fases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {/* Phase 1 */}
        <a
          href="#phase1"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 1 — Initial Assessment & Baseline Mapping
          </h3>
          <p className="text-gray-600 text-sm">
            The plant operated without a defined layout, material flow, or
            inventory control. During the first year, workflows were mapped, the
            first formal layout was created, and 5S standards were introduced.
            This phase established the operational baseline that enabled all
            future improvements.
          </p>
        </a>

        {/* Phase 2 */}
        <a
          href="#phase2"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 2 — Scrap Analysis & Material Policy Optimization (Year 2)
          </h3>
          <p className="text-gray-600 text-sm">
            Scrap levels were extremely high and recycling policies did not
            match real production behavior. A full scrap analysis revealed that
            start-ups and type changes caused most waste. New scrap handling,
            material policies, and start-up procedures reduced rework and
            stabilized material consumption.
          </p>
        </a>
        {/* Phase 3 */}
        <a
          href="#phase3"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 3 — New Machinery, Contracts & Full Layout Redesign (Years
            3–4)
          </h3>
          <p className="text-gray-600 text-sm">
            Growth in demand and new machines required a complete redesign of
            the plant. A long-term layout was implemented, finished product flow
            was centralized, and subprocesses like painting and inspection were
            integrated. Material and WIP flow became predictable and aligned
            with production needs.
          </p>
        </a>

        {/* Phase 4 */}
        <a
          href="#phase4"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 4 — Demand Driven Scheduling & Production Matrix System (Years
            4–6)
          </h3>
          <p className="text-gray-600 text-sm">
            The company transitioned from producing based on available materials
            to producing based on real demand. A data-driven production matrix
            aligned orders, buffer inventory, and WIP. Inventory levels
            stabilized, shortages decreased, and weekly planning became
            structured and reliable.
          </p>
        </a>

        {/* Phase 5 */}
        <a
          href="#phase5"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 5 — Operational Model Redesign & Set Up–Supervisor
            Implementation (Years 6–8)
          </h3>
          <p className="text-gray-600 text-sm">
            Daily operations were redesigned to reduce scrap, improve
            changeovers, and stabilize material handling. The Set Up–Supervisor
            role centralized machine adjustments and type changes, increasing
            uptime and reducing scrap to historic lows. Material flow and
            quality consistency improved significantly.
          </p>
        </a>
        {/* Phase 6 */}
        <a
          href="#phase6"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 6 — Maintenance Strategy & Productivity Consolidation (Years
            8–10)
          </h3>
          <p className="text-gray-600 text-sm">
            A shift from corrective to preventive maintenance increased machine
            availability and stabilized production cycles. Combined with
            improved changeovers, material flow, and scheduling, the plant
            reached 46 tons/month and operators achieved up to 1,000 pairs per
            shift, consolidating long-term productivity.
          </p>
        </a>
      </div>
      {/* Introducción del Proyecto */}
      <div className="max-w-4xl mx-auto mb-10 text-left">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Project 1 — Full Plant Transformation and Production Flow Optimization
        </h1>

        {/* Project Context */}
        <h2 className="text-xl font-semibold mb-2">Project Context</h2>
        <p className="text-gray-700 text-sm mb-4">
          The plant operated with high inventory levels, disorganized material
          flow, scattered processes, and undefined operational roles. Work areas
          were improvised, material routes changed constantly, and operators
          moved between stations without structure. These conditions created
          excessive handling, frequent downtime due to missing or late
          materials, and unstable daily scheduling driven by verbal decisions
          rather than data. The lack of standardized processes, documentation,
          and visual controls made it difficult to maintain consistency, manage
          inventory, or support growing production demands.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          As the company expanded and customer expectations increased, the
          existing operational model became unsustainable. High scrap levels,
          disconnected subprocesses, and an overloaded warehouse limited
          productivity and created chronic inefficiencies. The objective of this
          project was to redesign the entire operation—from layout and material
          flow to scheduling, roles, and information systems—to build a stable,
          efficient, and scalable production environment. This transformation
          required restructuring physical spaces, redefining responsibilities,
          implementing Lean tools, and establishing a data-driven
          decision-making model that would support long-term growth and
          operational excellence.
        </p>

        {/* Key Problems Identified */}
        <h2 className="text-xl font-semibold mb-2">Key Problems Identified</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Undelimited layout with no defined areas or material flow routes.
          </li>
          <li>Excessive raw material inventory with no control by shift.</li>
          <li>
            Painting, trimming, inspection, and shipping processes located in
            separate areas.
          </li>
          <li>Frequent downtime due to missing or late materials.</li>
          <li>
            Daily scheduling was reactive, unstable, and full of urgent changes.
          </li>
          <li>
            Operational roles did not match the real needs of the production
            system.
          </li>
        </ul>

        {/* Actions Implemented */}
        <h2 className="text-xl font-semibold mb-2">Actions Implemented</h2>
        <h3 className="text-lg font-medium mb-1">Plant Layout Redesign</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Designed and executed a new layout with clearly defined areas,
            material flow routes, and scrap zones.
          </li>
          <li>
            Implemented temporary storage points based on per shift consumption.
          </li>
          <li>Introduced visual controls and 5S standards across the plant.</li>
        </ul>

        <h3 className="text-lg font-medium mb-1">
          Warehouse and Finished Goods Reorganization
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Fully reorganized the raw material warehouse to improve
            accessibility and control.
          </li>
          <li>
            Prepared a dedicated building for finished goods, integrating
            painting, trimming, quality inspection, and shipping into a
            continuous flow.
          </li>
        </ul>

        <h3 className="text-lg font-medium mb-1">
          Order Flow and Scheduling Optimization
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Redesigned the information flow between sales, warehouse, and
            production.
          </li>
          <li>
            Implemented a daily scheduling system based on real consumption and
            installed capacity.
          </li>
          <li>
            Created a dedicated shift for customer emergencies, eliminating
            internal urgent changes.
          </li>
        </ul>

        <h3 className="text-lg font-medium mb-1">
          Operational Efficiency and Role Redesign
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Modified the production floor work model to eliminate
            inefficiencies.
          </li>
          <li>
            Removed redundant roles and created new positions aligned with
            operational needs.
          </li>
          <li>
            Established the Set Up – Supervisor role, responsible for machine
            setups, parameter control, process adjustments, and coordination
            between teams.
          </li>
          <li>Standardized material flow and communication between shifts.</li>
        </ul>

        {/* Results Achieved */}
        <h2 className="text-xl font-semibold mb-2">Results Achieved</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Reduced raw material inventory by 35–45%.</li>
          <li>Decreased downtime caused by missing materials by 60%+.</li>
          <li>
            Increased continuous flow in painting and inspection areas by 30%.
          </li>
          <li>Reduced rework due to handling issues by 75%+.</li>
          <li>
            Improved daily scheduling stability, reducing urgent changes by 90%.
          </li>
          <li>
            Increased overall plant productivity by 80%+, combining operational
            improvements with new customer acquisition.
          </li>
          <li>
            Achieved long-term operational stability through standardized
            processes and the Set Up–Supervisor role.
          </li>
        </ul>

        {/* Tools and Methodologies Applied */}
        <h2 className="text-xl font-semibold mb-2">
          Tools and Methodologies Applied
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Lean Manufacturing</li>
          <li>5S</li>
          <li>Value Stream Mapping (VSM)</li>
          <li>Layout design and material flow optimization</li>
          <li>Visual management</li>
          <li>Standardized work</li>
          <li>Inventory management</li>
          <li>Leadership of multidisciplinary teams</li>
        </ul>
      </div>
      {/* Phase 1 */}
      <div
        id="phase1"
        className="max-w-4xl mx-auto mb-10 bg-white rounded-lg shadow-md p-6 text-left"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Phase 1 — Initial Assessment and Baseline Mapping (Year 1)
        </h2>

        <p className="text-gray-700 text-sm mb-4">
          When I joined the company as a professional service contractor, the
          plant was a developing SME with strong products and market potential,
          but with highly disorganized operations. The first year focused on
          understanding the existing workflows and building a reliable
          operational baseline.
        </p>

        {/* Key Findings */}
        <h3 className="text-lg font-medium mb-2">
          Key Findings During the First Year
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            The plant had no formal layout; areas were improvised and changed
            frequently.
          </li>
          <li>
            Material flow was inconsistent, with operators moving randomly
            between stations.
          </li>
          <li>
            Information flow between production, warehouse, and management was
            informal and verbal.
          </li>
          <li>
            Scrap was accumulated in bags and sent to the raw material warehouse
            without structure.
          </li>
          <li>
            No documentation existed for raw material handling or inventory
            control.
          </li>
        </ul>

        {/* Actions Taken */}
        <h3 className="text-lg font-medium mb-2">Actions Taken</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Conducted a full layout survey, mapping all work areas, machines,
            and material routes.
          </li>
          <li>
            Performed Value Stream Mapping (VSM) to document information flow,
            material flow, and cycle times.
          </li>
          <li>
            Launched the 5S program, establishing order, cleaning routines,
            labeling, and visual controls.
          </li>
          <li>
            Designed the first formal plant layout, defining production zones,
            scrap points, and material routes.
          </li>
          <li>
            Created the first warehouse documentation for raw material handling
            and inventory movement.
          </li>
        </ul>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 1</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>The plant gained its first structured operational map.</li>
          <li>Material movement became predictable and traceable.</li>
          <li>
            Scrap handling improved, reducing confusion and re-sorting time.
          </li>
          <li>Operators adopted basic standards of order and cleanliness.</li>
          <li>The foundation was set for all future improvements.</li>
        </ul>
      </div>
      {/* Phase 2 */}
      <div
        id="phase2"
        className="max-w-4xl mx-auto mb-10 bg-white rounded-lg shadow-md p-6 text-left"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Phase 2 — Scrap Analysis, Material Policy Review, and Injection
          Start-Up Optimization (Year 2)
        </h2>

        <p className="text-gray-700 text-sm mb-4">
          During the second year, the focus shifted from basic organization to
          understanding the true impact of scrap on production efficiency and
          material costs. Although the company had policies for recycled
          material usage, these policies were not aligned with the actual scrap
          generation patterns, creating bottlenecks and excessive accumulation.
        </p>

        {/* Initial Conditions */}
        <h3 className="text-lg font-medium mb-2">
          Initial Conditions and Problems Identified
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Scrap was counted only by weight and stored in individual bags,
            sorted by material and color, but mixed again on the same pallet,
            requiring re-sorting in the raw material warehouse.
          </li>
          <li>
            Company policy allowed:
            <ul className="list-disc list-inside ml-6">
              <li>Up to 100% recycled material for black soles.</li>
              <li>Up to 50% recycled material for dark colors.</li>
              <li>Up to 25% recycled material for light colors.</li>
            </ul>
          </li>
          <li>
            Despite these policies, scrap was not being consumed at the expected
            rate, leading to large backlogs.
          </li>
          <li>
            Scrap generation was extremely high:
            <ul className="list-disc list-inside ml-6">
              <li>~30% for black and dark colors.</li>
              <li>40%+ for light colors.</li>
            </ul>
          </li>
          <li>
            Most scrap was produced during machine start-ups and type changes,
            but this was not documented or analyzed.
          </li>
        </ul>

        {/* Actions Taken */}
        <h3 className="text-lg font-medium mb-2">Actions Taken</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Implemented systematic scrap counting, recording origin, type,
            color, and shift.
          </li>
          <li>
            Analyzed the relationship between scrap generation vs. injection
            mix, identifying that start-ups and type changes were responsible
            for the majority of waste.
          </li>
          <li>
            Redesigned the scrap handling system:
            <ul className="list-disc list-inside ml-6">
              <li>
                Replaced individual bags with dedicated scrap boxes by material
                type.
              </li>
              <li>
                Consolidated scrap into larger, organized batches to eliminate
                re-sorting in the warehouse.
              </li>
            </ul>
          </li>
          <li>
            Reviewed and adjusted the material recycling policy based on real
            scrap generation and consumption capacity.
          </li>
          <li>
            Modified the machine start-up procedures to reduce scrap during
            warm-up and type transitions.
          </li>
          <li>
            Standardized the type change process, reducing unnecessary purges
            and improving material flow.
          </li>
        </ul>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 2</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Scrap re-sorting time in the warehouse was eliminated.</li>
          <li>
            Scrap consumption became predictable and aligned with production
            needs.
          </li>
          <li>
            Scrap accumulation decreased significantly due to better
            classification and larger batch handling.
          </li>
          <li>
            Start-up scrap was reduced by improving warm-up sequences and
            stabilizing parameters earlier.
          </li>
          <li>
            Material policy became realistic and aligned with actual production
            behavior.
          </li>
          <li>
            Production flow interruptions caused by scrap handling were reduced.
          </li>
        </ul>

        {/* Imagen representativa */}
        <div className="flex justify-center mt-6">
          <img
            src="/assets/chaos2.png"
            alt="Phase 2 Scrap Analysis"
            className="rounded-md shadow-md w-1/2 object-contain mx-auto"
          />
        </div>
      </div>
      {/* Phase 3 */}
      <div
        id="phase3"
        className="max-w-4xl mx-auto mb-10 bg-white rounded-lg shadow-md p-6 text-left"
      >
        <h2 className="text-xl font-semibold mb-4">
          Phase 3 — New Machinery, Contract Expansion, and Full Plant Layout
          Redesign (Years 3–4)
        </h2>

        <p className="text-gray-700 text-sm mb-4">
          The third and fourth years marked a turning point for the company. New
          machinery arrived, new contracts were secured, and production demand
          increased significantly. The previous operational model was no longer
          sufficient, requiring a complete redesign of the plant layout,
          material flow, and decision-making processes.
        </p>

        {/* Initial Conditions */}
        <h3 className="text-lg font-medium mb-2">
          Initial Conditions and Challenges
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            The arrival of new injection machines increased production capacity
            but also created congestion and unplanned material routes.
          </li>
          <li>
            New customer contracts required higher volumes, tighter lead times,
            and more consistent quality.
          </li>
          <li>
            The existing layout, designed for a smaller operation, became
            obsolete and inefficient.
          </li>
          <li>
            Finished product (FP) was stored in improvised areas, often exposed
            to damage due to excessive handling and lack of structure.
          </li>
          <li>
            Subprocesses such as painting, trimming, inspection, and shipping
            were scattered across the facility.
          </li>
          <li>
            Decision-making was still reactive, based on verbal communication
            rather than data.
          </li>
        </ul>

        {/* Actions Taken */}
        <h3 className="text-lg font-medium mb-2">Actions Taken</h3>
        <h4 className="text-md font-semibold mb-1">
          Full Plant Layout Redesign (Definitive Layout)
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Designed and implemented a new, long-term layout prioritizing:
            <ul className="list-disc list-inside ml-6">
              <li>
                Material flow from raw material → injection → FP processing →
                shipping.
              </li>
              <li>
                Clear separation of production, FP, and warehouse activities.
              </li>
              <li>Reduction of unnecessary movement and cross-traffic.</li>
            </ul>
          </li>
          <li>
            Relocated the entire Finished Product (FP) area to a dedicated
            building.
          </li>
          <li>
            Integrated all FP subprocesses (painting, trimming, inspection,
            shipping) into a continuous, linear workflow.
          </li>
          <li>
            Created formal documentation for each FP subprocess, including flow
            diagrams, handling standards, and quality checkpoints.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Material Flow and WIP Control
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Installed mobile shelving systems on the production floor to reduce
            WIP accumulation.
          </li>
          <li>
            Limited each machine to a controlled number of FP trays, reducing
            the risk of damage and improving traceability.
          </li>
          <li>
            Standardized the movement of FP from machines to the FP building,
            reducing handling time and errors.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Information Flow Redesign
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Rebuilt the decision-making process around data rather than
            intuition.
          </li>
          <li>
            Implemented a system where:
            <ul className="list-disc list-inside ml-6">
              <li>Inventory levels were checked before scheduling.</li>
              <li>
                Production orders were validated against real capacity and
                material availability.
              </li>
              <li>
                Daily decisions were based on inventory, demand, and machine
                availability.
              </li>
            </ul>
          </li>
          <li>
            Eliminated the previous “produce first, organize later” approach.
          </li>
        </ul>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 3</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Material and FP flow became predictable, structured, and aligned
            with production demand.
          </li>
          <li>
            FP damage decreased significantly due to controlled WIP and proper
            storage.
          </li>
          <li>
            Subprocess integration reduced transportation time and improved
            quality consistency.
          </li>
          <li>
            Decision-making became proactive, reducing reprocessing and
            unnecessary production.
          </li>
          <li>
            Investment in materials and rework decreased by approximately 30%,
            thanks to better planning and inventory control.
          </li>
          <li>
            The plant transitioned from a reactive operation to a scalable,
            data-driven production system.
          </li>
        </ul>
        {/* Imagen representativa */}
        <div className="flex justify-center mt-6">
          <img
            src="/assets/chaos.png"
            alt="Phase 3 Layout"
            className="rounded-md shadow-md w-1/2 object-contain mx-auto"
          />
        </div>
      </div>
      {/* Phase 4 */}
      <div
        id="phase4"
        className="max-w-4xl mx-auto mb-10 bg-white rounded-lg shadow-md p-6 text-left"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Phase 4 — Demand Driven Scheduling, Inventory Alignment, and
          Production Matrix System (Years 4–6)
        </h2>

        <p className="text-gray-700 text-sm mb-4">
          As production volumes increased and new contracts arrived, the
          previous scheduling method—based on available materials and oversized
          finished goods inventory—became unsustainable. The company had
          historically relied on a “produce everything” approach because demand
          was high and products sold quickly, but this created chronic shortages
          of key models and excessive stock of low rotation items. A new,
          data-driven scheduling system was required.
        </p>

        {/* Initial Conditions */}
        <h3 className="text-lg font-medium mb-2">
          Initial Conditions and Challenges
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Production was planned based on what materials were available, not
            on actual demand.
          </li>
          <li>
            Finished goods inventory was extremely high, yet frequent shortages
            occurred for the most requested models.
          </li>
          <li>
            Inventory numbers did not reflect market needs; some models were
            overstocked while others were constantly missing.
          </li>
          <li>
            Decision making was reactive and based on intuition rather than
            data.
          </li>
          <li>
            New contracts introduced strict delivery dates, making the old
            system unworkable.
          </li>
        </ul>

        {/* Actions Taken */}
        <h3 className="text-lg font-medium mb-2">Actions Taken</h3>
        <h4 className="text-md font-semibold mb-1">
          Inventory and Demand Realignment
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Conducted a full review of finished goods inventory levels.</li>
          <li>
            Identified the most demanded models and purchased additional mold
            repetitions to increase capacity for high rotation items.
          </li>
          <li>
            Adjusted inventory targets to match real market behavior,
            prioritizing central and high volume models.
          </li>
          <li>
            As inventory numbers were corrected, product rotation improved and
            shortages decreased.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Creation of a Data Driven Production Matrix
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Developed a simple but powerful Excel-based system to manage
            production planning using three variables:
            <ul className="list-disc list-inside ml-6">
              <li>Customer orders</li>
              <li>Buffer inventory</li>
              <li>Work in process (WIP)</li>
            </ul>
          </li>
          <li>
            Formula used:{" "}
            <span className="font-mono">
              Orders + Buffer – WIP = New Production Matrix
            </span>
          </li>
          <li>
            This matrix provided a clear, daily view of what needed to be
            produced and in what quantities.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Integration of Material Requirements
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Once the production matrix was generated, the system analyzed:
            <ul className="list-disc list-inside ml-6">
              <li>Delivery dates</li>
              <li>
                Raw material availability (virgin, reprocessed, and mixed)
              </li>
              <li>Machine capacity</li>
            </ul>
          </li>
          <li>
            Weekly production plans and raw material purchase orders were
            generated based on this analysis.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Information Flow Redesign
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Sales, warehouse, and production began working with the same data
            set.
          </li>
          <li>Inventory checks became mandatory before scheduling.</li>
          <li>
            Production decisions were no longer verbal; they were based on the
            matrix outputs.
          </li>
          <li>
            The system provided real-time visibility of progress and updated
            inventory levels.
          </li>
        </ul>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 4</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Production aligned with real demand instead of material
            availability.
          </li>
          <li>
            Inventory investment and reprocessing were reduced by approximately
            30%.
          </li>
          <li>Shortages of high rotation models decreased significantly.</li>
          <li>Finished goods inventory became balanced and predictable.</li>
          <li>
            Weekly planning became stable, structured, and aligned with delivery
            commitments.
          </li>
          <li>
            The Excel system provided a real-time operational picture, enabling
            proactive decision making.
          </li>
          <li>
            The plant transitioned from a reactive scheduling model to a
            demand-driven, data-based production system.
          </li>
        </ul>

        {/* Dos imágenes en columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
          <img
            src="/assets/chaos3.png"
            alt="Phase 4 Production Matrix Example"
            className="rounded-md shadow-md w-3/4 object-contain mx-auto"
          />
          <img
            src="/assets/chaos4.png"
            alt="Phase 4 Inventory Alignment Example"
            className="rounded-md shadow-md w-3/4 object-contain mx-auto"
          />
        </div>
      </div>
      {/* Phase 5 */}
      <div
        id="phase5"
        className="max-w-4xl mx-auto mb-10 bg-white rounded-lg shadow-md p-6 text-left"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Phase 5 — Operational Model Redesign, Set Up–Supervisor
          Implementation, and Process Stabilization (Years 6–8)
        </h2>

        <p className="text-gray-700 text-sm mb-4">
          After the major structural and planning changes of previous years, the
          next stage focused on stabilizing daily operations, improving machine
          changeovers, reducing scrap, and strengthening material handling. This
          phase marked the transition from a reactive plant to a controlled,
          efficient, and quality-driven operation.
        </p>

        {/* Initial Conditions */}
        <h3 className="text-lg font-medium mb-2">
          Initial Conditions and Challenges
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Operators were responsible for running multiple machines and
            performing type changes, causing them to stop other machines during
            changeovers.
          </li>
          <li>
            Changeovers generated large amounts of scrap, especially during warm
            up and type transitions.
          </li>
          <li>
            Material handling was inconsistent; regrind and mixed materials were
            stored informally and used without clear authorization.
          </li>
          <li>
            The third shift operated independently, without standardized
            changeovers or supervision.
          </li>
          <li>
            Scrap levels remained high, and recycled material consumption was
            insufficient to meet company policy.
          </li>
          <li>
            Plant order and cleanliness fluctuated depending on the shift.
          </li>
        </ul>

        {/* Actions Taken */}
        <h3 className="text-lg font-medium mb-2">Actions Taken</h3>
        <h4 className="text-md font-semibold mb-1">
          Creation and Implementation of the Set Up–Supervisor Role
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Introduced the Set Up–Supervisor position in two shifts to
            centralize:
            <ul className="list-disc list-inside ml-6">
              <li>Machine start ups</li>
              <li>Type changes</li>
              <li>Parameter adjustments</li>
              <li>Coordination between operators</li>
            </ul>
          </li>
          <li>
            Operators no longer stopped other machines during changeovers,
            increasing machine uptime and productivity.
          </li>
          <li>
            The third shift continued without changeovers by owner decision,
            maintaining stability.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Material Handling and WIP Control Improvements
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Implemented a per shift raw material staging area, where authorized
            regrind and mixed materials were pre-approved by color, hardness,
            and flexibility.
          </li>
          <li>
            Assigned a dedicated raw material operator to refill machine
            hoppers, eliminating operator downtime and improving consistency.
          </li>
          <li>
            Improved plant order and cleanliness through standardized material
            flow and clearer responsibilities.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Scrap Reduction and Material Cost Optimization
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            With controlled start ups and supervised type changes, scrap from
            regrind usage dropped to approximately 5%, a major improvement.
          </li>
          <li>
            Reduced scrap generation created a new challenge: insufficient
            internal scrap to meet recycled material policy.
          </li>
          <li>
            Sourced compatible scrap from other plants and industries to
            maintain recycling targets.
          </li>
          <li>
            Material costs decreased by approximately 30% due to lower scrap
            generation, better use of regrind, and improved material planning.
          </li>
        </ul>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 5</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Machine uptime increased significantly due to centralized
            changeovers.
          </li>
          <li>
            Productivity improved across all shifts, especially during high
            rotation production.
          </li>
          <li>
            Scrap reduction reached one of the lowest levels in the company’s
            history.
          </li>
          <li>
            Material flow became predictable and controlled, improving product
            quality.
          </li>
          <li>
            The plant achieved higher consistency in color, hardness, and
            flexibility across batches.
          </li>
          <li>
            Cost savings strengthened the company’s competitiveness and
            supported long-term growth.
          </li>
        </ul>
      </div>
      {/* Impact of Phase 6 */}
      <div
        id="phase6"
        className="max-w-4xl mx-auto mb-10 bg-white rounded-lg shadow-md p-6 text-left"
      >
        <h3 className="text-lg font-medium mb-2 text-center">
          Impact of Phase 6
        </h3>

        <h4 className="text-md font-semibold mb-1">Operator Productivity</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            At the beginning of the transformation, each operator produced
            approximately 350 pairs per shift, running two machines (≈700
            pairs/shift total).
          </li>
          <li>
            By the end of Year 10, depending on machine type and product style,
            operators consistently produced up to 1,000 pairs per shift,
            representing a major productivity increase.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Plant Capacity (kg transformed)
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Initial monthly output averaged 5 tons of transformed material.
          </li>
          <li>
            By the end of the transformation, the plant reached 46 tons per
            month, a nearly tenfold increase in productive capacity.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">Operational Stability</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Machine availability improved significantly due to reconditioning
            and early PM.
          </li>
          <li>
            Production became predictable, stable, and aligned with customer
            demand.
          </li>
          <li>
            The plant achieved long‑term operational consistency, supporting new
            contracts and sustained growth.
          </li>
        </ul>
      </div>
    </section>
  );
}
