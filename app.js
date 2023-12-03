const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['mas opciones', 'que me recomiendas', 'recomendaciones'])
    .addAnswer(['📄 Aquí tenemos el flujo secundario'])


const flowTerminar= addKeyword(['finalizar','terminar','fin'])
    .addAnswer('fin')
let valorCal =''
//
//      -calentamiento
//
const flowCalentamiento = addKeyword(['calentamiento'])
    .addAnswer('cal')
    .addAnswer(' ',
        {media: './images/calentamiento/estiramiento-de-hombro.png'}
        )
    .addAnswer(' ',
        {media: './images/calentamiento/estiramiento-cuello.png'}
        )
    .addAnswer(' ',
        {media: './images/calentamiento/estiramiento-extensores-muneca.png'}
        )
    .addAnswer(' ',
        {media: './images/calentamiento/giros de cadera.png'}
        )
    .addAnswer(' ',
        {media: './images/calentamiento/tijeras.png'}
        )

    .addAnswer('Ya que realices tus calentamientos me avisas para continuar con tu rutina')
            .addAction({capture: false},(ctx,{gotoFlow}) =>{
                
                
                    
                    return gotoFlow(flowPierna)
                  /* }
                    if(valorCal=='abs'){
                    return gotoFlow(flowAbdomen)
                    }
                    if(valorCal=='gluteo'){
                    return gotoFlow(flowGluteo)
                    }
                    if(valorCal=='biceps'){
                    return gotoFlow(flowBiceps)
                    }
                    if(valorCal=='triceps'){
                    return gotoFlow(flowTriceps)
                    }
                    if(valorCal=='pecho'){
                    return gotoFlow(flowPecho)
                    }
                    if(valorCal=='espalda'){
                    return gotoFlow(flowEspalda)
                    }
                    if(valorCal=='hombro'){
                    return gotoFlow(flowHombro)
                    }
                    return gotoFlow(flowPrincipal)
                    
                } else {
                
                }  */
            })



const flowcardio = addKeyword('cardio')
.addAnswer(' ',
        {media: './images/cardio/caminadora.png'}
        )


const valoresPermitidos = ['ya', 'ya acabe', 'ya termine','si', 'listo', 'termine'];

///
//      -pierna
//
    const flowPierna=addKeyword(['pierna', 'rutina de pierna','ejecicios de pierna','piernas'])
        .addAnswer(['Antes de comenzar', 'ya realizaste tus calentamientos?'],
            {capture: true},(ctx,{fallBack, gotoFlow}) =>{
                const valoresPermitidosCalentamiento = [ 'aun no', 'no'];
                const valoresConfirmacion = [ 'si', 'ya', 'listo'];

                if (valoresPermitidosCalentamiento.includes(ctx.body)) {
                    valorCal='pierna'
                    return gotoFlow(flowCalentamiento)
                }else if(valoresPermitidosCalentamiento.includes(ctx.body)){
                    
                    return fallBack();
                }  
            })
        .addAnswer(['Esta es tu rutina de pierna','Empecemos con...'])
        .addAnswer('sentadilla libre series de 10 a 12 repeticiones ...',
            {media: 'https://www.entrenamientos.com/media/cache/exercise_750/uploads/exercise/media-sentadilla-con-barra-init-pos-8649.png'},
            )
        .addAnswer('Puedes *cambiar* la sentadilla libre por la sentadilla en Smith, vas a realizar 4 series de 12 a 14 repeticiones ',
            {media: './images/pierna/sentadilla-smit.png'}
            )
            .addAnswer('Dime cuando termines',
            {capture: true,},(ctx,{fallBack})=>{
                if (!valoresPermitidos.includes(ctx.body)) {
                return fallBack();
                }          
            })
        .addAnswer('Cuando termines dirígete a la prensa donde vamos a hacer 4 series de peso moderado de 14 a 16 repeticiones ',
            {media: 'https://www.entrenamientos.com/media/cache/exercise_750/uploads/exercise/prensa-horizontal-en-maquina-init-pos-5520.png'}
            )
            .addAnswer('Dime cuando termines',
            {capture: true,},(ctx,{fallBack})=>{
                if (!valoresPermitidos.includes(ctx.body)) {
                return fallBack();
                }          
            })
        .addAnswer('Cuando termines con la prensa dirígete a el banco para extensión de cuádriceps es el que se muestra en la imagen☝️ vas a realizar 3 series de 15 repeticiones y vas a alternar con…👇',
            {media: './images/pierna/extension_cuadriceps.jpg'}
            )
            .addAnswer('... extensiones de femoral 3 series de 15 repeticiones _recuerda descansar entre series al menos 60 segundos_',
            {media: './images/pierna/banco-extencion-fem.jpg'}
            )
        .addAnswer('Dime cuando termines',
            {capture: true,},(ctx,{fallBack})=>{
                if (!valoresPermitidos.includes(ctx.body)) {
                return fallBack();
                }          
            })
        .addAnswer('Continuamos con femoral acostado, dirígete al aparato que es un banco y colócate boca abajo para realizar 4 series de 10 repeticiones',
            {media: './images/pierna/curl-femoral.png'}
            )
            .addAnswer('Dime cuando termines',
            {capture: true,},(ctx,{fallBack})=>{
                if (!valoresPermitidos.includes(ctx.body)) {
                return fallBack();
                }          
            })
            .addAnswer('Vamos a finalizar con pantorrillas en la maquina costurera 5 series de 15 repeticiones',
            {media: './images/pierna/extension-de-gemelos-sentado.png'}
            )
    
