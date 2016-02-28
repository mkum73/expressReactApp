var CategoryList = React.createClass({
  getInitialState: function() {
    return {
      list:[]
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      this.setState({
        list:result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  iterateCategory: function(category) {
    return(
      <li>
        <a href="/product">
          <div className="category-img">
            <img src="images/category.png" />
          </div>
          <div className="category-description">
            <h3>{category.name}</h3>
            <p>
              <span>Item1</span>,<span>Item2</span>,<span>Item3</span>
            </p>
          </div>
          <i className="fa fa-angle-right"></i>
        </a>
      </li>
    );
  },
/*  iteratesubCategory: function(category) {
    return(
      <span>{category.subcategories}</span>
    );
  },*/

  render: function() {
    return (
      <ul className="category-list">
        {this.state.list.map(this.iterateCategory)} 
      </ul>
    );
  }
});

ReactDOM.render(
  <CategoryList source="/jsondata/category.json" />,
  categories
);
