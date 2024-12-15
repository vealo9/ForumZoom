# ForumZoom

**ForumZoom** is a Tampermonkey userscript that enhances the image viewing experience on forums. It allows users to view high-resolution images with a smooth zoom effect by simply hovering over the image.

## Features

- **High-Resolution Image Display**: Hover over an image, and it will automatically switch to the high-resolution version.
- **Zoom Effect**: When hovering over the high-res image, a zoom effect is applied for better detail visibility.

## Installation

1. **Install Tampermonkey**: If you don’t have it installed already, download Tampermonkey from (https://www.tampermonkey.net/).
2. **Create a New Script**:
   - Open Tampermonkey and click on **Create a New Script**.
   - Copy and paste the code from the `ForumZoom` script (located in the `forumZoom.user.js` file).
   - Save and enable the script.
3. **Start Browsing**: The script will automatically start working on any forum or image-enabled website.

## Usage

- Once the script is active, simply hover over any image with the `bbImage` class, and the image will display in high resolution with a smooth zoom effect.
- To revert back to the original image, move your mouse off the image.

## Customizing the Zoom Scale

You can adjust the **zoom level** to your preference. To do so, follow these steps:

1. Open the Tampermonkey script you installed.
2. Locate the following line in the script:
   ```javascript
   transform: scale(2.2); /* Apply zoom to high-res image */
3. Change the 2.2 value to any other number to adjust the zoom level.
4. Save.

