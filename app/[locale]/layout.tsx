import '../globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'BEST Lviv'
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} suppressHydrationWarning={true}>
      <NextIntlClientProvider locale={params.locale} messages={messages}>
        <body suppressHydrationWarning={true}>
          <Header />
          {children}
        </body>
      </NextIntlClientProvider>
    </html >
  )
}
