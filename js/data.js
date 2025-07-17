// js/data.js

const portfolioProjects = [
    {
        id: 1,
        title: "E-commerce Site Mockup",
        description: "A responsive e-commerce front-end design with product listings and cart functionality.",
        imageUrl: "https://placehold.co/600x400/EEE/31343C?text=Project+1",
        link: "#",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 2,
        title: "Weather App API Integration",
        description: "Application fetching and displaying weather data from a third-party API.",
        imageUrl: "https://placehold.co/600x400/EEE/31343C?text=Project+2",
        link: "#",
        technologies: ["JavaScript", "API", "HTML"]
    },
    {
        id: 3,
        title: "Task Management Tool",
        description: "A simple to-do list application with local storage persistence.",
        imageUrl: "https://placehold.co/600x400/EEE/31343C?text=Project+3",
        link: "#",
        technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"]
    }
];

const blogPosts = [
    {
        id: "my-first-post",
        title: "My Journey into Web Development",
        date: "2023-10-26",
        author: "Your Name",
        snippet: "A brief overview of how I started my journey into the exciting world of web development...",
        content: `
            <h2>The Beginning</h2>
            <p>It all started with a curiosity about how websites were built. I remember inspecting elements on my favorite sites and wondering what all that code meant. This curiosity led me down a rabbit hole of HTML, CSS, and eventually, JavaScript.</p>
            <p>Learning the basics was challenging but incredibly rewarding. Seeing my first "Hello, World!" appear on a webpage I created was a magical moment.</p>
            <h2>Key Milestones</h2>
            <ul>
                <li>Mastering HTML semantics.</li>
                <li>Understanding CSS Box Model and Flexbox/Grid.</li>
                <li>Writing my first JavaScript functions.</li>
                <li>Building small projects to solidify my learning.</li>
            </ul>
            <p>The journey is ongoing, and there's always something new to learn, which is what makes web development so exciting!</p>
        `,
        imageUrl: "https://placehold.co/800x400/EEE/31343C?text=Blog+Image+1"
    },
    {
        id: "understanding-css-flexbox",
        title: "Understanding CSS Flexbox",
        date: "2023-11-05",
        author: "Your Name",
        snippet: "A beginner-friendly guide to understanding and using CSS Flexbox for layout...",
        content: `
            <h2>What is Flexbox?</h2>
            <p>Flexbox, or the Flexible Box Layout module, is a CSS layout model that provides an efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.</p>
            <p>The main idea behind Flexbox is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate all types of display devices and screen sizes).</p>
            <h2>Key Concepts</h2>
            <ul>
                <li><strong>Container Properties:</strong> <code>display: flex</code>, <code>flex-direction</code>, <code>flex-wrap</code>, <code>justify-content</code>, <code>align-items</code>, <code>align-content</code>.</li>
                <li><strong>Item Properties:</strong> <code>order</code>, <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>, <code>align-self</code>.</li>
            </ul>
            <p>Practice is key to mastering Flexbox. Try building simple layouts and experiment with different properties.</p>
        `,
        imageUrl: "https://placehold.co/800x400/EEE/31343C?text=Blog+Image+2"
    }
];