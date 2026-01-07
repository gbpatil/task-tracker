import '@/App.css';
import { config } from '@/config';

function App() {
  const appName = `📋 ${config.appName}`;
  const subtitle = 'Welcome to your task management app.';

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">{appName}</h1>
        <p className="app-subtitle">{subtitle}</p>
      </header>
    </div>
  );
}

export default App;
