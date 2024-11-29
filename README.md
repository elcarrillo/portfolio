<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Researcher’s Portfolio ✨</h1>

  <p align="center">
        <br />
    This project is based on the original <strong>Developer's Portfolio</strong> template by <strong>hashirshoaeb</strong>. 
    Check out the <a href="https://github.com/hashirshoaeb/portfolio" target="_blank">original repository</a>.
    It has been enhanced to include features tailored for researchers, such as research project highlights, updates integration, and more.
    <br /><br />
    <strong>Site URL / Demo (Original) » </strong>
    <a href="https://hashirshoaeb.github.io/portfolio"> hashirshoaeb.github.io/portfolio</a>
    <br />
    <br />
    <a href="https://github.com/hashirshoaeb/portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/hashirshoaeb/portfolio/issues">Request Feature</a>
  </p>
</p>

[![GitHub forks](https://img.shields.io/github/forks/hashirshoaeb/portfolio?style=for-the-badge)](https://github.com/hashirshoaeb/portfolio/network)
[![GitHub license](https://img.shields.io/github/license/hashirshoaeb/portfolio?style=for-the-badge)](https://github.com/hashirshoaeb/portfolio/blob/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/hashirshoaeb?color=ffcc66&logo=twitter&logoColor=ffffff&style=for-the-badge)](https://twitter.com/hashirshoaeb)
[![Node Version](https://img.shields.io/static/v1?label=Node&message=16.16.0&color=026e00&style=for-the-badge)](https://nodejs.org)
[![npm Version](https://img.shields.io/static/v1?label=npm&message=8.11.0&color=cb0000&style=for-the-badge)](https://nodejs.org)


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#features-and-updates">Features and Updates</a></li>
    <li><a href="#support-my-work">Support My Work</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# About The Project

[![Product Name Screen Shot](/READMEdocs/screenshot.gif)](https://example.com)

This portfolio website serves as a personal showcase for projects, research, updates, and achievements. It is lightweight, responsive, and highly customizable.

In this enhanced version, we've added **dedicated pages for research and updates**, enabling you to document and share your professional journey in detail.

**Features**

- [x] Easy to configure
- [x] SEO-friendly
- [x] Responsive design
- [x] Lightweight
- [x] Dedicated **Research** and **Updates** sections
- [x] Integrated pagination for updates
- [x] Linktree-style page

**Advanced Features**
- [x] Google Analytics
- [x] Sitemap.xml
- [x] Google Search Console Verification

> These features were included to showcase advanced functionality. Forkers should replace configurations (such as the Google Analytics Measurement ID) or remove them if not required ([see Notes](#notes)).


**Built with** [Next.js](https://nextjs.org/) & [Bootstrap 5](https://getbootstrap.com).



<!-- GETTING STARTED -->
# Getting Started

Building your own personal website from this project can take as little as 30 minutes. Follow the setup instructions below. Please feel free to reach out by filing an [issue](https://github.com/hashirshoaeb/portfolio/issues) or emailing for help configuring your project.

## Prerequisites

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads) installed on your PC. You should also own a GitHub account.

## Setup

1. Fork this repository and clone it to your local machine.
    ```sh
      git clone https://github.com/<your-username>/portfolio.git
    ``` 

2. Edit the configuration files:
    - Update the `config/config.js` file to customize profile, projects, research, and updates.
    - Replace `profile.png` in `config/profile.png` with your image. 
    > **Note**: Rename your image file as `profile.png`.

3. Install dependencies:
    ```sh
      npm install
      npm run build
    ```

## Testing

1. To test on your local server:
    ```sh
      npm run dev
    ```

2. Open the browser to http://localhost:3000/

## Deployment

If it works locally, you can deploy your project to GitHub Pages. GitHub Pages provides two types of free domains, `<username>.github.io` and `<username>.github.io/<repository>`. Choose the one that suits your needs.

### Deploy to `<your-username>.github.io/portfolio`

Simply commit and push your changes to GitHub. [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions#overview) will handle the deployment. Your site will be available at `https://<your-username>.github.io/portfolio`.

---

<!-- FEATURES AND UPDATES -->
# Features and Updates

### Research Page

- Dedicated section to showcase ongoing and completed research projects.
- Support for project images and detailed descriptions.
- Alternating layouts for a modern, dynamic design.

### Updates Page

- Chronicle your professional journey with a paginated updates feed.
- Separate featured updates section for highlights.
- Direct links to internal or external resources for more details.

### Enhanced Configurability

- Easily update content for both **Research** and **Updates** sections through the `config/config.js` file.
- Images and descriptions for research projects and updates are fully customizable.

---

<!-- SUPPORT MY WORK -->
## Support My Work 🌟

If you find this **Researcher’s Portfolio Project** helpful or inspiring, I would greatly appreciate it if you could ⭐️ the repository on [GitHub](https://github.com/elcarrillo/portfolio). 

Your support keeps this project alive! Future updates include a dedicated **personal page** and plans for **dark mode** integration in the near future. 

Thank you for supporting this journey!

---

<!-- CONTRIBUTING -->
# Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contribution you make would be **appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
# License

Distributed under the `MIT` License. See [LICENSE](https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE) for more information.

---
# Notes
1. Replace `<your-username>` with your GitHub username in the instructions.
2. Update the `config/config.js` file with your personal details and content for the new sections.

---

## **How to Remove Advanced Features**

### 1. Google Analytics
- Locate the `Measurement ID` (e.g., `G-LJYYDQTM1K`) in the `_app.js` file or configuration.
- Remove or comment out the Google Analytics tracking script.

### 2. Sitemap.xml
- Delete the `sitemap.xml` file from the project directory if it’s not required.
- Optionally, remove any references to the sitemap in the `robots.txt` file (if applicable).

### 3. Google Search Console Verification
- Since the verification meta tag is included in the `_app.js` file:
  1. Open the `_app.js` file in the `pages/` directory.
  2. Locate the meta tag:
     ```jsx
     <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
     ```
  3. Remove the meta tag or replace `YOUR_VERIFICATION_CODE` with your own Google Search Console verification code.
  4. If you no longer need custom meta tags, reset `_app.js` to its default structure:
     ```javascript
     import '../styles/custom.global.scss'

     function MyApp({ Component, pageProps }) {
       return <Component {...pageProps} />
     }

     export default MyApp
     ```
- Save the file and redeploy your project.
