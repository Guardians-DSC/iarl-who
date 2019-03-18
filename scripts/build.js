(() => {
  const MEMBERS_PER_ROW = 4
  const membersNode = document.getElementById('iarl-members')
  let lastLine = null

  members.forEach(({github, image, name}, index) => {
    if(lastLine === null) {
      lastLine = document.createElement('div')
      lastLine.className = "w3-row w3-grayscale-min"
    }

    const wrappingDiv = document.createElement('div')
    wrappingDiv.className = 'w3-quarter member'
    wrappingDiv.onclick = () => window.open(github)

    const imgNode = document.createElement('img')
    imgNode.src = image
    imgNode.style = 'width:100%'

    const pNode = document.createElement('p')
    const textNode = document.createTextNode(name)
    pNode.appendChild(textNode)

    wrappingDiv.appendChild(imgNode)
    wrappingDiv.appendChild(pNode)
    lastLine.appendChild(wrappingDiv)

    if ((index%MEMBERS_PER_ROW) === MEMBERS_PER_ROW - 1) {
      membersNode.appendChild(lastLine)
      lastLine = null
    }
  })

  if (lastLine) {
    membersNode.appendChild(lastLine)
  }
})()
