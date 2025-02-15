import React from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
  onClose: () => void;
}

const VideoPlayer = ({ thumbnailUrl, videoUrl, onClose }: VideoPlayerProps) => {
  return (
    <div
      className="relative w-full aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={thumbnailUrl}
        alt="Video thumbnail"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            // Add your video play logic here
          }}
        >
          <Play className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
