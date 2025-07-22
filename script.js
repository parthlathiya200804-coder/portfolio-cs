document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use scrollIntoView with smooth behavior
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. "Print CV" Button Functionality
    const printButton = document.querySelector('.print-button');
    if (printButton) {
        printButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Option 1: Trigger browser print dialogue
            // window.print();

            // Option 2: Simulate PDF download (replace with your actual CV PDF path)
            // For this to work, you need to have a file named 'your-cv.pdf' in your root directory
            const cvPath = 'Data\\Parth Lathiya_CV.pdf'; // Make sure you have this file!
            const link = document.createElement('a');
            link.href = cvPath;
            link.download = 'Parth_Lathiya_CV.pdf'; // Name for the downloaded file
            link.target = "_blank";
            link.rel = 'noopener noreferrer';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }


    // 3. "Read More" Toggle for Articles
    document.querySelectorAll('.read-more-toggle').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the default link behavior

            const targetId = this.dataset.target; // Get the ID from data-target attribute
            const fullStoryDiv = document.getElementById(`full-story-${targetId}`);

            if (fullStoryDiv) {
                if (fullStoryDiv.style.display === 'none' || fullStoryDiv.style.display === '') {
                    fullStoryDiv.style.display = 'block';
                    this.textContent = 'Show Less \u00AB'; // Change text to "Show Less"
                } else {
                    fullStoryDiv.style.display = 'none';
                    this.textContent = 'Read Full Story \u00BB'; // Change text back to "Read Full Story"

                    // Optional: Scroll back to the top of the article when collapsing
                    const article = this.closest('.news-article');
                    if (article) {
                        article.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }
        });
    });

    // 4. Hamburger Menu Toggle Functionality (NEW!)
    const hamburger = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.main-nav .nav-list');

    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
            hamburger.classList.toggle('open'); // Add/remove 'open' class for animation
        });
    }
});
