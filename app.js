const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])




///
//      -pierna
//
const flowPierna=addKeyword(['pierna', 'rutina de pierna','ejecicios de pierna','piernas'])
    .addAnswer(['Esta es tu rutina de pierna','Empecemos con...'])
    .addAnswer('sentadilla libre series de 10 a 12 repeticiones ...',
        {media: 'https://www.entrenamientos.com/media/cache/exercise_750/uploads/exercise/media-sentadilla-con-barra-init-pos-8649.png'}
        )
    .addAnswer('Puedes *cambiar* la sentadilla libre por la sentadilla en Smith, vas a realizar 4 series de 12 a 14 repeticiones ',
        {media: './images/pierna/sentadilla-smit.png'}
        )
    .addAnswer('Cuando termines dirígete a la prensa donde vamos a hacer 4 series de peso moderado de 14 a 16 repeticiones ',
        {media: 'https://www.entrenamientos.com/media/cache/exercise_750/uploads/exercise/prensa-horizontal-en-maquina-init-pos-5520.png'}
        )
        .addAnswer('Cuando termines con la prensa dirígete a el banco para extensión de cuádriceps es el que se muestra en la imagen☝️ vas a realizar 3 series de 15 repeticiones y vas a alternar con…👇',
        {media: './images/pierna/extension_cuadriceps.jpg'}
        )
        .addAnswer('... extensiones de femoral 3 series de 15 repeticiones _recuerda descansar entre series al menos 60 segundos_',
        {media: './images/pierna/banco-extencion-fem.jpg'}
        )
        .addAnswer('Continuamos con femoral acostado, dirígete al aparato que es un banco y colócate boca abajo para realizar 4 series de 10 repeticiones',
        {media: './images/pierna/curl-femoral.png'}
        )
        .addAnswer('Vamos a finalizar con pantorrillas en la maquina costurera 5 series de 15 repeticiones',
        {media: './images/pierna/extension-de-gemelos-sentado.png'}
        )
    
///
//      -pecho
//
const flowPecho=addKeyword(['pecho', 'rutina de pecho','ejecicios de pecho','pectorales'])
    .addAnswer('Esta es tu rutina de pecho')
    .addAnswer('',
        {media: ''}
        )
    .addAnswer('',
        {media: ''}
        )
    .addAnswer('',
        {media: ''}
        )
    .addAnswer('',
        {media: ''}
        )
    .addAnswer('',
        {media: ''}
        )
///
//      -espalda
//
const flowEspalda=addKeyword(['espalda', 'rutina de espalda','ejecicios de espalda'])
    .addAnswer('Aquí tienes tu rutina de espalda')
    .addAnswer('',
        {media: ''}
        )
///
//      -gluteo
//
const flowGluteo=addKeyword(['gluteo', 'rutina de gluteo', 'ejercicios de gluteo','pompa','culo','nalgas'])
    .addAnswer('Aquí tienes tu rutina de gluteo')
    .addAnswer('',
        {media: ''}
        )
///
//      -triceps
//
const flowTriceps=addKeyword(['tricep','triceps', 'rutina de tricep','ejecicios de triceps','rutina de triceps'])
    .addAnswer('Aquí tienes tu rutina de triceps')
    .addAnswer('',
        {media: ''}
        )
///
//      -biceps
//
const flowBiceps=addKeyword(['biceps', 'bicep', 'rutina de biceps','ejecicios de biceps','ejercicios de biceps'])
    .addAnswer('Aquí tienes tu rutina de biceps')
    .addAnswer('',
        {media: ''}
        )
///
//      -abs
//
const flowAbdomen=addKeyword(['abdomen', 'abs','rutina de abdomen','ejercicios de abdomen'])
    .addAnswer('Aquí tienes tu rutina de abdomen')
    .addAnswer('',
        {media: ''}
        )
///
//      -hombro
//
    const flowHombro=addKeyword(['ombro', 'hombro', 'honbro','rutina de hombro','ejercicios de hombro'])
    .addAnswer('Aquí tienes tu rutina de abdomen')
    .addAnswer('',
        {media: ''}
        )

///
//      -
//
const flowPrincipal = addKeyword(['hola', 'buenas', 'rutina', 'me das una rutina','ahora que sigue','ya acabe', 'que otra cosa hago'])
    .addAnswer('Bien venido!! Soy tu coach virtual Lucas-35')
    .addAnswer([
        'Que vamos a hacer el dia de hoy?',
        '- Pecho',
        '- Espalda',
        '- Pierna',
        '- Gluteo',
        '- Biceps',
        '- Triceps',
        '- Abdomen'
        ],
        null,
        null, 
        [flowSecundario],
        [flowPierna],
        [flowEspalda],
        [flowGluteo],
        [flowTriceps],
        [flowBiceps],
        [flowAbdomen],
        [flowHombro]
        )
    

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowAbdomen,flowBiceps,flowEspalda,flowGluteo,flowPecho,flowPierna,flowTriceps])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
