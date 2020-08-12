import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/layouts/Main'
import MainAdmin from '../pages/layouts/MainAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import DetailProducts from '../pages/views/Admin/Products/DetailProduct';
import AddProduct from '../pages/views/Admin/Products/AddProduct';
//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Shop from '../pages/views/Main/Shop';
import DetailProduct from '../pages/views/Main/DetailProduct';
import EditProduct from '../pages/views/Admin/Products/EditProduct';
import Categories from '../pages/views/Admin/Category';
import AddCategories from '../pages/views/Admin/Category/AddCategories';
import EditCategories from '../pages/views/Admin/Category/EditCategories';
import DetailCategory from '../pages/views/Admin/Category/DetailCategory';
import Blog from '../pages/views/Admin/Blog';
import AddPost from '../pages/views/Admin/Blog/AddPost';
import EditPost from '../pages/views/Admin/Blog/EditPost';
import Post from '../pages/views/Main/Post';
import DetailPost from '../pages/views/Main/DetailPost';
import DetailMainCategory from '../pages/views/Main/DetailMainCategory';
import Contact from '../pages/views/Main/Contact';
import Contacts from '../pages/views/Admin/Contacts';


const Routers = ({ products, onRemove, onAdd, onUpdate, categories, onRemoveCate, onAddCate, onUpdateCate, posts, onAddPost, onRemovePost, onUpdatePost, contacts, onAddContact }) => {
    console.log(posts);
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAdd = (product) => {
        onAdd(product)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    const onHandleRemoveCate = (id) => {
        onRemoveCate(id)
    }
    const onHandleAddCate = (categories) => {
        onAddCate(categories)
    }
    const onHandleUpdateCate = (categories) => {
        onUpdateCate(categories)
    }
    const onHandleAddPost = (post) => {
        onAddPost(post)
    }
    const onHandleRemovePost = (id) => {
        onRemovePost(id)
    }
    const onHandleUpdatePost = (id, posts) => {
        onUpdatePost(id, posts)
    }
    const onHandleAddContact = (contact) => {
        onAddContact(contact)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} categories={categories} posts={posts} contacts={contacts} />
                            </Route>
                            {/* Product */}
                            <Route path='/admin/products'
                                render={(props) => (
                                    <ProductsManager {...props} products={products} categories={categories} onRemove={onHandleRemove} />
                                )}></Route>

                            <Route path='/admin/detail-product/:id' render={(props) => (
                                <DetailProducts {...props} products={products} categories={categories} />
                            )}></Route>

                            <Route path='/admin/add-product' render={(props) => (
                                <AddProduct {...props} categories={categories} onAdd={onHandleAdd} />
                            )}></Route>

                            <Route path='/admin/edit-product/:id' render={(props) => (
                                <EditProduct {...props} products={products} categories={categories} onUpdate={onHandleUpdate} />
                            )}></Route>
                            {/* Category */}
                            <Route path='/admin/categories' render={(props) => (
                                <Categories {...props} categories={categories} products={products} onRemoveCate={onHandleRemoveCate} />
                            )}></Route>

                            <Route path='/admin/add-category' render={(props) => (
                                <AddCategories {...props} onAddCate={onHandleAddCate} />
                            )}></Route>

                            <Route path='/admin/edit-category/:id' render={(props) => (
                                <EditCategories {...props} categories={categories} onUpdateCate={onHandleUpdateCate} />
                            )}></Route>

                            <Route path='/admin/detail-category/:id' render={(props) => (
                                <DetailCategory {...props} categories={categories} products={products} />
                            )}></Route>
                            {/* Posts */}
                            <Route path='/admin/posts' render={(...props) => (
                                <Blog {...props} posts={posts} onRemovePost={onHandleRemovePost} />
                            )}>
                            </Route>
                            <Route path='/admin/add-post' render={(props) => (
                                <AddPost {...props} onAddPost={onHandleAddPost} />
                            )}></Route>
                            <Route path='/admin/edit-post/:id' render={(props) => (
                                <EditPost {...props} posts={posts} onUpdatePost={onHandleUpdatePost} />
                            )}></Route>
                            {/* Contact */}
                            <Route path='/admin/contacts'>
                                <Contacts contacts={contacts} />
                            </Route>
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route>
                    <Main categories={categories} products={products}>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/shop">
                                <Shop products={products} />
                            </Route>
                            <Route path="/detail-product/:id">
                                <DetailProduct products={products} />
                            </Route>
                            <Route path="/blog">
                                <Post posts={posts} />
                            </Route>
                            <Route path="/detail-blog/:id">
                                <DetailPost posts={posts} />
                            </Route>
                            <Route path="/detail-category/:id">
                                <DetailMainCategory categories={categories} products={products} />
                            </Route>
                            <Route path="/contact">
                                <Contact onAddContact={onHandleAddContact} />
                            </Route>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
