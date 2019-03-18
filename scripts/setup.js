const members = []

const addMember = member => {
  if (typeof member !== 'object') {
    return false
  }
  
  const {
    github,
    image,
    name,
  } = member

  if (!github || !image || !name) {
    return false
  }

  members.push(member)
  return true
}
