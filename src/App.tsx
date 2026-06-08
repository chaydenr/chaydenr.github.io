import './App.css'
import {Header} from './sections/Header.tsx'
import { HeroSection } from './sections/Hero.tsx'
import { SkillsBanner } from './sections/SkillsBanner.tsx';

function App() {

  return (
    <div className="bg-gray-900 text-white antialiased font-sans min-h-screen">
      <Header />
      <HeroSection />
      <SkillsBanner />
    </div>
  )
}

export default App
