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
        ubicación: {
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

