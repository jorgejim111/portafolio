import { useRef } from "react";
import html2pdf from "html2pdf.js";

export default function DCS() {
  const contentRef = useRef();

  const handleDownload = () => {
    const element = contentRef.current;
    const opt = {
      margin: 0.5,
      filename: "DieControlProject.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <section ref={contentRef}>
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
        Project 3 — Die Control System
      </h1>

      {/* Mini resumen */}
      <p className="text-center text-gray-700 mb-8 text-sm max-w-2xl mx-auto">
        A digital system designed to control die inventory, track damage
        reports, monitor wear, and ensure production continuity through
        accurate, real-time die management.
      </p>

      {/* Insights Gained */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-2 text-center">
          Insights Gained
        </h2>
        <p className="text-gray-600 text-sm text-left">
          This project strengthened my ability to design digital tools that
          directly support production continuity. I learned how to transform
          manual, error-prone processes into structured systems with
          traceability, standardized workflows, and real-time visibility. It
          also reinforced the importance of clean data structures, user-friendly
          interfaces, and continuous improvement when deploying tools in a
          manufacturing environment.
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
            Phase 1 — Process Assessment & Opportunity Identification
          </h3>
          <p className="text-gray-600 text-left text-sm">
            I conducted a full assessment of the die lifecycle to identify gaps
            in traceability, inventory control, and repair management. These
            findings defined the key improvement opportunities and shaped the
            functional requirements for the digital system.
          </p>
        </a>

        {/* Phase 2 */}
        <a
          href="#phase2"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 2 — System Planning & Development of Version 1
          </h3>
          <p className="text-gray-600 text-left text-sm">
            I designed the complete architecture of the Die Control System and
            developed Version 1, introducing a digital Damage Report, automated
            die history, dimensional tracking, repair monitoring, and a
            real-time status dashboard.
          </p>
        </a>

        {/* Phase 3 */}
        <a
          href="#phase3"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 3 — User Manual & Documentation
          </h3>
          <p className="text-gray-600 text-left text-sm">
            I developed a complete user manual with step-by-step instructions,
            workflow diagrams, naming standards, and troubleshooting notes,
            ensuring consistent data entry and proper use of queries and history
            tools.
          </p>
        </a>

        {/* Phase 4 */}
        <a
          href="#phase4"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 4 — Operational Data Analysis (Die Change Over Performance)
          </h3>
          <p className="text-gray-600 text-left text-sm">
            I analyzed production notes from January to July 2025 using “die
            change over” as the keyword, revealing that performance variations
            were driven more by setup and mechanical conditions than pigment
            chemistry.
          </p>
        </a>

        {/* Phase 5 */}
        <a
          href="#phase5"
          className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            Phase 5 — Web Migration & System Evolution
          </h3>
          <p className="text-gray-600 text-left text-sm">
            I expanded the Die Control System into a full web application using
            JavaScript, Node.js, Reactive UI, MySQL, and HTML5, enabling
            real-time access, predictive analytics, and scalable data
            management.
          </p>
        </a>
      </div>
      {/* Project Context */}
      <div className="max-w-4xl mx-auto text-left mb-10">
        <h1 className="text-3xl font-bold text-center mb-4">
          Project 3 — Die Control System
        </h1>

        {/* Resumen */}
        <p className="text-gray-700 text-sm mb-4">
          I digitalized the die management process by creating an integrated
          system to control die inventory, damage reports, dimensional history,
          repairs, and FIFO rotation. The solution replaced manual workflows
          with digital forms and real-time traceability, reducing downtime
          caused by damaged dies and optimizing inventory levels. The system
          evolved into a predictive analysis platform that improved operational
          continuity and strengthened coordination between production,
          maintenance, and the die warehouse.
        </p>

        {/* Contexto */}
        <h2 className="text-xl font-semibold mb-2">Project Context</h2>
        <p className="text-gray-700 text-sm mb-4">
          As a Set Up Technician, one of my core responsibilities was ensuring
          that production always had the correct dies in good condition.
          Although the company had categories such as New Dies and Dies in
          Circulation, there was no structured method to determine optimal
          inventory levels, track wear, or manage repairs.
        </p>

        <p className="text-gray-700 text-sm mb-4">
          This lack of visibility caused:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Overstock of dies that rarely wore out</li>
          <li>Shortages of dies with high wear rates</li>
          <li>No FIFO rotation in the die warehouse</li>
          <li>Frequent production stops due to damaged dies</li>
          <li>No historical record of repairs, wear, or dimensional changes</li>
        </ul>

        <p className="text-gray-700 text-sm mb-4">
          The Die Control System was created to solve these issues by
          digitalizing the entire die lifecycle and providing real-time
          operational visibility.
        </p>
      </div>
      {/* Phase 1 */}
      <div
        id="phase1"
        className="max-w-4xl mx-auto mb-10 text-left bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Phase 1 — Process Assessment & Opportunity Identification
        </h2>

        {/* Initial Conditions */}
        <h3 className="text-lg font-medium mb-2">
          Initial Conditions and Challenges
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          Before the system existed, die management relied on manual practices,
          limited documentation, and inconsistent communication between
          production, maintenance, and the die warehouse. Although dies were
          categorized as New, In Circulation, and Scrapped, there was no
          structured method to track wear, manage repairs, or determine optimal
          inventory levels.
        </p>
        <p className="text-gray-700 text-sm mb-4">Key issues included:</p>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Handwritten Damage Reports with missing or illegible information
          </li>
          <li>No historical record of dimensional changes or repairs</li>
          <li>Overstock of dies that rarely wore out</li>
          <li>Shortages of dies with high wear rates</li>
          <li>No FIFO rotation in the die warehouse</li>
          <li>Frequent production stops due to damaged dies</li>
          <li>No visibility of repair backlog or repair times</li>
        </ul>
        <p className="text-gray-700 text-sm mb-4">
          This environment created operational instability and made it
          impossible to predict die failures or plan inventory effectively.
        </p>

        {/* Actions Taken */}
        <h3 className="text-lg font-medium mb-2">Actions Taken</h3>
        <h4 className="text-md font-semibold mb-1">
          1. Full Process Assessment
        </h4>
        <p className="text-gray-700 text-sm mb-2">
          I conducted a complete evaluation of the die lifecycle, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Inventory categories and storage practices</li>
          <li>Repair workflow and communication gaps</li>
          <li>Dimensional measurement routines</li>
          <li>Damage Report (DR) process</li>
          <li>Warehouse rotation and traceability</li>
          <li>Criteria for die acceptance and rejection</li>
        </ul>
        <p className="text-gray-700 text-sm mb-4">
          This assessment revealed major gaps in traceability, data accuracy,
          and inventory control.
        </p>

        <h4 className="text-md font-semibold mb-1">
          2. Identification of Improvement Opportunities
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Replace handwritten DRs with a digital, standardized form</li>
          <li>Track repair time and backlog</li>
          <li>Record dimensional changes after each repair</li>
          <li>Establish FIFO rotation in the die warehouse</li>
          <li>Determine optimal die inventory per model</li>
          <li>Build a complete lifecycle history for each die</li>
          <li>Centralize all information in a single digital system</li>
        </ul>
        <p className="text-gray-700 text-sm mb-4">
          These opportunities became the foundation for the system’s functional
          requirements.
        </p>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 1</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Clear understanding of the die lifecycle and operational gaps</li>
          <li>Defined the functional requirements for Version 1</li>
          <li>
            Established the blueprint for system architecture and data model
          </li>
          <li>
            Created the foundation for digital traceability and inventory
            optimization
          </li>
        </ul>

        {/* Imagen */}
        <div className="flex justify-center mt-6">
          <img
            src="/assets/dcs2.png"
            alt="Phase 1 Die Lifecycle Assessment"
            className="rounded-md shadow-md w-1/2 object-contain mx-auto"
          />
        </div>
      </div>
      {/* Phase 2 */}
      <div
        id="phase2"
        className="max-w-4xl mx-auto mb-10 text-left bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Phase 2 — System Planning & Development of Version 1
        </h2>

        {/* Initial Conditions */}
        <h3 className="text-lg font-medium mb-2">
          Initial Conditions and Challenges
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          After identifying the operational gaps in Phase 1, it became clear
          that the company lacked any digital infrastructure to support die
          lifecycle management. There was no unified data model, no standardized
          identification method, and no digital workflow to ensure consistent
          Damage Reports, dimensional updates, or repair tracking.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          All information was scattered across handwritten forms, personal
          notes, and informal communication between shifts, making it impossible
          to maintain accurate records or analyze wear trends.
        </p>
        <p className="text-gray-700 text-sm mb-4">Key challenges included:</p>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>No structured architecture to support digital traceability</li>
          <li>No workflow logic for Damage Reports or dimensional updates</li>
          <li>No automated history to track repairs or wear progression</li>
          <li>No visibility of repair times or maintenance backlog</li>
          <li>No inventory logic to prevent overstock or shortages</li>
          <li>No user interface for supervisors or technicians</li>
        </ul>
        <p className="text-gray-700 text-sm mb-4">
          This environment required designing a complete system from scratch,
          ensuring scalability, consistency, and ease of adoption on the
          production floor.
        </p>

        {/* Actions Taken */}
        <h3 className="text-lg font-medium mb-2">Actions Taken</h3>
        <h4 className="text-md font-semibold mb-1">1. System Planning</h4>
        <p className="text-gray-700 text-sm mb-2">
          I designed the full architecture of the Die Control System, defining
          the core components needed to support complete lifecycle traceability
          and operational control. This included:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Data model for the die lifecycle (New → In Circulation → Under
            Repair → Scrapped)
          </li>
          <li>Digital Damage Report workflow and checklist</li>
          <li>Dimensional tracking logic</li>
          <li>Repair time tracking</li>
          <li>Inventory optimization logic</li>
          <li>User interface structure</li>
          <li>Reporting and search functions</li>
        </ul>
        <p className="text-gray-700 text-sm mb-4">
          This blueprint guided the development of Version 1 and ensured that
          the system would be robust, scalable, and aligned with real production
          needs.
        </p>

        <h4 className="text-md font-semibold mb-1">
          2. Development of Version 1
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Digital die registry</li>
          <li>Digital Damage Report with checklist</li>
          <li>Automatic history generation</li>
          <li>Repair time tracking</li>
          <li>Dimensional update after each repair</li>
          <li>Status dashboard</li>
          <li>Search and filtering tools</li>
        </ul>
        <p className="text-gray-700 text-sm mb-4">
          Version 1 replaced all handwritten DRs, eliminated data loss, and
          created the first centralized digital system for die management.
        </p>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 2</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>A complete, scalable system architecture was established</li>
          <li>
            Manual documentation was eliminated and replaced with digital
            workflows
          </li>
          <li>
            Real time visibility of die status and repair activity was achieved
          </li>
          <li>Dimensional history enabled predictive maintenance</li>
          <li>
            Inventory logic supported FIFO and reduced unnecessary purchases
          </li>
          <li>The foundation was set for Version 2 and future enhancements</li>
        </ul>

        {/* Imágenes */}
        <div className="flex flex-col items-center mt-6 mb-8">
          <img
            src="/assets/dcs3.png"
            alt="Phase 2 System Architecture Diagram"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto mb-2"
          />
          <p className="text-gray-600 text-xs italic text-center max-w-xl">
            Diagram showing the modular, multi-user architecture designed for
            Version 1 of the Die Control System, including role-based access,
            database separation, and file-to-file interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src="/assets/dcs4.png"
            alt="Phase 2 Digital Registry"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
          <img
            src="/assets/dcs5.png"
            alt="Phase 2 Damage Report Workflow"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src="/assets/dcs6.png"
            alt="Phase 2 Dimensional Tracking"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
          <img
            src="/assets/dcs7.png"
            alt="Phase 2 Repair Time Tracking"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src="/assets/dcs8.png"
            alt="Phase 2 Status Dashboard"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
          <img
            src="/assets/dcs9.png"
            alt="Phase 2 Search and Filtering Tools"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
        </div>
      </div>
      {/* Phase 3 */}
      <div
        id="phase3"
        className="max-w-4xl mx-auto mb-10 bg-white rounded-lg text-left shadow-md p-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Phase 3 — User Manual & Documentation
        </h2>

        {/* Purpose */}
        <h3 className="text-lg font-medium mb-2">
          Purpose of the Documentation
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          To ensure consistent adoption across all shifts, I created a complete
          user manual for production personnel. The goal was to standardize how
          supervisors and technicians interacted with the Die Control System,
          ensuring accurate data entry, proper Damage Report submission, and
          correct use of the system’s search and reporting tools.
        </p>

        {/* Documentation Developed */}
        <h3 className="text-lg font-medium mb-2">Documentation Developed</h3>
        <h4 className="text-md font-semibold mb-1">
          1. User Manual for Production Personnel
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>How to access the system from the shared server</li>
          <li>How to log in using role-based credentials</li>
          <li>How to navigate the main interface</li>
          <li>How to create and review Damage Reports</li>
          <li>How to run queries by date range</li>
          <li>How to check die history</li>
          <li>How to validate and approve new dies</li>
        </ul>

        <h4 className="text-md font-semibold mb-1">2. Workflow Diagrams</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>The Damage Report submission process</li>
          <li>The die history query flow</li>
          <li>The new die approval workflow</li>
          <li>The date range reporting process</li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          3. Naming and Coding Standards
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Die serial number format</li>
          <li>File naming conventions</li>
          <li>Standardized terminology for DR categories</li>
          <li>Dimensional measurement fields and units</li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          4. Instructions for Damage Report Submission
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Who is responsible for creating a DR</li>
          <li>Required fields and validation rules</li>
          <li>How to print and apply the automatic label</li>
          <li>How to review previous DRs</li>
          <li>Error messages and how to resolve missing fields</li>
        </ul>

        <h4 className="text-md font-semibold mb-1">
          5. Guidelines for Dimensional Updates
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>When dimensional checks must be performed</li>
          <li>How to enter new measurements</li>
          <li>How the system logs dimensional history</li>
          <li>Criteria for rejecting or approving a die</li>
        </ul>

        <h4 className="text-md font-semibold mb-1">6. Troubleshooting Notes</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Common login issues</li>
          <li>Macro-related warnings</li>
          <li>How to close queries properly</li>
          <li>What to do if a DR cannot be printed</li>
          <li>How to reset a stuck form</li>
        </ul>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 3</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Standardized system usage across all shifts</li>
          <li>Reduced training time for new supervisors and technicians</li>
          <li>Eliminated inconsistent data entry</li>
          <li>Improved accuracy of Damage Reports and dimensional logs</li>
          <li>Ensured proper use of queries and history tools</li>
          <li>Strengthened communication between production and maintenance</li>
        </ul>

        {/* Imágenes en una columna */}
        <div className="flex flex-col items-center mt-6 space-y-6">
          <img
            src="/assets/dcs10.png"
            alt="Phase 3 User Manual"
            className="rounded-md shadow-md w-1/2 object-contain mx-auto"
          />
          <img
            src="/assets/dcs11.png"
            alt="Phase 3 Workflow Diagrams"
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
          Phase 4 — Operational Data Analysis (Die Change Over Performance)
        </h2>

        {/* Purpose */}
        <h3 className="text-lg font-medium mb-2">Purpose of the Analysis</h3>
        <p className="text-gray-700 text-sm mb-4">
          After deploying Version 1 of the Die Control System, the organization
          finally had reliable data on die change over events, allowing us to
          quantify how often they occurred and how they impacted production
          output across pigments.
        </p>
        <p className="text-gray-700 text-sm mb-4">The goal was to:</p>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Identify patterns in die change overs</li>
          <li>Measure their impact on daily production</li>
          <li>
            Determine whether pigment, setup, or mechanical factors influenced
            frequency
          </li>
          <li>
            Provide data-driven recommendations for maintenance and planning
          </li>
        </ul>

        {/* Methodology */}
        <h3 className="text-lg font-medium mb-2">Methodology</h3>
        <p className="text-gray-700 text-sm mb-4">
          I extracted all production notes from January to July 2025 and
          filtered entries containing the keyword:{" "}
          <strong>“die change over”</strong>. For each pigment, I calculated:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Number of days with die change over events</li>
          <li>Total feet produced on those days</li>
          <li>Average feet produced per change over day</li>
        </ul>
        <p className="text-gray-700 text-sm mb-4">
          This allowed a normalized comparison across pigments.
        </p>

        {/* Key Findings */}
        <h3 className="text-lg font-medium mb-2">
          Key Findings (Example Table)
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            🔵 <strong>BLUE</strong> — Highest number of die change over days,
            low average ft/day, suggests early shift disruptions or repeated
            adjustments.
          </li>
          <li>
            🧊 <strong>CLEAR</strong> — Several change overs, highest ft/day,
            indicates fast recovery or late shift events.
          </li>
          <li>
            🔴 <strong>RED</strong> & 🟢 <strong>GREEN</strong> — Moderate
            frequency, stable productivity.
          </li>
          <li>
            🟠 <strong>ORANGE</strong> & 🟡 <strong>YELLOW</strong> — Few change
            overs, low ft/day, suggests failures occurred early in the shift.
          </li>
        </ul>

        {/* Interpretation */}
        <h3 className="text-lg font-medium mb-2">Interpretation</h3>
        <p className="text-gray-700 text-sm mb-4">
          The analysis showed that die change over frequency is not driven by
          pigment chemistry, but rather:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Setup conditions</li>
          <li>Mechanical wear</li>
          <li>Die rotation practices</li>
          <li>Maintenance response time</li>
        </ul>
        <p className="text-gray-700 text-sm mb-4">
          This shifted the focus from pigment-based assumptions to operational
          root causes.
        </p>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">Impact of Phase 4</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>
            Enabled the first data-driven evaluation of die change over
            performance
          </li>
          <li>Identified pigments with high frequency vs. high productivity</li>
          <li>Supported predictive maintenance logic in Version 2</li>
          <li>
            Strengthened the case for dimensional tracking and FIFO rotation
          </li>
          <li>Demonstrated the analytical value of the Die Control System</li>
        </ul>

        {/* Imagen */}
        <div className="flex justify-center mt-6">
          <img
            src="/assets/dcs12.png"
            alt="Phase 4 Die Change Over Analysis"
            className="rounded-md shadow-md w-1/2 object-contain mx-auto"
          />
        </div>
      </div>
      {/* Phase 5 */}
      <div
        id="phase5"
        className="max-w-4xl mx-auto mb-10 text-left bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Phase 5 — Planning & Development of Version 2 (Web Migration & Modern
          Architecture)
        </h2>

        {/* Context */}
        <h3 className="text-lg font-medium mb-2">Context and Motivation</h3>
        <p className="text-gray-700 text-sm mb-4">
          After Version 1 matured and Version 2 introduced predictive analytics,
          dimensional alerts, and improved reporting, the system reached a point
          where its Excel-based foundation limited scalability. The growing
          volume of data, the need for faster queries, and the demand for
          multi-device access made it clear that the next evolution required a
          full web-based platform.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          The goal of Phase 5 was to design a modern, scalable, and
          high-performance version of the Die Control System using contemporary
          web technologies.
        </p>

        {/* Technologies */}
        <h3 className="text-lg font-medium mb-2">
          🟦 Technologies Selected for the Web Version
        </h3>
        <h4 className="text-md font-semibold mb-1">Frontend</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>HTML5 for structure and responsive layout</li>
          <li>
            Reactive JavaScript (React style architecture) for dynamic UI
            components
          </li>
          <li>
            Modern UX patterns for dashboards, forms, and real-time status views
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">Backend</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Node.js for fast, event-driven server logic</li>
          <li>REST API architecture for modularity and integration</li>
          <li>
            Role-based authentication for Production, Maintenance, Planning, and
            Admin
          </li>
        </ul>

        <h4 className="text-md font-semibold mb-1">Database</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>MySQL as the centralized relational database</li>
          <li>
            Optimized tables for dies, DRs, dimensional history, repairs, and
            inventory
          </li>
          <li>Support for analytics queries and historical retention</li>
        </ul>

        {/* Enhancements */}
        <h3 className="text-lg font-medium mb-2">
          🟦 Enhancements Implemented in Version 2
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Wear trend analysis based on dimensional history</li>
          <li>Automatic alerts for dies approaching minimum dimension</li>
          <li>DR frequency analytics per model</li>
          <li>Inventory optimization recommendations</li>
          <li>Improved UI and faster search tools</li>
          <li>Enhanced reporting for maintenance and production</li>
        </ul>

        {/* Web Migration Architecture */}
        <h3 className="text-lg font-medium mb-2">
          🟦 Web Migration Architecture (Planned)
        </h3>
        <h4 className="text-md font-semibold mb-1">Frontend (UI/UX Layer)</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Interactive dashboards</li>
          <li>Real-time die status visualization</li>
          <li>Digital DR submission with validation</li>
          <li>Dimensional update forms</li>
          <li>Search and filtering tools</li>
        </ul>

        <h4 className="text-md font-semibold mb-1">Backend (Logic Layer)</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Node.js API handling all business rules</li>
          <li>Automated alerts and notifications</li>
          <li>Predictive maintenance engine</li>
          <li>Secure authentication and session control</li>
        </ul>

        <h4 className="text-md font-semibold mb-1">Database (Data Layer)</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>MySQL schema optimized for lifecycle tracking</li>
          <li>Historical dimensional data</li>
          <li>DR logs and repair records</li>
          <li>Inventory and rotation tables</li>
        </ul>

        {/* System Benefits */}
        <h3 className="text-lg font-medium mb-2">System Benefits</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Faster performance for large datasets</li>
          <li>Multi-user access without file conflicts</li>
          <li>Accessible from any workstation or device</li>
          <li>Scalable for future modules</li>
          <li>Strong foundation for analytics and automation</li>
        </ul>

        {/* Impact */}
        <h3 className="text-lg font-medium mb-2">🟦 Impact of Phase 5</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Defined the long-term roadmap for the Die Control System</li>
          <li>Transitioned from Excel macros to a modern web architecture</li>
          <li>
            Enabled predictive maintenance and smarter inventory decisions
          </li>
          <li>
            Improved collaboration between production, maintenance, and planning
          </li>
          <li>
            Positioned the system for future integration with scheduling, ERP,
            or MES tools
          </li>
        </ul>

        {/* Imágenes */}
        <div className="flex flex-col items-center mt-6 mb-8">
          <img
            src="/assets/dcs14.png"
            alt="Phase 5 Web Architecture Diagram"
            className="rounded-md shadow-md w-1/2 object-contain mx-auto mb-2"
          />
          <p className="text-gray-600 text-xs italic text-center max-w-xl">
            Diagram showing the planned web migration architecture for Version 2
            of the Die Control System.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src="/assets/dcs13.png"
            alt="Phase 5 Frontend UI"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
          <img
            src="/assets/dcs.png"
            alt="Phase 5 Backend Logic"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
          <img
            src="/assets/dcs15.png"
            alt="Phase 5 Frontend UI"
            className="rounded-md shadow-md w-1/2 object-contain mx-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src="/assets/dcs16.png"
            alt="Phase 5 Frontend UI"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
          <img
            src="/assets/dcs17.png"
            alt="Phase 5 Backend Logic"
            className="rounded-md shadow-md w-2/3 object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
