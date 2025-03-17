document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-item-heading')

  function toggleAccordion() {
    const allActive = document.querySelectorAll('.accordion-content')

    // close all open accordions
    allActive.forEach((item) => {
      if (item != this.nextElementSibling) {
        item.classList.remove('active')
        const itemHeader = item.previousElementSibling
        const itemIcon = itemHeader.querySelector('img')
        itemIcon.src = './assets/images/icon-plus.svg'
      }
    })

    // toggle current content panel
    const content = this.nextElementSibling
    content.classList.add('active')

    // toggle icon
    const icon = this.querySelector('img')
    if (content.classList.contains('active')) {
      icon.src = './assets/images/icon-minus.svg'
    } else {
      icon.src = './assets/images/icon-plus.svg'
    }
  }

  accordionHeaders.forEach((heading) => {
    heading.addEventListener('click', toggleAccordion)
  })
})
