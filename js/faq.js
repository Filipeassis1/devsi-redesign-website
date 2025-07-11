document.addEventListener('DOMContentLoaded', function(){
    const faqItem = document.querySelectorAll('.item-faq');

    faqItem.forEach(item => {
        const pergunta = item.querySelector('.head-faq');

        pergunta.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItem.forEach(items => {
                if (items !== item){
                    items.classList.remove('active');
                }
            });

            if (isActive){
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        })
    })
})