class Repo {
  constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close) {
    this.name = name
    this.author = author
    this.language = language
    this.numberOfCommits = numberOfCommits
    this.stars = stars
    this.forks = forks
    this.issues_open = issues_open
    this.issues_close = issues_close
  }
  getName() {
    return this.name
  }
  getTotalIssues() {
    return this.issues_open + this.issues_close
  }
  getGeneralInfo() {
    return `This repository ${this.name} was created by ${this.author}`
  }
}

const newRepo = new Repo('LaunchX', 'carlogilmar', 'JavaScript', 100, 199, 299, 10, 10)

console.log('Nombre del repo:', newRepo.getName())
console.log('Issues totales:', newRepo.getTotalIssues())
console.log(newRepo.getGeneralInfo())