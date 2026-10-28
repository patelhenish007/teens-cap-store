import type { Metadata } from 'next';
import './globals.css';
import { StoreShell } from '@/components/StoreShell';
export const metadata: Metadata = { title: { default: 'TEENS — Top Off Your Style', template: '%s | TEENS' }, description: 'Discover considered headwear for everyday style. TEENS — Top Off Your Style.', metadataBase: new URL(process.env.NEXT_PUBLIC_STORE_URL || 'http://localhost:3000'), openGraph: { title: 'TEENS — Top Off Your Style', description: 'Everyday essentials. Streetwear statements. Your style, your cap.', type: 'website' } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><StoreShell>{children}</StoreShell></body></html>; }
