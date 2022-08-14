const fs = require('fs');
const path = require('path');
const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save(product) {
    return db.execute('INSERT INTO PRODUCTS (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',[product.title, product.price, product.description, product.imageUrl]);
  }

  update(product) {
    return db.execute('UPDATE PRODUCTS SET title = ?, price = ?, description = ?, imageUrl = ? where id = ?', [product.title, product.price, product.description, product.imageUrl, product.id]);
  }

  static deleteById(id) {
    return db.execute('DELETE FROM PRODUCTS WHERE id = ?',[id]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM PRODUCTS')
  }

  static findById(id) {
    return db.execute('SELECT * FROM PRODUCTS WHERE id = ?',[id]);
  }
};
