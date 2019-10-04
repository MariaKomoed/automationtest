pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A') {
                    steps {
                        bat '".\\node_modules\\.bin\\cypress" run --record --key 6bc2a91c-3b07-4bf0-8809-3e8fed5fbf83 --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        bat '".\\node_modules\\.bin\\cypress" run --record --key 6bc2a91c-3b07-4bf0-8809-3e8fed5fbf83 --parallel'
                    }
                }
                stage('Run tests in parallel C') {
                    steps {
                        bat '".\\node_modules\\.bin\\cypress" run --record --key 6bc2a91c-3b07-4bf0-8809-3e8fed5fbf83 --parallel'
                    }
                }
            }
        }
    }
}