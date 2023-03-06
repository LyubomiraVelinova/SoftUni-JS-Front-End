// FIRST VAR ?

function radioCrystals(numbers) {
    let targetThickness = numbers[0];
    let chunksThickness = numbers.slice(1);

    const cut = (n) => n / 4;
    const lap = (n) => 0.8 * n;
    const grind = (n) => n - 20;
    const etch = (n) => n - 2;
    const xray = (n) => n + 1;

    chunksThickness.forEach(thickness => {
        let totalCut = 0;
        let totalLap = 0;
        let totalGrind = 0;
        let totalEtch = 0;
        console.log(`Processing chunk ${thickness} microns`);

        while (thickness !== targetThickness) {
            let currentThickness = solve(thickness, 'Cut');

            while (currentThickness >= targetThickness) {
                thickness = currentThickness;
                totalCut++;
            }
            if (totalCut > 0) {
                thickness = Math.floor(thickness);
                console.log(solve(totalCut, 'Cut'));
            }

            function solve(currentThickness, operation) {
                let result;
                switch (operation) {
                    case "Cut": result = currentThickness / 4; break;
                    case "Lap": result = 0.8 * currentThickness; break;
                    case "Grind": result = currentThickness - 20; break;
                    case "Etch": result = currentThickness - 2; break;
                    case "X-ray": result = currentThickness + 1; break;
                }
                return result;
            }

            function solve1(currentThickness, targetThickness, operation) {
                let counter = 0
                while (currentThickness >= targetThickness) {
                    thickness = currentThickness;
                    counter++;
                }
                if (counter > 0) {
                    thickness = Math.floor(thickness);
                    return `${operation} x${counter}\nTransporting and washing`;
                }
            }

            
            while (lap(thickness) >= targetThickness) {
                thickness = lap(thickness);
                totalLap++;
            }
            if (totalLap > 0) {
                thickness = Math.floor(thickness);
                console.log(solve(totalLap, 'Lap'));
            }
            
            while (grind(thickness) >= targetThickness) {
                thickness = grind(thickness);
                totalGrind++;
            }
            if (totalGrind > 0) {
                thickness = Math.floor(thickness);
                console.log(solve(totalGrind, 'Grind'));
            }
            
            while (etch(thickness) + 1 >= targetThickness) {
                thickness = etch(thickness);
                totalEtch++;
            }
            if (totalEtch > 0) {
                thickness = Math.floor(thickness);
                console.log(solve(totalEtch, 'Etch'));
            }
            
            if (thickness < targetThickness) {
                thickness = xray(thickness);
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${targetThickness} microns`);

        function solve(counter, operation) {
            if (counter > 0) {
                return `${operation} x${counter}\nTransporting and washing`;
            }
        }
    });     
}


// SECOND VAR

function radioCrystals(numbers) {
    let targetThickness = numbers[0];
    let chunksThickness = numbers.slice(1);

    const cut = (n) => n / 4;
    const lap = (n) => 0.8 * n;
    const grind = (n) => n - 20;
    const etch = (n) => n - 2;
    const xray = (n) => n + 1;

    chunksThickness.forEach(thickness => {
        let totalCut = 0;
        let totalLap = 0;
        let totalGrind = 0;
        let totalEtch = 0;
        console.log(`Processing chunk ${thickness} microns`);

        while (thickness !== targetThickness) {
            while (cut(thickness) >= targetThickness) {
                thickness = cut(thickness);
                totalCut++;
            }
            if (totalCut > 0) {
                thickness = Math.floor(thickness);
                console.log(solve(totalCut, 'Cut'));
            }
            
            while (lap(thickness) >= targetThickness) {
                thickness = lap(thickness);
                totalLap++;
            }
            if (totalLap > 0) {
                thickness = Math.floor(thickness);
                console.log(solve(totalLap, 'Lap'));
            }
            
            while (grind(thickness) >= targetThickness) {
                thickness = grind(thickness);
                totalGrind++;
            }
            if (totalGrind > 0) {
                thickness = Math.floor(thickness);
                console.log(solve(totalGrind, 'Grind'));
            }
            
            while (etch(thickness) + 1 >= targetThickness) {
                thickness = etch(thickness);
                totalEtch++;
            }
            if (totalEtch > 0) {
                thickness = Math.floor(thickness);
                console.log(solve(totalEtch, 'Etch'));
            }
            
            if (thickness < targetThickness) {
                thickness = xray(thickness);
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${targetThickness} microns`);

        function solve(counter, operation) {
            if (counter > 0) {
                // currentThickness = Math.floor(currentThickness);
                return `${operation} x${counter}\nTransporting and washing`;
                // return currentThickness;
            }
        }
    });     
}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);