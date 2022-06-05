import React from 'react'
import data from "../mock/data.json"
import { useParams } from 'react-router-dom'
import Logo from '../components/logo'
import '../styles/detail.css'
import book2 from '../utils/images/book2.png'

export default function DetailPage() {
  const { id } = useParams()
  const post = data.posts.find(i => i.id === id);
  return (
    <div className='detail-container'>
      <div className="main-header">
        <p className="main-header-head">Books are our best friends.</p>
      </div>
      <div className="logo">
        <Logo />
      </div>
      <div className="detail-card">
      <div className="detail-card-image">
        <img src={book2} className="image" />
      </div>
      <div className='detail-card-text'>
      <div className='detail-title'>{post.title}</div>
      <div className='detail-publishDate'>{post.publishDate}</div>
      <div className="author">
        <img src={post.author.avatar} alt="" className="author-avatar" />
        <p className="author-name">{post.author.name}</p>
      </div>
      <div className='detail-summary'>{post.summary}</div>
      </div>
      </div>

    </div>
  )
}
