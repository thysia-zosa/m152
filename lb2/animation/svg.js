let arrow = document.getElementById('arrow');

const onScroll = () => {
    arrow.setAttribute('transform', 'rotate(' + window.scrollY + ', 80, 110)');
}

document.addEventListener('scroll', onScroll);