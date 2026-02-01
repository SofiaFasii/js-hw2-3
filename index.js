//отримуємо всі зображення з data-src для лінивого завантаження
const img = document.querySelectorAll('img[data-src]')

//створюємо IntersectionObserver для відстеження видимості зображень
const observ = new IntersectionObserver((entries, observer) => {
    //перебираємо масив елементів за якими ведеться спостереження
    entries.forEach(e => {
        //перевіряємо чи став елемент видимим у viewport
        if(e.isIntersecting){
            //отримуємо конкретне зображення яке стало видимим
            const img = e.target
            //завантажуєм зображення
            img.src = img.dataset.src
            //припиняємо спостереження після завантаження
            observer.unobserve(img)
            //видаляємо data-src
            img.removeAttribute('data-src')
        }
    })
//коли 50% зображення стане видимим
},{threshold: 0.5})

//починаємо спостереження за кожним зображенням
img.forEach(img => observ.observe(img))