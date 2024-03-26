import Navbar from "@/components/Navbar";

export default function NewProject() {
  return <>
    <Navbar />
    <main className="flex min-h-screen flex-col bg-[#0F0F0F]">
    <section>
          <div className="max-w-screen-xl h-screen items-center md:justify-between mx-auto p-4">
          <div className="md:absolute md:mt-5 md:top-1/2 mt-32 md:-translate-y-1/2">
            <p>STARTING
              A
              NEW PROJECT WITH
              CREATIVE INSIGHT</p>
         
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl items-center justify-between mx-auto relative border-y-2 border-primaryOrange">
          <div>Process</div>
              Research {'>'} Strategy
              Research is the cornerstone of our work. Analyzing competitors, references, and relevant design trends is the first step to creating a solid strategy and plan for each and every individual project.
            
              Discovery {'>'}  Concept
              Discovery is a collaborative process during which we take our Strategic findings and devise multiple bespoke concepts for every design project. Our creative directors refine and consolidate the top-selected designs into a detailed multi-concept presentation in which the Client gets to participate and provide input on the visual direction.
            
              Design {'>'} Prototype
              The Design stage is a meticulous process during which we apply the selected Concept for your digital product across all the expanded elements of your company - brand assets for your marketing department, inner pages of your website, materials for your business development, and more. Once the details are complete - we deliver a prototype of the work for a final signoff before any development begins.
            
              Handoff {'>'}  Development
              Design handoff is key to the success of any project. At this stage, we outline the design elements in great detail to the final developers of the product - web developers for web design or printers/factories for physical brand assets.
            
              QA {'>'} Launch
              The rollout of a project is always the most exciting stage of the process, but it's not our finish line. After finishing the product, we continue to work closely with the production team to seamlessly manage any design inconsistencies and prep the final product for launch. Once fully QA'd and ready, we follow a strict Launch checklist to bring the digital/print product to life.
        </div>
            </section>
    </main>
  </>
}