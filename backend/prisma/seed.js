const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const existingSppg = await prisma.sppg.findFirst()
  if (existingSppg) {
    console.log("Data sudah ada. Mengabaikan seeding.")
    return
  }

  const sppg1 = await prisma.sppg.create({
    data: {
      name: 'Dapur Sentral Jakarta Pusat',
      location: 'Jl. Merdeka No. 1, Jakarta Pusat',
      contactNumber: '081234567890'
    }
  })

  const school1 = await prisma.school.create({
    data: {
      name: 'SDN 01 Menteng',
      location: 'Jl. Menteng Raya No. 2, Jakarta Pusat',
      contactNumber: '081987654321'
    }
  })

  const menu1 = await prisma.menu.create({
    data: {
      name: 'Nasi Tim Ayam Jamur',
      description: 'Menu SPPG Standard Tinggi Protein',
      calories: 320,
      protein: 24,
      carbs: 45,
    }
  })

  const dist1 = await prisma.distribution.create({
    data: {
      date: new Date(),
      status: 'DIKIRIM',
      deliveryToken: 'TRX-992-81A',
      sppgId: sppg1.id,
      schoolId: school1.id,
      menuId: menu1.id
    }
  })

  console.log('Seed data berhasil dimasukkan! Distribusi awal telah terbuat.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
