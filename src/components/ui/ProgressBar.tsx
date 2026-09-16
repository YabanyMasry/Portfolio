import { forwardRef } from 'react';

interface ProgressBarProps {
  style?: React.CSSProperties;
  variant?: 'default' | 'minimal';
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(({ style, variant = 'default' }, ref) => {
  const isMinimal = variant === 'minimal';

  return (
    <div
      style={{
        width: '90vw',
        marginLeft: 'calc(50% - 45vw)',
        height: '1px',
        backgroundColor: isMinimal ? 'transparent' : 'rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
        overflow: 'hidden',
        position: 'relative',
        ...style
      }}
    >
      <div
        ref={ref}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#EDEDED',
          transformOrigin: 'left',
          transform: 'scaleX(0)',
          willChange: 'transform'
        }}
      />
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
