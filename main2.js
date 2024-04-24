const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findEntrance(floorCount, entranceCount, flatsPerFloor, flatNumber) {
    const totalFlats = floorCount * entranceCount * flatsPerFloor;
    if (floorCount <= 0 || entranceCount <= 0 || flatsPerFloor <= 0 || flatNumber <= 0 || flatNumber > totalFlats) {
        throw "Некорректные данные: такой квартиры нет в доме.";
    }

    const flatsPerEntrance = entranceCount * flatsPerFloor;
    const flatsOnLastFloor = (flatNumber - 1) % flatsPerEntrance;

    const entranceNumber = Math.ceil(flatNumber / flatsPerEntrance);
    return entranceNumber;
}

rl.question('Введите количество этажей: ', (floorCount) => {
    rl.question('Введите количество подъездов: ', (entranceCount) => {
        rl.question('Введите количество квартир на этаже: ', (flatsPerFloor) => {
            rl.question('Введите номер квартиры: ', (flatNumber) => {
                try {
                    floorCount = parseInt(floorCount);
                    entranceCount = parseInt(entranceCount);
                    flatsPerFloor = parseInt(flatsPerFloor);
                    flatNumber = parseInt(flatNumber);

                    const entranceNumber = findEntrance(floorCount, entranceCount, flatsPerFloor, flatNumber);
                    console.log("Номер подъезда: " + entranceNumber);
                } catch (error) {
                    console.log("Ошибка: " + error);
                } finally {
                    rl.close();
                }
            });
        });
    });
});
