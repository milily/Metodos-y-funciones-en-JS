/**
 * OBJETO CON PROPIEDADES COMO: ARREGLOS Y FUNCIONES
 */
const animales = {

    /**
     * Propiedad mascota, es un arreglo
     */
    mascotas: ['perros','gatos','canarios','pez','serpiente','mariposa'],

    /**
     * La propiedad 'eliminarMascota' es una función anónima que recibe un parametro de tipo String,
     * el método 'filter()' filtra el array y si los elementos del filter no son iguales al parámetro de la función,
     * lo elimina y retorna el array mascotas actualizado con los elementos obtenidos del 'filter'
     * @param {String}
     */
    eliminarMascota: function(tipoMascota){
        const mascotasFilter = this.mascotas.filter(elemento => elemento !== tipoMascota)
        return this.mascotas = mascotasFilter
    },

    /**
     * La propiedad eliminarUltimaMascota es una función anónima que mediante el método 'pop()'elimina
     * el último elemento del array mascotas y lo retorna actualizado 
     */
    eliminarUltimaMacotas: function(){
        this.mascotas.pop()
        return this.mascotas
    },

    /**
     * La propiedad agregarMascotas es una función anónima que recibe un parámetro de tipo String y
     * que mediante el método 'push()' actualiza el array mascotas y lo retorna con el nuevo elemento agregado
     * @param {String} nuevaMascota 
     */
    agregarMascotas: function(nuevaMascota){
        this.mascotas.push(nuevaMascota)
        return this.mascotas
    },

    /**
     * La propiedad contadorMascotasTerminaConOs es una función anónima que mediante el método 'forEach()'
     * y el método 'endWith()' permite iterar y revisar si cada palabra que contiene el array termina con 'os'
     * si el elemento cumple con la condición el contador 'mascotaTerminaConOs', inicializado en 0 
     * le va sumando 1 y retornamos un String con un mensaje mostrando el número total 
     * de coincidencias encontradas.
     */
    contadorMascotasTerminaConOs: function(){
        let mascotaTerminaConOs = 0
        this.mascotas.forEach(elemento => {
            if(elemento.endsWith('os')){
                mascotaTerminaConOs += 1
            }  
        })
        return `En el arreglo hay ${mascotaTerminaConOs} mascotas que terminan con 'os'`
    }
}


/**
 * USANDO DESESTRUCTURACIÓN
 */


/**
 * variable de tipo Objecto
 */
const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicacion: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
}

/**
 * La función mostrarMensaje desestructura el parámetro ingresado, hace una validación sobre la propiedad
 * hijos: si la propiedad trae un 'undefined', se le asignará un valor de tipo String que lo reemplazará,
 * y retorna String con un mensaje específico usando las variables de la desestructuración.
 * @function mostrarMensaje
 * @param {Object} trabajador 
 */
function mostrarMensaje(trabajador){
    const{
        nombre,
        cargo,
        empresa:{
            datos:{
                nombre: nombreEmpresa,
            }
        },
        gustos: [gusto1, ...resto],
        hijos
    } = trabajador

    const nuevoHijo = hijos ? hijos : "no tiene hijos";
    console.log(hijos)
    return `El trabajador ${nombre} trabaja en ${nombreEmpresa} con cargo ${cargo} y 
        le gusta ${gusto1}, ${resto.length} más y ${nuevoHijo}`
}

/**
 * La función mostrarMensaje2 desestructura el parámetro ingresado, 
 * y retorna un String con un mensaje específico usando las variables de la desestructuración.
 * @function mostrarMensaje2
 * @param {Object} trabajador 
 */
function mostrarMensaje2(trabajador){
    const{
        nombre,
        cargo,
        empresa:{
            ubicacion:{
                comuna,
                puesto,
            },
            clientes:[cliente1, cliente2]
        }
    } = trabajador 

    return `El trabajador ${nombre} va a su trabajo en ${comuna}, es ${cargo}, en el puesto ${puesto}, trabaja con ${cliente1} y ${cliente2}`
}