import { Link } from 'react-router-dom';

export default function DirectoryPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '2rem' }}>
      <h1>Directory</h1>
      <p>Navigate via URL to test sections, or use these links:</p>
      <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li><Link to="/hero" style={{ color: 'var(--accent-primary)' }}>/hero</Link></li>
        <li><Link to="/about" style={{ color: 'var(--accent-primary)' }}>/about</Link></li>
        <li><Link to="/how-we-work" style={{ color: 'var(--accent-primary)' }}>/how-we-work</Link></li>
        <li><Link to="/projects" style={{ color: 'var(--accent-primary)' }}>/projects</Link></li>
        <li><Link to="/contact" style={{ color: 'var(--accent-primary)' }}>/contact</Link></li>
        <li><Link to="/transition-test" style={{ color: 'var(--accent-primary)' }}>/transition-test</Link></li>
      </ul>
    </main>
  );
}
