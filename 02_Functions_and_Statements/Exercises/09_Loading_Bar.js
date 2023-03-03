function loadingBar(number) {
    let percents = number / 10;
    if (percents >= 0 && percents < 10) {
        let bar = '%'.repeat(percents) + '.'.repeat(10-percents);
        console.log(`${number}% [${bar}]\nStill loading...`);
    } else if (percents === 10) {
        console.log('100% Complete!\n[%%%%%%%%%%]')
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);