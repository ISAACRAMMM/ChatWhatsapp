const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])





const flowPierna=addKeyword(['pierna', 'rutina de pierna','ejecicios de pierna','piernas'])
    .addAnswer({media: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.salter.es%2Fsalter-challenge-dia-5-ejercicios-de-piernas%2F&psig=AOvVaw0eVBWUrEwk2DcKYsmBet6h&ust=1701397272742000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjO2fLU6oIDFQAAAAAdAAAAABAE'})

const flowPecho=addKeyword(['pecho', 'rutina de pecho','ejecicios de pecho','pectorales'])

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
        [flowSecundario]
        )
    

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
