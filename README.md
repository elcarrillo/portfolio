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
    <strong>Live Site » </strong>
    <a href="https://elcarrillo.github.io/portfolio/">elcarrillo.github.io/portfolio</a>
    <br />
    <br />
    <a href="https://github.com/elcarrillo/portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/elcarrillo/portfolio/issues">Request Feature</a>
  </p>
</p>

[![GitHub forks](https://img.shields.io/github/forks/elcarrillo/portfolio?style=for-the-badge)](https://github.com/elcarrillo/portfolio/network)
[![GitHub license](https://img.shields.io/github/license/elcarrillo/portfolio?style=for-the-badge)](https://github.com/elcarrillo/portfolio/blob/main/LICENSE)


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

[![Portfolio Website Preview](/READMEdocs/screenshot.gif)](https://elcarrillo.github.io/portfolio/)

This portfolio website serves as a personal showcase for projects, research, updates, and achievements. It is lightweight, responsive, and highly customizable.

In this enhanced version, we've added **dedicated pages for research and updates**, enabling you to document and share your professional journey in detail.

**Features**

- [x] Easy to configure
- [x] SEO-friendly
- [x] Responsive design
- [x] Lightweight
- [x] Light and dark modes
- [x] Dedicated **Research** and **Updates** sections
- [x] Integrated pagination for updates
- [x] Linktree-style page
- [x] Automated GitHub Pages deployment

**Advanced Features**

- [x] Google Analytics
- [x] Sitemap.xml
- [x] Google Search Console Verification

> These features were included to showcase advanced functionality. Forkers should replace configurations (such as the Google Analytics Measurement ID) or remove them if not required ([see Notes](#notes)).


**Built with** [Next.js](https://nextjs.org/) & [Bootstrap 5](https://getbootstrap.com).



<!-- GETTING STARTED -->
# Getting Started

Building your own personal website from this project can take as little as 30 minutes. Follow the setup instructions below. Please feel free to reach out by filing an [issue](https://github.com/elcarrillo/portfolio/issues) or emailing for help configuring your project.

## Prerequisites

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads) installed on your PC. You should also own a GitHub account.

## Setup

1. Fork this repository and clone it to your local machine.
    ```sh
      git clone https://github.com/elcarrillo/portfolio.git
    ``` 

2. Edit the configuration files:
    - Update the `config/config.js` file to customize profile, projects, research, and updates.
    - Replace `config/profile.webp` with your own profile image.
    > **Note**: If you use a different filename or image format, update the profile import in `config/config.js`.

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

If it works locally, you can deploy your project to GitHub Pages. GitHub Pages provides two types of free domains, `<username>.github.io` and `<username>.github.io/<repository>`.

### Deploy to `<your-username>.github.io/portfolio`

Commit and push your changes to the `main` branch. [GitHub Actions](https://docs.github.com/en/actions) will automatically build and export the site, then publish it to the `gh-pages` branch.

Your site will be available at:

`https://<your-username>.github.io/portfolio/`

The deployment workflow is located in:

`.github/workflows/deployment.yml`

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

### Dark Mode

- Built-in light and dark themes.
- Theme preference is saved locally and respects the user's system preference on first visit.

---

<!-- SUPPORT MY WORK -->
## Support My Work 🌟

If you find this **Researcher’s Portfolio Project** helpful or inspiring, I would greatly appreciate it if you could ⭐️ the repository on [GitHub](https://github.com/elcarrillo/portfolio). 

Your support keeps this project alive! Future updates may include a dedicated **personal page** and continued improvements to accessibility, performance, and customization.

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

Distributed under the `MIT` License. See [LICENSE](LICENSE) for more information.

---

# Notes

1. Replace `<your-username>` with your GitHub username in the instructions.
2. Update the `config/config.js` file with your personal details and content for the new sections.
3. Replace the existing analytics and Search Console configuration with your own if you fork this project.

---

## **How to Remove Advanced Features**

### 1. Google Analytics

- Locate the Google Analytics Measurement ID (e.g., `G-LJYYDQTM1K`) in `pages/_app.js`.
- Remove or replace the Google Analytics tracking configuration.

### 2. Sitemap.xml

- The sitemap is located at `public/sitemap.xml`.
- Update it when adding or removing public pages.
- If you do not want to use a sitemap, delete `public/sitemap.xml` and remove its reference from `public/robots.txt`.

### 3. Google Search Console Verification

- Google Search Console verification is handled through a verification HTML file in the `public/` directory.
- If you fork this repository:
  1. Remove the existing Google verification HTML file.
  2. Add the verification file supplied for your own Google Search Console property.
  3. Update your sitemap submission in Google Search Console for your deployed site.

- If you do not plan to use Google Search Console, you can simply remove the verification HTML file.
