pipeline {
    agent any

    tools {nodejs "nodejs"}

    environment {
      NODE_ENV = 'development'
      DOCKER_IMAGE = 'gauss022/boncoin_frontend'
      MANIFEST_REPO = "https://gitlab.st2i.net/dev/boncoin/frontend-frontoffice.git"
      MANIFEST_REPO_2 = "gitlab.st2i.net/dev/boncoin/frontend-frontoffice.git"
      GIT_BRANCH = "main"
      K8S_MANIFEST_PATH = "k8s_manifest/deployment.yaml"
    }

    stages {
        stage('Checkout') {
          steps {
            deleteDir() // Clean the workspace
            checkout scm
        }
      }
        stage('Install Dependencies') {
          when {
            expression { BRANCH_NAME == 'main' }
          }

          steps {
            script {
              if (fileExists('package-lock.json')) {
                sh 'npm ci'
              } else {
                sh 'npm install'
              }
            }
          }
        }

        // stage('Run Tests') {
        //  when {
        //    expression { BRANCH_NAME == 'main' }
        //  }

      
        //  steps {
        //    sh 'npm test'
        //  }
        // }

        stage('Build') {
          when {
            expression { BRANCH_NAME == 'main' }
          }

          steps {
            sh 'npm run build'
          }
        }

        stage('Archive Artifacts') {
          when {
            expression { BRANCH_NAME == 'main' }
          }

          steps {
            archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
          }
        }

        stage('Build Docker Image') {
          when {
            expression { BRANCH_NAME == 'main' }
          }

          steps {
            script {
              sh "docker build -t ${DOCKER_IMAGE}:${GIT_COMMIT} ."
            }
          }
        }

        stage('Push Docker Image') {
          when {
            expression { BRANCH_NAME == 'main' }
          }
        
          steps {
            script {
              withDockerRegistry([credentialsId: 'docker-hub', url: '']) {
                sh "docker push ${DOCKER_IMAGE}:${GIT_COMMIT}"
              }
            }
          }
        }
            stage('Checkout Manifest Repository') {
              when {
                expression { BRANCH_NAME == 'main' }
              }

              steps {
                git branch: "${env.GIT_BRANCH}", url: "${env.MANIFEST_REPO}", credentialsId: 'gitlab-token'
              }
            }

            stage('Update K8s Manifests') {
              when {
                expression { BRANCH_NAME == 'main' }
              }

              steps {
                script {
                  withCredentials([usernamePassword(credentialsId: 'gitlab-token', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh 'git config --global user.email "jenkins@example.com"'
                    sh 'git config --global user.name "jenkins"'
                    sh "git remote set-url origin https://${USER}:${PASS}@${env.MANIFEST_REPO_2}"
                    sh "git pull origin ${env.GIT_BRANCH}"
                    sh "sed -i 's|image: .*|image: ${env.DOCKER_IMAGE}:${GIT_COMMIT}|' ${env.K8S_MANIFEST_PATH}"
                    sh "git add ."
                    sh "git commit -m 'Update image to latest'"
                    sh "git push origin ${env.GIT_BRANCH}"
                  }
                }
              }
            }
      }

    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed!'
        }
       // always {
            // Clean up workspace
            // cleanWs()
        //}
    }
}
