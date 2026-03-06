function solution(bandage, health, attacks) {
  let currentHealth = health;
  let continuousRecoverySec = 0;
  let attackIndex = 0;
    
    
  for (let i = 0; i <= attacks[attacks.length - 1][0]; i++) {
    if (attacks[attackIndex][0] === i) {
      continuousRecoverySec = 0;
      currentHealth -= attacks[attackIndex][1];
      if (currentHealth <= 0) {
        return -1
      }
      attackIndex++;
    } else {
      continuousRecoverySec++;        
      if (continuousRecoverySec === bandage[0]) {
        currentHealth = currentHealth + bandage[1] + bandage[2];
        continuousRecoverySec = 0
      } else {
        currentHealth += bandage[1];
      }
      currentHealth = currentHealth > health ? health : currentHealth;
    }
  }
  return currentHealth;
}
