import type { Metadata } from 'next';
import { changaOne, inter } from '@/lib/fonts';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Mayank Soni | Full Stack Developer',
  description: 'Portfolio of Mayank Soni, a 3rd-year CSE student and Full Stack Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${changaOne.variable} ${inter.variable} font-[family-name:var(--font-body)] antialiased min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
