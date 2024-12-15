// ==UserScript==
// @name         Hover to Show Full-Res Image with Zoom (All Websites)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Show high-res image on hover with zoom for all websites
// @author       You
// @match        https://*/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Inject Lightbox CSS (hover zoom effect)
    GM_addStyle(`
        /* Optional: Add hover zoom effect */
        .bbImage {
            transition: transform 0.3s ease-in-out;
        }

        .bbImage.high-res {
            transform: scale(1.95); /* Apply zoom to high-res image */
            z-index: 10; /* Bring the image to the front */
        }
    `);

    // Select all images with the class 'bbImage'
    const images = document.querySelectorAll('.bbImage');

    // Add event listeners for hover to display high-res image
    images.forEach(img => {
        const lowResUrl = img.getAttribute('src'); // Get the low-res URL
        let highResUrl = lowResUrl.replace('.md', ''); // Modify URL to get the high-res image by removing .md

        // On hover, swap to high-res image and apply zoom
        img.addEventListener('mouseenter', () => {
            img.setAttribute('src', highResUrl); // Change src to high-res version
            img.classList.add('high-res'); // Add class to apply zoom effect
        });

        // On mouse out, revert to low-res image and remove zoom
        img.addEventListener('mouseleave', () => {
            img.setAttribute('src', lowResUrl); // Revert back to low-res version
            img.classList.remove('high-res'); // Remove zoom effect
        });
    });
})();
