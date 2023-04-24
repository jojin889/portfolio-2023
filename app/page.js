import { Hero, Portfolio, Contact, Footer  } from "../sections";
import { Aldrich } from '@next/font/google'

const aldrich = Aldrich({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
    <main className={aldrich.className}>
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
