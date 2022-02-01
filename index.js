// Code your solution in this file!
    function distanceFromHqInBlocks(blocks){
        return Math.abs(blocks - 42);
    }
    
    function distanceFromHqInFeet(blocks){
         let feet = distanceFromHqInBlocks(blocks) * 264;
        return feet;
    }
    
    function distanceTravelledInFeet(start, destination){
       let blocks = Math.abs(start - destination);
       return blocks * 264;
    }

    function calculatesFarePrice(start, destination){
        let chargedDistance = distanceTravelledInFeet(start, destination) - 400;
        let costInDollars = chargedDistance * .02 ;
        let blocks = Math.abs(start - destination);
        let feet = blocks * 264;
            if (chargedDistance < 0) {
                let costInDollars = 0;
                return costInDollars;
            }
            else if (feet > 2500){
                return "cannot travel that far";                
            }
            else if(feet > 2000){
                let costInDollars = 25;
                return costInDollars;
            }
            else {
                return costInDollars;
            }
    }