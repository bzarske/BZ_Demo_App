@Library('piper-lib-os@master')
node() {
  stage('Init') {
    echo "Hello World"
    deleteDir
  }
  stage('Build') {
    mtaBuild script: this
  }
}
