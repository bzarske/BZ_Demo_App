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

  stage('Deploy') {
    parallel cf: {
      cloudFoundryDeploy script: this
    }, tms: {
      tmsUpload script: this
    }
  }
}
