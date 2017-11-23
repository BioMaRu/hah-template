document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    loadComponent('button')
    loadComponent('navbar')
  }
}

function loadComponent(name) {
  const module = document.querySelector(`link[module-name="comp-${name}"]`).import
  const importedDOM = module.querySelector(`#comp-${name}`);
  const slot = document.querySelectorAll(`comp-${name}`)
  slot.forEach(function(elem) {
    elem.appendChild(importedDOM.cloneNode(true))
  })
}
