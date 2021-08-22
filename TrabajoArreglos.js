/**
 * 1.Crear un arreglo de objetos que guarde información de una universidad. La información que se guarda por cada universidad es el nit, el nombre, dirección, teléfono. Como  mínimo debe de guardar 5 universidades.
 * 2.Crear un arreglo de objetos que guarde información de un estudiante. La información que se guarda por cada estudiante es la identificación, nombre, apellido, edad, el número del semestre que esta realizando, el valor de semestre pagado y el nit de la universidad a la que pertenece. Como mínimos debe de guardar 12 estudiantes.
 * 3.Realizar un algoritmo que permita imprimir la identificación, nombre y apellidos de los 5 estudiantes que tienen el mayor valor del semestre pagado.
 * 4.Realizar un algoritmo que imprima el nombre de todas las universidades junto con el promedio del valor del semestre pagado de los estudiantes de la universidad.
 * 5.Realizar un algoritmos que imprima los estudiantes menores de edad de cada universidad.
 * @author Mateo Martinez, Sebastian Viafara, Alexander Restrepo
 * @version 1.0.0
 */

/**
 * 1. realizar el arreglo de UNIVERSIDAD
 */

const UNIVERSIDADES =
    [
        { nit: 1, "nombre": "UdeM", "adireccion": "Cl 34 # 10-11", "telefono": "3030164839" },
        { nit: 2, "nombre": "UdeA", "direccions": "Cl 63 # 2-12", "telefono": "3103850237" },
        { nit: 3, "nombre": "UPB", "direccion": "Cr 4 # 87-11", "telefono": "3024329876" },
        { nit: 4, "nombre": "EIA", "direccion": "Cl 18 # 10-1", "telefono": "3025968439" },
        { nit: 5, "nombre": "UNAl", "direccion": "Cr 44 # 40-13", "telefono": "3203847590" },
    ]

/**
* 2. realizar el arreglo de ESTUDIANTES
*/
const ESTUDIANTES =
    [
        { nit_universidad: 1, "nombre": "Carlos Ángel", "apellidos": "González Giraldo", "id": 1020497009, edad: 16, "semestre": "3", valor_semestre: 40000 },
        { nit_universidad: 1, "nombre": "Diego", "apellidos": "Álvarez Atamiranda", "id": 1039102082, edad: 15, "semestre": "3", valor_semestre: 60000 },
        { nit_universidad: 1, "nombre": "Juan Pablo", "apellidos": "Moscoso Mesa", "id": 1037659569, edad: 17, "semestre": "6", valor_semestre: 50000 },
        { nit_universidad: 1, "nombre": "Sebastián Jair", "apellidos": "Murillo Viafara", "id": 1000018690, edad: 14, "semestre": "2", valor_semestre: 20000 },
        { nit_universidad: 1, "nombre": "Jean Marco", "apellidos": "Pedraza Zapata", "id": 1001687235, edad: 11, "semestre": "6", valor_semestre: 90000 },
        { nit_universidad: 1, "nombre": "Santiago", "apellidos": "Escobar Escobar", "id": 1193413639, edad: 11, "semestre": "1", valor_semestre: 80000 },
        { nit_universidad: 1, "nombre": "Mateo", "apellidos": "Martínez Marulanda", "id": 1000874985, edad: 16, "semestre": "2", valor_semestre: 70000 },
        { nit_universidad: 1, "nombre": "Mateo", "apellidos": "Rivera Arias", "id": 1000903050, edad: 15, "semestre": "9", valor_semestre: 10000 },
        { nit_universidad: 1, "nombre": "Michael Stev", "apellidos": "Cardenas Quintero", "id": 1040260872, edad: 16, "semestre": "8", valor_semestre: 20000 },
        { nit_universidad: 1, "nombre": "Alexis", "apellidos": "Patiño Agudelo", "id": 1000206832, edad: 17, "semestre": "4", valor_semestre: 30000 },
        { nit_universidad: 1, "nombre": "Alexander", "apellidos": "Restrepo Múnera", "id": 1000918870, edad: 12, "semestre": "5", valor_semestre: 40000 },
        { nit_universidad: 1, "nombre": "Santiago", "apellidos": "Posada Bernal", "id": 1010027176, edad: 11, "semestre": "3", valor_semestre: 100000 },

    ]

/**
 *  3. Identificación, nombre y apellidos de los 5 estudiantes que tienen el mayor valor del semestre pagado
 */

console.log(" ");
console.log("*************************** LOS 5 ESTUDIANTES QUE PAGARON MAS EN EL SEMESTRE ***************************");
console.log(" ");

const estudiantesmejorespagos = []
let acumay
let estu = 0
for (let x = 0; x < 5; x++){
    for (let i = 0; i < ESTUDIANTES.length; i++) {
        const estudiantestemp = ESTUDIANTES[i];
        for (let j = 0; j < ESTUDIANTES.length; j++) {
            if(estudiantestemp.valor_semestre >= ESTUDIANTES[j].valor_semestre){
                acumay ++
            }
        }
        if(estu != 5){
            if(acumay == ESTUDIANTES.length - estu){
                estudiantesmejorespagos.push(estudiantestemp.nombre + " " + estudiantestemp.apellidos + " ID: " + estudiantestemp.id)
                console.log(estudiantesmejorespagos[estu])
                estu ++
            }
        }
        acumay = 0
    }
}

/**
 *  4. Nombre de todas las universidades junto con el promedio del valor del semestre pagado de los estudiantes de la universidad.
 */

console.log(" ");
console.log("*************************** VALOR PROMEDIO DEL SEMESTRE POR UNIVERSIDAD ***************************");
console.log(" ");

const PromedioUniversidad = () => {
    let Cont = 0
    let Acum = 0
    let Prom = 0
    for (let x = 0; x < UNIVERSIDADES.length; x++) {
        const universidad = UNIVERSIDADES[x];
        for (let index = 0; index < ESTUDIANTES.length; index++) {
            const estudiante = ESTUDIANTES[index];
            if (estudiante.nit_universidad == universidad.nit) {
                Acum += estudiante.valor_semestre
                Cont += 1
            }
        }
        Prom = Acum / Cont
        console.log("El promedio de la universidad " + universidad.nombre + " es " + Prom.toFixed(2))
        Acum = 0
        Cont = 0
    }
}
PromedioUniversidad();

/**
 * 5. Estudiantes menores de edad de cada universidad
 */

console.log(" ");
console.log("*************************** MENORES DE EDAD POR UNIVERSIDAD ***************************");
console.log(" ");

const buscar_menor = () => {
    for (let index = 0; index < UNIVERSIDADES.length; index++) {
        const universidad = UNIVERSIDADES[index];
        console.log("Los menores de edad de la universidad " + universidad.nombre + " son:");
        for (let index = 0; index < ESTUDIANTES.length; index++) {
            const estudiante = ESTUDIANTES[index];
            //console.log("nit u: ",universidad.nit," nit e: " , estudiante.nit_universidad);
            if (estudiante.nit_universidad == universidad.nit && estudiante.edad < 18) {
                console.log("- " + estudiante.nombre + " con: " + estudiante.edad + " años");
            }
        }
    }
}
buscar_menor();
