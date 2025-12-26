function askAI() {
    let question = document.getElementById("userQuestion").value.toLowerCase();
    let answerBox = document.getElementById("aiAnswer");

    if (question.includes("hello") || question.includes("hi")) {
        answerBox.innerHTML = "Hello there! 👋<br>I'm your friendly AI assistant. How can I help you today?";
    } 
    else if (question.includes("your name")) {
        answerBox.innerHTML = "I don't have a personal name, but you can call me your AI helper! 🤖<br>I'm here to answer your questions about web development and more.";
    } 
    else if (question.includes("how are you")) {
        answerBox.innerHTML = "I'm feeling great! Thanks for asking. 😄<br>How about you?";
    } 
    else if (question.includes("html")) {
        answerBox.innerHTML = "HTML stands for HyperText Markup Language.<br>It is used to create the structure of web pages, like headings, paragraphs, links, images, and more.<br>Every web page you see on the internet is built using HTML!";
    } 
    else if (question.includes("css")) {
        answerBox.innerHTML = "CSS stands for Cascading Style Sheets.<br>It is used to style your website: colors, fonts, spacing, layouts, and animations.<br>Without CSS, web pages would look very plain!";
    } 
    else if (question.includes("javascript")) {
        answerBox.innerHTML = "JavaScript is a programming language for the web.<br>It makes websites interactive: buttons, forms, animations, games, and dynamic content.<br>It's an essential part of modern web development.";
    } 
    else if (question.includes("web development")) {
        answerBox.innerHTML = "Web development is the process of creating websites and web apps.<br>It usually involves HTML for structure, CSS for design, and JavaScript for interactivity.<br>There are also frameworks and tools to make development faster and more efficient.";
    } 
    else {
        answerBox.innerHTML = "Hmm 🤔 I'm still learning about that topic.<br>Try asking me something about HTML, CSS, JavaScript, or web development!";
    }
}



