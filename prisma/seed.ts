import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'e3c4b8f7-86dd-41ed-a96f-8d716546d69e',
            title: 'Unite summit',
            slug: 'unite-summit',
            details: 'A event for devs all around the world',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded')
})