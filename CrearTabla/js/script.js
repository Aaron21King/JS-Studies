let arrayPersons = [
    {
        name: "Aaron", age: 22, vaccinated: true, gender: "Man"
    },
    {
        name: "Alejandra", age: 54, vaccinated: false, gender: "Woman"
    },
    {
        name: "Jose", age: 52, vaccinated: false, gender: "Man"
    },
    {
        name: "William", age: 28, vaccinated: true, gender: "Man"
    },
    {
        name: "Josue", age: 21, vaccinated: false, gender: "Man"
    },
    {
        name: "Ximena", age: 23, vaccinated: true, gender: "Woman"
    },
    {
        name: "John", age: 29, vaccinated: true, gender: "Man"
    },
    {
        name: "Becky", age: 40, vaccinated: false, gender: "Woman"
    },
    {
        name: "Yeni", age: 37, vaccinated: false, gender: "Woman"
    },
    {
        name: "Eduardo", age: 29, vaccinated: true, gender: "Man"
    },
    {
        name: "Javier", age: 22, vaccinated: false, gender: "Man"
    },
    {
        name: "Alexis", age: 23, vaccinated: true, gender: "Man"
    },
    {
        name: "Sasha", age: 28, vaccinated: true, gender: "Woman"
    },
    {
        name: "Lila", age: 18, vaccinated: true, gender: "Woman"
    },
    {
        name: "Alicia", age: 18, vaccinated: true, gender: "Woman"
    },
];


const createTable = () => {
console.log('Aaron creando una tabla')
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const trHead = document.createElement('tr');

    const thName = document.createElement('th');
    const thAge = document.createElement('th');
    const thVacci = document.createElement('th');
    const thGender = document.createElement('th');

    const textName = document.createTextNode('name');
    const textAge = document.createTextNode('age');
    const textVacci = document.createTextNode('vaccinated');
    const textGender = document.createTextNode('gender');

    thName.appendChild(textName);
    thAge.appendChild(textAge);
    thVacci.appendChild(textVacci);
    thGender.appendChild(textGender);

    table.appendChild(thead);
    table.appendChild(tbody)

    thead.appendChild(trHead);
    trHead.appendChild(thName);
    trHead.appendChild(thAge);
    trHead.appendChild(thVacci);
    trHead.appendChild(thGender);
    
    document.body.appendChild(table);

    arrayPersons.forEach((persona) => {
        const trPerson = document.createElement('tr');

        const tdName = document.createElement('td');
        const tdAge = document.createElement('td');
        const tdVacci = document.createElement('td');
        const tdGender = document.createElement('td');

        const textValueName = document.createTextNode(persona.name);
        const textValueAge = document.createTextNode(persona.age);

        const isVacci = persona.vaccinated === true ? 'vaccinated' : 'no vaccinated';
        const textVacci = document.createTextNode(isVacci);

        const isGender = persona.vaccinated === true ? 'Man' : 'Woman';
        const textGender = document.createTextNode(isGender);

        tdName.appendChild(textValueName);
        tdAge.appendChild(textValueAge);
        tdVacci.appendChild(textVacci);
        tdGender.appendChild(textGender);

        trPerson.appendChild(tdName);
        trPerson.appendChild(tdAge);
        trPerson.appendChild(tdVacci);
        trPerson.appendChild(tdGender);
        tbody.appendChild(trPerson);
    });
};

createTable()

