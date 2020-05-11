
// translate all at once

const translateAllAtOnce = () => {

    const redCircleTarget = moveElement(document.getElementById('red'), {x: 20, y: 300} );
    const greenCircleTarget = moveElement(document.getElementById('green'), {x: 400, y: 300} );
    const blueCircleTarget = moveElement(document.getElementById('blue'), {x: 400, y: 20} );

    Promise.all([redCircleTarget,greenCircleTarget,blueCircleTarget]).then(()=>console.log('All elements have been moved !'))
    .catch(()=>console.log('Error'))
}

translateAllAtOnce(); 




