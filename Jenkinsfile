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
  stage('Deploy') {
    tmsUpload script: this,
              mtaPath: 'DemoApp.mtar',
              nodeName: 'OpenSAP_DEV',
              credentialsId: 'tms'
  }
}
