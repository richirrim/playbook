class Issue {
  constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author) {
    this.title = title
    this.repositoryNameAssociated = repositoryNameAssociated
    this.status = status
    this.numberOfComments = numberOfComments
    this.labels = labels
    this.author = author
    this.dateCreated = new Date()
    this.lastUpdated = new Date()
  }

  getTitleAndAuthor() {
    return `Nombre del author del issue: ${this.author}`
  }
  getGeneralInfo() {
    return `
      ${this.title} [${this.dateCreated.toLocaleDateString()}]
      ${this.author} creo este issue · ${this.numberOfComments} comentarios
      Labels: ${this.labels.join(', ')} · Estatus: ${this.status}
    `
  }
}

const newIssue = new Issue('09 Live 3 Semana 3', '', 'Open', 59, ['LIVE 3', 'Semana-3'], 'carlogilmar')
console.log(newIssue.getTitleAndAuthor())
console.log(newIssue.getGeneralInfo())
