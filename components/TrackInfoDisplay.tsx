import React, { useContext } from 'react';
import { PlayerContext } from '@/context/PlayerContext';

function TrackInfoDisplay() {
  const playerContext = useContext(PlayerContext);

  if (!playerContext) {
    throw new Error('TrackInfoDisplay must be used within a PlayerProvider');
  }

  const { track } = playerContext;

  return (
    <div className="flex flex-col items-center w-full max-w-xs">
      <span className="font-semibold text-gray-800 dark:text-gray-200 truncate w-full text-center">
        {track?.title || 'No Title'}
      </span>
      <span className="text-sm text-gray-600 dark:text-gray-400 truncate w-full text-center">
        {track?.artist || 'Unknown Artist'}
      </span>
    </div>
  );
}

export default TrackInfoDisplay;
