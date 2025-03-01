// This file contains JavaScript code for the countdown logic of Chinese public holidays.

const holidays = [
    { id: 'qingming', name: "清明节", date: "2025-04-04" },
    { id: 'wuyi', name: "五一", date: "2025-05-01" },
    { id: 'duanwu', name: "端午", date: "2025-05-31" },
    { id: 'guoqing', name: "国庆节", date: "2025-10-01" },
    { id: 'zhongqiu', name: "中秋节", date: "2025-09-17" },
    { id: 'yuandan', name: "元旦", date: "2026-01-01" },
    { id: 'chunjie', name: "春节", date: "2026-02-16" },
];

function calculateCountdown(holidayDate) {
    const now = new Date();
    const holiday = new Date(holidayDate);
    const timeDiff = holiday - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

function updateCountdowns() {
    holidays.forEach(holiday => {
        const countdown = calculateCountdown(holiday.date);
        document.getElementById(`days-${holiday.id}`).textContent = countdown.days;
        document.getElementById(`hours-${holiday.id}`).textContent = countdown.hours;
        document.getElementById(`minutes-${holiday.id}`).textContent = countdown.minutes;
        document.getElementById(`seconds-${holiday.id}`).textContent = countdown.seconds;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 每秒更新一次倒计时
    setInterval(updateCountdowns, 1000);
});