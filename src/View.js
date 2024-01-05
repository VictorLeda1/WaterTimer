const View = {
    render({minutes, seconds}) {
        document.body.innerHTML = `        
        <p>Next cup in</p>
        <span>${minutes}:${seconds}</span>
        `;
    }
}

export { View };