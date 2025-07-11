document.addEventListener('DOMContentLoaded', function(){

    function filterCourse(category){
        courseCards.forEach(card => {
            const cardCategory = card.dataset.category;

            if (category === 'todos' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }


    const filterTabs = document.querySelectorAll('.filter-tab');
    const courseCards = document.querySelectorAll('.curso-card');
   
    filterTabs.forEach(button => {
        button.addEventListener('click', function() {
       
            filterTabs.forEach(tab => tab.classList.remove('active'));

            
            this.classList.add('active');

          
            const category = this.dataset.filter;
            filterCourse(category);
        });
    });




   
    filterCourse('todos');
});