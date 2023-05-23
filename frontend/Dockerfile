# Use an official nginx image as the base image
FROM nginx:latest

# Set the working directory in the container
WORKDIR /frontend_app

#copy the nginx.conf file we just made to a specific container location that's specified as the default container that nginx listens for (you can find this information in nginx documentation)
COPY nginx.conf /etc/nginx/conf.d/default.conf

#copy the build folder that was made using npm run build
COPY build /usr/share/nginx/html

# Expose the port where the application will run
EXPOSE 80

# Start the application
CMD ["nginx", "-g", "daemon off;"]
