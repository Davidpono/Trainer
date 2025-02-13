import HeroSection from './components/Herosection';

export default function Page() {
  return (
    <div className="relative h-screen w-full">
      {/* Adjusts height based on screen size: 70vh on small screens, 80vh on medium, 95vh on large */}
      <div className="absolute bottom-0 w-full h-[80vh] md:h-[80vh] lg:h-[95vh]">
        <HeroSection />
      </div>
    </div>
  );
}