///
//      -pecho
//
const flowPecho=addKeyword(['pecho', 'rutina de pecho','ejecicios de pecho','pectorales'])

    .addAnswer('Esta es tu rutina de pecho')
    .addAnswer('Vas a empezar con press de pecho en maquina realiza 4 series de 10 repeticiones ',
        {media: './images/pecho/press-maquina.png'}
        )
        .addAnswer('Dime cuando termines',
            {capture: true,},(ctx,{fallBack})=>{
                if (!valoresPermitidos.includes(ctx.body)) {
                return fallBack();
                }          
            })
    .addAnswer('Cuando termines continua con press de pecho en banco ( _ajusta la altura al tercer punto partiendo de plano_ ) realiza 4 series de 8 a 12 repeticiones ',
        {media: './images/pecho/Press-de-banca-inclinado.png'}
        )
        .addAnswer('Dime cuando termines',
            {capture: true,},(ctx,{fallBack})=>{
                if (!valoresPermitidos.includes(ctx.body)) {
                return fallBack();
                }          
            })
    .addAnswer('Después te vas a dirigir a la máquina de peck  para realizar aperturas realiza 3 series de 20 repeticiones con un peso bajo',
        {media: './images/pecho/peck.png'}
        )
        .addAnswer('Dime cuando termines',
            {capture: true,},(ctx,{fallBack})=>{
                if (!valoresPermitidos.includes(ctx.body)) {
                return fallBack();
                }          
            })
    .addAnswer('Vamos a terminar pecho realizando fondos en la máquina,  haz 4 series de 12 repeticiones con el agarre cerrado',
        {media: './images/pecho/fondos.png'}
        )
        .addAnswer('Dime cuando termines',
            {capture: true,},(ctx,{fallBack})=>{
                if (!valoresPermitidos.includes(ctx.body)) {
                return fallBack();
                }          
            })
///
//      -espalda
//
const flowEspalda=addKeyword(['espalda', 'rutina de espalda','ejecicios de espalda'])
.addAnswer(['Antes de comenzar', 'ya realizaste tus calentamientos?'],
            {capture: true},(ctx,{fallBack, gotoFlow}) =>{
                const valoresPermitidosCalentamiento = [ 'aun no', 'no'];
                const valoresConfirmacion = [ 'si', 'ya', 'listo'];

                if (valoresPermitidosCalentamiento.includes(ctx.body)) {
                    return gotoFlow(flowCalentamiento)
                }else if(valoresPermitidosCalentamiento.includes(ctx.body)){
                    return fallBack();
                }  
            })
  
            .addAnswer('Aquí tienes tu rutina de espalda')
    .addAnswer('Empieza con jalón a la cara con la barra larga, en aun agarre abierto realiza 4 series de 12 repeticiones',
        {media: './images/espalda/jalon-cara.png'}
        )
    .addAnswer('Ya que acabes cambia la barra por el triangulo para que realices 4 series de 15 repeticiones',
        {media: './images/espalda/jalon-cerrado.png'}
        )
        .addAnswer('Ya que acabes cambia la barra por el triangulo para que realices 4 series de 15 repeticiones',
        {media: './images/espalda/remo-polea.png'}
        )
    .addAnswer('Coloca el aparato de Peck en suposición cerrada inversa para que con poco peso realices 3 series de 20 repeticiones ',
        {media: './images/espalda/aperturas-invertida.png'}
        )
    .addAnswer('',
        {media: './images/espalda/remo-horizontal.png'}
        )
