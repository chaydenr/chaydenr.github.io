import './App.css'
import {Header} from './sections/Header.tsx'
import { HeroSection } from './sections/Hero.tsx'

function App() {

  return (
    <div className="bg-gray-900 text-white antialiased font-sans min-h-screen">
      <Header />
      <HeroSection />
    </div>
  )
}

export default App
