let prevVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
let decimalClicked = false

let valMemStored = ''

function numButPress(num) {
  if (resultVal) {
    newVal = num
    resultVal = ''
  } else {
    if (num === '.') {
      if (decimalClicked != true) {
        newVal += num
        decimalClicked = true
      }
    } else {
      newVal += num
    }
  }
  document.getElementById('entry').value = newVal
}

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
