import { Button } from './components/Button';
import { Download } from 'lucide-react';

function App() {
  return (
    <a href="/[EN] Gustavo Rios.docx.pdf" target="_blank" className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-blue-700 hover:text-blue-700 transition-all flex items-center gap-2">
      <Download size={20} />
      Download CV
    </a>
  );
}

export default App;