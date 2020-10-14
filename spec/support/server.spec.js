var request = require('request')

// Testing the number of items return from the get request.
describe('checking how many item returns', () => {
    it('should return 200 Ok', (done) => {
        request.get('http://localhost:3000/home/search/baby', (err, res) => {
        var WooliesCount = 0 ;
        var AldiCount = 0 ; 
        Array.from(JSON.parse(res.body).woolies).forEach(element => {
                  if (element.supermarket == "Woolworths Supermarket")
                  {
                        WooliesCount++;
                  }
                  else
                  {
                        AldiCount++;
                  }

            })
        expect(AldiCount+WooliesCount).toBeLessThan(10)
            done()
        })
    })
})

// Testing whether the system can return all items.
describe('get all items from DB', () => {
    it('should return 200 Ok', (done) => {
        request.get('http://localhost:3000/home/getAll', (err, res) => {
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
})