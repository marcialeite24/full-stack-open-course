const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4'])

const assert = require('node:assert')
const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
  { title: 'First blog', author: 'Author One', url: 'http://example.com/1', likes: 3 },
  { title: 'Second blog', author: 'Author Two', url: 'http://example.com/2', likes: 7 },
]

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(initialBlogs)
})


test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('correct number of blogs is returned', async () => {
  const response = await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  assert.strictEqual(response.body.length, initialBlogs.length)
})

test('blogs have id property instead of _id', async () => {
  const response = await api
    .get('/api/blogs')
    .expect(200)

  response.body.forEach(blog => {
    assert.strictEqual(blog.id !== undefined, true)
    assert.strictEqual(blog._id, undefined)
  })
})

after(async () => {
  await mongoose.connection.close()
})

