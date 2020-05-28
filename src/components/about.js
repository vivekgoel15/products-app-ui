import React, { Component } from "react";

export default class About extends Component {

  render() {
    
    return (

    <div class="bg-light">
      <div class="container py-5">
        <div class="row h-100 align-items-center py-5">
          <div class="col-lg-6">
            <h1 class="display-4">About Us</h1>
            <p class="lead text-muted mb-0">About us page using Bootstrap 4.</p>
          </div>
          <div class="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" class="img-fluid" /></div>
        </div>
      </div>
    </div>

    );
  }
}
