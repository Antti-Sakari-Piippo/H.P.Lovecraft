let pageUpBtn = document.getElementById('btn-page-up')

const pageUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

pageUpBtn.addEventListener('click', pageUp)
