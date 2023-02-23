function fruits() {
    /* Las variables solo pueden ser usadas dentro del Bloque
    Para eso solo utilizaremos let, const */

    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }

    console.log(fruit1); // var
    console.log(fruit2); // let
    console.log(fruit3); // const

    // esto = {}, es un bloque
}