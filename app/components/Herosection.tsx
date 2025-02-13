"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-transparent flex items-center justify-center">
      <div
        className="w-[90%] lg:w-[60%] px-[5%] py-[2%] flex flex-col lg:flex-row rounded-lg"
        style={{ backgroundColor: 'rgba(169, 169, 169, 0.5)' }}
      >
        {/* Left Content (Text) */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row justify-start items-center gap-3 mb-4">
            <h1
              style={{
                textShadow:
                  "0.5px 0.5px 1px rgb(211, 88, 88), -0.5px -0.5px 1px rgba(255, 255, 255, 1), 0.5px -0.5px 1px rgba(255, 255, 255, 1), -0.5px 0.5px 1px rgba(255, 255, 255, 1)",
              }}
              className="text-5xl lg:text-7xl font-bold mb-4 text-black text-center lg:text-left"
            >
              Daveefit_<br />
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-1">
              <div style={styles.logoContainer}>
                <Image
                  src="/Photos/logo1.webp"
                  alt="Logo 1"
                  width={100}
                  height={50}
                  unoptimized={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={styles.logoContainer}>
                <Image
                  src="/Photos/logo2.png"
                  alt="Logo 2"
                  width={100}
                  height={50}
                  unoptimized={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl lg:text-2xl font-medium text-red-600 mb-2">
              — I Take The Guesswork<br />
              Out of Fitness
            </h2>
            <p className="text-white-600 mb-4">
              With 15+ years in bodybuilding and powerlifting, I’m ACSM and NSCA certified and have been training clients in person and online for 7 years. As a software engineer, I bring a data-driven, analytical approach to creating optimized training plans.
            </p>
            <p className="text-white-600 mb-4">
              AS YOUR ONLINE PERSONAL TRAINER, I’LL HELP YOU CRUSH YOUR FITNESS GOALS WITH PERSONALIZED WORKOUT PLANS, EXPERT GUIDANCE, AND THE MOTIVATION YOU NEED TO SUCCEED.
            </p>
            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded">
                Contact Me!
              </button>
            </div>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full lg:w-1/3 relative mt-6 lg:mt-0">
          <Image
            src="/Photos/back.jpg"
            alt="Personal Trainer"
            layout="responsive"
            width={800}
            height={600}
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
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};
