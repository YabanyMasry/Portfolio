import ScrollExpand from '../components/ui/ScrollExpand';

export default function TransitionTestPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#111111', color: '#EDEDED' }}>
      
      {/* Spacer to allow scrolling to the component */}
      <div style={{ height: '50vh' }}></div>

      <ScrollExpand
        mediaType="color"
        src="#EDEDED"
        useWindowScroll={true}
      />

      {/* The new section with light background */}
      <div style={{ height: '150vh', backgroundColor: '#EDEDED', color: '#111111', padding: '4rem', zIndex: 1, position: 'relative' }}>
      </div>

    </main>
  );
}
