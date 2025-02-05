"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-transparent flex items-center">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex rounded-lg"
        style={{ backgroundColor: 'rgba(169, 169, 169, 0.5)' }}
      >
        {/* Left Content */}
        <div className="w-1/2 pr-8 flex flex-col justify-center">
          <div className="flex justify-between items-center gap-2">
            <h1 
              style={{ 
                textShadow: '0.5px 0.5px 1px rgba(255, 255, 255, 1), -0.5px -0.5px 1px rgba(255, 255, 255, 1), 0.5px -0.5px 1px rgba(255, 255, 255, 1), -0.5px 0.5px 1px rgba(255, 255, 255, 1)' 
              }} 
              className="text-7xl font-bold mb-4 text-black"
            >
              David<br />Ponce
            </h1>

            <div>
              <div style={styles.logoContainer}>
                <Image 
                  src="/photos/logo1.webp" 
                  alt="Logo 1" 
                  width={150} 
                  height={75} 
                  style={styles.logo}
                />
              </div>
            </div>
            <div>
              <div style={styles.logoContainer}>
                <Image 
                  src="/photos/logo2.png" 
                  alt="Logo 2" 
                  width={150} 
                  height={75} 
                  style={styles.logo}
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-red-600 mb-2">
              — I Take The Guesswork<br />
              Out of Fitness
            </h2>
            <p className="text-white-600 mb-8">
              With 15+ years in bodybuilding and powerlifting, 
              I’m ACSM and NSCA certified and have been training clients 
              in person and online for 7 years. As a software engineer, I bring a data-driven, 
              analytical approach to creating optimized training plans. 
              This allows me to track progress and refine techniques 
              for measurable, efficient results.
            </p>
            <p className="text-white-600 mb-8">
              AS YOUR ONLINE PERSONAL TRAINER, I’LL HELP YOU CRUSH YOUR FITNESS 
              GOALS WITH PERSONALIZED WORKOUT PLANS, EXPERT GUIDANCE, AND THE MOTIVATION YOU NEED TO SUCCEED.
            </p>
            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded">
                LEARN MORE
              </button>
              <button className="border-2 border-gray-300 px-6 py-3 rounded">
                WATCH HOW IT WORKS VIDEO
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 relative h-[800px]">
          <Image
            src="/Photos/3333.jpg"
            alt="Personal Trainer"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay */}
        </div>

      </div>
    </div>
  );
}

const styles = {
  footer: {
    padding: '20px 0',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  logo: {
    objectFit: 'contain' as 'contain', // Explicit type casting for 'objectFit'
  },
};
