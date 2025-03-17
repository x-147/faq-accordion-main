document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-item-heading')

  function toggleAccordion() {
    const icon = this.querySelector('img')

    // onclick, if current content panel is open, close it
    if (this.nextElementSibling.classList.contains('active')) {
      this.nextElementSibling.classList.remove('active')
      icon.src = './assets/images/icon-plus.svg'
      return
    }

    // fetch all content panels
    const allActive = document.querySelectorAll('.accordion-content')

    // close all content panels that is not sibling
    // of the current accordion header
    allActive.forEach((item) => {
      if (item != this.nextElementSibling) {
        item.classList.remove('active')
        const itemHeader = item.previousElementSibling
        const itemIcon = itemHeader.querySelector('img')
        itemIcon.src = './assets/images/icon-plus.svg'
      }
    })

    // open content panel for current accordion header
    this.nextElementSibling.classList.add('active')
    icon.src = './assets/images/icon-minus.svg'
  }

  accordionHeaders.forEach((heading) => {
    heading.addEventListener('click', toggleAccordion)
  })
})
