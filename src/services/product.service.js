import http from "../http-common";

class ProductService {

  create(data) {
    return http.post("/products/create", data);
  }

  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  update(id, data) {
    return http.put(`/products/${id}/update`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}/delete`);
  }

}

export default new ProductService();
