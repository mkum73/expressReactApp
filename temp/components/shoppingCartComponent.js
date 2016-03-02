var CartComponent = React.createClass({
  getInitialState: function() {
    return {
    	cartItems:''
    };
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <li className="shopping-cart-item">
          <div className="cart-item-img clearfix">
            <img src="/images/placeholder.png" />
          </div>


          <div className="cart-item-details clearfix">
            <h4>Regent King placeholder with New Hydraulicl</h4>
            <div className="item-count">
              <button className="fa fa-plus-circle"></button>
              <div className="quantity">1</div>
              <div>Quantity</div>
              <button className="fa fa-minus-circle"></button>
            </div>
          </div>
          <div className="delivery-option">
            <div>
              <p>COD</p>
              <p>Not Available</p>
            </div>
            <div>
              <p>Assembly</p>
              <p>By Pepperfry</p>
            </div>
          </div>
          <div className="clearfix">
            <span className="item-amount">Rs.31,917</span>
            <button className="fa fa-trash"></button>
          </div>
        </li>
    );
  }
});
ReactDOM.render(<CartComponent />, shoppingCartBox);
