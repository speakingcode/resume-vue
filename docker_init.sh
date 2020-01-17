echo "Stopping existing resume-vue-dev container (if any)..."
docker container stop resume-vue-dev
echo "Removing existing broker-resume-vue-dev container (if any)..."
docker container rm resume-vue-dev
echo "Removing resume-vue image (if any)..."
docker image rm resume-vue
echo "Building Dockerfile.dev image with tag 'resume-vue'..."
docker build -f Dockerfile.dev -t resume-vue .
