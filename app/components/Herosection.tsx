"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="min-h-screen min-w-screen bg-transparent flex items-center justify-center"> {/* Centering parent container */}
      <div
        className="lg:w-[80%] px-[5%] py-[2%] flex rounded-lg"
        style={{ backgroundColor: 'rgba(169, 169, 169, 0.5)' }}
      >
        {/* Left Content */}
        <div className="w-2/3 flex flex-col justify-center">
        <div className="flex justify-start items-center gap-3">
          <h1
              style={{
                textShadow: '0.5px 0.5px 1px rgb(211, 88, 88), -0.5px -0.5px 1px rgba(255, 255, 255, 1), 0.5px -0.5px 1px rgba(255, 255, 255, 1), -0.5px 0.5px 1px rgba(255, 255, 255, 1)'
              }}
              className="text-7xl font-bold mb-4 text-black"
            >
              Daveefit_<br />
            </h1>
            <div className="flex justify-between items-center gap-1">
           <div>
              <div style={styles.logoContainer}>
                <Image
                  src="/photos/logo1.webp"
                  alt="Logo 1"
                  width={75}
                  height={38}
                  style={{ ...styles.logo, objectFit: 'contain' }}
                />
              </div>
            </div>
            <div>
              <div style={styles.logoContainer}>
                <Image
                  src="/photos/logo2.png"
                  alt="Logo 2"
                  width={75}
                  height={38}
                  style={{ ...styles.logo, objectFit: 'contain' }}
                />
              </div>
            </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-red-600 mb-2">
              — I Take The Guesswork<br />
              Out of Fitness
            </h2>
            <p className="text-white-600 mb-8 ">
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
  Contact Me!
</button>

           
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/3 relative">
          <Image
            src="/Photos/back.jpg"
            alt="Personal Trainer"
            layout="responsive"
            width={800} // Set an appropriate width (adjust as needed)
            height={600} // Set an appropriate height (adjust as needed)
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-lg"
            priority
          />
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
    // Removing objectFit here, setting it inline for better type handling
  },
};
