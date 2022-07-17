const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient()
const users = [
    { username: "admin", password: "changeme" },
]

async function main() {
    users.map( async (user) => {
        let hashedPassword = await bcrypt.hash(user.password, 12)
        let response = await prisma.user.upsert({
            where: { username: user.username },
            update: {},
            create: {
                username: user.username,
                password: hashedPassword
            }
        })
        console.log(`Created user with ID: ${response.id}`)
    })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })