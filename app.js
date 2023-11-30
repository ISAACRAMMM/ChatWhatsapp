const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])





const flowPierna=addKeyword(['pierna', 'rutina de pierna','ejecicios de pierna','piernas'])
    .addAnswer(['Esta es tu rutina de pierna','Empecemos con...'])
    .addAnswer('sentadillas series de 10 a 12 repeticiones ...',
        {media: 'https://www.entrenamientos.com/media/cache/exercise_750/uploads/exercise/media-sentadilla-con-barra-init-pos-8649.png'}
        )
    .addAnswer('mensaje',
        {media: './images/img simulacion.png'}
        )
    .addAnswer('Cuando termines dirígete a la prensa donde vamos a hacer 4 series de peso moderado de 14 a 16 repeticiones ',
        {media: 'https://www.entrenamientos.com/media/cache/exercise_750/uploads/exercise/prensa-horizontal-en-maquina-init-pos-5520.png'}
        )
    

const flowPecho=addKeyword(['pecho', 'rutina de pecho','ejecicios de pecho','pectorales'])
    .addAnswer('Esta es tu rutina de pierna')
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

const flowEspalda=addKeyword(['espalda', 'rutina de espalda','ejecicios de espalda'])

const flowGluteo=addKeyword(['gluteo', 'rutina de gluteo', 'ejercicios de gluteo','pompa','culo','nalgas'])

const flowTriceps=addKeyword(['tricep','triceps', 'rutina de tricep','ejecicios de triceps','rutina de triceps'])

const flowBiceps=addKeyword(['biceps', 'bicep', 'rutina de biceps','ejecicios de biceps','ejercicios de biceps'])

const flowAbdomen=addKeyword(['abdomen', 'abs','rutina de abdomen','ejercicios de abdomen'])

const flowPrincipal = addKeyword(['hola', 'buenas', 'rutina', 'me das una rutina'])
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
        [flowAbdomen]
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
