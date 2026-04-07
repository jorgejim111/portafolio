import { useRef } from "react";
import html2pdf from "html2pdf.js";

export default function Kanban() {
  const contentRef = useRef();

  const handleDownload = () => {
    const element = contentRef.current;
    const opt = {
      margin: 0.5,
      filename: "KanbanProject.pdf",
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
        Project 2 — Food Production System Digitalization & Kanban Workflow
      </h1>

      {/* Mini resumen / Contexto */}
      <p className="text-left text-gray-700 mb-8 text-sm max-w-2xl mx-auto">
        Improved the production system, purchasing workflow, and warehouse
        control by digitalizing the recipe book, creating an automated material
        planning tool, and implementing a Pull–Push system with Kanban. This
        project supported the transition from a small family business into a
        structured, data driven food production operation, enabling better
        planning, traceability, and control of perishable products.
      </p>

      {/* Insights Gained */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-2 text-center">
          Insights Gained
        </h2>
        <p className="text-gray-600 text-sm text-left">
          This project strengthened my ability to design and implement
          data-driven production systems in environments transitioning from
          manual to structured operations. I learned how to digitalize core
          processes, build automated planning tools, and deploy Pull–Push
          workflows supported by Kanban. I also gained practical experience in
          batch traceability, layout optimization, and weekly scheduling
          stability. Most importantly, this project taught me how to transform
          small, informal operations into scalable, predictable systems capable
          of supporting regional distribution and retail requirements.
        </p>
      </div>
      {/* Índice de fases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
        {/* Phase 1 */}
        <a
          href="#phase1"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 1 — Standardization Phase: Digital Recipes & Workflow
            Documentation
          </h3>
          <p className="text-gray-600 text-sm text-left">
            Replaced the manual recipe book with a structured digital system and
            documented the full production workflow, creating a standardized and
            error‑free foundation for future automation and planning
            improvements.
          </p>
        </a>

        {/* Phase 2 */}
        <a
          href="#phase2"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 2 — Automated Material Requirements System
          </h3>
          <p className="text-gray-600 text-sm text-left">
            Developed an automated Excel‑based material requirements system that
            replaced intuition‑based purchasing with data‑driven planning,
            introducing weekly scheduling, supplier‑aligned requirements, and
            real‑time raw material calculations.
          </p>
        </a>

        {/* Phase 3 */}
        <a
          href="#phase3"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 3 — Pull–Push Workflow Deployment
          </h3>
          <p className="text-gray-600 text-sm text-left">
            Implemented a hybrid Pull–Push workflow using Kanban replenishment,
            standardizing production flow, reducing downtime, and improving
            control of intermediate inventories through structured scheduling
            and operator training.
          </p>
        </a>

        {/* Phase 4 */}
        <a
          href="#phase4"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 4 — System Optimization & Kanban Automation
          </h3>
          <p className="text-gray-600 text-sm text-left">
            Optimized the Pull–Push workflow through layout adjustments and
            later automated the Kanban system to enable full batch‑level
            traceability, reduce waste, and strengthen operational control.
          </p>
        </a>
      </div>
      {/* Project Context */}
      <div className="max-w-4xl mx-auto mb-10 text-left">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Project 2 — Food Production System Digitalization & Kanban Workflow
        </h1>

        {/* Contexto */}
        <h2 className="text-xl font-semibold mb-2">Project Context</h2>
        <p className="text-gray-700 text-sm mb-4">
          The company operated as a traditional family-run bakery with manual
          processes, fixed weekly production volumes, and intuition-based
          purchasing. Recipes were kept in a handwritten notebook with no
          version control, ingredient calculations were done manually, and
          production practices varied between bakers. Despite producing
          perishable goods with a 45-day shelf life, lot tracking was limited
          and disconnected from purchasing, production, and supplier
          information, creating inconsistencies and limiting traceability.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          As the business expanded into regional distribution and began
          supplying retailers such as Walmart and Chedraui, demand quickly
          exceeded the capacity of the manual system. Stores sold at different
          speeds, causing shortages in some locations and excess inventory in
          others. Reactive purchasing, supplier variability, and the lack of
          standardized processes made planning unreliable. The project aimed to
          professionalize the operation by digitalizing recipes, documenting
          workflows, standardizing practices, and implementing a data-driven
          planning system supported by a Pull–Push Kanban workflow to enable
          small, traceable batches and prepare the company for scalable growth.
        </p>

        {/* Key Problems */}
        <h2 className="text-xl font-semibold mb-2">Key Problems Identified</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Informal handwritten recipe book with no version control.</li>
          <li>
            Manual ingredient calculations causing errors and inconsistent
            purchasing.
          </li>
          <li>
            Unstructured layout leading to cross-contamination risks and
            inefficient movement.
          </li>
          <li>
            Non-standardized baker practices resulting in variable product
            quality.
          </li>
          <li>
            Batch numbers without connection to suppliers or process data.
          </li>
          <li>
            Supplier variability affecting consistency and cost stability.
          </li>
          <li>
            Reactive purchasing workflow based on baker requests rather than
            planning.
          </li>
        </ul>

        {/* Actions Implemented */}
        <h2 className="text-xl font-semibold mb-2">Actions Implemented</h2>
        <h3 className="text-lg font-medium mb-1">
          Recipe System Digitalization
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Migrated the handwritten recipe book into a structured Excel system.
          </li>
          <li>Standardized yields, conversions, and ingredient lists.</li>
          <li>Integrated supplier data, costs, and delivery times.</li>
          <li>Added validation rules to eliminate calculation errors.</li>
        </ul>

        <h3 className="text-lg font-medium mb-1">
          Integrated Production & Planning System
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Developed a complete workflow from purchasing → production →
            shipping.
          </li>
          <li>
            Created an automated Excel tool to calculate weekly material
            requirements.
          </li>
          <li>
            Implemented a Thursday–Saturday planning cycle to stabilize
            purchasing.
          </li>
        </ul>

        <h3 className="text-lg font-medium mb-1">Process Standardization</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Documented the real production workflow step by step.</li>
          <li>Standardized baker practices to reduce variability.</li>
          <li>Established consistent process parameters across all areas.</li>
        </ul>

        <h3 className="text-lg font-medium mb-1">
          Pull–Push System with Kanban
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Introduced small, traceable batches with Kanban cards.</li>
          <li>
            Linked each card to materials, operators, timestamps, and process
            steps.
          </li>
          <li>
            Improved traceability for perishable products and reduced quality
            variation.
          </li>
        </ul>

        <h3 className="text-lg font-medium mb-1">
          Layout Optimization (Non-Structural)
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Reorganized cooling, proofing, staging, and in-process areas.</li>
          <li>
            Reduced movement, improved sanitation flow, and minimized
            cross-contamination.
          </li>
        </ul>

        {/* Results */}
        <h2 className="text-xl font-semibold mb-2">Results Achieved</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Operated two full weeks without shortages using the same purchasing
            budget.
          </li>
          <li>
            Reduced minimum inventory levels while maintaining FIFO and
            freshness.
          </li>
          <li>
            Simplified product flow and reduced cleaning/sanitization time.
          </li>
          <li>
            Pull–Push workflow increased production by 10% per shift, enabling
            the opening of a third shift.
          </li>
          <li>
            Improved purchasing efficiency: a small increase in raw material
            investment delivered an additional 10% weekly production capacity.
          </li>
          <li>
            Achieved full traceability of small batches, improving control of
            perishable products.
          </li>
          <li>
            Strengthened operational stability to support expansion into
            Walmart, Chedraui, and regional stores.
          </li>
        </ul>

        {/* Tools */}
        <h2 className="text-xl font-semibold mb-2">
          Tools & Methodologies Applied
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Excel advanced systems (tables, macros, automated planning).</li>
          <li>Kanban and Pull–Push workflow.</li>
          <li>Basic MRP logic for material requirements.</li>
          <li>Process standardization and workflow documentation.</li>
          <li>Supplier data integration and FIFO control.</li>
          <li>Layout optimization for food-safe flow.</li>
          <li>Batch traceability for perishable goods.</li>
        </ul>
      </div>
      {/* Phase 1 */}
      <div
        id="phase1"
        className="max-w-4xl mx-auto mb-10 bg-white rounded-lg shadow-md text-left p-6"
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Phase 1 — Standardization Phase: Digital Recipes & Workflow
          Documentation
        </h2>

        {/* Initial Conditions */}
        <h3 className="text-lg font-medium mb-2">
          Initial Conditions and Challenges
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          At the beginning, the bakery operated with a fully manual and highly
          variable production system. Recipes were kept in a handwritten
          notebook with no version control, ingredient calculations were
          performed manually, and yields were estimated based on experience
          rather than standardized data. Production relied heavily on the
          personal methods of each master baker, limiting standardization and
          knowledge transfer. As a result, product characteristics such as
          height, color, texture, and baking time varied significantly between
          batches. Some products were under baked or burned, shelf life on store
          shelves was inconsistent, and quality issues were frequent.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          The lack of documentation also affected material planning. Ingredient
          consumption was unpredictable, leading to both excess inventory and
          sudden shortages. Production schedules often had to be changed at the
          last minute due to missing materials, and the absence of a documented
          workflow made training difficult—new operators depended entirely on
          the master baker, who controlled the process informally. This
          environment created operational instability and made it impossible to
          scale production reliably.
        </p>

        {/* Actions Taken */}
        <h3 className="text-lg font-medium mb-2">Actions Taken</h3>
        <h4 className="text-md font-semibold mb-1">
          Recipe System Digitalization
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Migrated the entire handwritten recipe book into a structured Excel
            system.
          </li>
          <li>
            Created standardized tables with ingredient lists, yields,
            conversions, and supplier data.
          </li>
          <li>
            Added validation rules to eliminate calculation errors and ensure
            consistency.
          </li>
          <li>
            Established version control to maintain recipe integrity across all
            batches.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">Workflow Documentation</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Documented the real production process step by step, from ingredient
            preparation to baking and packaging.
          </li>
          <li>
            Identified critical control points affecting quality, timing, and
            shelf life.
          </li>
          <li>
            Standardized process parameters to reduce variability between
            bakers.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Yield and Conversion Standardization
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Normalized recipe yields and ingredient conversions to ensure
            consistent batch sizes.
          </li>
          <li>
            Eliminated manual calculations that previously caused over or under
            ordering of materials.
          </li>
        </ul>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 1</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Eliminated the physical recipe book and replaced it with a reliable
            digital system.
          </li>
          <li>
            Reduced calculation errors and improved consistency in ingredient
            usage.
          </li>
          <li>
            Stabilized product quality by reducing variability in height, color,
            texture, and baking time.
          </li>
          <li>
            Improved shelf life performance through standardized process
            parameters.
          </li>
          <li>
            Enabled proper FIFO rotation by lowering minimum inventory levels
            without losing control.
          </li>
          <li>
            Simplified training and onboarding thanks to documented workflows
            and standardized recipes.
          </li>
          <li>
            Established a solid digital foundation for future automation, Kanban
            implementation, and material planning tools.
          </li>
        </ul>

        {/* Imágenes en columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src="/assets/kanban2.png"
            alt="Phase 1 Digital Recipe System"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
          <img
            src="/assets/kanban3.png"
            alt="Phase 1 Workflow Documentation"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
        </div>
      </div>
      {/* Phase 2 */}
      <div
        id="phase2"
        className="max-w-4xl mx-auto mb-10 bg-white rounded-lg text-left shadow-md p-6"
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Phase 2 — Automated Material Requirements System
        </h2>

        {/* Initial Conditions */}
        <h3 className="text-lg font-medium mb-2">
          Initial Conditions and Challenges
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          Before this phase, purchasing was entirely intuition based. Raw
          materials were ordered only when the baker requested them, often too
          late or in excessive quantities. There was no weekly planning cycle,
          no visibility of real consumption, and no connection between recipes,
          batch sizes, and supplier requirements. This reactive workflow caused
          frequent shortages, forced last minute production changes, and created
          unstable inventory levels that affected both freshness and cost
          control.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          The lack of a structured planning system also made it impossible to
          anticipate demand or align purchasing with production capacity.
          Without standardized calculations, each week began with
          uncertainty—sometimes materials were missing, other times the
          warehouse accumulated unnecessary stock. This instability limited the
          bakery’s ability to scale and made production highly dependent on
          manual decisions.
        </p>

        {/* Actions Taken */}
        <h3 className="text-lg font-medium mb-2">Actions Taken</h3>
        <h4 className="text-md font-semibold mb-1">
          Automated Material Requirements System
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Developed a fully structured Excel tool using tables, formulas, and
            macros capable of calculating:
          </li>
          <ul className="list-disc list-inside ml-6">
            <li>Raw material requirements per product</li>
            <li>Inputs per batch and per mix</li>
            <li>Supplier specific purchasing requirements</li>
            <li>Weekly totals aligned with real demand</li>
          </ul>
          <li>
            The system integrated recipe data, yields, and batch parameters to
            generate accurate material requirements in real time.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">Weekly Planning Cycle</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Implemented a stable weekly workflow:</li>
          <ul className="list-disc list-inside ml-6">
            <li>Thursday → Planning (demand review + material calculation)</li>
            <li>
              Friday–Saturday → Purchasing (supplier orders based on system
              output)
            </li>
            <li>
              Monday → Production (materials available and aligned with
              schedule)
            </li>
          </ul>
          <li>
            This cycle replaced guesswork with a predictable, data driven
            routine.
          </li>
        </ul>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 2</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Purchasing decisions became fully data driven rather than intuition
            based.
          </li>
          <li>Shortages and overstock were significantly reduced.</li>
          <li>
            Weekly planning became stable, predictable, and aligned with
            production needs.
          </li>
          <li>
            Production no longer required last minute recipe changes due to
            missing materials.
          </li>
          <li>
            The bakery gained visibility of supplier requirements and batch
            level consumption.
          </li>
          <li>
            This phase established the operational backbone needed for Kanban
            and Pull–Push implementation in Phase 3.
          </li>
        </ul>

        {/* Imágenes en columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src="/assets/kanban.png"
            alt="Phase 2 Automated Material Requirements"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
          <img
            src="/assets/kanban4.png"
            alt="Phase 2 Weekly Planning Cycle"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src="/assets/kanban5.png"
            alt="Phase 2 Automated Material Breakdown "
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
          <img
            src="/assets/kanban6.png"
            alt="Phase 2 Weekly Planning Cycle"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
        </div>
      </div>
      {/* Phase 3 */}
      <div
        id="phase3"
        className="max-w-4xl mx-auto mb-10 bg-white rounded-lg shadow-md text-left p-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Phase 3 — Pull–Push Workflow Deployment
        </h2>

        {/* Initial Conditions */}
        <h3 className="text-lg font-medium mb-2">
          Initial Conditions and Challenges
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          Before this phase, production operated under a fully uncontrolled push
          system. Products were made in large, variable batches without
          alignment to real demand, causing frequent imbalances across the
          process. Some areas accumulated excess work in process, while others
          stopped due to lack of materials. There was no traceability of
          intermediate batches, and replenishment was reactive—operators
          requested materials only when they ran out, creating delays and
          inconsistent flow.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          This lack of structure made it impossible to stabilize production or
          maintain predictable throughput. Downtime increased, operators worked
          at different speeds, and inventory between stages fluctuated
          constantly. The system needed a mechanism to synchronize production
          steps and ensure that each area produced only what the next one
          required.
        </p>

        {/* Actions Taken */}
        <h3 className="text-lg font-medium mb-2">Actions Taken</h3>
        <h4 className="text-md font-semibold mb-1">
          Hybrid Pull–Push System Design
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>A structured workflow was developed combining:</li>
          <ul className="list-disc list-inside ml-6">
            <li>Push: Weekly production schedule aligned with demand</li>
            <li>
              Pull: Real time replenishment using Kanban cards for intermediate
              stages
            </li>
          </ul>
          <li>
            This hybrid model ensured that high level planning remained stable
            while day to day execution responded to actual consumption.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Kanban Replenishment Implementation
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Designed Kanban cards linked to product type, batch size, and
            process stage.
          </li>
          <li>Defined replenishment rules and limits for each area.</li>
          <li>
            Established visual controls to signal when to produce, move, or
            stop.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Operator & Supervisor Training
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Conducted hands-on training sessions to explain Pull–Push logic.
          </li>
          <li>Standardized how operators triggered replenishment.</li>
          <li>Ensured supervisors could monitor flow and adjust workloads.</li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          Gradual Rollout by Production Area
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Implemented the system step by step to avoid disruption.</li>
          <li>Validated flow stability before expanding to the next area.</li>
          <li>Adjusted Kanban quantities based on real performance data.</li>
        </ul>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 3</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Production flow became significantly more stable and predictable.
          </li>
          <li>
            Downtime decreased as operators no longer waited for materials.
          </li>
          <li>
            Intermediate inventories were controlled and aligned with real
            consumption.
          </li>
          <li>
            Variability between batches was reduced thanks to standardized
            replenishment.
          </li>
          <li>
            The system created the foundation for full traceability and small
            batch control in Phase 4.
          </li>
        </ul>

        {/* Imágenes en dos filas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src="/assets/kanban7.png"
            alt="Phase 3 Kanban Workflow"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
          <img
            src="/assets/kanban8.png"
            alt="Phase 3 Replenishment Controls"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
        </div>

        <div className="flex justify-center mt-6">
          <img
            src="/assets/kanban9.png"
            alt="Phase 3 Training and Flow"
            className="rounded-md shadow-md w-1/2 object-contain mx-auto"
          />
        </div>
      </div>
      {/* Phase 4 */}
      <div
        id="phase4"
        className="max-w-4xl mx-auto mb-10 bg-white rounded-lg text-left shadow-md p-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Phase 4 — System Optimization & Kanban Automation
        </h2>

        {/* Initial Conditions */}
        <h3 className="text-lg font-medium mb-2">
          Initial Conditions and Challenges
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          After the initial Pull–Push deployment, the production floor still had
          inefficiencies related to movement, staging, and intermediate
          inventory handling. The layout did not fully support the new workflow,
          causing unnecessary transport and occasional bottlenecks.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Additionally, Kanban cards were still generated manually, limiting
          traceability and making it difficult to track small batches of
          perishable products. Large batch sizes increased the risk of
          expiration, and there was no reliable system to link each batch to
          operators, timestamps, or production sequences.
        </p>

        {/* Actions Taken */}
        <h3 className="text-lg font-medium mb-2">Actions Taken</h3>
        <h4 className="text-md font-semibold mb-1">
          1. Layout Optimization to Support Pull–Push Flow
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Reorganized cooling, proofing, staging, and in-process areas.</li>
          <li>Repositioned workstations according to logical sequence.</li>
          <li>Reduced unnecessary movement and improved sanitation flow.</li>
          <li>
            Ensured that intermediate inventory aligned with Kanban limits.
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          2. Kanban Automation & Batch Level Traceability
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Developed an automated system to generate:</li>
          <ul className="list-disc list-inside ml-6">
            <li>Kanban cards per batch</li>
            <li>Unique batch identifiers</li>
            <li>Exact quantities per lot</li>
            <li>Production sequence</li>
          </ul>
          <li>
            Integrated the automated cards with the weekly planning system.
          </li>
          <li>
            Designed a traceability workflow to track small batches through all
            stages.
          </li>
          <li>
            Enabled analysis of batch behavior, scrap, and freshness
            performance.
          </li>
        </ul>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Production flow became cleaner, faster, and more consistent.</li>
          <li>Reduced operator movement and handling errors.</li>
          <li>
            Achieved full batch level traceability for perishable products.
          </li>
          <li>Reduced losses due to expiration and improved FIFO rotation.</li>
          <li>
            Strengthened quality control and created the foundation for a future
            MRP/ERP.
          </li>
          <li>
            Improved visibility of batch performance, enabling better decision
            making.
          </li>
        </ul>

        {/* Imágenes en dos filas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src="/assets/kanban10.png"
            alt="Phase 4 Layout Optimization"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
          <img
            src="/assets/kanban11.png"
            alt="Phase 4 Kanban Automation"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
        </div>

        <div className="flex flex-col items-center mt-6">
          <img
            src="/assets/kanban12.png"
            alt="Phase 4 Efficiency Measurement"
            className="rounded-md shadow-md w-1/2 object-contain mx-auto mb-4"
          />
          <p className="text-gray-600 text-xs italic max-w-2xl text-center">
            “The efficiency recorded in this first measurement was low because
            the new work system had just been implemented. This initial
            measurement served as a baseline, as operators were still adapting
            to the new standards, the Pull–Push flow, and the weekly scheduling
            process. Additionally, the target set was intentionally high to
            reflect the expected performance level once the system became
            stable. From this baseline, gaps were identified, parameters were
            adjusted, and a continuous improvement cycle was initiated.”
          </p>
        </div>
      </div>
    </section>
  );
}
