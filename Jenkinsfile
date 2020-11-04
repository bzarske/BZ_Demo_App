@Library('piper-lib-os@master') _
node() {
  stage('Init') {
    echo "Hello World"
    deleteDir()
  }
  stage('Build') {
    mtaBuild script: this, applicationName: 'myapp'
  }
}
