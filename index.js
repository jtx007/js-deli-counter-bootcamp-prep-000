
  let number = 1
function takeANumber(line) {
  line.push(number)
  number++
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}



 function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    let string = 'The line is currently:'
    for (var i = 0; i < line.length; i++) {
      string = `${string} ${i+1}. ${line[i]},`
    }
    return string.slice(0, -1)
  }
}
