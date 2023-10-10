const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const punkBand = await Band.create({
            name: "linkin park",
            genre: "rock"
        })
        // TODO - test creating a band
        expect(punkBand.name).toBe("linkin park");
    })

    test('can create a song', async () => {
        const adele = await Musician.create({
            name: "hello",
            instrument: "voice"
        })
        // TODO - test creating a musician
        expect(adele.name).toBe("hello");

        const song1 = await Song.create({
            title : "OMG",
            year: 2016,
            length: 3
        })
        // TODO - test creating a band
        expect(song1.title).toBe("OMG");
    })
    //})

    test('can update a Band', async () => {
        const punkBand = await Band.create({
            name: "linkin park",
            genre: "rock"
        })
        // TODO - test creating a band

        punkBandUpdate = await punkBand.update({
            name: "FooFighters",
            genre: "rock"
        })
        // TODO - test updating a band
        expect(punkBandUpdate.name).toBe("FooFighters");
    })

    test('can update a Musician', async () => {
        const adele = await Musician.create({
            name: "hello",
            instrument: "voice"
        })

        adeleUpdate = await adele.update({
            name: "Beyonce",
            instrument: "rennaissance"
        })

        // TODO - test updating a musician
        expect(adeleUpdate.name).toBe("Beyonce");
    })

    test('can update a song', async () => {
        const song2 = await Song.create({
        title: "hello",
            year:2016,
            length : 3
        })

       songUpdate = await song2.update({
            title: "Boss"
            
        })

        // TODO - test updating a musician
        expect(songUpdate.title).toBe("Boss");
    })
    

    test('can delete a Band', async () => {
        punkBand = await Band.create({
            name: "FooFighters",
            genre: "rock"
        })
        // TODO - test deleting a band
        expect(await punkBand.destroy()).toBe(punkBand);
    })

    test('can delete a song', async () => {
        song3 = await Song.create({
            title: "hello",
            year: 1996,
            length: 4
        })
        // TODO - test deleting a musician
        expect(await song3.destroy()).toBe(song3);
    })

    test('can delete a Musician', async () => {
        adele = await Musician.create({
            name: "hello",
            instrument: "voice"
        })
        // TODO - test deleting a musician
        expect(await adele.destroy()).toBe(adele);
    })

})