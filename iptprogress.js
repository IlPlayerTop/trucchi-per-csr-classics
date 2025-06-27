/**
 * iptProgress - Simple Progress Bar Controller
 * Author: IlPlayerTop
 * License: Custom
 */

const iptProgress = {
    /**
     * Initializes a progress bar inside a container element.
     * @param {string} containerId - The ID of the container element.
     */
    init(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('[iptProgress] Container not found.');
            return;
        }

        const progressBar = document.createElement('div');
        progressBar.style.width = '0%';
        progressBar.style.height = '20px';
        progressBar.style.backgroundColor = '#4caf50';
        progressBar.style.transition = 'width 0.2s';

        container.style.backgroundColor = '#ddd';
        container.style.borderRadius = '4px';
        container.style.overflow = 'hidden';
        container.appendChild(progressBar);

        container._progressBar = progressBar;
    },

    /**
     * Updates the progress bar to a given percentage.
     * @param {string} containerId - The ID of the container element.
     * @param {number} percentage - Progress percentage (0 to 100).
     */
    update(containerId, percentage) {
        const container = document.getElementById(containerId);
        if (!container || !container._progressBar) {
            console.error('[iptProgress] Progress bar not initialized.');
            return;
        }
        const clamped = Math.min(Math.max(percentage, 0), 100);
        container._progressBar.style.width = `${clamped}%`;
    }
};

// Example usage:
// iptProgress.init('progressContainer');
// iptProgress.update('progressContainer', 75);

module.exports = iptProgress;
