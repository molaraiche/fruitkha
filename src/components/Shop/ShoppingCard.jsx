import "../../styles/cart.css";

const ShoppingCard = () => {
  return (
    <div className="cardContent">
      <div className="cartHead">
        <h1>Cart</h1>
      </div>
      <div className="cartHolder">
        <table border={2}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Name</td>
              <td>Name</td>
              <td>Name</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>details</td>
              <td>details</td>
              <td>details</td>
              <td>details</td>
              <td>details</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="total">Price</td>
              <td className="ttprice">Price</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCard;
