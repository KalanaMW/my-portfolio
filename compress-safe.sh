#!/bin/bash

echo "🖼️  Compressing images safely with Sharp..."
cd frontend/src/assets

# Compress JPG files
for img in *.jpg *.jpeg *.JPG *.JPEG; do
  if [ -f "$img" ]; then
    npx sharp -i "$img" -o "compressed_$img" --jpeg-quality 80 2>/dev/null && mv "compressed_$img" "$img"
    echo "✓ $img"
  fi
done

# Compress PNG files  
for img in *.png *.PNG; do
  if [ -f "$img" ]; then
    npx sharp -i "$img" -o "compressed_$img" --png-quality 80 2>/dev/null && mv "compressed_$img" "$img"
    echo "✓ $img"
  fi
done

echo "✅ Compression complete!"
cd ../../..
