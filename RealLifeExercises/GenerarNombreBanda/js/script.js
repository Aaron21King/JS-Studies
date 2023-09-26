function generateBandName() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    const adjectives = ["Cosmic", "Electric", "Funky", "Time-Traveling"];
    const nouns = ["Dragons", "Ninjas", "Samurais", "Wizards"];
  
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
    const bandName = `${randomAdjective} ${randomNoun}`;
  
    return `El nombre de tu banda para las ${hour}:${minutes} es: ${bandName}`;
  }
  
  const bandName = generateBandName();
  console.log(bandName);
  