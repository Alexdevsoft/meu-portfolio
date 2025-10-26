document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        const title = item.querySelector('.project-title');
        
        title.addEventListener('click', function() {
            // Close all other projects
            projectItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current project
            item.classList.toggle('active');
        });
    });
});
