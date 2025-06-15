
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlaySquare, VideoOff, Video } from "lucide-react";

// Dummy livestream status (change to false to simulate 'ended')
const LIVESTREAM_ACTIVE = true;

// Add your livestream/video/embed IDs here
const LIVESTREAM_EMBED_URL = "https://www.youtube.com/embed/live_stream?channel=UC4a-Gbdw7vOaccHmFo40b9g&autoplay=1"; // Example: YouTube live
const LAST_RECORDING_URL = "https://www.youtube.com/embed/7E8rqk5qp0k?rel=0"; // Example: YouTube recording

export default function LeadershipAcademyPage() {
  const navigate = useNavigate();
  // Add state for tabbing "Livestream" vs "Recordings" if you want
  const [showLivestream, setShowLivestream] = useState(LIVESTREAM_ACTIVE);

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-yellow-50 via-violet-50 to-white px-2 py-8 flex justify-center">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        {/* Back to Portal Button */}
        <div className="flex justify-start">
          <button
            className="flex items-center gap-2 px-5 py-2 rounded-xl font-bold uppercase tracking-wide bg-[#FF6200] text-white shadow-lg hover:bg-[#ff8c42] transition animate-fade-in"
            onClick={() => navigate("/dashboard")}
          >
            ← Back to Portal
          </button>
        </div>

        {/* Title & Blurb */}
        <div className="flex flex-col items-center text-center animate-fade-in">
          <Video className="text-fuchsia-700 mb-2" size={44} />
          <h1 className="text-3xl font-bold text-yellow-700 mb-1">
            TMS ASSEMBLY Livestream & Archive
          </h1>
          <p className="text-md text-gray-600 max-w-xl">
            Join the livestream or watch past events, seminars, workshops, community meetings, and conferences. All TMS members welcome!
          </p>
        </div>

        {/* Livestream Section */}
        <div className="bg-white border rounded-xl shadow-md p-5 flex flex-col items-center animate-fade-in">
          {showLivestream ? (
            <>
              <div className="flex items-center gap-2 mb-2">
                <PlaySquare className="text-green-600 animate-pulse" size={24} />
                <span className="font-semibold text-lg text-green-600">Live Now</span>
              </div>
              <div className="w-full aspect-video rounded-lg overflow-hidden border shadow">
                <iframe
                  src={LIVESTREAM_EMBED_URL}
                  title="TMS Livestream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Having trouble? <a href={LIVESTREAM_EMBED_URL} target="_blank" className="text-blue-700 story-link">Open stream in YouTube</a>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-2">
                <VideoOff className="text-yellow-600" size={24} />
                <span className="font-semibold text-lg text-yellow-700">Livestream Ended</span>
              </div>
              <div className="w-full aspect-video rounded-lg overflow-hidden border shadow">
                <iframe
                  src={LAST_RECORDING_URL}
                  title="Most Recent Recording"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Want to see more? <a href="https://www.youtube.com/@youtube" target="_blank" className="text-blue-700 story-link">Browse all event archives</a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
