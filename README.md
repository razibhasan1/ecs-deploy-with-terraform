# ecs-deploy-with-terraform

make Simple  App 

mkdir ecs

git clone https://github.com/razibhasan1/ecs-deploy-with-terraform.git

move all the file in ecs folder

cd ecs

npm init --y

npm install express

##Run app ##

node index.js


Now it is time we pushed our container to a container registry service.Now we can push our Node application image up to this repository. Click on the repository and click View push commands. A modal will appear with four commands you need to run locally in order to have your image pushed up to your repository.Once you have run these commands, you should see your pushed image in your repository.

once login successful then build & push image to repo.

after done all the required part from Docker,ECR,Node Js file lets jump in to the terraform part.

#Terraform#

terraform init

terraform plan

terraform apply --auto-approve

check the Load balancer dns in your browser.it will show "Simple APP with Terraform!"