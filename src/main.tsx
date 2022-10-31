import { createRoot } from 'react-dom/client';

import { App } from './App';

import 'reactflow/dist/base.css';
import './global.css';


const rootNode = document.getElementById('root');

if (rootNode) {
  createRoot(rootNode).render(<App />);
}
