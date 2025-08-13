function cualEsMayor(a, b, c) {
    console.time("Ternario")
    console.log(a > b && a > c ? "A es mayor a B y C" :
        b > a && b > c ? "B es mayor a A y C" : "C es mayor A y B"
    );
    console.timeEnd("Ternario");

    console.time("If");
    if (a > b && a > c) {
        console.log("A es mayor a B y C");
    } else if (b > a && b > c) {
        console.log("B es mayor a A y C");
    }
    else {
        console.log("C es mayor a A y B");
    }
    console.timeEnd("If");
}
cualEsMayor(1,2,3);