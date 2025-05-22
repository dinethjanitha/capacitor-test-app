import { Zen_Dots } from 'next/font/google';

const zenfont = Zen_Dots({ subsets: ['latin'], weight: '400' });

export default function Advertisement() {
  return (
    <div
      style={{
        width: '100%',
        background: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem 0',
        fontSize: '1.1rem',
        letterSpacing: '0.3rem',
        marginBottom: '1rem',
        border: '1px solid #858383',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      }}
    >
      <p className={zenfont.className}>ADVERTISEMENT</p>
    </div>
  );
}
