import React from "react"
import { useState, useEffect } from "react";
import data from '../mock/data.json'
import Logo from "../components/logo";
import { Link } from "react-router-dom";
import book1 from '../utils/images/book1.png'
import "../styles/mainpage.css"

const MainPage = () => {
    const [posts, setPosts] = useState([])
    const fetchData = () => {
        fetch('/api/posts').then(res => res.json().then(data => setPosts(data.posts)))
    }
    useEffect(() => {
        fetchData();
    }, []);
    const [visiblePosts, setVisiblePosts] = useState(6);
    const morePosts = () => {
        setVisiblePosts(visiblePosts + 6);
    };
    const categoryFilter = (name) => {
        let results = [];
        data.posts.filter((post) =>
            post.categories.filter((category) => {
                if (category.name === name) {
                    results.push(post);
                } return results;
            })
        );
        setPosts(results);
    };
    return (
        <div className="container">
            <div className="main-header">
                <p className="main-header-head">A good book is a real treasure.</p>
            </div>
            <div className="logo">
                <Logo />
            </div>
            <div className="category-container">
                <button className="button" onClick={() => categoryFilter('Surveys and Forms')}>Surveys and Forms</button>
                <button className="button" onClick={() => categoryFilter('Digital Marketing')}>Digital Marketing</button>
                <button className="button" onClick={() => categoryFilter('Platform News and Updates')}>Platform News and Updates</button>
                <button className="button" onClick={() => categoryFilter('Tips and Best Practise')}>Tips and Best Practise</button>
                <button className="button" onClick={() => categoryFilter('Marketing Analytics')}>Marketing Analytics</button>
                <button className="button" onClick={() => categoryFilter('Landing Pages')}>Landing Pages</button>
                <button className="button" onClick={() => categoryFilter('Ecommerce')}>E-commerce</button>
                <button className="button" onClick={() => categoryFilter('Email Marketing')}>E-mail Marketing</button>
                <button className="button" onClick={() => categoryFilter('Marketing Automation')}>Marketing Automation</button>
                <button className="button" onClick={() => categoryFilter('Data Management')}>Data Management</button>
            </div>

            <div className="card-container">
                {posts.slice(0, visiblePosts).map(post => (
                    <div key={post.id}>
                        <div className="main-card">
                            <div className="main-image">
                                <img src={book1} alt="" />
                            </div>
                            <div className="main-text">
                                <div className="header">{post.title}</div>
                                <div className="publish-date">Publish Date: {post.publishDate}</div>
                                <div className="author">
                                    <img src={post.author.avatar} alt="" className="author-avatar" />
                                    <p className="author-name">{post.author.name}</p>
                                </div>
                                <Link to={`/${post.id}`}>
                                    <div className="load">Load more</div>
                                </Link>

                            </div>
                        </div>

                    </div>

                ))}
            </div>

            {visiblePosts < posts.length && (
                <button
                    className="loading"
                    onClick={morePosts}
                >
                    Load more
                </button>
            )}
        </div>
    );
}

export default MainPage;
