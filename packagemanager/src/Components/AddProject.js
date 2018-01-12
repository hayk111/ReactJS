import React, { Component } from 'react';

class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 
    'Mobile Development']
  }

  handleSubmit(e) {
    console.log('Submitted');
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    });

    return (
      <div align="center">
        <h3>Add Project</h3>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
