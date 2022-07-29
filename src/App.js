import './App.css';
import Testsss from './shared/components/Testsss/Testsss';
import "./i18n";
import "./core/interceptors/index";
import { Suspense } from 'react';

function App() {
  return (
    <Suspense >
    <div className="App">
      <header className="App-header">
       <Testsss />
      </header>
    </div>
    </Suspense>
  );
}

export default App;
