// NodeJS yang saya gunakan, yaitu versi 18.16.0, tidak ada kelas Buffer

// Kode di bawah menggunakan cara terbaru, dengan algoritma yang sama `Uint8Array` di balik layar

const encoder = new TextEncoder()
const binaryDataA = encoder.encode('Madyan Eka Septian')
console.info(binaryDataA)

const decoder = new TextDecoder()
const binaryDataB = decoder.decode(binaryDataA)
console.info(binaryDataB)
