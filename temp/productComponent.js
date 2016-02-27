console.log(productId);
var ProductComponent = React.createClass({
  getInitialState: function() {
    return {
      productDetail : {}
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      this.setState({
        productDetail : result[productId].product_details
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var productDetail = this.state.productDetail;
    return (
       <div className="product-page">
          <div className="product-img">
            <img src={productDetail.img_url}/>
          </div>
          <ul className="product-detail">
            <li className="product_name">
              {productDetail.product_name}
            </li>
            <li>
              <span className="reviews">
                <span className={productDetail.rating >= 1 ? 'yellow' : 'gray'}><i className="fa fa-star"></i></span>
                <span className={productDetail.rating >= 2 ? 'yellow' : 'gray'}><i className="fa fa-star"></i></span>
                <span className={productDetail.rating >= 3 ? 'yellow' : 'gray'}><i className="fa fa-star"></i></span>
                <span className={productDetail.rating >= 4 ? 'yellow' : 'gray'}><i className="fa fa-star"></i></span>
                <span className={productDetail.rating == 5 ? 'yellow' : 'gray'}><i className="fa fa-star"></i></span>
              </span>            
              <span className="ratings">{productDetail.rating}Ratings</span>
            </li>
            <li>
              <p>Rs.<span className="price">{productDetail.price}</span></p>
              <p>
                <span className="offer_price">Rs.{productDetail.offer_price}</span>
                <span className="offer">({productDetail.offer}OFF)</span>
              </p>
            </li>

          </ul>
      </div>
    );
  }
});
ReactDOM.render(<ProductComponent source='/productByID.json' />, content);
