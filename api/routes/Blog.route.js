import express from 'express';
import { addBlog, deleteBlog, editBlog, getBlog, showAllBlog, updateBlog } from '../controllers/Blog.controller.js';
import upload from '../config/multer.js';

const BlogRoute  = express.Router()

BlogRoute.post('/add', upload.single('file'), addBlog)
BlogRoute.get('/edit/:blogid', editBlog)
BlogRoute.put('/update/:blogid', upload.single('file'), updateBlog);
BlogRoute.delete('/delete/:blogid', deleteBlog);
BlogRoute.get('/get-all', showAllBlog);
BlogRoute.get('/get-blog/:slug', getBlog);



export default BlogRoute;