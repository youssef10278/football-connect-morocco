const fs = require('fs');
const path = require('path');

// Windows paths from the specification
const windowsPaths = [
  'C:\\1-YOUSSEF\\6-work\\29-prototype-football-player-coaches-connexion\\amrabat-video.mp4',
  'C:\\1-YOUSSEF\\6-work\\29-prototype-football-player-coaches-connexion\\ziyech-video.mp4',
  'C:\\1-YOUSSEF\\6-work\\29-prototype-football-player-coaches-connexion\\diaz-video.mp4',
  'C:\\1-YOUSSEF\\6-work\\29-prototype-football-player-coaches-connexion\\ronaldo-video.mp4',
  'C:\\1-YOUSSEF\\6-work\\29-prototype-football-player-coaches-connexion\\messi-video.mp4',
  'C:\\1-YOUSSEF\\6-work\\29-prototype-football-player-coaches-connexion\\hakimi-video.mp4'
];

// Current directory paths (fallback)
const currentDirPaths = [
  './amrabat-video.mp4',
  './ziyech-video.mp4',
  './diaz-video.mp4',
  './ronaldo-video.mp4',
  './messi-video.mp4',
  './hakimi-video.mp4'
];

// Target names
const targetNames = [
  'amrabat.mp4',
  'ziyech.mp4',
  'diaz.mp4',
  'ronaldo.mp4',
  'messi.mp4',
  'hakimi.mp4'
];

const publicVideosDir = path.join(__dirname, '..', 'public', 'videos');

// Ensure public/videos directory exists
if (!fs.existsSync(publicVideosDir)) {
  fs.mkdirSync(publicVideosDir, { recursive: true });
}

console.log('Copying video files...');

for (let i = 0; i < windowsPaths.length; i++) {
  const windowsPath = windowsPaths[i];
  const currentDirPath = currentDirPaths[i];
  const targetName = targetNames[i];
  const targetPath = path.join(publicVideosDir, targetName);

  let sourcePath = null;

  // Try Windows path first (for local development)
  if (fs.existsSync(windowsPath)) {
    sourcePath = windowsPath;
    console.log(`Found ${targetName} at Windows path`);
  }
  // Try current directory
  else if (fs.existsSync(currentDirPath)) {
    sourcePath = currentDirPath;
    console.log(`Found ${targetName} in current directory`);
  }

  if (sourcePath) {
    try {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✓ Copied ${targetName}`);
    } catch (error) {
      console.error(`✗ Failed to copy ${targetName}:`, error.message);
    }
  } else {
    // En production, créer un fichier placeholder ou ignorer
    console.log(`⚠ ${targetName} not found, creating placeholder or skipping`);
    // Optionnel: créer un fichier placeholder
    // fs.writeFileSync(targetPath, '');
  }
}

console.log('Video copying process completed.');