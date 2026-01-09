import { Button } from './components/Button';
import { Mail, Download } from 'lucide-react';
import { Section } from './components/Section';

function App() {
  return (
    <div className=" bg-slate-50">
      <Section id="about" className="pt-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            Gustavo Rios <br />
            <span className="text-blue-700">SAP Integration Specialist</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Expert in SAP BTP, ABAP, and Integration Suite, delivering high-end architecture
            and modernizing enterprise ecosystems.
          </p>
          <div className="flex gap-4">
            <Button href="#contact">Contact Me</Button>
            <Button variant="secondary"> <Download size={20} /> Resume PDF</Button>
            <a href="/[EN] Gustavo Rios.docx.pdf" target="_blank" className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-blue-700 hover:text-blue-700 transition-all flex items-center gap-2">
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Featured Projects" subtitle="Key highlights from my SAP career" dark>
        <div className="grid md:grid-cols-3 gap-8">
          ..
        </div>
      </Section>


      <Section id="contact" title="Get in Touch">
        <div className="bg-blue-900 rounded-2xl p-8 text-white flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to start a project?</h3>
            <p className="text-blue-100">Currently available for roles in Vancouver or Remote.</p>
          </div>
          <Button variant="primary" className="bg-white text-blue-900 hover:bg-blue-50 mt-6 md:mt-0">
            <Mail size={20} /> Email Me
          </Button>
        </div>
      </Section>

    </div>
  );
}

export default App;