![banner](.github/banner.png)

A Greek-themed WebAR project built with A-Frame and MindAR. The app includes two AR experiences: image tracking with 3D models and face tracking with wearable effects.

## Overview

- **Landing page**: choose between Image Tracking and Face Tracking.
- **Image Tracking**: scans image markers and places Greek 3D models in AR.
- **Face Tracking**: places a laurel crown and beard on the detected face.
- **Extra**: download all marker images as a single ZIP file.

## Image tracking

In the Image Tracking scene, MindAR uses `assets/targets.mind` as the image target set. Each target index shows a different Greek model:

- Target 0: Parthenon
- Target 1: Spartan helmet
- Target 2: Greek person
- Target 3: Lyre

The **Download markers** button exports all marker images from the `markers` folder as one `markers.zip` file.

## Face tracking

For face tracking, I placed the beard on `anchorIndex: 152` so it stays at a natural distance from the mouth for most people.

The scene also includes:

- A crown attached to the upper face anchor (`anchorIndex: 1`)
- A face occluder for better depth illusion
- A button to enable/disable the beard in real time

## Tech stack

- A-Frame
- MindAR (image and face tracking)
- Tailwind CSS (browser build)
- Vanilla JavaScript

## Credits

- **Crown**: https://sketchfab.com/3d-models/gold-laurel-wreath-lowpoly-3a8ea8bf9f3a425481c5408b6d4273fd
- **Beard**: https://sketchfab.com/3d-models/beard-3d-model-free-86c5f91c705644c2bf0ad81242e5dadb
- **Lyre**: https://sketchfab.com/3d-models/lyre-96982e9d52744801a53692a8867c5b23
- **Greek person**: https://sketchfab.com/3d-models/head-of-a-young-man-cc7c091126164acea4d69d9a2179fedf
- **Parthenon**: https://sketchfab.com/3d-models/parthenon-abb233a40ca9452a8b9313d376ade2ab
- **Spartan helmet**: https://sketchfab.com/3d-models/spartan-helmet-f02e2cf48729492c810ff0f5e80ccd21
