This is a News App built with Next.js that utilizes the Media Stack API to fetch news articles from various sources.

### Getting Started

To get started with the project, you can either download the project as a zip file or clone the repository using the following command:

git clone https://github.com/vishalgupta30699/news-app.git

Once you have the project files, navigate to the root directory and install the dependencies by running:

```
npm install
```


### Environment Variables

This project requires the following environment variables to be set:

NEXT_PUBLIC_API_KEY: This is your API key for the Media Stack API.
You can obtain an API key by creating an account on the Media Stack website.

Create a file named .env.local in the root directory of the project and add your environment variables in the following format:

NEXT_PUBLIC_API_KEY=your_api_key_here

### Running the App

Once you have set up the environment variables, you can run the app by running:

```
npm run build
```


This will create an optimized production build in the out directory.

### To deploy the app

you can use Vercel. Simply create a new project on Vercel and link it to your GitHub repository. Vercel will automatically deploy the app whenever you push changes to the main branch.

Alternatively, you can deploy the app to any other hosting provider of your choice by copying the contents of the out directory to your server.

### Live Demo
You can view a live demo of the app at https://news-app-vishalgupta30699.vercel.app/
