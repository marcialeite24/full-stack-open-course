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

test('creates a new blog', async () => {
  const newBlog = {
    title: 'New blog test',
    author: 'Emma',
    url: 'http://example.com/3',
    likes: 5,
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')
  const contents = response.body.map(r => r.title)
  assert.strictEqual(response.body.length, initialBlogs.length + 1)
  assert(contents.includes('New blog test'))
})

test('creating a blog without a likes field, it should default to 0', async () => {
  const newBlog = {
    title: 'New blog test without likes',
    author: 'Emma',
    url: 'http://example.com/4'
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')
  const contents = response.body.map(r => r.likes)
  assert.strictEqual(contents[initialBlogs.length], 0)
})

test('blog without title returns 400', async () => {
  const newBlog = { author: 'Emma', url: 'http://example.com/5', likes: 7 }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)
})

test('blog without url returns 400', async () => {
  const newBlog = { title: 'Blog without url', author: 'Emma', likes: 7 }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)
})

test('a blog can be deleted', async () => {
  const blogsAtStart = await Blog.find({})
  const blogToDelete = blogsAtStart[0]

  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .expect(204)

  const blogsAtEnd = await Blog.find({})
  const ids = blogsAtEnd.map(b => b.id)
  assert(!ids.includes(blogToDelete.id))
  assert.strictEqual(blogsAtEnd.length, initialBlogs.length - 1)
})

test('a blog likes can be updated', async () => {
  const blogsAtStart = await Blog.find({})
  const blogToUpdate = blogsAtStart[0]

  await api
    .put(`/api/blogs/${blogToUpdate.id}`)
    .send({ likes: 99 })
    .expect(200)

  const blogsAtEnd = await Blog.find({})
  const updated = blogsAtEnd.find(b => b.id === blogToUpdate.id)
  assert.strictEqual(updated.likes, 99)
})

after(async () => {
  await mongoose.connection.close()
})