///
//      -gluteo
//
const flowGluteo=addKeyword(['gluteo', 'rutina de gluteo', 'ejercicios de gluteo','pompa','culo','nalgas'])
.addAnswer(['Antes de comenzar', 'ya realizaste tus calentamientos?'],
            {capture: true},(ctx,{fallBack, gotoFlow}) =>{
                const valoresPermitidosCalentamiento = [ 'aun no', 'no'];
                const valoresConfirmacion = [ 'si', 'ya', 'listo'];

                if (valoresPermitidosCalentamiento.includes(ctx.body)) {
                    return gotoFlow(flowCalentamiento)
                }else if(valoresPermitidosCalentamiento.includes(ctx.body)){
                    return fallBack();
                }  
            })
    .addAnswer('Aquí tienes tu rutina de gluteo')
    .addAnswer('El primer ejercicio de tu rutina de glúteo es sentadilla suma, vas a realizar una primera serie de 15 repeticiones sin peso para terminar de calentar.',
        {media: './images/gluteo/sumo-sinPeso.png.jpeg'}
        )
    .addAnswer('Posteriormente con un peso que controles realiza 4 series de 12 a 14 repeticiones',
        {media: './images/gluteo/sumo-peso.jpeg'}
        )
    .addAnswer('Después haz de 16 a 20 desplantes con el peso que puedas',
        {media: './images/gluteo/desplantes.png'}
        )
    .addAnswer('',
        {media: './images/gluteo'}
        )
    .addAnswer('',
        {media: './images/gluteo/hiptrus.jpeg'}
        )
    .addAnswer('',
        {media: './images/gluteo/patada-polea.png'}
        )
///
//      -triceps
//
const flowTriceps=addKeyword(['tricep','triceps', 'rutina de tricep','ejecicios de triceps','rutina de triceps'])
.addAnswer(['Antes de comenzar', 'ya realizaste tus calentamientos?'],
            {capture: true},(ctx,{fallBack, gotoFlow}) =>{
                const valoresPermitidosCalentamiento = [ 'aun no', 'no'];
                const valoresConfirmacion = [ 'si', 'ya', 'listo'];

                if (valoresPermitidosCalentamiento.includes(ctx.body)) {
                    return gotoFlow(flowCalentamiento)
                }else if(valoresPermitidosCalentamiento.includes(ctx.body)){
                    return fallBack();
                }  
            })
    .addAnswer('Aquí tienes tu rutina de triceps')
    .addAnswer('',
        {media: './images/triceps/triangulo.png'}
        )
        .addAnswer('',
        {media: './images/triceps/polea-unamano.jpg'}
        )
        .addAnswer('',
        {media: './images/triceps/rompe-craneos.jpg'}
        )
        .addAnswer('./images/triceps/fondos.png',
        {media: ''}
        )
