@Library('piper-lib-os@master') _
node() {
  stage('Init') {
    deleteDir()
    checkout scm
    setupCommonPipelineEnvironment script: this
  }
  stage('Build') {
    mtaBuild script: this
  }

  stage('Deploy to CF') {
    cloudFoundryDeploy script: this
  }

  stage('Deploy to TMS') {
    tmsUpload script: this
  }
}
