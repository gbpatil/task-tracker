// src/App.test.jsx
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the app title', () => {
    render(<App />);

    const titleElement = screen.getByText('📋 Task Tracker');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<App />);

    const subtitleElement = screen.getByText(
      'Welcome to your task management app.'
    );
    expect(subtitleElement).toBeInTheDocument();
  });

  it('has the correct heading level', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Task Tracker');
  });
});
