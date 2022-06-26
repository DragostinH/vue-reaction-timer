export default function getRandomTimer(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
}