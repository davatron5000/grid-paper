gridsize.addEventListener('change', (e) => {
  document.body.style.setProperty('--gridsize', e.target.value)
})

strokewidth.addEventListener('change', (e) => {
  document.body.style.setProperty('--strokewidth', e.target.value)
})

colorpicker.addEventListener('input', (e) => {
  document.body.style.setProperty('--accent', e.target.value)
})

gridtype.addEventListener('change', (e) => {
  document.body.dataset.grid = e.target.value
})

document.body.dataset.grid = 'grid';
