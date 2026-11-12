const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/Week8';

// Schema with the new city field
const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
  salary: Number,
  city: String // new field
});

const Person = mongoose.model('Person', PersonSchema, 'personCollection');

// Function to insert one document
async function insertOne() {
  const doc1 = new Person({
    name: 'Yousuf',
    age: 44,
    gender: 'Male',
    salary: 3456
  });
  const savedDoc = await doc1.save();
  console.log('One document inserted');
  console.log(savedDoc);
}

// Insert records that include a city
async function insertWithCity() {
  const peopleWithCity = [
    { name: 'AlexCity', age: 29, gender: 'Male', salary: 3000, city: 'London' },
    { name: 'PriyaCity', age: 34, gender: 'Female', salary: 4200, city: 'London' },
    { name: 'SamCity', age: 41, gender: 'Male', salary: 3800, city: 'Manchester' },
    { name: 'LeilaCity', age: 25, gender: 'Female', salary: 2900, city: 'Leeds' }
  ];
  const result = await Person.insertMany(peopleWithCity);
  console.log('Records with city inserted');
  console.log(result);
}

// Find people from a specific city
async function findByCity() {
  const givenCity = 'London';
  const docs = await Person.find({ city: givenCity })
    .select('name age city');
  console.log(`People from ${givenCity}:`);
  docs.forEach(doc => {
    console.log(doc.name, doc.age, doc.city);
  });
}

// Function to insert many documents
async function insertMany() {
  const manypersons = [
    { name: 'SimonNHQ', age: 42, gender: 'Male', salary: 3456 },
    { name: 'NeeshaNN', age: 53, gender: 'Female', salary: 1000 },
    { name: 'MaryNHQ', age: 27, gender: 'Female', salary: 5402 },
    { name: 'MikeNJQ', age: 40, gender: 'Male', salary: 4519 }
  ];
  const result = await Person.insertMany(manypersons);
  console.log('Many documents inserted');
  console.log(result);
}

// Function to find all the documents
async function findAll() {
  const docs = await Person.find({})
    .sort({ salary: 1 }) // sort by salary ascending
    .select('name salary age')
    .limit(5);
  console.log('Showing multiple documents');
  docs.forEach(doc => {
    console.log(doc.age, doc.name, doc.salary);
  });
}

// Find females with age >= 30
async function findFemalesOver30() {
  const givenAge = 30;
  const docs = await Person.find({
    gender: 'Female',
    age: { $gte: givenAge }
  })
    .sort({ salary: 1 })
    .select('name salary age')
    .limit(5);
  console.log(`Females aged ${givenAge} or above:`);
  docs.forEach(doc => {
    console.log(doc.age, doc.name, doc.salary);
  });
}

// Count all documents
async function countDocuments() {
  const count = await Person.countDocuments();
  console.log('Total Documents Count:', count);
}

// Delete documents aged 45 or over
async function deleteManyPersons() {
  const result = await Person.deleteMany({
    age: { $gte: 45 }
  });
  console.log('Deleted documents:', result);
}

// Update all females' salary to 5555
async function updateManyPersons() {
  const result = await Person.updateMany(
    { gender: 'Female' },
    { salary: 5555 }
  );
  console.log('Update successful');
  console.log(result);
}

async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to ${MONGO_URI}`);

   
  
    await insertWithCity();
    await findByCity();
    // await insertOne();
    // await insertMany();
    // await findAll();
    // await findFemalesOver30();
    // await countDocuments();
    // await deleteManyPersons();
    // await updateManyPersons();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Connection closed');
  }
}

main();