///
//      -biceps
//
const flowBiceps=addKeyword(['biceps', 'bicep', 'rutina de biceps','ejecicios de biceps','ejercicios de biceps'])
.addAnswer(['Antes de comenzar', 'ya realizaste tus calentamientos?'],
            {capture: true},(ctx,{fallBack, gotoFlow}) =>{
                const valoresPermitidosCalentamiento = [ 'aun no', 'no'];
                const valoresConfirmacion = [ 'si', 'ya', 'listo'];

                if (valoresPermitidosCalentamiento.includes(ctx.body)) {
                    return gotoFlow(flowCalentamiento)
                }else if(valoresPermitidosCalentamiento.includes(ctx.body)){
                    return fallBack();
                }  
            })
    .addAnswer('Aquí tienes tu rutina de biceps')
    .addAnswer('Inclina un banco a 30 0 45 grados con una mancuerna en cada mano a cada lado de sus caderas. Debería utilizar un agarre neutro. Contrayendo los bíceps, doble los codos totalmente supinando las manos mientras exhala. Vuelva a la posición inicial con un suave',
        {media: './images/biceps/curl-biceps-tumbado.png]'}
        )
        .addAnswer('Elige el peso adecuado de una barra z, Contrayendo los bíceps, dobla los codos totalmente como se muestra en la imagen ☝️ así realiza 4 series de 12 repeticiones. Mientras haces el ejercicio, mueve solo la articulación de los codos, asegúrese de no mover ninguna otra parte de tu cuerpo',
        {media: './images/biceps/curl-barra-z.png'}
        )
        .addAnswer('Con unas mancuernas realiza martillos. con una mancuerna en cada mano a cada lado de tus caderas. Contrae los bíceps doblando los codos manteniendo el agarre en todo momento. Realiza 4 series de 15 repeticiones',
        {media: './images/biceps/martillos.png'}
        )
        .addAnswer('Para finalizar con bíceps dirígete a la maquina predicador realiza 4 series de 12 a 15 repeticiones El pecho y la parte superior de los brazos deben colocarse contra las almohadillas. Sostén las manijas frente a ti con los codos extendidos',
        {media: './images/biceps/curl-de-biceps.png'}
        )
        
///
//      -abs
//
const flowAbdomen=addKeyword(['abdomen', 'abs','rutina de abdomen','ejercicios de abdomen'])
.addAnswer(['Antes de comenzar', 'ya realizaste tus calentamientos?'],
            {capture: true},(ctx,{fallBack, gotoFlow}) =>{
                const valoresPermitidosCalentamiento = [ 'aun no', 'no'];
                const valoresConfirmacion = [ 'si', 'ya', 'listo'];

                if (valoresPermitidosCalentamiento.includes(ctx.body)) {
                    return gotoFlow(flowCalentamiento)
                }else if(valoresPermitidosCalentamiento.includes(ctx.body)){
                    return fallBack();
                }  
            })
    .addAnswer('Aquí tienes tu rutina de abdomen')
    .addAnswer('',
        {media: './images/abdomen/abs.png'}
        )
        .addAnswer('',
        {media: './images/abdomen/elevacion-de-piernas.png'}
        )
        .addAnswer('',
        {media: './images/abdomen/plancha-lateral.png'}
        )
///
//      -hombro
//
    const flowHombro=addKeyword(['ombro', 'hombro', 'honbro','rutina de hombro','ejercicios de hombro'])
    .addAnswer(['Antes de comenzar', 'ya realizaste tus calentamientos?'],
            {capture: true},(ctx,{fallBack, gotoFlow}) =>{
                const valoresPermitidosCalentamiento = [ 'aun no', 'no'];
                const valoresConfirmacion = [ 'si', 'ya', 'listo'];

                if (valoresPermitidosCalentamiento.includes(ctx.body)) {
                    return gotoFlow(flowCalentamiento)
                }else if(valoresPermitidosCalentamiento.includes(ctx.body)){
                    return fallBack();
                }  
            })
    .addAnswer('Aquí tienes tu rutina de hombro ')
    .addAnswer('',
        {media: './images/hombro/press-hombro.png'}
        )
    .addAnswer('',
        {media: './images/hombro/press-de-hombros-con-mancuernas.png'}
        )
    .addAnswer('',
        {media: './images/hombro/laterales.png'}
        )
    .addAnswer('',
        {media: './images/hombro/elevacion-frontal.png'}
        )        

///
//      -
//


const flowPrincipal = addKeyword(['hola', 'buenas', 'rutina', 'me das una rutina',])
    .addAnswer('Bien venido!! Soy tu coach virtual Lucas-35')
    .addAnswer(['Que vamos a hacer el dia de hoy?',
        
    '- Pecho',
    '- Espalda',
    '- Pierna',
    '- Gluteo',
    '- Biceps',
    '- Triceps',
    '- Abdomen',
    '',
    '_Escribe lo que vas a entrenar hoy_'],
    null,
    null, 
    [flowSecundario,
    flowPierna,
    flowEspalda,
    flowGluteo,
    flowPecho,
    flowTriceps,
    flowBiceps,
    flowAbdomen,
    flowHombro]
     )
    
    

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowTerminar])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
