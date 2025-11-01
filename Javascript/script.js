        // Change button text on toggle
        const collapseElement = document.getElementById('moreCourses');
        const toggleBtn = document.getElementById('toggleBtn');

        collapseElement.addEventListener('show.bs.collapse', function () {
            toggleBtn.textContent = 'Show Less';
        });

        collapseElement.addEventListener('hide.bs.collapse', function () {
            toggleBtn.textContent = 'Show More Courses';
        });
    