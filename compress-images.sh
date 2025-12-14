#!/bin/bash

# Backup original images
echo "📁 Creating backup..."
cp -r frontend/src/assets frontend/src/assets-backup

# Compress JPG/JPEG images
echo "🖼️  Compressing JPG images..."
cd frontend/src/assets
for img in *.jpg *.jpeg *.JPG *.JPEG; do
  if [ -f "$img" ]; then
    npx imagemin "$img" --plugin=mozjpeg --plugin.mozjpeg.quality=80 > "temp_$img"
    mv "temp_$img" "$img"
    echo "✓ Compressed $img"
  fi
done

# Compress PNG images
echo "🖼️  Compressing PNG images..."
for img in *.png *.PNG; do
  if [ -f "$img" ]; then
    npx imagemin "$img" --plugin=pngquant --plugin.pngquant.quality=0.65-0.8 > "temp_$img"
    mv "temp_$img" "$img"
    echo "✓ Compressed $img"
  fi
done

echo "✅ All images compressed!"
echo "Original backup saved in: frontend/src/assets-backup"
cd ../../..
