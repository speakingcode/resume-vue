docker container stop resume-vue-dev
docker container rm resume-vue-dev
docker run -t -i --name resume-vue-dev -v `pwd`:/resume-vue -p 8080:8080 resume-vue npm run serve
