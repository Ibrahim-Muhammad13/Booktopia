const request = require('supertest')
const app = require('../../index')

jest.mock('../../controller/categoryController', () => {
    return {
      getAllCategories: jest.fn((req, res) => {
        const categories = [{ name: 'Category 1' }, { name: 'Category 2' }]; 
        res.json({ categories }); 
      })
    };
  });
  
  
describe("test categories", () => {

it('should return all categories', () => {
    const req = {}; 
    const res = { json: jest.fn() };

    const categoryController = require('../../controller/categoryController');
    categoryController.getAllCategories(req, res);

    expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          categories: expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
            }),
          ]),
        })
    );
    });



test("test get all categories", async () => {
const res = await request(app).get('/admin/category')
expect(res.statusCode).toBe(200)

expect(res.body).toMatchObject({
    categories: expect.arrayContaining([
      expect.objectContaining({
        _id: expect.any(Number),
        cat_Name: expect.any(String),
        __v: expect.any(Number)
      })
    ])
  });
  
})


test("test create category", async () => {
const res = await request(app).post('/admin/category').send({
    cat_Name: "test category"
})
expect(res.statusCode).toBe(201)
expect(res.body).toMatchObject({
    category: expect.objectContaining({
        _id: expect.any(Number),
        cat_Name:"test category",
        __v: expect.any(Number)
})
})
})


test("test update category", async () => {
const res = await request(app).put('/admin/category/1').send({
    cat_Name: "test category updated"
})
expect(res.statusCode).toBe(200)
expect(res.body).toMatchObject({
    category: expect.objectContaining({
        n: expect.any(Number),
        nModified: expect.any(Number),
        ok: expect.any(Number)
    })

})
})


test ("test delete category", async () => {
const res = await request(app).delete('/admin/category/1')
expect(res.statusCode).toBe(200)
expect(res.body).toMatchObject({
    category: expect.objectContaining({
        n: expect.any(Number),
        deletedCount: expect.any(Number),
        ok: expect.any(Number)
    })

})
})

})
