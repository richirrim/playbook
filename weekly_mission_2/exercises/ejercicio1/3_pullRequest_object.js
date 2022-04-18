const pullRequest = {
  title: 'Update readme',
  branchName: 'main',
  dateCreated: new Date(),
  status: 'open',
  repositoryNameAssociated: 'launch-x-explorers',
  getStatus() {
    return `status: ${this.status}`
  },
  getTitleNameAssociated() {
    return `This PR is in the repo: ${this.repositoryNameAssociated} (status: ${this.status}) and was created on ${this.dateCreated.toLocaleDateString()}`
  }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleNameAssociated())