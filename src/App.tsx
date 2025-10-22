import { useState } from 'react';
import { Camera, Gift, Heart, Sparkles } from 'lucide-react';

function App() {
  const [driveLink, setDriveLink] = useState('https://drive.google.com/drive/folders/1I-4L1PSVIUAtEW4AdJXTdIC1ApLvruBV?usp=sharing');
  const [showGallery, setShowGallery] = useState(false);

  const handleShowPhotos = () => {
    if (driveLink.trim()) {
      window.open(driveLink, '_blank');
    }
    setShowGallery(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(251,207,232,0.4),transparent_50%)]" />

      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Sparkles className="w-16 h-16 text-pink-400 absolute -top-4 -left-4 animate-pulse" />
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full p-6 shadow-2xl">
                  <Gift className="w-20 h-20 text-white" />
                </div>
                <Sparkles className="w-16 h-16 text-rose-400 absolute -bottom-4 -right-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent mb-4">
              Happy 40th Birthday! Cecile Queen
            </h1>

            <p className="text-2xl text-gray-700 font-light mb-2">
              Four Decades of Amazing Memories
            </p>

            <div className="flex items-center justify-center gap-2 text-rose-500 mt-4">
              <Heart className="w-6 h-6 fill-current animate-pulse" />
              <Heart className="w-8 h-8 fill-current animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-6 h-6 fill-current animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-8 h-8 text-pink-600" />
              <h2 className="text-3xl font-semibold text-gray-800">
                Photo Gallery
              </h2>
            </div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Celebrating 40 wonderful years with cherished moments and beautiful memories.<br/>
              Click on the Google Drive link or add your Google Drive link below to share the photos from this special celebration.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="driveLink" className="block text-sm font-medium text-gray-700 mb-2">
                  Google Drive Photo Link
                </label>
                <input
                  id="driveLink"
                  type="url"
                  value={driveLink}
                  onChange={(e) => setDriveLink(e.target.value)}
                  placeholder="Paste your Google Drive folder link here..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-gray-700"
                />
              </div>

              <button
                onClick={handleShowPhotos}
                className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Camera className="w-5 h-5" />
                View Photo Gallery
              </button>
            </div>

            {showGallery && (
              <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border-2 border-pink-200">
                <p className="text-gray-700 text-center">
                  <span className="font-semibold">Tip:</span> Make sure your Google Drive folder is set to "Anyone with the link can view" for sharing photos.
                </p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]">
              <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Celebrate Life</h3>
              <p className="text-gray-600">40 years of laughter, love, and unforgettable moments</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]">
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Camera className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Capture Memories</h3>
              <p className="text-gray-600">Every photo tells a story of joy and celebration</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]">
              <div className="bg-gradient-to-br from-pink-100 to-rose-200 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Make It Special</h3>
              <p className="text-gray-600">Here's to the next amazing chapter ahead</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
