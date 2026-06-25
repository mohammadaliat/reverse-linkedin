import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Reverse LinkedIn — Your failures deserve recognition too',
  description: 'A parody professional network for bad decisions, unfinished projects, procrastination habits, and elite underqualification.',
  openGraph: { title: 'Reverse LinkedIn', description: 'Because not everyone became a CEO at 17.', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="dark"><body className={`${inter.variable} bg-ink text-white antialiased`}>{children}</body></html>;
}
