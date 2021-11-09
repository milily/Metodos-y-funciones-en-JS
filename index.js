const animales = {
    mascotas: ['perros','gatos','canarios','pez','serpiente','mariposa'],
    eliminarMascota: function(tipoMascota){
        const mascotasFilter = this.mascotas.filter(elemento => elemento !== tipoMascota)
        return this.mascotas = mascotasFilter
    },
    eliminarUltimaMacotas: function(){
        this.mascotas.pop()
        return this.mascotas
    },
    agregarMascotas: function(nuevaMascota){
        this.mascotas.push(nuevaMascota)
        return this.mascotas
    },
    contadorMascotas: function(){
        let mascotaConOs = 0
        this.mascotas.forEach(elemento => {
            if(elemento.endsWith('os')){
                mascotaConOs += 1
            }  
        })
        return `En el arreglo hay ${mascotaConOs} mascotas que terminan con 'os'`
    }
}


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

function mensaje(trabajador){
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

function mensaje2(trabajador){
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