@Library('piper-lib-os@master') _
node() {
  stage('Init') {
    echo "Hello World"
    deleteDir()
    checkout scm
  }
  stage('Build') {
    mtaBuild script: this
  }
}
