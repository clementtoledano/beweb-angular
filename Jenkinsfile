pipeline {
  agent any

  tools {
    nodejs 'node'
  }
  stages {
    stage('Build') {
      steps {
        sh 'echo "build application..."'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'echo "testing application..."'
        sh 'npm run test'
      }
    }
  }
  post {
    always {
      echo 'beau gosse!'
    }
    steps {
      success {
        echo 'Victoire !'
        script {
          withCredentials([usernamePassword(credentialsId: 'Clementoss', passwordVariable: 'pw', usernameVariable: 'user')]) {
            final String cmd = ""
            "
            curl - s - X POST - u $user: $pw - H 'accept: */*' - o / dev / null - w '%{http_code}'
            $bitbucket_link_merge
              ""
            "

            final String status_code = sh(script: cmd, returnStdout: true).trim()

            echo "HTTP response status code: ${status_code}"

            if (status_code != '200') {
              error('URL status different of 200. Exiting script.')
            }
          }
        }
      }
    }
    failure {
      echo 'Aie aie aie !'
      script {
        withCredentials([usernamePassword(credentialsId: 'Clementoss', passwordVariable: 'pw', usernameVariable: 'user')]) {
          final String cmd = ""
          "
          curl - s - X POST - u $user: $pw - H 'accept: */*' - o / dev / null - w '%{http_code}'
          $bitbucket_link_decline
            ""
          "

          final String status_code = sh(script: cmd, returnStdout: true).trim()

          echo "HTTP response status code: ${status_code}"

          if (status_code != '200') {
            error('URL status different of 200. Exiting script.')
          }
        }
      }
    }
  }
}
