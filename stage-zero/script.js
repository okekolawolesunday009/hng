function updateTime() {
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();

    timeElement.textContent = now.toUTCString();

}

// const bioElement = document.querySelector('[data-testid="shortBio"]');
// bioElement.textContent = "I am Oke Kolawole Sunday, a frontend developer passionate about creating seamless user experiences. With expertise in ReactJS, TypeScript, and Zustand, I build interactive and scalable web applications. I enjoy problem-solving, optimizing UI/UX, and exploring new technologies.";

updateTime();
setInterval(updateTime, 1000)