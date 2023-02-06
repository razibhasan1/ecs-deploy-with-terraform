# ecs-deploy-with-terraform

make Simple  App 

mkdir ecs
cd ecs
npm init --y
npm install express

##Run app ##

node index.js


Push the  image to AWS ECR please check ecr push command through your repository.before push please login to your ecr in your instance.

once login successful then build & push image to repo.

#Terraform#

terraform init
terraform plan
terraform apply -auto-approve

check the Load balancer dns in your browser.it will show "Simple APP with Terraform!"