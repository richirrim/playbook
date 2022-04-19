class PullRequest {
  constructor(title, branchName, status, repositoryNameAssociated) {
    this.title = title
    this.branchName = branchName
    this.status = status
    this.repositoryNameAssociated = repositoryNameAssociated
    this.dateCreated = new Date()
  }

  getStatus() {
    return `status: ${this.status}`
  }
  getTitleNameAssociated() {
    return `This PR is in the repo: ${this.repositoryNameAssociated} (status: ${this.status}) and was created on ${this.dateCreated.toLocaleDateString()}`
  }
}
const newPR = new PullRequest('Update readme', 'main', 'open', 'launch-x-explorers')
console.log(newPR.getStatus())
console.log(newPR.getTitleNameAssociated())