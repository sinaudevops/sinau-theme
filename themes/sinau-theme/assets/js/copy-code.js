/**
 * assets/js/copy-code.js
 * Native JS to inject copy buttons into Hugo-generated code blocks.
 */
document.addEventListener('DOMContentLoaded', () => {
    const copyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

    // Hugo Chroma targets code with .highlight class
    const codeBlocks = document.querySelectorAll('.highlight');

    codeBlocks.forEach((block) => {
        // Create button container
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.ariaLabel = 'Copy code to clipboard';
        button.innerHTML = copyIcon;

        // Append to block container
        block.appendChild(button);

        button.addEventListener('click', async () => {
            // Find the actual code element (inside pre/code)
            const code = block.querySelector('code');
            if (!code) return;

            try {
                // Use textContent to avoid copying line numbers if they exist as separate elements
                // But in Chroma table layout, we need to be specific.
                // If lntd is present, the code is in the second td.
                let textToCopy = code.innerText;
                
                // chroma table logic: find second td if table exists
                const table = block.querySelector('.lntable');
                if (table) {
                    const codeCell = table.querySelector('td:last-child code');
                    if (codeCell) {
                        textToCopy = codeCell.innerText;
                    }
                }

                await navigator.clipboard.writeText(textToCopy);

                // Success Feedback
                button.innerHTML = checkIcon;
                button.classList.add('copied');

                setTimeout(() => {
                    button.innerHTML = copyIcon;
                    button.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
                button.innerText = 'Error';
            }
        });
    });
});
