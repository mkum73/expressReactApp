var ProductList = React.createClass({
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
  iterateList: function(product) {
    var href = '/productPage/:' + product.id;
    return(
      <li className="product">
        <a href={href}>
          <div className="product-img">
            <img src={product.img_url}/>
          </div>
          <ul className="product-detail">
            <li className="product_name">
              {product.product_name}
            </li>
            <li>
              <span className="offer_price">Rs.{product.offer_price}</span>
              Rs.<span className="price">{product.price}</span>
              <span className="offer">{product.offer}OFF</span>
            </li>
            <li>
              <span className="reviews">
                <span className={product.rating >= 1 ? 'yellow' : 'gray'}><i className="fa fa-star"></i></span>
                <span className={product.rating >= 2 ? 'yellow' : 'gray'}><i className="fa fa-star"></i></span>
                <span className={product.rating >= 3 ? 'yellow' : 'gray'}><i className="fa fa-star"></i></span>
                <span className={product.rating >= 4 ? 'yellow' : 'gray'}><i className="fa fa-star"></i></span>
                <span className={product.rating == 5 ? 'yellow' : 'gray'}><i className="fa fa-star"></i></span>
              </span>            
              <span className="ratings">{product.rating}Ratings</span>
            </li>
          </ul>
        </a>
      </li>
    );
  },


  render: function() {
    return (
      <ul className="product-list">
        {this.state.list.map(this.iterateList)} 
      </ul>
    );
  }
});

ReactDOM.render(
  <ProductList source="/products.json" />,
  content
);
