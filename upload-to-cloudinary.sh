#!/bin/bash

export CLOUDINARY_URL=cloudinary://972881886761112:iDWI10rTjChHP1HwC9cnHBWXERM@dgyqfax25

echo "🚀 Starting batch upload to Cloudinary..."
cd /Users/kalanamw/Documents/GitHub/My_Portfolio/frontend/src/assets

count=0
for img in *.{png,jpg,jpeg,PNG,JPG,JPEG}; do
  if [ -f "$img" ]; then
    echo "📤 Uploading: $img"
    cloudinary uploader upload "$img" folder=portfolio transformation='q_auto,f_auto' --resource_type image
    if [ $? -eq 0 ]; then
      echo "✅ Uploaded: $img"
      count=$((count + 1))
    else
      echo "❌ Failed: $img"
    fi
  fi
done

echo ""
echo "🎉 Upload complete! Total: $count images uploaded to Cloudinary"
echo "📁 Folder: portfolio"
echo "🌐 View at: https://console.cloudinary.com/console/dgyqfax25/media_library/folders/portfolio"
