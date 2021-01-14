let prevVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
let decimalClicked = false

let valMemStored = ''

function numButPress(num) {}

function mathButPress(operator) {}

function equalButPress(num) {}

function clearButPress() {
  let prevVal = ''
  let newVal = ''
  let resultVal = ''
  let mathOperator = ''
  let decimalClicked = false

  document.getElementById('entry').value = '0'
}

function copyButPress(num) {
  valMemStored = document.getElementById('entry').value
}

function pasteButPress(num) {
  if (valMemStored) {
    document.getElementById('entry').value = valMemStored
    newVal = valMemStored
  }
}
