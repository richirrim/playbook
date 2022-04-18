const  issue = {
  title: '09 Live 3 Semana 3',
  repositoryNameAssociated: '',
  status: 'Open',
  numberOfComments: 59,
  labels: ['LIVE 3', 'Semana-3'],
  author: 'carlogilmar',
  dateCreated: new Date(),
  lastUpdated: new Date(),
  getTitleAndAuthor() {
    return `Nombre del author del issue: ${this.author}`
  },
  getGeneralInfo() {
    // [${this.dateCreated.getDate()} - 0${this.dateCreated.getMonth() + 1} - ${this.dateCreated.getFullYear()}]
    return `
      ${this.title} [${this.dateCreated.toLocaleDateString()}]
      ${this.author} creo este issue · ${this.numberOfComments} comentarios
      Labels: ${this.labels.join(', ')} · Estatus: ${this.status}
    `
  }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())