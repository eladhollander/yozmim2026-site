import HeroSection from "./components/HeroSection";
import CurriculumSection from "./components/CurriculumSection";

function App() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://seanovation.org.il/wp-content/uploads/2025/06/logo-S-1.jpg"
              alt="SeaNovation"
              className="h-10 w-auto rounded-lg"
            />
            <span className="hidden sm:inline font-bold text-sm text-primary">
              יוזמים סטארטאפ
            </span>
          </div>
        </div>
      </header>
      <main>
        <HeroSection />
        <CurriculumSection />
      </main>
    </div>
  );
}

export default App;
