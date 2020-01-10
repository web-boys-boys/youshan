let animateDistance = 50;
$(window).on('scroll',function(){
    $('.myanimate').each(function(index,item){
        console.log(index,item)
        if ((innerHeight - (item.offsetTop - scrollY) - item.offsetHeight) >= animateDistance) {
            item.classList.add('run')
        }
    })
})