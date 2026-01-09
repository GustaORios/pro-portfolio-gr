import { Button } from './components/Button';
import { Mail, Download } from 'lucide-react';
import { Section } from './components/Section';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <Section id="about" className="pt-24">
        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
              Gustavo Rios <br />
              <span className="text-blue-700">SAP Integration Specialist</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              Expert in SAP BTP, ABAP, and Integration Suite, delivering high-end architecture 
              and modernizing enterprise ecosystems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="#contact">Contact Me</Button>
              <Button variant="secondary" href="/Gustavo Rios.docx.pdf">
                <Download size={20} /> Download CV
              </Button>
            </div>
          </div>

          {/* Lado da Foto */}
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-200 border-4 border-white shadow-xl flex items-center justify-center">
              <span className="text-slate-400">Sua Foto Aqui</span>
            </div>
          </div>

        </div>
      </Section>

      {/* Seção de Exemplo para Teste de Largura */}
      <Section id="projects" title="Projects" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-10 shadow-sm">Projeto 1</div>
          <div className="bg-white p-10 shadow-sm">Projeto 2</div>
          <div className="bg-white p-10 shadow-sm">Projeto 3</div>
        </div>
      </Section>
      
    </div>
  );
}

export default App;