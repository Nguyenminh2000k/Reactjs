import React, { useState, useEffect } from 'react';
import Routers from './routers'
import productRequest from './api/productApi'
import categoryRequest from './api/categoryApi'
import postRequest from './api/postApi'
import contactRequest from './api/contactApi'
import contactApi from './api/contactApi';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);
  // list product
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await productRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);
  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await productRequest.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await productRequest.create(product);
      setProducts([...products, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Cập nhật Products
  const onHandleUpdate = async (updateProducts) => {
    const newProducts = products.map(
      (Products) =>
        Products.id === updateProducts.id ? updateProducts : Products // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await productRequest.update(updateProducts.id, updateProducts);
    setProducts(newProducts);
  };
  // list cate
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await categoryRequest.getAllCate();
        setCategories(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategories();
  }, []);
  // Xóa cate
  const onHandleRemoveCate = async (id) => {
    try {
      const { data } = await categoryRequest.removeCate(id);
      const newCategory = categories.filter((category) => category.id !== id);
      setCategories(newCategory);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Add cate
  const onHandleAddCate = async (category) => {
    try {
      const { data } = await categoryRequest.createCate(category);
      setCategories([...categories, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Edit cate
  const onHandleUpdateCate = async (updateCate) => {
    const newCategory = categories.map(
      (Categories) =>
        Categories.id === updateCate.id ? updateCate : Categories // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await categoryRequest.updateCate(updateCate.id, updateCate);
    setCategories(newCategory);
  };
  // list posts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await postRequest.getAllPost();
        setPosts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getPosts();
  }, []);
  // Add post
  const onHandleAddPost = async (post) => {
    try {
      const { data } = await postRequest.createPost(post);
      setPosts([...posts, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Xoa post
  const onHandleRemovePost = async (id) => {
    try {
      const { data } = await postRequest.removePost(id);
      const newPost = posts.filter((post) => post.id !== id);
      setPosts(newPost);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // edit post
  const onHandleUpdatePost = async (updatePost) => {
    const newPost = posts.map(
      (Posts) =>
        Posts.id === Posts.id ? updatePost : Posts // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await postRequest.updatePost(updatePost.id, updatePost);
    setPosts(newPost);
  };
  useEffect(() => {
    const getContact = async () => {
      try {
        const { data } = await contactApi.getAllContact();
        setContacts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getContact();
  }, []);
  const onHandleAddContact = async (contact) => {
    try {
      const { data } = await contactApi.createContact(contact);
      setContacts([...contacts, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  return (
    <div className="App">
      <Routers
        products={products}
        categories={categories}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onUpdate={onHandleUpdate}
        onRemoveCate={onHandleRemoveCate}
        onAddCate={onHandleAddCate}
        onUpdateCate={onHandleUpdateCate}
        posts={posts}
        onAddPost={onHandleAddPost}
        onRemovePost={onHandleRemovePost}
        onUpdatePost={onHandleUpdatePost}
        contacts={contacts}
        onAddContact={onHandleAddContact}
      />
    </div>
  )

}
export default App;