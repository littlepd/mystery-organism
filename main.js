// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(number, baseArray) {
  return {
    specimenNum: number,
    dna: baseArray,
    mutate() {
      const firstBase = this.dna[0];
      do {
        const randBase = returnRandBase();
      } while (firstBase === randBase);
      return randBase;
    },
    compareDNA(pAequor) {
      let match = 0;
      for (let i = 0; i < this.dna.length - 1; i++) {
        if (pAequor.dna[i] === this.dna[i]) {
          match += 1;
        }
      }
      const percentMatch = match / this.dna.length;
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentMatch}% DNA in common.`);
    },
    willLikelySurvive() {
      let CGCount = 0;
      for (let i = 0; i < this.dna.length - 1; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          CGCount += 1;
        }
      }
      const percentCG = CGCount / this.dna.length;
      if (percentCG >= 0.60) {
        return true;
      }
      return false;
    }
  }
};

let pAequorNum = 0;
let survivalCount = 0;
let newPAequor = {};
const pAequorArray = [];
do {
  pAequorNum++;
  newPAequor = pAequorFactory(pAequorNum, mockUpStrand());
  if (newPAequor.willLikelySurvive()) {
    pAequorArray.push(newPAequor);
    survivalCount++;
    if (survivalCount > 1) {
      pAequorArray[0].compareDNA(newPAequor);
    }
  }
} while (survivalCount < 30);
console.log(pAequorArray);




