@Library('piper-lib-os@master') _
node() {
  stage('Init') {
    echo "Hello World"
    deleteDir()
    checkout scm
    setupCommonPipelineEnvironment script: this
  }
  stage('Build') {
    mtaBuild script: this
  }

  stage('Deploy to CF') {
    cloudFoundryDeploy script: this,
                       deployTool: 'cf_native', // cf_native or mtaDeployPlugin
                       cloudFoundry: [
                           org: 'OpenSAP-DEV',
                           space: 'dev',
                           credentialsId: 'cfDeploy',
                       ]
  }

  stage('Deploy to TMS') {
    tmsUpload script: this,
              mtaPath: 'DemoApp.mtar',
              nodeName: 'OpenSAP_DEV',
              credentialsId: 'tms'
  }
}
