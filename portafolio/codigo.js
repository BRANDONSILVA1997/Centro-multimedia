dinero1 = prompt("¿Cuánto dinero tienes 1?");
dinero2 = prompt("¿Cuánto dinero tienes 2?");
dinero3 = prompt("¿Cuánto dinero tienes 3?");

if (dinero1 >= 0.6 && dinero1 < 1){
    alert("Compra el helado de agua")
}

else if (dinero1 >= 1 && dinero1 <  1.6){
    alert("Compra el helado de crema")
}

else if (dinero1 >= 1.6 && dinero1 <  1.7){
    alert("Compra el helado de nuez")
}

else if (dinero1 >= 1.7 && dinero1 <  1.8){
    alert("Compra el helado de vainilla")
}

else if (dinero1 >= 1.8 && dinero1 <  2.9){
    alert("Compra el helado de fresa")
}

else if (dinero1 >= 2.9){
    alert("Compra el helado fino")
} else {
    alert("No alcanza el dinero")
}

