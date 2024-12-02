//1. Encuentra todos los animales con el tipo "Ave".
db.Animals.find({ "type": "Bird" })

//2. Lista todos los animales encontrados en "Australia".
db.Animals.find({ "found_in_countries": "Australia" })

//3. Recupera los animales con un estado_de_conservación de "En Peligro Crítico".
db.Animals.find({ "conservation_status": "Critically Endangered" })

//4. Selecciona los animales que son "Herbívoros" y tienen un hábitat de "Bosque".
db.Animals.find({"diet": "Herbivore", "habitat": "Forest" })

//5. Obtén todos los animales con un peso superior a 400 kg.
db.Animals.find({"physical_characteristics.weight": {"$gt": 400} })

//6. Busca todos los animales con una altura inferior a 1 metro.
db.Animals.find({"physical_characteristics.height": {"$lt": 1} })

//7. Consulta por animales que tienen "China" en su lista de países_donde_se_encuentran.
db.Animals.find({ "found_in_countries": "China" })

//8. Encuentra animales con una dieta de "Omnívoro" y un estado_de_conservación de "En Peligro".
db.Animals.find({ "diet": "Omnivore", "conservation_status": "Endangered" })

//9. Muestra todos los animales que tienen "León" en su nombre_común.
db.Animals.find({ "common_name": "Lion" })

//10. Extrae todas las entradas que tienen una longitud mayor a 2 metros.
db.Animals.find({"physical_characteristics.height": {"$gt": 2} })

//11. Encuentra los animales que tienen "África" en su lista de países_donde_se_encuentran.
db.Animals.find({ "found_in_countries": "Africa" })

//12. Lista todos los animales cuyo nombre_científico comienza con la letra "A".
db.Animals.find({ "scientific_name": { "$regex": "^A" } })

//13. Busca animales que son "Carnívoros" y tienen un peso inferior a 50 kg.
db.Animals.find({"diet": "carnivore", "physical_characteristics.weight": {"$lt": 50} })

//14. Recupera todos los animales que tienen un estado_de_conservación de "Vulnerable" y un hábitat de "Desierto".
db.Animals.find({ "conservation_status": "Vulnerable", "habitat": "Desert" })

//15. Encuentra los animales cuyo nombre_común contiene la palabra "Tigre".
db.Animals.find({ "common_name": "Tiger" })
