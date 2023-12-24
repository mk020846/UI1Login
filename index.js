function color() {
    colors = {0:"orange",1:"red",2:"blueviolet",3:"white",4:"white",5:"white",6:"cyan"}
    selected_color = colors[Math.floor(Math.random() * 7)]
    return selected_color
}
function createParticles() {
    const particleContainer = document.getElementById('particleContainer')
    for (let i = 0; i < 400; i++) {
        const Particle = document.createElement('div')
	const TargetDiv = document.getElementById('form')
        Particle.className = 'particle'
        Particle.style.backgroundColor = "white"
        Particle.style.left = Math.random() * window.innerWidth / 2
        Particle.style.top = Math.random() * window.innerHeight 
        Particle.style.animation = `moveParticle ${Math.random() * 10 + 1}s linear infinite`
        Particle.style.transform = `translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px)`
        particleContainer.appendChild(Particle)
    }
}

createParticles()