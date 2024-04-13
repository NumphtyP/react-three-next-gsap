function classReg(className) {
  return new RegExp('(^|\\s+)' + className + '(\\s+|$)')
}

function hasClass(elem, c) {
  if (elem.classList) {
    return elem.classList.contains(c)
  } else {
    return classReg(c).test(elem.className)
  }
}

function addClass(elem, c) {
  if (elem.classList) {
    elem.classList.add(c)
  } else {
    if (!hasClass(elem, c)) {
      elem.className = elem.className + ' ' + c
    }
  }
}

function removeClass(elem, c) {
  if (elem.classList) {
    elem.classList.remove(c)
  } else {
    elem.className = elem.className.replace(classReg(c), ' ')
  }
}

function toggleClass(elem, c) {
  const fn = hasClass(elem, c) ? removeClass : addClass
  fn(elem, c)
}

const classie = {
  hasClass,
  addClass,
  removeClass,
  toggleClass,
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass,
}

export default classie
