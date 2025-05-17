/**
 * Utility functions for the dashboard
 */

/**
 * Creates an element with the specified attributes and properties
 * @param {string} tag - The tag name for the element
 * @param {object} attributes - Key-value pairs of attributes
 * @param {string|Node} content - The content to append to the element
 * @returns {HTMLElement} The created element
 */
function createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    
    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    
    // Add content
    if (content) {
        if (typeof content === 'string') {
            element.innerHTML = content;
        } else {
            element.appendChild(content);
        }
    }
    
    return element;
}

/**
 * Formats a percentage for display
 * @param {number} value - The percentage value
 * @returns {string} The formatted percentage
 */
function formatPercentage(value) {
    return `${value}%`;
}

/**
 * Checks if the device is a mobile device
 * @returns {boolean} True if the device is mobile
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}