// pages/contact.js
export default function ContactPage() {
    return (
      <div className="relative h-screen w-full flex items-center justify-center bg-transparent">
        <div className="text-center bg-white rounded-lg p-6">
          <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
          <div className="mb-4">
            <p className="text-lg">Feel free to reach out via:</p>
          </div>
          <div className="space-y-4 ">
            {/* Instagram Link */}
            <div>
              <a
                href="https://www.instagram.com/daveeefit_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-400 transition"
              >
                Instagram
              </a>
            </div>
            {/* Email Link */}
            <div>
              <a
                href="mailto:Daveeefit@outlook.com"
                className="text-blue-600 hover:text-blue-400 transition"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  