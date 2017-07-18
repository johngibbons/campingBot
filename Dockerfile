# Create image from nodejs base image
FROM node:7

# Clone the repo from github
RUN git clone https://github.com/johngibbons/campingBot.git

# Change workind directory to the cloned repo
WORKDIR /campingBot

# Install all the dependencies
RUN yarn

# Expose port
EXPOSE 3000

# Run the application
CMD ["yarn", "start"]
