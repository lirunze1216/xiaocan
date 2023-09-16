document.addEventListener('DOMContentLoaded', function () {
  // 步进器的处理事件
  let stepperCounts = document.querySelectorAll('.step .count')
  let incrementButtons = document.querySelectorAll('.step .add')
  let decrementButtons = document.querySelectorAll('.step .sub')
  for (let index = 0; index < stepperCounts.length; index++) {
    const stepperCount = stepperCounts[index]
    const decrementButton = decrementButtons[index]
    const incrementButton = incrementButtons[index]
    // 增加按钮点击事件处理程序
    incrementButton.addEventListener('click', function () {
      let currentValue = parseInt(stepperCount.innerText, 10)
      let maxValue = parseInt(20, 10)

      if (currentValue < maxValue) {
        stepperCount.innerText = currentValue + 1
      }
    })
    // 减少按钮点击事件处理程序
    decrementButton.addEventListener('click', function () {
      let currentValue = parseInt(stepperCount.innerText, 10)
      let minValue = parseInt(0, 10)
      if (currentValue > minValue) {
        stepperCount.innerText = currentValue - 1
      }
    })
  }

  // 点击小图片切换大图片
  let bigImg = document.getElementById('bigImg')
  let smallImgs = document.querySelectorAll('.small_img li img')
  let cutBox_left = document.getElementById('cutBox_left')
  for (let index = 0; index < smallImgs.length; index++) {
    const element = smallImgs[index]
    if (index === 0) {
      bigImg.src = element.src
      cutBox_left.innerHTML = `1/${smallImgs.length}`
    }

    element.addEventListener('click', function () {
      bigImg.src = element.src
      cutBox_left.innerHTML = `${index + 1}/${smallImgs.length}`
    })
  }

  // 返回顶部按钮事件
  let back_top = document.getElementById('back_top')
  // 监听页面滚动事件
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      back_top.style.visibility = 'visible'
    } else {
      back_top.style.visibility = 'hidden'
    }
  })
  back_top.addEventListener('click', function () {
    // 使用平滑滚动回到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
})

// header点击展开函数
function zhankai() {
  let ul = document.querySelector('.small_img')
  let zhankaiBtn = document.getElementById('zhankai')
  if (ul.style.width === '160px') {
    ul.style.width = 50 + 'px'
    zhankaiBtn.innerHTML = '>'
  } else {
    ul.style.width = 160 + 'px'
    zhankaiBtn.innerHTML = '<'
  }
}
// tab栏切换函数
function openTab(tabId, element) {
  let selectedTab = document.querySelectorAll('.tab-button')
  for (let index = 0; index < selectedTab.length; index++) {
    const el = selectedTab[index]
    el.classList.remove('active')
    el.children[0].style.opacity = '0'
  }
  element.classList.add('active')
  element.children[0].style.opacity = '1'
  let tabContents = document.querySelectorAll('.tab-content')
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none'
  }
  document.getElementById(tabId).style.display = 'block'
}
